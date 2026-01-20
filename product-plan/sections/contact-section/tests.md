# Test Instructions: Contact Section

These test-writing instructions are **framework-agnostic**. Adapt them to your testing setup (Jest, Vitest, Playwright, Cypress, React Testing Library, RSpec, Minitest, PHPUnit, etc.).

## Overview

The Contact Section is the primary conversion point. Test the form submission flow, validation, success/error states, and contact links thoroughly.

---

## User Flow Tests

### Flow 1: Submit Contact Form Successfully

**Scenario:** User fills out the form and submits successfully

#### Success Path

**Setup:**
- Render ContactForm with valid formConfig
- Mock API to return success

**Steps:**
1. User sees form with title "Отримати консультацію"
2. User enters name "Олександр" in the "Ім'я" field
3. User enters phone "+380971234567" in the "Телефон" field
4. User selects "ФОП" from "Тип клієнта" dropdown
5. User optionally enters "Потрібна консультація" in "Коментар / питання"
6. User clicks "Надіслати заявку" button

**Expected Results:**
- [ ] Button shows "Надсилаємо..." during submission
- [ ] Success state appears after submission
- [ ] Success message: "Дякуємо! Ми отримали Вашу заявку і зв'яжемось з вами найближчим часом."
- [ ] `onSubmit` callback called with form data
- [ ] Form data includes correct `packageName`, `timestamp`, `source`

#### Failure Path: Server Error

**Setup:**
- Mock API to return 500 error

**Steps:**
1. User fills all required fields correctly
2. User clicks submit

**Expected Results:**
- [ ] Error state appears
- [ ] Error message: "Виникла помилка. Будь ласка, спробуйте ще раз або зателефонуйте нам за номером +380970094566"
- [ ] "Спробувати знову" button is visible
- [ ] Clicking retry button returns to form state

---

### Flow 2: Form Validation Errors

**Scenario:** User tries to submit with invalid data

#### Empty Required Fields

**Setup:**
- Render ContactForm

**Steps:**
1. User clicks "Надіслати заявку" without filling any fields

**Expected Results:**
- [ ] Form is NOT submitted
- [ ] Error message "Будь ласка, введіть ваше ім'я" appears below name field
- [ ] Error message "Будь ласка, введіть коректний номер телефону" appears below phone
- [ ] Error message "Будь ласка, оберіть тип клієнта" appears below select
- [ ] Fields show red border styling

#### Invalid Phone Format

**Setup:**
- Render ContactForm

**Steps:**
1. User enters name "Олександр"
2. User enters phone "12345" (invalid format)
3. User selects client type
4. User clicks submit

**Expected Results:**
- [ ] Form is NOT submitted
- [ ] Error message "Будь ласка, введіть коректний номер телефону" appears
- [ ] Only phone field shows error, other fields are valid

#### Name Too Short

**Steps:**
1. User enters name "О" (1 character)
2. User clicks submit

**Expected Results:**
- [ ] Error message "Будь ласка, введіть ваше ім'я" appears
- [ ] minLength validation of 2 characters enforced

---

### Flow 3: Clear Validation Errors

**Scenario:** User fixes validation errors

**Steps:**
1. User submits empty form (errors appear)
2. User starts typing in name field

**Expected Results:**
- [ ] Error message for name field disappears when user starts typing
- [ ] Other field errors remain until those fields are edited

---

### Flow 4: Click-to-Call Phone

**Scenario:** User clicks phone number to call

**Setup:**
- Render ContactInfoCard with valid contactInfo

**Steps:**
1. User sees phone "+380 97 009 45 66" displayed
2. User clicks on the phone number

**Expected Results:**
- [ ] `onPhoneClick` callback is called
- [ ] Link has href="tel:+380970094566"

---

### Flow 5: Open Messenger

**Scenario:** User clicks Telegram or Viber button

**Steps:**
1. User sees Telegram and Viber buttons
2. User clicks Telegram button

**Expected Results:**
- [ ] `onMessengerClick` callback called with "telegram"
- [ ] Link opens in new tab (target="_blank")

---

## Component Interaction Tests

