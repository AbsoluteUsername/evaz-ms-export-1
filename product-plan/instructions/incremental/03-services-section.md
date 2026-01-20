# Milestone 3: Services Section

> **Provide alongside:** `product-overview.md`
> **Prerequisites:** Milestone 1 (Foundation) and Milestone 2 (Hero Section) complete

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

Implement the Services Section — a tabbed display of all 12 service packages organized by category with pricing and CTAs.

## Overview

The Services Section displays all service packages that EVAZ-MS offers. Services are organized into three categories: ФОП (individual entrepreneurs), ТОВ (LLCs), and Додаткові послуги (additional services). Each service card shows the package name, description, included services list, pricing, and a CTA button.

**Key Functionality:**
- Tab navigation between 3 service categories
- Service cards with package details and pricing
- CTA buttons that open contact form with pre-selected service
- Premium seasonal offer highlighted separately
- Responsive grid layout (1 col mobile, 2 tablet, 3-4 desktop)

## Recommended Approach: Test-Driven Development

Before implementing this section, **write tests first** based on the test specifications provided.

See `product-plan/sections/services-section/tests.md` for detailed test-writing instructions including:
- Key user flows to test (success and failure paths)
- Specific UI elements, button labels, and interactions to verify
- Expected behaviors and assertions

**TDD Workflow:**
1. Read `tests.md` and write failing tests for the key user flows
2. Implement the feature to make tests pass
3. Refactor while keeping tests green

## What to Implement

### Components

Copy the section components from `product-plan/sections/services-section/components/`:

- `ServicesSection.tsx` — Main section with tabs and grid
- `ServiceCard.tsx` — Individual service package card

### Data Layer

The components expect these data shapes:

```typescript
interface ServiceCategory {
  id: string
  title: string
  description: string
}

interface ServicePackage {
  id: string
  title: string
  targetAudience: string
  pricing: FixedPricing | IndividualPricing
  includes: string[]
  priority: boolean
  popular?: boolean
}

interface FixedPricing {
  amount: number
  currency: 'UAH'
  period: 'month'
  display: string
  type: 'fixed'
}

interface IndividualPricing {
  display: string
  type: 'individual'
}
```

You'll need to:
- Store service packages (can be database or static)
- Organize by category (fop, tov, additional)

### Callbacks

Wire up these user actions:

| Callback | Description |
|----------|-------------|
| `onServiceCtaClick` | Service CTA clicked → open contact form with package name pre-filled |
| `onPremiumCtaClick` | Premium offer CTA clicked → open contact form with premium package |
| `onCategoryChange` | Tab changed → update active category |

### Service Packages

**Пакети для ФОП (4 packages):**
- ФОП • ЄП 1–3 гр. • без ПДВ • без працівників — від 3 000 грн/міс
- ФОП • ЄП 3 група • з ПДВ • без працівників — від 8 000 грн/міс
- ФОП • Загальна • без ПДВ • без працівників — від 5 000 грн/міс
- ФОП • Загальна • з ПДВ • без працівників — від 10 000 грн/міс

**Пакети для ТОВ (4 packages):**
- ТОВ • ЄП 3 гр. • без ПДВ — від 8 000 грн/міс
- ТОВ • ЄП 3 гр. • з ПДВ — від 10 000 грн/міс
- ТОВ • Загальна • без ПДВ — від 8 000 грн/міс
- ТОВ • Загальна • з ПДВ — від 10 000 грн/міс

**Додаткові послуги (4 packages):**
- Модуль: Зарплатний проєкт — від 4 000 грн/міс
- Фізична особа (не ФОП) — індивідуально
- Підключення і супровід ПРРО — індивідуально
- Супровід ПРРО — індивідуально

## Files to Reference

- `product-plan/sections/services-section/README.md` — Feature overview and design intent
- `product-plan/sections/services-section/tests.md` — Test-writing instructions (use for TDD)
- `product-plan/sections/services-section/components/` — React components
- `product-plan/sections/services-section/types.ts` — TypeScript interfaces
- `product-plan/sections/services-section/sample-data.json` — Test data

## Expected User Flows

### Flow 1: Browse Services by Category

1. User scrolls to services section
2. User sees "Послуги для ФОП" tab active by default
3. User views FOP service packages in grid
4. User clicks "Послуги для ТОВ" tab
5. **Outcome:** Grid updates to show TOV service packages

### Flow 2: Request Consultation for Service

1. User views a service card (e.g., "ФОП • ЄП 1–3 гр.")
2. User reads the included services list
3. User clicks "Отримати консультацію" button on the card
4. **Outcome:** Contact modal opens with package name pre-filled

### Flow 3: View Premium Offer

1. User scrolls to premium offer section
2. User sees "Річна звітність + Аудит кабінету"
3. User reads risks and benefits
4. User clicks "Перевірити свій податковий кабінет"
5. **Outcome:** Contact modal opens with premium package pre-filled

## Done When

- [ ] Section displays with "Послуги" heading
- [ ] 3 tabs work: "Послуги для ФОП", "Послуги для ТОВ", "Додаткові послуги"
- [ ] Service cards display title, includes, pricing
- [ ] Card CTA opens contact modal with package name
- [ ] Premium offer card is highlighted separately
- [ ] Premium CTA opens contact modal
- [ ] Responsive grid (1 col mobile, 2 tablet, 3-4 desktop)
- [ ] Popular packages have visual indicator
- [ ] Matches the visual design
