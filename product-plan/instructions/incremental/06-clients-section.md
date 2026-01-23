# Milestone 6: Clients Section

> **Provide alongside:** `product-overview.md`
> **Prerequisites:** Milestone 4 (Benefits Section) complete

---

## About These Instructions

**What you're receiving:**
- Finished UI designs (React components with full styling)
- Data model definitions (TypeScript types and sample data)
- UI/UX specifications (user flows, requirements)
- Design system tokens (colors, typography, spacing)
- Test-writing instructions for each section (for TDD approach)

**What you need to build:**
- Integration of the provided UI components with real data
- Slider/carousel functionality
- Animated counter logic
- Image optimization and handling

**Important guidelines:**
- **DO NOT** redesign or restyle the provided components — use them as-is
- **DO** wire up the callback props to your routing and API calls
- **DO** replace sample data with real data from your backend
- **DO** implement proper loading states for images
- **DO** use test-driven development — write tests first using `tests.md` instructions
- The components are props-based and ready to integrate — focus on the data layer

---

## Goal

Implement the Clients Section — a trust-building showcase with client slider (left) and animated statistics (right) in a vertical split layout.

## Overview

The Clients Section builds trust by showcasing real clients and impressive statistics. It features a two-column layout:

- **Left side (50%):** Client cards carousel/slider showing one client at a time with logo, name, industry, and partnership year
- **Right side (50%):** Four animated statistic cards displaying key metrics (total clients, years in business, industries served, active clients)

**Key Functionality:**
- Client slider with navigation arrows and dot indicators
- Animated count-up numbers on scroll into view
- Unified card design regardless of logo quality
- Grayscale logos that reveal color on hover
- Responsive layout (stacked on mobile)

## Recommended Approach: Test-Driven Development

Before implementing this section, **write tests first** based on the test specifications provided.

See `product-plan/sections/clients-section/tests.md` for detailed test-writing instructions including:
- Key user flows to test (success and failure paths)
- Specific UI elements, button labels, and interactions to verify
- Expected behaviors and assertions

**TDD Workflow:**
1. Read `tests.md` and write failing tests for the key user flows
2. Implement the feature to make tests pass
3. Refactor while keeping tests green

---

## What to Implement

### Components

Create the following components in `src/components/sections/ClientsSection/`:

- `ClientsSection.tsx` — Main section layout (two-column split)
- `ClientSlider.tsx` — Carousel component with navigation
- `ClientCard.tsx` — Individual client card
- `StatCard.tsx` — Animated statistic card
- `StatsGrid.tsx` — 2x2 grid of stat cards

### Data Layer

The components expect these data shapes:

```typescript
// Client data for the slider
interface Client {
  id: string
  name: string                    // e.g., "Капля"
  fullName?: string               // e.g., "ФОП Ткачук Андрій Олександрович"
  activityType: string            // e.g., "Магазин сантехніки"
  industry: Industry              // Industry category
  industryIcon: string            // Lucide icon name
  partnershipYear: number         // e.g., 2011
  logo?: string                   // Path to logo image (optional)
  logoType: 'logo' | 'photo' | 'icon'  // How to display visual
  website?: string                // Optional website URL
}

// Industry categories
type Industry = 
  | 'trade'           // Торгівля
  | 'realestate'      // Оренда нерухомості
  | 'manufacturing'   // Виробництво
  | 'medical'         // Медицина
  | 'it'              // IT / Інтернет
  | 'education'       // Навчання
  | 'cleaning'        // Клінінг

// Statistics data
interface Statistic {
  id: string
  value: number           // The number to animate to
  suffix?: string         // e.g., "+" for "68+"
  label: string           // e.g., "клієнтів"
  sublabel?: string       // e.g., "за весь час"
}

// Section content
interface ClientsSectionContent {
  title: string                   // "Нам довіряють"
  clients: Client[]
  statistics: Statistic[]
}
```

### Industry Icon Mapping

