import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'edge'
import { sendContactEmail } from '@/lib/email'
import type { ContactFormData } from '@/types'

const CLIENT_TYPES = ['ФОП', 'ТОВ', 'Фізична особа'] as const

interface ContactRequestBody {
  name: string
  phone: string
  clientType: string
  comment?: string
  packageName: string
  timestamp?: string
  source?: string
}

function validateContactData(data: ContactRequestBody): { valid: boolean; errors: string[] } {
  const errors: string[] = []

  // Name validation
  if (!data.name || typeof data.name !== 'string') {
    errors.push("Ім'я є обов'язковим полем")
  } else if (data.name.trim().length < 2) {
    errors.push("Ім'я повинно містити мінімум 2 символи")
  }

  // Phone validation
  if (!data.phone || typeof data.phone !== 'string') {
    errors.push("Телефон є обов'язковим полем")
  } else {
    const cleanPhone = data.phone.replace(/\s/g, '')
    const phonePattern = /^\+380\d{9}$/
    if (!phonePattern.test(cleanPhone)) {
      errors.push('Невірний формат телефону. Використовуйте формат +380XXXXXXXXX')
    }
  }

  // Client type validation
  if (!data.clientType || typeof data.clientType !== 'string') {
    errors.push("Тип клієнта є обов'язковим полем")
  } else if (!CLIENT_TYPES.includes(data.clientType as typeof CLIENT_TYPES[number])) {
    errors.push('Невірний тип клієнта')
  }

  // Comment validation (optional)
  if (data.comment && typeof data.comment === 'string' && data.comment.length > 500) {
    errors.push('Коментар не може перевищувати 500 символів')
  }

  // Package name validation
  if (!data.packageName || typeof data.packageName !== 'string') {
    errors.push('Назва пакету є обов\'язковою')
  }

  return {
    valid: errors.length === 0,
    errors,
  }
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactRequestBody = await request.json()

    // Validate input
    const validation = validateContactData(body)
    if (!validation.valid) {
      return NextResponse.json(
        { success: false, errors: validation.errors },
        { status: 400 }
      )
    }

    // Prepare contact data
    const contactData: ContactFormData = {
      name: body.name.trim(),
      phone: body.phone.replace(/\s/g, ''),
      clientType: body.clientType as ContactFormData['clientType'],
      comment: body.comment?.trim() || null,
      packageName: body.packageName,
      timestamp: body.timestamp || new Date().toISOString(),
      source: 'landing_page',
    }

    // Send email notification
    const emailResult = await sendContactEmail(contactData)

    if (!emailResult.success) {
      console.error('Email sending failed:', emailResult.error)
      // Still return success to user, but log the error
      // In production, you might want to store the lead in a database
    }

    return NextResponse.json({
      success: true,
      message: 'Заявка успішно відправлена',
    })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { success: false, error: 'Виникла помилка при обробці заявки' },
      { status: 500 }
    )
  }
}

export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 })
}
