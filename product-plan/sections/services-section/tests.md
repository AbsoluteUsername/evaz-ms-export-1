# Test Instructions: Services Section

These test-writing instructions are **framework-agnostic**.

## Overview

Test the tabbed display, service cards, and CTA interactions.

---

## User Flow Tests

### Flow 1: Switch Categories

**Steps:**
1. User sees "Послуги для ФОП" tab active by default
2. User clicks "Послуги для ТОВ" tab

**Expected Results:**
- [ ] `onCategoryChange` called with "tov"
- [ ] Grid updates to show TOV packages
- [ ] Tab styling updates to show active state

### Flow 2: Request Service Consultation

**Steps:**
1. User views service card
2. User clicks "Отримати консультацію" on card

**Expected Results:**
- [ ] `onServiceCtaClick` called with (packageId, packageTitle)
- [ ] Contact modal opens with package name pre-filled

### Flow 3: View Premium Offer

**Steps:**
1. User scrolls to premium offer section
2. User clicks "Перевірити свій податковий кабінет"

**Expected Results:**
- [ ] `onPremiumCtaClick` called
- [ ] Contact modal opens with premium package

---

## Component Tests

**ServicesSection renders:**
- [ ] Section heading "Послуги" visible
- [ ] 3 tabs visible
- [ ] Default tab "Послуги для ФОП" is active
- [ ] Service cards display in grid
- [ ] Premium offer card is highlighted

**ServiceCard renders:**
- [ ] Package title visible
- [ ] Target audience visible
- [ ] Included services list visible
- [ ] Price displayed (or "індивідуально")
- [ ] CTA button visible

**Responsive:**
- [ ] 1 column on mobile
- [ ] 2 columns on tablet
- [ ] 3-4 columns on desktop

---

## Sample Test Data

```typescript
const mockFopServices = [
  {
    id: "fop-ep-1-3-no-vat",
    title: "ФОП • ЄП 1–3 гр. • без ПДВ",
    pricing: { amount: 3000, display: "від 3 000 грн/міс", type: "fixed" },
    includes: ["Ведення обліку", "Подання звітності"],
    popular: true
  }
]
```
