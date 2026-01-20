// =============================================================================
// Data Types - Services Section
// =============================================================================

export interface ServiceCategory {
  id: string
  title: string
  description: string
}

export interface FixedPricing {
  amount: number
  currency: 'UAH'
  period: 'month'
  display: string
  type: 'fixed'
}

export interface IndividualPricing {
  display: string
  type: 'individual'
}

export type ServicePricing = FixedPricing | IndividualPricing

export interface ServicePackage {
  id: string
  title: string
  targetAudience: string
  pricing: ServicePricing
  includes: string[]
  priority: boolean
  popular?: boolean
  isModule?: boolean
}

export interface PremiumTargetAudience {
  fop: string[]
  individuals: string[]
}

export interface PremiumCta {
  text: string
  action: 'open-modal' | string
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
  cta: PremiumCta
}

export interface SectionCta {
  text: string
  action: 'open-modal' | string
}

// =============================================================================
// Component Props
// =============================================================================

export interface ServiceCardProps {
  /** The service package to display */
  service: ServicePackage
  /** Called when CTA button is clicked */
  onCtaClick?: (packageId: string, packageTitle: string) => void
}

export interface ServicesSectionProps {
  /** Service category headers */
  serviceCategories: ServiceCategory[]
  /** FOP service packages */
  fopServices: ServicePackage[]
  /** TOV/LLC service packages */
  tovServices: ServicePackage[]
  /** Additional service packages */
  additionalServices: ServicePackage[]
  /** Premium seasonal offer */
  premiumOffer: PremiumOffer
  /** Default CTA for all service cards */
  sectionCta: SectionCta
  /** Called when any service card CTA is clicked */
  onServiceCtaClick?: (packageId: string, packageTitle: string) => void
  /** Called when premium offer CTA is clicked */
  onPremiumCtaClick?: () => void
  /** Called when category tab is changed */
  onCategoryChange?: (categoryId: string) => void
}

export interface PremiumOfferCardProps {
  /** The premium offer to display */
  offer: PremiumOffer
  /** Called when CTA button is clicked */
  onCtaClick?: () => void
}
