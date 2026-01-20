// =============================================================================
// Data Types - Hero Section
// =============================================================================

export interface CtaButton {
  text: string
  action: 'scroll-to-services' | 'open-modal' | string
}

export interface Hero {
  headline: string
  subheadline: string
  description: string
  cta: CtaButton
  secondaryCta?: CtaButton
}

export interface Audience {
  id: string
  type: 'ФОП' | 'Фізична особа' | 'ТОВ'
  title: string
  role: string
  status: string
  needs: string
  icon: string
}

export interface Stats {
  yearsInBusiness: number
  foundedYear: number
  clientsServed: number | null
  successfulReports: number | null
  zeroFines: number | null
}

// =============================================================================
// Component Props
// =============================================================================

export interface HeroSectionProps {
  /** Hero content with headline, subheadline, and CTAs */
  hero: Hero
  /** Target audience profiles */
  audiences: Audience[]
  /** Company statistics for trust indicators */
  stats?: Stats
  /** Called when primary CTA button is clicked */
  onCtaClick?: () => void
  /** Called when secondary CTA button is clicked */
  onSecondaryCtaClick?: () => void
  /** Called when an audience card is clicked */
  onAudienceClick?: (audienceId: string) => void
}
