'use client'

import { useState, useEffect, type FormEvent } from 'react'
import { Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react'
import type { FormConfig, ContactFormData, FormField } from '@/types'

interface ContactFormProps {
  config: FormConfig
  packageName?: string
  onSubmit?: (data: ContactFormData) => void
  onError?: (error: Error) => void
  inModal?: boolean
}

type FormState = 'idle' | 'submitting' | 'success' | 'error'

export function ContactForm({
  config,
  packageName = 'Загальна консультація',
  onSubmit,
  onError,
  inModal = false,
}: ContactFormProps) {
  const [formState, setFormState] = useState<FormState>('idle')
  const [formData, setFormData] = useState({
    name: '',
    phone: '+380 ',
    clientType: '',
    comment: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  // Auto-populate clientType when packageName changes (from clicking a service card)
  useEffect(() => {
    if (packageName && packageName !== 'Загальна консультація') {
      setFormData((prev) => ({ ...prev, clientType: packageName }))
    }
  }, [packageName])

  const validateField = (field: FormField, value: string): string | null => {
    if (field.required && !value.trim()) {
      return field.validation?.errorMessage || `${field.label} є обов'язковим полем`
    }
    if (field.validation?.minLength && value.length < field.validation.minLength) {
      return field.validation.errorMessage
    }
    if (field.validation?.pattern) {
      const regex = new RegExp(field.validation.pattern)
      if (!regex.test(value.replace(/\s/g, ''))) {
        return field.validation.errorMessage
      }
    }
    return null
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    // Validate all fields
    const newErrors: Record<string, string> = {}
    config.fields.forEach((field) => {
      if (field.type === 'hidden') return
      const value = formData[field.name as keyof typeof formData] || ''
      const error = validateField(field, value)
      if (error) {
        newErrors[field.name] = error
      }
    })

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setFormState('submitting')
    setErrors({})

    try {
      const submitData: ContactFormData = {
        name: formData.name,
        phone: formData.phone.replace(/\s/g, ''),
        clientType: formData.clientType as ContactFormData['clientType'],
        comment: formData.comment || null,
        packageName,
        timestamp: new Date().toISOString(),
        source: 'landing_page',
      }

      // Send to API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submitData),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      setFormState('success')
      onSubmit?.(submitData)
    } catch (error) {
      setFormState('error')
      onError?.(error as Error)
    }
  }

  const handleInputChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handlePhoneChange = (value: string) => {
    const prefix = '+380 '

    // Don't allow removing the prefix
    if (!value.startsWith('+380')) {
      return
    }

    // Extract only digits after +380
    const afterPrefix = value.slice(4).replace(/\D/g, '')

    // Limit to 9 digits (Ukrainian mobile numbers after +380)
    const limitedDigits = afterPrefix.slice(0, 9)

    // Format: +380 XX XXX XX XX
    let formatted = prefix
    if (limitedDigits.length > 0) {
      formatted += limitedDigits.slice(0, 2)
    }
    if (limitedDigits.length > 2) {
      formatted += ' ' + limitedDigits.slice(2, 5)
    }
    if (limitedDigits.length > 5) {
      formatted += ' ' + limitedDigits.slice(5, 7)
    }
    if (limitedDigits.length > 7) {
      formatted += ' ' + limitedDigits.slice(7, 9)
    }

    handleInputChange('phone', formatted)
  }

  // Success state
  if (formState === 'success') {
    return (
      <div className={`relative overflow-hidden bg-gradient-to-br from-teal-500 to-emerald-600 p-8 md:p-10 text-white animate-fade-in ${inModal ? '' : 'rounded-3xl'}`}>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-teal-300/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />

        <div className="relative text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm mb-6">
            <CheckCircle className="w-10 h-10" strokeWidth={1.5} />
          </div>
          <h3
            className="text-2xl md:text-3xl font-bold mb-4"
            
          >
            Дякуємо!
          </h3>
          <p
            className="text-white/90 text-lg leading-relaxed max-w-md mx-auto"
            
          >
            {config.messages.success}
          </p>
        </div>
      </div>
    )
  }

  // Error state
  if (formState === 'error') {
    return (
      <div className={`relative overflow-hidden bg-gradient-to-br from-rose-500 to-red-600 p-8 md:p-10 text-white animate-fade-in ${inModal ? '' : 'rounded-3xl'}`}>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />

        <div className="relative text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm mb-6">
            <AlertCircle className="w-10 h-10" strokeWidth={1.5} />
          </div>
          <h3
            className="text-2xl md:text-3xl font-bold mb-4"
            
          >
            Помилка
          </h3>
          <p
            className="text-white/90 text-lg leading-relaxed max-w-md mx-auto mb-6"
            
          >
            {config.messages.error}
          </p>
          <button
            onClick={() => setFormState('idle')}
            className="px-6 py-3 rounded-xl bg-white text-rose-600 font-semibold transition-all hover:bg-white/90 hover:scale-105"
            
          >
            Спробувати знову
          </button>
        </div>
      </div>
    )
  }

  if (inModal) {
    return (
      <div className="relative">
        <form onSubmit={handleSubmit} className="space-y-5">
          {config.fields
            .filter((field) => field.type !== 'hidden')
            .map((field, index) => (
              <div
                key={field.name}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <label
                  htmlFor={field.name}
                  className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2"
                  
                >
                  {field.label}
                  {field.required && <span className="text-rose-500 ml-1">*</span>}
                </label>

                {field.type === 'select' ? (
                  <select
                    id={field.name}
                    value={formData[field.name as keyof typeof formData]}
                    onChange={(e) => handleInputChange(field.name, e.target.value)}
                    className={`
                      w-full px-4 py-3.5 rounded-xl
                      bg-stone-50 dark:bg-stone-800
                      border-2 transition-all duration-300
                      text-stone-900 dark:text-white
                      focus:outline-none focus:ring-0
                      ${errors[field.name]
                        ? 'border-rose-500 focus:border-rose-500'
                        : 'border-stone-200 dark:border-stone-700 focus:border-teal-500 dark:focus:border-teal-400'
                      }
                    `}
                    
                  >
                    <option value="">{field.placeholder}</option>
                    {field.options?.map((option) => (
                      <option key={option.value} value={option.label}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                ) : field.type === 'textarea' ? (
                  <textarea
                    id={field.name}
                    rows={4}
                    placeholder={field.placeholder}
                    value={formData[field.name as keyof typeof formData]}
                    onChange={(e) => handleInputChange(field.name, e.target.value)}
                    maxLength={field.maxLength}
                    className={`
                      w-full px-4 py-3.5 rounded-xl resize-none
                      bg-stone-50 dark:bg-stone-800
                      border-2 transition-all duration-300
                      text-stone-900 dark:text-white
                      placeholder:text-stone-400 dark:placeholder:text-stone-500
                      focus:outline-none focus:ring-0
                      ${errors[field.name]
                        ? 'border-rose-500 focus:border-rose-500'
                        : 'border-stone-200 dark:border-stone-700 focus:border-teal-500 dark:focus:border-teal-400'
                      }
                    `}
                    
                  />
                ) : field.name === 'phone' ? (
                  <input
                    id={field.name}
                    type="tel"
                    inputMode="tel"
                    placeholder={field.placeholder}
                    value={formData.phone}
                    onChange={(e) => handlePhoneChange(e.target.value)}
                    className={`
                      w-full px-4 py-3.5 rounded-xl
                      bg-stone-50 dark:bg-stone-800
                      border-2 transition-all duration-300
                      text-stone-900 dark:text-white
                      placeholder:text-stone-400 dark:placeholder:text-stone-500
                      focus:outline-none focus:ring-0
                      ${errors[field.name]
                        ? 'border-rose-500 focus:border-rose-500'
                        : 'border-stone-200 dark:border-stone-700 focus:border-teal-500 dark:focus:border-teal-400'
                      }
                    `}
                    
                  />
                ) : (
                  <input
                    id={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    value={formData[field.name as keyof typeof formData]}
                    onChange={(e) => handleInputChange(field.name, e.target.value)}
                    className={`
                      w-full px-4 py-3.5 rounded-xl
                      bg-stone-50 dark:bg-stone-800
                      border-2 transition-all duration-300
                      text-stone-900 dark:text-white
                      placeholder:text-stone-400 dark:placeholder:text-stone-500
                      focus:outline-none focus:ring-0
                      ${errors[field.name]
                        ? 'border-rose-500 focus:border-rose-500'
                        : 'border-stone-200 dark:border-stone-700 focus:border-teal-500 dark:focus:border-teal-400'
                      }
                    `}
                    
                  />
                )}

                {errors[field.name] && (
                  <p
                    className="mt-2 text-sm text-rose-500 flex items-center gap-1.5 animate-fade-in"
                    
                  >
                    <AlertCircle className="w-4 h-4" />
                    {errors[field.name]}
                  </p>
                )}
              </div>
            ))}

          <button
            type="submit"
            disabled={formState === 'submitting'}
            className={`
              w-full flex items-center justify-center gap-3
              px-8 py-4 rounded-xl
              bg-gradient-to-r from-teal-500 to-teal-600
              text-white font-semibold text-lg
              transition-all duration-300
              hover:from-teal-600 hover:to-teal-700
              hover:shadow-xl hover:shadow-teal-500/30
              hover:-translate-y-0.5
              disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0
              active:translate-y-0
            `}
            
          >
            {formState === 'submitting' ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                {config.submitButton.loadingText}
              </>
            ) : (
              <>
                <Send className="w-5 h-5" strokeWidth={1.5} />
                {config.submitButton.text}
              </>
            )}
          </button>
        </form>
      </div>
    )
  }

  return (
    <div className="relative">
      <div className="relative overflow-hidden rounded-3xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 p-8 md:p-10 shadow-xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-teal-500/10 via-transparent to-transparent rounded-bl-full" />

        <div className="relative">
          <div className="mb-8">
            <h3
              className="text-2xl md:text-3xl font-bold text-stone-900 dark:text-white mb-2"
              
            >
              {config.title}
            </h3>
            <p
              className="text-stone-600 dark:text-stone-400"
              
            >
              {config.subtitle}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {config.fields
              .filter((field) => field.type !== 'hidden')
              .map((field, index) => (
                <div
                  key={field.name}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <label
                    htmlFor={field.name}
                    className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2"
                    
                  >
                    {field.label}
                    {field.required && <span className="text-rose-500 ml-1">*</span>}
                  </label>

                  {field.type === 'select' ? (
                    <select
                      id={field.name}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={(e) => handleInputChange(field.name, e.target.value)}
                      className={`
                        w-full px-4 py-3.5 rounded-xl
                        bg-stone-50 dark:bg-stone-800
                        border-2 transition-all duration-300
                        text-stone-900 dark:text-white
                        focus:outline-none focus:ring-0
                        ${errors[field.name]
                          ? 'border-rose-500 focus:border-rose-500'
                          : 'border-stone-200 dark:border-stone-700 focus:border-teal-500 dark:focus:border-teal-400'
                        }
                      `}
                      
                    >
                      <option value="">{field.placeholder}</option>
                      {field.options?.map((option) => (
                        <option key={option.value} value={option.label}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  ) : field.type === 'textarea' ? (
                    <textarea
                      id={field.name}
                      rows={4}
                      placeholder={field.placeholder}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={(e) => handleInputChange(field.name, e.target.value)}
                      maxLength={field.maxLength}
                      className={`
                        w-full px-4 py-3.5 rounded-xl resize-none
                        bg-stone-50 dark:bg-stone-800
                        border-2 transition-all duration-300
                        text-stone-900 dark:text-white
                        placeholder:text-stone-400 dark:placeholder:text-stone-500
                        focus:outline-none focus:ring-0
                        ${errors[field.name]
                          ? 'border-rose-500 focus:border-rose-500'
                          : 'border-stone-200 dark:border-stone-700 focus:border-teal-500 dark:focus:border-teal-400'
                        }
                      `}
                      
                    />
                  ) : field.name === 'phone' ? (
                    <input
                      id={field.name}
                      type="tel"
                      inputMode="tel"
                      placeholder={field.placeholder}
                      value={formData.phone}
                      onChange={(e) => handlePhoneChange(e.target.value)}
                      className={`
                        w-full px-4 py-3.5 rounded-xl
                        bg-stone-50 dark:bg-stone-800
                        border-2 transition-all duration-300
                        text-stone-900 dark:text-white
                        placeholder:text-stone-400 dark:placeholder:text-stone-500
                        focus:outline-none focus:ring-0
                        ${errors[field.name]
                          ? 'border-rose-500 focus:border-rose-500'
                          : 'border-stone-200 dark:border-stone-700 focus:border-teal-500 dark:focus:border-teal-400'
                        }
                      `}
                      
                    />
                  ) : (
                    <input
                      id={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={(e) => handleInputChange(field.name, e.target.value)}
                      className={`
                        w-full px-4 py-3.5 rounded-xl
                        bg-stone-50 dark:bg-stone-800
                        border-2 transition-all duration-300
                        text-stone-900 dark:text-white
                        placeholder:text-stone-400 dark:placeholder:text-stone-500
                        focus:outline-none focus:ring-0
                        ${errors[field.name]
                          ? 'border-rose-500 focus:border-rose-500'
                          : 'border-stone-200 dark:border-stone-700 focus:border-teal-500 dark:focus:border-teal-400'
                        }
                      `}
                      
                    />
                  )}

                  {errors[field.name] && (
                    <p
                      className="mt-2 text-sm text-rose-500 flex items-center gap-1.5 animate-fade-in"
                      
                    >
                      <AlertCircle className="w-4 h-4" />
                      {errors[field.name]}
                    </p>
                  )}
                </div>
              ))}

            <button
              type="submit"
              disabled={formState === 'submitting'}
              className={`
                w-full flex items-center justify-center gap-3
                px-8 py-4 rounded-xl
                bg-gradient-to-r from-teal-500 to-teal-600
                text-white font-semibold text-lg
                transition-all duration-300
                hover:from-teal-600 hover:to-teal-700
                hover:shadow-xl hover:shadow-teal-500/30
                hover:-translate-y-0.5
                disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0
                active:translate-y-0
              `}
              
            >
              {formState === 'submitting' ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  {config.submitButton.loadingText}
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" strokeWidth={1.5} />
                  {config.submitButton.text}
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
