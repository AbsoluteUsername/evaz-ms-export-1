'use client'

import { useState, useEffect, useCallback } from 'react'
import { Menu, Instagram, Facebook, Send, Clock } from 'lucide-react'
import Image from 'next/image'
import type { HeaderProps } from '@/types'

const socialIconMap: Record<string, typeof Instagram> = {
  instagram: Instagram,
  facebook: Facebook,
  telegram: Send,
}

export function Header({
  company,
  contact,
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
        <div className="flex items-center justify-between h-[70px] md:h-[80px]">
          {/* Logo */}
          <a href="#" className="flex items-center shrink-0 group">
            <div className="relative h-12 md:h-14 w-36 md:w-40 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/assets/logo/logo-green.png"
                alt={company.name}
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </a>

          {/* Center Section: Working Hours */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Working Hours */}
            {contact.workingHours && (
              <div className="flex items-center gap-2 text-stone-600 dark:text-stone-300">
                <Clock className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                <div className="text-sm">
                  <span className="font-medium">{contact.workingHours.days}</span>
                  <span className="mx-1.5">•</span>
                  <span>{contact.workingHours.hours}</span>
                </div>
              </div>
            )}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="relative text-base font-medium text-stone-600 dark:text-stone-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-teal-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Section: Social Icons & CTA (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            {/* Social Media Icons */}
            <div className="flex items-center gap-3">
              {contact.socialMedia
                .filter((social) => social.active)
                .map((social) => {
                  const Icon = socialIconMap[social.id.toLowerCase()]
                  if (!Icon) return null
                  return (
                    <a
                      key={social.id}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone-600 dark:text-stone-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                      aria-label={social.platform}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  )
                })}
            </div>

            {/* Desktop CTA */}
            <a
              href="#contact"
              onClick={handleCtaClick}
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-teal-600 text-white text-base font-medium hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/25 hover:-translate-y-0.5"
            >
              Отримати консультацію
            </a>
          </div>

          {/* Mobile: Social Icons & Hamburger */}
          <div className="md:hidden flex items-center gap-3">
            {/* Social Media Icons (Mobile) */}
            <div className="flex items-center gap-2.5">
              {contact.socialMedia
                .filter((social) => social.active)
                .map((social) => {
                  const Icon = socialIconMap[social.id.toLowerCase()]
                  if (!Icon) return null
                  return (
                    <a
                      key={social.id}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone-600 dark:text-stone-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                      aria-label={social.platform}
                    >
                      <Icon className="w-5 h-5" strokeWidth={1.5} />
                    </a>
                  )
                })}
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => onMenuToggle?.(true)}
              className="p-2 -mr-2 text-stone-700 dark:text-stone-300 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-lg transition-colors"
              aria-label="Відкрити меню"
            >
              <Menu className="w-6 h-6" strokeWidth={1.5} />
            </button>
          </div>
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