```typescript
const industryIcons: Record<Industry, string> = {
  trade: 'ShoppingCart',        // 🛒 Торгівля
  realestate: 'Building2',      // 🏢 Оренда нерухомості
  manufacturing: 'Factory',     // 🏭 Виробництво
  medical: 'Stethoscope',       // 🦷 Медицина
  it: 'Monitor',                // 💻 IT
  education: 'GraduationCap',   // 🎓 Навчання
  cleaning: 'Sparkles',         // 🧹 Клінінг
}

const industryLabels: Record<Industry, string> = {
  trade: 'Торгівля',
  realestate: 'Нерухомість',
  manufacturing: 'Виробництво',
  medical: 'Медицина',
  it: 'IT',
  education: 'Навчання',
  cleaning: 'Клінінг',
}
```

### Client Data (from Excel + provided logos)

| Client | Industry | Activity | Year | Logo Type |
|--------|----------|----------|------|-----------|
| Капля | trade | Магазин сантехніки | 2011 | logo ✅ |
| Victori (Тараненко) | trade | Жіночий одяг люкс | 2012 | logo ✅ |
| SL (Скрипник/Лазука) | trade | Будівельні матеріали | 2016 | logo ✅ |
| ТЦ Дивоцвіт | realestate | Торговий центр | 2023 | photo |
| Астел Плюс | trade | Смартфони, ремонт | 2012 | icon |
| Перша дитяча стоматологія | medical | Стоматологія | 2025 | logo ✅ |

### Statistics Data (from Excel analysis)

| Stat | Value | Suffix | Label | Sublabel |
|------|-------|--------|-------|----------|
| Total clients | 68 | + | клієнтів | за весь час |
| Years | 14 | — | років | на ринку |
| Industries | 7 | — | галузей | бізнесу |
| Active clients | 7 | + | активних | клієнтів |

### Callbacks

Wire up these user actions:

| Callback | Description |
|----------|-------------|
| `onSliderPrev` | Previous arrow clicked → show previous client |
| `onSliderNext` | Next arrow clicked → show next client |
| `onDotClick` | Dot indicator clicked → jump to specific client |
| `onClientClick` | Client card clicked → open website (if available) |

---

## Visual Design Specifications

### Section Layout

```
Desktop (≥1024px):
┌─────────────────────────────────────────────────────────────┐
│                     "Нам довіряють"                         │
├────────────────────────────┬────────────────────────────────┤
│     CLIENT SLIDER          │         STATS GRID            │
│         (50%)              │           (50%)               │
│                            │                               │
│   ┌────────────────────┐   │   ┌─────────┐  ┌─────────┐   │
│   │  ◄  [CARD]  ►      │   │   │  68+    │  │   14    │   │
│   │                    │   │   │клієнтів │  │  років  │   │
│   │     ● ○ ○ ○ ○ ○    │   │   └─────────┘  └─────────┘   │
│   └────────────────────┘   │   ┌─────────┐  ┌─────────┐   │
│                            │   │    7    │  │   7+    │   │
│                            │   │ галузей │  │активних │   │
│                            │   └─────────┘  └─────────┘   │
└────────────────────────────┴────────────────────────────────┘

Mobile (<768px):
┌─────────────────────────┐
│    "Нам довіряють"      │
├─────────────────────────┤
│      STATS GRID         │
│  ┌─────────┐┌─────────┐ │
│  │  68+    ││   14    │ │
│  └─────────┘└─────────┘ │
│  ┌─────────┐┌─────────┐ │
│  │    7    ││   7+    │ │
│  └─────────┘└─────────┘ │
├─────────────────────────┤
│    CLIENT SLIDER        │
│  ◄  [CARD]  ►           │
│     ● ○ ○ ○ ○ ○         │
└─────────────────────────┘
```

### Client Card Structure

```
┌────────────────────────────────────┐
│                                    │
│          [INDUSTRY ICON]           │  ← Lucide icon (teal-500)
│           Торгівля                 │  ← Industry label (stone-500)
│                                    │
│   ┌────────────────────────────┐   │
│   │                            │   │
│   │                            │   │
│   │         [LOGO]             │   │  ← grayscale, hover → color
│   │                            │   │     OR photo with teal overlay
│   │                            │   │     OR large industry icon
│   └────────────────────────────┘   │
│                                    │
│           Капля                    │  ← Playfair Display, 600
│    Магазин сантехніки              │  ← Montserrat, stone-600
│                                    │
│   ┌────────────────────────────┐   │
│   │  🗓️  Співпраця з 2011     │   │  ← Badge: teal bg, white text
│   └────────────────────────────┘   │
│                                    │
└────────────────────────────────────┘
```

