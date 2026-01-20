// =============================================================================
// Data Types - Contact Section
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

export interface CtaVariation {
  id: string
  context: string
  text: string
  action: 'open-modal' | 'scroll-to-services' | string
  autoPopulatePackage?: boolean
  packageName?: string
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

export interface EmailTemplateField {
  label: string
  key: string
  icon: string
  fallback?: string
}

export interface EmailBodyTemplate {
  header: string
  fields: EmailTemplateField[]
  footer: string
}

export interface EmailNotification {
  to: string
  subjectTemplate: string
  bodyTemplate: EmailBodyTemplate
}

export interface TelegramTemplateField {
  label: string
  key: string
  emoji: string
  fallback?: string
}

export interface TelegramMessageTemplate {
  header: string
  fields: TelegramTemplateField[]
}

export interface TelegramNotification {
  phone: string
  messageTemplate: TelegramMessageTemplate
}

export interface SectionContent {
  title: string
  subtitle: string
  ctaText: string
}

// =============================================================================
// Form Submission Data
// =============================================================================

export interface ContactFormData {
  name: string
  phone: string
  clientType: 'ФОП' | 'ТОВ' | 'Фізична особа'
  comment: string | null
  packageName: string
  timestamp: string
  source: 'landing_page'
}

// =============================================================================
// Component Props
// =============================================================================

export interface ContactFormProps {
  /** Form configuration */
  config: FormConfig
  /** Pre-filled package name (from service card click) */
  packageName?: string
  /** Called when form is submitted successfully */
  onSubmit?: (data: ContactFormData) => void
  /** Called when form submission fails */
  onError?: (error: Error) => void
  /** Called when form is closed/cancelled */
  onClose?: () => void
  /** Whether form is currently submitting */
  isSubmitting?: boolean
}

export interface ContactModalProps {
  /** Whether the modal is open */
  isOpen: boolean
  /** Called when modal should close */
  onClose: () => void
  /** Form configuration */
  formConfig: FormConfig
  /** Pre-filled package name */
  packageName?: string
  /** Called when form is submitted successfully */
  onSubmitSuccess?: (data: ContactFormData) => void
}

export interface ContactInfoDisplayProps {
  /** Contact information to display */
  contactInfo: ContactInfo
  /** Called when phone link is clicked */
  onPhoneClick?: () => void
  /** Called when email link is clicked */
  onEmailClick?: () => void
  /** Called when messenger link is clicked */
  onMessengerClick?: (messengerId: string) => void
}

export interface ContactSectionProps {
  /** Form configuration */
  formConfig: FormConfig
  /** CTA button variations */
  ctaVariations: CtaVariation[]
  /** Contact information */
  contactInfo: ContactInfo
  /** Email notification settings */
  emailNotification: EmailNotification
  /** Telegram notification settings */
  telegramNotification: TelegramNotification
  /** Section content (title, subtitle) */
  sectionContent: SectionContent
  /** Called when contact form is submitted */
  onFormSubmit?: (data: ContactFormData) => void
  /** Called when CTA button is clicked */
  onCtaClick?: (ctaId: string) => void
  /** Called when phone is clicked */
  onPhoneClick?: () => void
  /** Called when messenger is clicked */
  onMessengerClick?: (messengerId: string) => void
}
