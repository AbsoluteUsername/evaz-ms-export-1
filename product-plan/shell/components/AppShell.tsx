import { useState, type ReactNode } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { MobileMenu } from './MobileMenu'
import type {
  Company,
  Contact,
  NavigationItem,
  Footer as FooterData,
} from '../types'

export interface AppShellProps {
  children?: ReactNode
  company: Company
  contact: Contact
  navigation: NavigationItem[]
  footer: FooterData
  onCtaClick?: () => void
  onSocialClick?: (platform: string) => void
}

export function AppShell({
  children,
  company,
  contact,
  navigation,
  footer,
  onCtaClick,
  onSocialClick,
}: AppShellProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-stone-950">
      {/* Header */}
      <Header
        company={company}
        contact={contact}
        navigation={navigation}
        onCtaClick={onCtaClick}
        onMenuToggle={setIsMobileMenuOpen}
      />

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        company={company}
        contact={contact}
        navigation={navigation}
        onCtaClick={onCtaClick}
      />

      {/* Main Content - offset for fixed header */}
      <main className="flex-1 pt-[60px] md:pt-[70px]">
        {children}
      </main>

      {/* Footer */}
      <Footer
        company={company}
        contact={contact}
        navigation={navigation}
        footer={footer}
        onSocialClick={onSocialClick}
      />
    </div>
  )
}