### Stat Card Structure

```
┌─────────────────────┐
│                     │
│       68+           │  ← Playfair Display, 700, teal-600
│                     │     Animated count-up on scroll
│     клієнтів        │  ← Montserrat, 600, stone-900
│    за весь час      │  ← Montserrat, 400, stone-500
│                     │
└─────────────────────┘
```

### Styling Tokens

**Colors:**
- Primary accent: `teal-500`, `teal-600`
- Card background: `white` / `dark:stone-900`
- Card border: `stone-200` / `dark:stone-700`
- Text primary: `stone-900` / `dark:stone-100`
- Text muted: `stone-500` / `dark:stone-400`
- Badge: `teal-500/10` bg, `teal-600` text

**Typography:**
- Section title: Playfair Display, 2.25rem (36px), 600
- Client name: Playfair Display, 1.5rem (24px), 600
- Stat number: Playfair Display, 3rem (48px), 700
- Labels: Montserrat, 0.875rem (14px), 500

**Spacing:**
- Section padding: `py-16 md:py-24`
- Card padding: `p-6 md:p-8`
- Gap between columns: `gap-8 lg:gap-12`

**Effects:**
- Card shadow: `shadow-lg`
- Card hover: `hover:shadow-xl hover:-translate-y-1`
- Logo grayscale: `filter grayscale hover:grayscale-0`
- Transition: `transition-all duration-300`

---

## Files to Reference

- `product-plan/sections/clients-section/README.md` — Feature overview and design intent
- `product-plan/sections/clients-section/tests.md` — Test-writing instructions (use for TDD)
- `product-plan/sections/clients-section/components/` — React components
- `product-plan/sections/clients-section/types.ts` — TypeScript interfaces
- `product-plan/sections/clients-section/sample-data.json` — Test data
- `product-plan/design-system/tailwind-colors.md` — Color configuration
- `product-plan/design-system/fonts.md` — Typography configuration

---

## Expected User Flows

### Flow 1: Browse Clients via Slider

1. User scrolls to clients section
2. User sees "Нам довіряють" heading
3. User views the first client card (Капля)
4. User clicks the right arrow (►)
5. **Outcome:** Slider transitions to show next client (Victori)

### Flow 2: Jump to Specific Client

1. User views the client slider
2. User sees dot indicators below the card
3. User clicks the 4th dot
4. **Outcome:** Slider jumps to 4th client (Дивоцвіт)

### Flow 3: View Statistics with Animation

1. User scrolls to clients section
2. Statistics grid enters viewport
3. **Outcome:** Numbers animate from 0 to final value (e.g., 0 → 68)

### Flow 4: Interact with Client Card

1. User views a client card
2. User hovers over the logo
3. **Outcome:** Logo transitions from grayscale to color
4. User hovers over the card
5. **Outcome:** Card lifts slightly with shadow

### Flow 5: Mobile Experience

1. User views section on mobile (<768px)
2. User sees stats grid first (2x2)
3. User scrolls down to see client slider
4. User swipes left/right on slider
5. **Outcome:** Slider navigates between clients

---

## Done When

- [ ] Section displays with "Нам довіряють" heading
- [ ] Two-column layout on desktop (50/50 split)
- [ ] Client slider shows one card at a time
- [ ] Slider has left/right navigation arrows
- [ ] Slider has dot indicators for direct navigation
- [ ] Client cards display: industry icon, logo, name, activity, year badge
- [ ] Logos are grayscale, become color on hover
- [ ] Stats grid displays 4 statistic cards (2x2)
- [ ] Stat numbers animate on scroll into view
- [ ] Cards have hover effects (lift, shadow)
- [ ] Responsive: stacked on mobile (stats on top)
- [ ] Touch swipe works on mobile slider
- [ ] Matches design system (teal, stone, Playfair, Montserrat)
- [ ] Dark mode supported
