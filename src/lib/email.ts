import { Resend } from 'resend'
import type { ContactFormData } from '@/types'

const EMAIL_TO = process.env.EMAIL_TO || 'ehwazms@gmail.com'
const EMAIL_FROM = process.env.EMAIL_FROM || 'EVAZ-MS <noreply@evaz-ms.com>'

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.warn('RESEND_API_KEY is not set. Email sending will be disabled.')
    return null
  }
  return new Resend(apiKey)
}

export async function sendContactEmail(data: ContactFormData): Promise<{ success: boolean; error?: string }> {
  try {
    const { name, phone, clientType, comment, packageName, timestamp } = data

    const formattedDate = new Date(timestamp).toLocaleString('uk-UA', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })

    const subject = `Нова заявка з сайту EVAZ-MS - ${packageName}`

    const htmlContent = `
      <!DOCTYPE html>
      <html lang="uk">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f4;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #0d9488 0%, #14b8a6 100%); padding: 30px; border-radius: 16px 16px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">Нова заявка з сайту EVAZ-MS</h1>
          </div>

          <div style="background: white; padding: 30px; border-radius: 0 0 16px 16px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e7e5e4;">
                  <strong style="color: #57534e;">Пакет:</strong>
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e7e5e4; color: #0d9488; font-weight: 600;">
                  ${packageName}
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e7e5e4;">
                  <strong style="color: #57534e;">Ім'я:</strong>
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e7e5e4; color: #1c1917;">
                  ${name}
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e7e5e4;">
                  <strong style="color: #57534e;">Телефон:</strong>
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e7e5e4;">
                  <a href="tel:${phone}" style="color: #0d9488; text-decoration: none;">${phone}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e7e5e4;">
                  <strong style="color: #57534e;">Тип клієнта:</strong>
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e7e5e4; color: #1c1917;">
                  ${clientType}
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e7e5e4;">
                  <strong style="color: #57534e;">Коментар:</strong>
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e7e5e4; color: #1c1917;">
                  ${comment || 'Не вказано'}
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0;">
                  <strong style="color: #57534e;">Дата та час:</strong>
                </td>
                <td style="padding: 12px 0; color: #78716c;">
                  ${formattedDate}
                </td>
              </tr>
            </table>

            <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid #e7e5e4;">
              <a href="tel:${phone}" style="display: inline-block; background: #0d9488; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600;">
                Зателефонувати
              </a>
            </div>
          </div>

          <div style="text-align: center; padding: 20px; color: #a8a29e; font-size: 12px;">
            Автоматичне повідомлення з evaz-ms.com
          </div>
        </div>
      </body>
      </html>
    `

    const textContent = `
Нова заявка з сайту EVAZ-MS

Пакет: ${packageName}
Ім'я: ${name}
Телефон: ${phone}
Тип клієнта: ${clientType}
Коментар: ${comment || 'Не вказано'}
Дата та час: ${formattedDate}

---
Автоматичне повідомлення з evaz-ms.com
    `

    const resend = getResendClient()
    if (!resend) {
      console.log('Email would be sent (Resend not configured):', { to: EMAIL_TO, subject })
      return { success: true }
    }

    await resend.emails.send({
      from: EMAIL_FROM,
      to: EMAIL_TO,
      subject,
      html: htmlContent,
      text: textContent,
    })

    return { success: true }
  } catch (error) {
    console.error('Failed to send email:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }
  }
}
