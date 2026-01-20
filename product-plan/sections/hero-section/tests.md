# Test Instructions: Hero Section

These test-writing instructions are **framework-agnostic**.

## Overview

Test the hero section display and CTA interactions.

---

## User Flow Tests

### Flow 1: View Hero and Click Primary CTA

**Steps:**
1. User lands on page
2. User sees headline "Ми робимо складне простим"
3. User clicks "Обрати пакет послуг" button

**Expected Results:**
- [ ] `onCtaClick` callback is called
- [ ] Page scrolls to #services section

### Flow 2: Click Secondary CTA

**Steps:**
1. User clicks "Отримати консультацію" button

**Expected Results:**
- [ ] `onSecondaryCtaClick` callback is called
- [ ] Contact modal opens

### Flow 3: Click Audience Card

**Steps:**
1. User views audience cards
2. User clicks "ФОП" card

**Expected Results:**
- [ ] `onAudienceClick` called with "fop"
- [ ] Page scrolls to relevant services

---

## Component Tests

**Renders correctly:**
- [ ] Headline "Ми робимо складне простим" is visible
- [ ] Subheadline is visible
- [ ] Description text is visible
- [ ] Primary CTA button is visible
- [ ] Secondary CTA button is visible
- [ ] Three audience cards visible (ФОП, Фізична особа, ТОВ)

**Responsive:**
- [ ] Full viewport height (100vh minus header)
- [ ] CTAs stack on mobile
- [ ] Audience cards stack on mobile

---

## Sample Test Data

```typescript
const mockHero = {
  headline: "Ми робимо складне простим",
  subheadline: "Від щоденного супроводу...",
  description: "Обирайте формат...",
  cta: { text: "Обрати пакет послуг", action: "scroll-to-services" },
  secondaryCta: { text: "Отримати консультацію", action: "open-modal" }
}

const mockAudiences = [
  { id: "fop", type: "ФОП", title: "Фізична особа — підприємець" },
  { id: "individual", type: "Фізична особа", title: "Фізична особа (не ФОП)" },
  { id: "tov", type: "ТОВ", title: "Власник малого бізнесу" }
]
```
