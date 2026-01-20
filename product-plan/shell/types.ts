// =============================================================================
// Data Types - Foundation Section
// =============================================================================

export interface CompanyStory {
  shortDescription: string
  milestone2024: string
  currentState: string
}

export interface Company {
  name: string
  tagline: string
  foundedYear: number
  legalStatus: string
  location: string
  physicalOffice: boolean
  story: CompanyStory
}

export interface PhoneContact {
  display: string
  raw: string
  href: string
}

export interface EmailContact {
  primary: string
  href: string
}

export interface SocialMediaLink {
  id: string
  platform: string
  url: string
  icon: string
  active: boolean
}

export interface Contact {
  phone: PhoneContact
  email: EmailContact
  socialMedia: SocialMediaLink[]
}

export interface NavigationItem {
  id: string
  label: string
  href: string
  type: 'anchor' | 'link'
}

export interface Footer {
  copyright: string
  year: number
  rights: string
}

// =============================================================================
// Component Props
// =============================================================================

export interface HeaderProps {
  /** Company information for logo and branding */
  company: Company
  /** Contact information for header display */
  contact: Contact
  /** Navigation menu items */
  navigation: NavigationItem[]
  /** Called when CTA button is clicked */
  onCtaClick?: () => void
  /** Called when mobile menu is toggled */
  onMenuToggle?: (isOpen: boolean) => void
}

export interface FooterProps {
  /** Company information for footer branding */
  company: Company
  /** Contact information for footer */
  contact: Contact
  /** Navigation menu items */
  navigation: NavigationItem[]
  /** Footer-specific content */
  footer: Footer
  /** Called when social media link is clicked */
  onSocialClick?: (platform: string) => void
}

export interface ModalProps {
  /** Whether the modal is open */
  isOpen: boolean
  /** Called when modal should close */
  onClose: () => void
  /** Modal title */
  title?: string
  /** Modal content */
  children: React.ReactNode
}

export interface ToastProps {
  /** Toast message */
  message: string
  /** Toast type for styling */
  type: 'success' | 'error' | 'info'
  /** Whether toast is visible */
  isVisible: boolean
  /** Called when toast should dismiss */
  onDismiss: () => void
  /** Auto-dismiss duration in ms */
  duration?: number
}
