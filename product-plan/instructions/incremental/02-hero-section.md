# Milestone 2: Hero Section

> **Provide alongside:** `product-overview.md`
> **Prerequisites:** Milestone 1 (Foundation) complete

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

Implement the Hero Section — the full-viewport first impression with headline, value proposition, and CTA buttons.

## Overview

The Hero Section is the first thing visitors see when they land on the EVAZ-MS website. It features a full-viewport design with the main headline "Ми робимо складне простим" (We make complex simple), a value proposition description, and CTA buttons that guide users to explore services or request a consultation.

**Key Functionality:**
- Display compelling headline and subheadline
- Show value proposition description
- Primary CTA button scrolls to services section
- Secondary CTA button opens contact modal
- Audience profile cards help visitors self-identify

## Recommended Approach: Test-Driven Development

Before implementing this section, **write tests first** based on the test specifications provided.

See `product-plan/sections/hero-section/tests.md` for detailed test-writing instructions including:
- Key user flows to test (success and failure paths)
- Specific UI elements, button labels, and interactions to verify
- Expected behaviors and assertions

**TDD Workflow:**
1. Read `tests.md` and write failing tests for the key user flows
2. Implement the feature to make tests pass
3. Refactor while keeping tests green

## What to Implement

### Components

Copy the section components from `product-plan/sections/hero-section/components/`:

- `HeroSection.tsx` — Main hero section component

### Data Layer

The components expect these data shapes:

```typescript
interface Hero {
  headline: string
  subheadline: string
  description: string
  cta: { text: string; action: string }
  secondaryCta?: { text: string; action: string }
}

interface Audience {
  id: string
  type: 'ФОП' | 'Фізична особа' | 'ТОВ'
  title: string
  role: string
  status: string
  needs: string
  icon: string
}
```

You'll need to:
- Store hero content (can be static or CMS-driven)
- Define audience profiles

### Callbacks

Wire up these user actions:

| Callback | Description |
|----------|-------------|
| `onCtaClick` | Primary CTA clicked → scroll to services section |
| `onSecondaryCtaClick` | Secondary CTA clicked → open contact modal |
| `onAudienceClick` | Audience card clicked → scroll to relevant services |

## Files to Reference

- `product-plan/sections/hero-section/README.md` — Feature overview and design intent
- `product-plan/sections/hero-section/tests.md` — Test-writing instructions (use for TDD)
- `product-plan/sections/hero-section/components/` — React components
- `product-plan/sections/hero-section/types.ts` — TypeScript interfaces
- `product-plan/sections/hero-section/sample-data.json` — Test data

## Expected User Flows

### Flow 1: View Hero and Explore Services

1. User lands on the page
2. User sees headline "Ми робимо складне простим"
3. User reads the value proposition
4. User clicks "Обрати пакет послуг" (primary CTA)
5. **Outcome:** Page smoothly scrolls to the services section

### Flow 2: Request Consultation

1. User lands on the page
2. User sees headline and value proposition
3. User clicks "Отримати консультацію" (secondary CTA)
4. **Outcome:** Contact modal opens with form

### Flow 3: Self-Identify by Audience

1. User views the audience cards
2. User identifies as ФОП / Фізична особа / ТОВ
3. User clicks their audience card
4. **Outcome:** Page scrolls to relevant services for their type

## Done When

- [ ] Hero section displays headline "Ми робимо складне простим"
- [ ] Subheadline and description are visible
- [ ] Primary CTA "Обрати пакет послуг" scrolls to services
- [ ] Secondary CTA "Отримати консультацію" opens contact modal
- [ ] Audience cards display for ФОП, Фізична особа, ТОВ
- [ ] Clicking audience card scrolls to relevant services
- [ ] Full-viewport height (100vh minus header)
- [ ] Responsive on mobile
- [ ] Matches the visual design
