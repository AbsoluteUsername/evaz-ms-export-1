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
// Hero Section Types
// =============================================================================

export interface HeroCta {
  text: string
  action: string
}

export interface HeroContent {
  headline: string
  subheadline: string
  description: string
  cta: HeroCta
  secondaryCta: HeroCta
}

export interface Audience {
  id: string
  type: string
  title: string
  role: string
  status: string
  needs: string
  icon: string
}

// =============================================================================
// Services Section Types
// =============================================================================

export interface ServicePricing {
  amount?: number
  currency?: string
  period?: string
  display: string
  type: 'fixed' | 'individual'
}

export interface ServicePackage {
  id: string
  title: string
  targetAudience: string
  pricing: ServicePricing
  includes: string[]
  priority?: boolean
  popular?: boolean
  isModule?: boolean
}

export interface ServiceCategory {
  id: string
  title: string
  description: string
}

export interface PremiumTargetAudience {
  fop: string[]
  individuals: string[]
}

export interface PremiumOffer {
  id: string
  badge: string
  title: string
  subtitle: string
  headline: string
  targetAudience: PremiumTargetAudience
  includes: string[]
  risks: string[]
  warningMessage: string
  results: string[]
  cta: HeroCta
}

// =============================================================================
// Benefits Section Types
// =============================================================================

export interface Problem {
  id: number
  category: string
  icon: string
  painPoints: string[]
}

export interface Benefit {
  id: number
  title: string
  description: string
  icon: string
  solves: number[]
}

export interface Differentiator {
  id: number
  feature: string
  description: string
  icon: string
}

export interface Strength {
  id: number
  title: string
  description: string
  icon: string
}

export interface FAQ {
  id: number
  question: string
  answer: string
}

// =============================================================================
// Contact Section Types
// =============================================================================

export interface FieldValidation {
  minLength?: number
  maxLength?: number
  pattern?: string
  errorMessage: string
}

export interface SelectOption {
  value: string
  label: string
}

export interface FormField {
  name: string
  type: 'text' | 'tel' | 'select' | 'textarea' | 'hidden'
  label?: string
  placeholder?: string
  required: boolean
  mask?: string
  options?: SelectOption[]
  maxLength?: number
  autoPopulated?: boolean
  validation?: FieldValidation
}

export interface SubmitButton {
  text: string
  loadingText: string
}

export interface FormMessages {
  success: string
  error: string
}

export interface FormConfig {
  title: string
  subtitle: string
  fields: FormField[]
  submitButton: SubmitButton
  messages: FormMessages
}

export interface Messenger {
  id: string
  name: string
  icon: string
  url: string
  active: boolean
}

export interface WorkingHours {
  days: string
  hours: string
}

export interface ContactInfo {
  phone: PhoneContact
  email: EmailContact
  messengers: Messenger[]
  workingHours: WorkingHours
}

export interface SectionContent {
  title: string
  subtitle: string
  ctaText: string
}

export interface ContactFormData {
  name: string
  phone: string
  clientType: string
  comment: string | null
  packageName: string
  timestamp: string
  source: 'landing_page'
}

// =============================================================================
// Component Props
// =============================================================================

export interface HeaderProps {
  company: Company
  contact: Contact
  navigation: NavigationItem[]
  onCtaClick?: () => void
  onMenuToggle?: (isOpen: boolean) => void
}

export interface FooterProps {
  company: Company
  contact: Contact
  navigation: NavigationItem[]
  footer: Footer
  onSocialClick?: (platform: string) => void
}

export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
}

export interface ToastProps {
  message: string
  type: 'success' | 'error' | 'info'
  isVisible: boolean
  onDismiss: () => void
  duration?: number
}
