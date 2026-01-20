// =============================================================================
// Data Types - Benefits Section
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
  /** IDs of problems this benefit addresses */
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

export interface Methodology {
  id: number
  name: string
  description: string
}

export interface Objection {
  id: number
  objection: string
  response: string
  emphasize: string
}

export interface FAQ {
  id: number
  question: string
  answer: string
}

export interface Testimonial {
  id: number
  clientName: string
  clientType: 'ФОП' | 'ТОВ' | 'Фізична особа'
  industry: string | null
  testimonial: string
  highlight: string
  photo: string | null
}

export interface SectionCta {
  text: string
  action: 'open-modal' | string
}

// =============================================================================
// Component Props
// =============================================================================

export interface ProblemCardProps {
  /** The problem category to display */
  problem: Problem
}

export interface BenefitCardProps {
  /** The benefit to display */
  benefit: Benefit
}

export interface DifferentiatorCardProps {
  /** The differentiator to display */
  differentiator: Differentiator
}

export interface ObjectionCardProps {
  /** The objection and response to display */
  objection: Objection
}

export interface FAQItemProps {
  /** The FAQ item to display */
  faq: FAQ
  /** Whether the FAQ is expanded */
  isExpanded?: boolean
  /** Called when FAQ item is toggled */
  onToggle?: (id: number) => void
}

export interface TestimonialCardProps {
  /** The testimonial to display */
  testimonial: Testimonial
}

export interface BenefitsSectionProps {
  /** Pain points clients experience */
  problems: Problem[]
  /** Benefits of working with EVAZ-MS */
  benefits: Benefit[]
  /** Unique differentiators */
  differentiators: Differentiator[]
  /** Team strengths */
  strengths: Strength[]
  /** Professional methodologies */
  methodologies: Methodology[]
  /** Common objections with responses */
  objections: Objection[]
  /** Frequently asked questions */
  faq: FAQ[]
  /** Client testimonials */
  testimonials: Testimonial[]
  /** Section call-to-action */
  sectionCta: SectionCta
  /** Called when CTA button is clicked */
  onCtaClick?: () => void
  /** Called when FAQ item is toggled */
  onFaqToggle?: (id: number) => void
}
