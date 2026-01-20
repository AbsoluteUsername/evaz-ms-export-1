# Milestone 4: Benefits Section

> **Provide alongside:** `product-overview.md`
> **Prerequisites:** Milestones 1-3 complete

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

Implement the Benefits Section — showcasing why clients should choose EVAZ-MS by addressing 4 common pain points with corresponding benefits, plus a team photo carousel.

## Overview

The Benefits Section builds trust by directly addressing the fears and pain points that potential clients have about accounting services. It features 4 benefit cards in a 2x2 grid (desktop), each addressing a specific pain point, followed by a team photo carousel that humanizes the company and builds additional trust.

**Key Functionality:**
- 4 benefit cards addressing client pain points
- Interactive hover effects on cards
- Team photo carousel with 7 images
- Auto-scrolling carousel with manual navigation
- Differentiators section highlighting unique features
- FAQ accordion for common questions

## Recommended Approach: Test-Driven Development

Before implementing this section, **write tests first** based on the test specifications provided.

See `product-plan/sections/benefits-section/tests.md` for detailed test-writing instructions including:
- Key user flows to test (success and failure paths)
- Specific UI elements, button labels, and interactions to verify
- Expected behaviors and assertions

**TDD Workflow:**
1. Read `tests.md` and write failing tests for the key user flows
2. Implement the feature to make tests pass
3. Refactor while keeping tests green

## What to Implement

### Components

Copy the section components from `product-plan/sections/benefits-section/components/`:

- `BenefitsSection.tsx` — Main section layout
- `BenefitCard.tsx` — Individual benefit card
- `TeamCarousel.tsx` — Team photo carousel

### Data Layer

The components expect these data shapes:

```typescript
interface Problem {
  id: number
  category: string
  icon: string
  painPoints: string[]
}

interface Benefit {
  id: number
  title: string
  description: string
  icon: string
  solves: number[]  // IDs of problems this benefit addresses
}

interface Differentiator {
  id: number
  feature: string
  description: string
  icon: string
}

interface FAQ {
  id: number
  question: string
  answer: string
}
```

### Benefits Content

**Card 1: Професійний результат без штрафів і помилок**
- Pain: Страх помилок і наслідків (штрафи, пеня, арешт рахунків)
- Icon: Shield
- Points: Коректна та своєчасна звітність, Знижені ризики санкцій, Прозора картина обліку

**Card 2: Спокій і впевненість у фінансовій безпеці**
- Pain: Невпевненість, чи все зроблено правильно
- Icon: Check/Verified
- Points: Податки ведуться правильно та вчасно, Відсутні приховані ризики, Чітке розуміння ситуації

**Card 3: Свобода зосередитись на бізнесі та зростанні**
- Pain: Небажання розбиратися самостійно
- Icon: Rocket
- Points: Операційні питання під контролем, Не витрачаєте ресурс на звітність, Фокус на розвиток

**Card 4: Стабільна команда з подвійним контролем**
- Pain: Ризик зникнення приватного бухгалтера
- Icon: Users/Team
- Points: Два власники-експерти, Реальний офіс і команда, Особиста відповідальність

### Callbacks

Wire up these user actions:

| Callback | Description |
|----------|-------------|
| `onCtaClick` | CTA button clicked → open contact modal |
| `onFaqToggle` | FAQ item clicked → expand/collapse answer |

## Files to Reference

- `product-plan/sections/benefits-section/README.md` — Feature overview and design intent
- `product-plan/sections/benefits-section/tests.md` — Test-writing instructions (use for TDD)
- `product-plan/sections/benefits-section/components/` — React components
- `product-plan/sections/benefits-section/types.ts` — TypeScript interfaces
- `product-plan/sections/benefits-section/sample-data.json` — Test data

## Expected User Flows

### Flow 1: Read Benefits

1. User scrolls to benefits section
2. User sees "Чому обирають нас" heading
3. User views 4 benefit cards in grid
4. User hovers over a card
5. **Outcome:** Card shows interactive hover effect (lift, glow)

### Flow 2: View Team Carousel

1. User scrolls past benefit cards
2. User sees team photo carousel
3. Carousel auto-plays through 7 photos
4. User clicks navigation arrow
5. **Outcome:** Carousel moves to next/prev photo

### Flow 3: Read FAQs

1. User scrolls to FAQ section
2. User clicks on a question
3. **Outcome:** Answer expands with animation
4. User clicks on another question
5. **Outcome:** Previous closes, new one opens

## Done When

- [ ] Section displays with "Чому обирають нас" heading
- [ ] 4 benefit cards display with icons and content
- [ ] Cards have hover effects (lift, glow)
- [ ] Team carousel displays 7 photos
- [ ] Carousel auto-plays and has navigation
- [ ] Differentiators section shows 6 unique features
- [ ] FAQ accordion works (expand/collapse)
- [ ] CTA button opens contact modal
- [ ] Responsive: 2x2 grid on desktop, stacked on mobile
- [ ] Matches the visual design
