# Milestone 1: Foundation

> **Provide alongside:** `product-overview.md`
> **Prerequisites:** None

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

## Goal

Set up the foundational elements: design tokens, data model types, routing structure, and application shell (header, footer, navigation).

## What to Implement

### 1. Design Tokens

Configure your styling system with these tokens:

- See `product-plan/design-system/tokens.css` for CSS custom properties
- See `product-plan/design-system/tailwind-colors.md` for Tailwind configuration
- See `product-plan/design-system/fonts.md` for Google Fonts setup

**Colors:**
- Primary: `teal` — For CTAs, links, accents
- Secondary: `cream` (#E8DCC8) — For backgrounds, highlights
- Neutral: `stone` — For text, borders, backgrounds

**Typography:**
- Heading: `Playfair Display` — Elegant serif
- Body: `Montserrat` — Clean sans-serif

### 2. Data Model Types

Create TypeScript interfaces for your core entities:

- See `product-plan/data-model/types.ts` for interface definitions
- See `product-plan/data-model/README.md` for entity relationships

Key entities to define:
- Company, Contact, NavigationItem
- ServicePackage, ServiceCategory, PremiumOffer
- FormConfig, FormField, ContactFormData

### 3. Routing Structure

Create placeholder routes for each section:

| Route | Section |
|-------|---------|
| `/` | Landing page (all sections) |
| `#services` | Services Section anchor |
| `#about` | Benefits Section anchor |
| `#contact` | Contact Section anchor |

This is a single-page landing page with anchor navigation.

### 4. Application Shell

Copy the shell components from `product-plan/shell/components/` to your project:

- `AppShell.tsx` — Main layout wrapper with header and footer
- `Header.tsx` — Sticky header with logo, nav, and CTA
- `MobileMenu.tsx` — Slide-out mobile navigation
- `Footer.tsx` — Footer with contact info and social links

**Wire Up Navigation:**

Connect navigation to smooth scroll:

| Nav Item | Target |
|----------|--------|
| Послуги | `#services` |
| Про нас | `#about` |
| Контакти | `#contact` |

**Header CTA:**

The "Отримати консультацію" button should scroll to the contact section.

**Mobile Menu:**

- Hamburger icon triggers slide-out menu on screens < 768px
- Menu closes when a nav link is clicked or user clicks outside

**Footer:**

The footer expects:
- Company name and tagline
- Contact phone (click-to-call)
- Email address
- Social media links (Facebook, Instagram, LinkedIn, Telegram)

## Files to Reference

- `product-plan/design-system/` — Design tokens
- `product-plan/data-model/` — Type definitions
- `product-plan/shell/README.md` — Shell design intent
- `product-plan/shell/components/` — Shell React components
- `product-plan/sections/foundation/` — Foundation section assets

## Done When

- [ ] Design tokens are configured (colors, fonts)
- [ ] Google Fonts are loading (Playfair Display, Montserrat)
- [ ] Data model types are defined
- [ ] Routes/anchors exist for all sections
- [ ] Shell renders with header and footer
- [ ] Navigation links scroll smoothly to sections
- [ ] Header gains shadow on scroll
- [ ] Mobile menu works (hamburger, slide-out, close)
- [ ] Footer displays contact info and social links
- [ ] Responsive on mobile (< 768px)
