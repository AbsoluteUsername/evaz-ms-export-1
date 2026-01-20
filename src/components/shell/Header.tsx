'use client'

import { useState, useEffect, useCallback } from 'react'
import { Menu } from 'lucide-react'
import Image from 'next/image'
import type { HeaderProps } from '@/types'

export function Header({
  company,
  navigation,
  onCtaClick,
  onMenuToggle,
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  const handleCtaClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    onCtaClick?.()
    const target = document.querySelector('#contact')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }, [onCtaClick])

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled
          ? 'backdrop-blur-sm shadow-md'
          : ''
        }
      `}
      style={{ backgroundColor: '#e6dbd0' }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[60px] md:h-[70px]">
          {/* Logo */}
          <a href="#" className="flex items-center shrink-0 group">
            <div className="relative h-10 md:h-12 w-32 md:w-36 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/assets/logo/logo-green.png"
                alt={company.name}
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="relative text-sm font-medium text-stone-600 dark:text-stone-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-teal-500 after:transition-all after:duration-300 hover:after:w-full"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="#contact"
            onClick={handleCtaClick}
            className="hidden md:inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-teal-600 text-white text-sm font-medium hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/25 hover:-translate-y-0.5"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Отримати консультацію
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => onMenuToggle?.(true)}
            className="md:hidden p-2 -mr-2 text-stone-700 dark:text-stone-300 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-lg transition-colors"
            aria-label="Відкрити меню"
          >
            <Menu className="w-6 h-6" strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Decorative bottom accent line */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent transition-opacity duration-500 ${
          isScrolled ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </header>
  )
}
