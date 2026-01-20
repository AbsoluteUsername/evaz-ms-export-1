# Test Instructions: Benefits Section

These test-writing instructions are **framework-agnostic**.

## Overview

Test the benefit cards display, carousel interaction, and FAQ accordion.

---

## User Flow Tests

### Flow 1: View Benefits

**Steps:**
1. User scrolls to benefits section
2. User sees 4 benefit cards

**Expected Results:**
- [ ] Section heading "Чому обирають нас" visible
- [ ] 4 benefit cards display with icons
- [ ] Each card has title, description, bullet points

### Flow 2: Interact with Carousel

**Steps:**
1. User views team carousel
2. User clicks navigation arrow

**Expected Results:**
- [ ] Carousel moves to next/prev photo
- [ ] Auto-play continues after manual navigation

### Flow 3: FAQ Accordion

**Steps:**
1. User clicks FAQ question
2. User clicks another question

**Expected Results:**
- [ ] `onFaqToggle` called with question id
- [ ] Answer expands with animation
- [ ] Previous answer collapses

---

## Component Tests

**BenefitsSection renders:**
- [ ] 4 benefit cards visible
- [ ] Team carousel with 7 photos
- [ ] Differentiators section
- [ ] FAQ section

**BenefitCard renders:**
- [ ] Icon displayed
- [ ] Title visible
- [ ] Description visible
- [ ] Bullet points visible

**TeamCarousel:**
- [ ] 7 team photos load
- [ ] Navigation arrows work
- [ ] Auto-play functions

**Responsive:**
- [ ] 2x2 grid on desktop
- [ ] Stacked on mobile

---

## Sample Test Data

```typescript
const mockBenefits = [
  {
    id: 1,
    title: "Професійний результат без штрафів",
    description: "Коректна та своєчасна звітність...",
    icon: "shield-check",
    solves: [1]
  }
]

const mockFaq = [
  {
    id: 1,
    question: "Як швидко ви можете почати роботу?",
    answer: "Ми можемо розпочати протягом 1-3 днів..."
  }
]
```
