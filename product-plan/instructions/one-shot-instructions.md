# EVAZ-MS Landing Page — Complete Implementation Instructions

---

## About These Instructions

**What you're receiving:**
- Finished UI designs (React components with full styling)
- Data model definitions (TypeScript types and sample data)
- UI/UX specifications (user flows, requirements, screenshots)
- Design system tokens (colors, typography, spacing)
- Test-writing instructions for each section (for TDD approach)

**What you need to build:**
- Backend API endpoints and database schema
- Authentication and authorization
- Data fetching and state management
- Business logic and validation
- Integration of the provided UI components with real data

**Important guidelines:**
- **DO NOT** redesign or restyle the provided components — use them as-is
- **DO** wire up the callback props to your routing and API calls
- **DO** replace sample data with real data from your backend
- **DO** implement proper error handling and loading states
- **DO** implement empty states when no records exist (first-time users, after deletions)
- **DO** use test-driven development — write tests first using `tests.md` instructions
- The components are props-based and ready to integrate — focus on the backend and data layer

---

## Test-Driven Development

Each section includes a `tests.md` file with detailed test-writing instructions. These are **framework-agnostic** — adapt them to your testing setup (Jest, Vitest, Playwright, Cypress, RSpec, Minitest, PHPUnit, etc.).

**For each section:**
1. Read `product-plan/sections/[section-id]/tests.md`
2. Write failing tests for key user flows (success and failure paths)
3. Implement the feature to make tests pass
4. Refactor while keeping tests green

---

## Product Overview

A conversion-focused landing page for EVAZ-MS, a Ukrainian accounting and consulting firm that helps FOPs, small TOVs, and individuals navigate complex tax and bookkeeping requirements with confidence.

### Problems Solved
1. **Fear of Tax Penalties** — Professional oversight ensures no missed deadlines
2. **Complexity** — Expert translation of tax law into clear guidance
3. **Time Drain** — Full-service packages free entrepreneurs
4. **Finding Help** — Real office, team, accountability

### Key Features
- Contact form with validation and dual delivery (email + Telegram)
- 13 service packages with package-specific CTAs
- Responsive design (320px → 1440px+)
- Smooth scroll navigation with mobile hamburger menu
- Click-to-call and messenger links

---

# Milestone 1: Foundation

## Goal
Set up design tokens, data model types, routing structure, and application shell.

## Design Tokens

**Colors:**
- Primary: `teal` — For CTAs, links, accents
- Secondary: `cream` (#E8DCC8) — For backgrounds
- Neutral: `stone` — For text, borders

**Typography:**
- Heading: `Playfair Display`
- Body: `Montserrat`

## Routing Structure

| Route | Section |
|-------|---------|
| `/` | Landing page (all sections) |
| `#services` | Services Section anchor |
| `#about` | Benefits Section anchor |
| `#contact` | Contact Section anchor |

## Application Shell

Copy shell components from `product-plan/shell/components/`:
- `AppShell.tsx` — Main layout wrapper
- `Header.tsx` — Sticky header with logo, nav, CTA
- `MobileMenu.tsx` — Slide-out mobile navigation
- `Footer.tsx` — Footer with contact info and social links

**Wire up navigation** to smooth scroll to anchors.

## Done When
- [ ] Design tokens configured
- [ ] Google Fonts loading (Playfair Display, Montserrat)
- [ ] Shell renders with header/footer
- [ ] Navigation scrolls smoothly
- [ ] Mobile menu works
- [ ] Responsive on all screen sizes

---

# Milestone 2: Hero Section

## Goal
Full-viewport hero with headline, value proposition, and CTA buttons.

## Components
- `HeroSection.tsx` — Main hero section

## Key Content
- Headline: "Ми робимо складне простим"
- Primary CTA: "Обрати пакет послуг" → scrolls to services
- Secondary CTA: "Отримати консультацію" → opens contact modal
- Audience cards: ФОП, Фізична особа, ТОВ

## Callbacks
| Callback | Action |
|----------|--------|
| `onCtaClick` | Scroll to services |
| `onSecondaryCtaClick` | Open contact modal |
| `onAudienceClick` | Scroll to relevant services |

## Done When
- [ ] Hero displays headline and CTAs
- [ ] Primary CTA scrolls to services
- [ ] Secondary CTA opens contact modal
- [ ] Full-viewport height
- [ ] Responsive on mobile

---

# Milestone 3: Services Section

## Goal
Tabbed display of 12 service packages by category with pricing and CTAs.

## Components
- `ServicesSection.tsx` — Main section with tabs
- `ServiceCard.tsx` — Individual service card

## Categories
1. **Послуги для ФОП** (4 packages) — від 3 000 - 10 000 грн/міс
2. **Послуги для ТОВ** (4 packages) — від 8 000 - 10 000 грн/міс
3. **Додаткові послуги** (4 packages) — fixed or individual pricing

## Callbacks
| Callback | Action |
|----------|--------|
| `onServiceCtaClick` | Open contact form with package name |
| `onPremiumCtaClick` | Open contact form with premium package |
| `onCategoryChange` | Update active tab |

## Done When
- [ ] 3 tabs work correctly
- [ ] Service cards display title, includes, pricing
- [ ] Card CTA opens contact modal with package name
- [ ] Premium offer highlighted
- [ ] Responsive grid layout

---

# Milestone 4: Benefits Section

## Goal
4 benefit cards addressing pain points + team photo carousel.

## Components
- `BenefitsSection.tsx` — Main section layout
- `BenefitCard.tsx` — Individual benefit card
- `TeamCarousel.tsx` — Team photo carousel

## Benefits Content
1. **Професійний результат без штрафів** — Shield icon
2. **Спокій і впевненість** — Check icon
3. **Свобода зосередитись на бізнесі** — Rocket icon
4. **Стабільна команда** — Users icon

## Done When
- [ ] 4 benefit cards display with icons
- [ ] Cards have hover effects
- [ ] Team carousel with 7 photos
- [ ] FAQ accordion works
- [ ] Responsive layout

---

# Milestone 5: Contact Section

## Goal
Contact form + contact info display as primary conversion point.

## Components
- `ContactSection.tsx` — Main section (two-column)
- `ContactForm.tsx` — Form with validation
- `ContactInfoCard.tsx` — Contact info display

## Form Fields
1. **Ім'я** (required) — min 2 chars
2. **Телефон** (required) — +380XXXXXXXXX
3. **Тип клієнта** (required) — ФОП, ТОВ, Фізична особа
4. **Коментар** (optional) — max 500 chars

## Backend Requirements
1. Form submission endpoint with validation
2. Email notification to ehwazms@gmail.com
3. Telegram notification to +380970094566

## Callbacks
| Callback | Action |
|----------|--------|
| `onFormSubmit` | Submit to backend, show success/error |
| `onPhoneClick` | Track analytics |
| `onMessengerClick` | Track analytics, open app |

## Done When
- [ ] Form validates all fields
- [ ] Success/error states display
- [ ] Email + Telegram notifications send
- [ ] Phone is click-to-call
- [ ] Messenger buttons work
- [ ] Two-column desktop, stacked mobile

---

## Files Reference

- `product-plan/design-system/` — Design tokens
- `product-plan/data-model/` — Type definitions
- `product-plan/shell/` — Application shell components
- `product-plan/sections/` — All section components and assets
