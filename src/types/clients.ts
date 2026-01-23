// =============================================================================
// Data Types - Clients Section
// =============================================================================

/**
 * Industry categories for client businesses
 */
export type Industry =
  | 'trade'           // Торгівля (опт/роздріб)
  | 'realestate'      // Оренда нерухомості
  | 'manufacturing'   // Виробництво
  | 'medical'         // Медицина
  | 'it'              // IT / Інтернет
  | 'education'       // Навчання
  | 'cleaning'        // Клінінг

/**
 * Logo display type - determines how the visual is rendered
 */
export type LogoType = 'logo' | 'photo' | 'icon'

/**
 * Client data for the slider
 */
export interface Client {
  /** Unique identifier */
  id: string
  /** Display name (e.g., "Капля") */
  name: string
  /** Full legal name (e.g., "ФОП Ткачук Андрій Олександрович") */
  fullName?: string
  /** Business activity description (e.g., "Магазин сантехніки") */
  activityType: string
  /** Industry category */
  industry: Industry
  /** Lucide icon name for the industry */
  industryIcon: string
  /** Year partnership started (e.g., 2011) */
  partnershipYear: number
  /** Path to logo image file */
  logo?: string
  /** How to display the visual */
  logoType: LogoType
  /** Client website URL (optional) */
  website?: string
}

/**
 * Statistics data for animated counter cards
 */
export interface Statistic {
  /** Unique identifier */
  id: string
  /** The number to animate to */
  value: number
  /** Optional suffix (e.g., "+" for "68+") */
  suffix?: string
  /** Primary label (e.g., "клієнтів") */
  label: string
  /** Secondary label (e.g., "за весь час") */
  sublabel?: string
}

/**
 * Section content combining clients and statistics
 */
export interface ClientsSectionContent {
  /** Section heading */
  title: string
  /** Array of clients to display in slider */
  clients: Client[]
  /** Array of statistics to display in grid */
  statistics: Statistic[]
}

// =============================================================================
// Industry Mappings
// =============================================================================

/**
 * Mapping of industry to Lucide icon name
 */
export const industryIcons: Record<Industry, string> = {
  trade: 'ShoppingCart',
  realestate: 'Building2',
  manufacturing: 'Factory',
  medical: 'Stethoscope',
  it: 'Monitor',
  education: 'GraduationCap',
  cleaning: 'Sparkles',
}

/**
 * Mapping of industry to Ukrainian label
 */
export const industryLabels: Record<Industry, string> = {
  trade: 'Торгівля',
  realestate: 'Нерухомість',
  manufacturing: 'Виробництво',
  medical: 'Медицина',
  it: 'IT',
  education: 'Навчання',
  cleaning: 'Клінінг',
}
