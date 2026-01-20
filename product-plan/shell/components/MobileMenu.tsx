import { useEffect, useCallback } from 'react'
import { X, Phone, Mail } from 'lucide-react'
import type { NavigationItem, Contact, Company } from '../types'
// TODO: Update this import to your logo path
import logoGreen from '@/assets/logo-green.png'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  company: Company
  contact: Contact
  navigation: NavigationItem[]
  onCtaClick?: () => void
}

export function MobileMenu({
  isOpen,
  onClose,
  company,
  contact,
  navigation,
  onCtaClick,
}: MobileMenuProps) {
  // Handle escape key and body scroll lock
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    onClose()
    // Small delay to allow menu close animation
    setTimeout(() => {
      const target = document.querySelector(href)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' })
      }
    }, 150)
  }, [onClose])

  const handleCtaClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    onCtaClick?.()
    onClose()
    setTimeout(() => {
      const target = document.querySelector('#contact')
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' })
      }
    }, 150)
  }, [onCtaClick, onClose])

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop with fade animation */}
      <div
        className="fixed inset-0 z-50 bg-stone-900/60 backdrop-blur-sm animate-fade-in md:hidden"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-out panel */}
      <div
        className={`
          fixed top-0 right-0 bottom-0 z-50 w-[300px] max-w-[85vw]
          bg-white dark:bg-stone-900 shadow-2xl
          transform transition-transform duration-300 ease-out md:hidden
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between h-[60px] px-5 border-b border-stone-200 dark:border-stone-700">
          <img
            src={logoGreen}
            alt={company.name}
            className="h-8 w-auto"
          />
          <button
            onClick={onClose}
            className="p-2 -mr-2 text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-lg transition-colors"
            aria-label="Закрити меню"
          >
            <X className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="px-4 py-6">
          <ul className="space-y-1">
            {navigation.map((item, index) => (
              <li
                key={item.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="flex items-center gap-3 px-4 py-3.5 text-base font-medium text-stone-700 dark:text-stone-200 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-900/20 rounded-xl transition-all duration-200"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div
            className="mt-6 pt-6 border-t border-stone-200 dark:border-stone-700 animate-fade-in"
            style={{ animationDelay: `${navigation.length * 50 + 100}ms` }}
          >
            <a
              href="#contact"
              onClick={handleCtaClick}
              className="flex items-center justify-center w-full px-5 py-3.5 rounded-xl bg-teal-600 dark:bg-teal-500 text-white text-base font-semibold hover:bg-teal-700 dark:hover:bg-teal-600 transition-all duration-300 shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Отримати консультацію
            </a>
          </div>
        </nav>

        {/* Contact info at bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 px-5 py-6 border-t border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800/50 animate-fade-in"
          style={{ animationDelay: `${navigation.length * 50 + 200}ms` }}
        >
          <a
            href={contact.phone.href}
            className="flex items-center gap-3 text-sm text-stone-600 dark:text-stone-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <Phone className="w-4 h-4" strokeWidth={1.5} />
            {contact.phone.display}
          </a>
          <a
            href={contact.email.href}
            className="flex items-center gap-3 mt-2 text-sm text-stone-500 dark:text-stone-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <Mail className="w-4 h-4" strokeWidth={1.5} />
            {contact.email.primary}
          </a>
        </div>
      </div>
    </>
  )
}