### ContactForm

**Renders correctly:**
- [ ] Title "Отримати консультацію" is visible
- [ ] Subtitle text is visible
- [ ] All form fields render with correct labels
- [ ] Required fields show asterisk (*)
- [ ] Submit button shows "Надіслати заявку"

**Form states:**
- [ ] Default state: Form is visible
- [ ] Submitting state: Button shows "Надсилаємо..." with loader
- [ ] Success state: Success message with green background
- [ ] Error state: Error message with red background and retry button

**Phone input:**
- [ ] Placeholder shows "+380 __ ___ ____"
- [ ] Validates Ukrainian phone format

**Select input:**
- [ ] Shows options: ФОП, ТОВ, Фізична особа
- [ ] Placeholder: "Оберіть тип клієнта"

**Textarea:**
- [ ] Placeholder: "Ваше питання або коментар (необов'язково)"
- [ ] Not required (no asterisk)
- [ ] Max 500 characters enforced

### ContactInfoCard

**Renders correctly:**
- [ ] Phone number displayed: "+380 97 009 45 66"
- [ ] Email displayed: "ehwazms@gmail.com"
- [ ] Working hours: "Пн-Пт: 9:00 - 18:00"
- [ ] Telegram button visible
- [ ] Viber button visible

**Links:**
- [ ] Phone link has correct tel: href
- [ ] Email link has correct mailto: href
- [ ] Messenger buttons open in new tabs

---

## Empty State Tests

### Form with Pre-filled Package

**Scenario:** Form opened from service card with package name

**Setup:**
- Render ContactForm with `packageName="ФОП • ЄП 1–3 гр."`

**Expected Results:**
- [ ] packageName is included in form submission data
- [ ] Hidden field contains the package name

---

## Edge Cases

- [ ] Very long name (100+ chars) — should accept
- [ ] Phone with spaces "+380 97 123 4567" — should validate after normalization
- [ ] Comment at max length (500 chars) — should accept
- [ ] Comment over max length — should truncate or reject
- [ ] Form re-submission after error — should work correctly
- [ ] Rapid double-click on submit — should only submit once

---

## Accessibility Checks

- [ ] All form fields have associated labels
- [ ] Error messages are linked to fields with aria-describedby
- [ ] Submit button has accessible name
- [ ] Focus moves to first invalid field on validation error
- [ ] Success/error states are announced to screen readers
- [ ] Phone and email links are keyboard accessible

---

## Sample Test Data

```typescript
// Valid form submission
const validFormData = {
  name: "Олександр Петренко",
  phone: "+380971234567",
  clientType: "ФОП",
  comment: "Потрібна консультація щодо податкової звітності",
  packageName: "Загальна консультація",
}

// Form config
const mockFormConfig = {
  title: "Отримати консультацію",
  subtitle: "Ми зв'яжемось з Вами...",
  fields: [
    { name: "name", type: "text", label: "Ім'я", required: true },
    { name: "phone", type: "tel", label: "Телефон", required: true },
    { name: "clientType", type: "select", label: "Тип клієнта", required: true },
    { name: "comment", type: "textarea", label: "Коментар", required: false },
  ],
  submitButton: { text: "Надіслати заявку", loadingText: "Надсилаємо..." },
  messages: {
    success: "Дякуємо! Ми отримали Вашу заявку...",
    error: "Виникла помилка..."
  }
}

// Contact info
const mockContactInfo = {
  phone: { display: "+380 97 009 45 66", href: "tel:+380970094566" },
  email: { primary: "ehwazms@gmail.com", href: "mailto:ehwazms@gmail.com" },
  workingHours: { days: "Пн-Пт", hours: "9:00 - 18:00" },
  messengers: [
    { id: "telegram", name: "Telegram", url: "#", active: true },
    { id: "viber", name: "Viber", url: "#", active: true }
  ]
}
```

---

## Notes for Test Implementation

- Mock the form submission API to test success/error paths
- Test both controlled and uncontrolled input behaviors
- Verify the exact Ukrainian text in error messages
- Test form reset after successful submission
- Ensure loading state disables the submit button
