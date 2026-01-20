'use client'

import { useEffect } from 'react'
import { CheckCircle, AlertCircle, Info, X } from 'lucide-react'
import type { ToastProps } from '@/types'

const icons = {
  success: CheckCircle,
  error: AlertCircle,
  info: Info,
}

const styles = {
  success: 'bg-emerald-500 text-white',
  error: 'bg-rose-500 text-white',
  info: 'bg-blue-500 text-white',
}

export function Toast({ message, type, isVisible, onDismiss, duration = 5000 }: ToastProps) {
  useEffect(() => {
    if (isVisible && duration > 0) {
      const timer = setTimeout(onDismiss, duration)
      return () => clearTimeout(timer)
    }
  }, [isVisible, duration, onDismiss])

  if (!isVisible) return null

  const Icon = icons[type]

  return (
    <div className="fixed bottom-4 right-4 z-50 animate-slide-in-right">
      <div className={`flex items-center gap-3 px-4 py-3 rounded-xl shadow-lg ${styles[type]}`}>
        <Icon className="w-5 h-5 flex-shrink-0" strokeWidth={1.5} />
        <p
          className="text-sm font-medium"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          {message}
        </p>
        <button
          onClick={onDismiss}
          className="p-1 hover:bg-white/20 rounded transition-colors"
          aria-label="Закрити"
        >
          <X className="w-4 h-4" strokeWidth={1.5} />
        </button>
      </div>
    </div>
  )
}
