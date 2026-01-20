'use client'

import { useEffect, useCallback } from 'react'
import { X } from 'lucide-react'
import type { ModalProps } from '@/types'

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  const handleEscape = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose()
  }, [onClose])

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [isOpen, handleEscape])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto bg-stone-900/70 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-white dark:bg-stone-900 rounded-2xl shadow-2xl animate-slide-up overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-lg transition-colors z-10"
          aria-label="Закрити"
        >
          <X className="w-5 h-5" strokeWidth={1.5} />
        </button>

        {/* Title */}
        {title && (
          <div className="px-6 pt-6 pb-2">
            <h2
              className="text-xl font-bold text-stone-900 dark:text-white pr-8"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {title}
            </h2>
          </div>
        )}

        {/* Content */}
        <div className="p-6 pt-2">
          {children}
        </div>
      </div>
    </div>
  )
}
