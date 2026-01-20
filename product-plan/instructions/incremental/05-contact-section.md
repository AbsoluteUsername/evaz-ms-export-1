# Milestone 5: Contact Section

> **Provide alongside:** `product-overview.md`
> **Prerequisites:** Milestones 1-4 complete

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

Implement the Contact Section — the primary conversion point with a contact form, phone number, messenger links, and office information.

## Overview

The Contact Section is where website visitors convert into leads. It provides multiple ways to reach EVAZ-MS: a contact form for consultation requests, direct phone call, and messenger apps (Telegram, Viber). The form includes validation and dual delivery (email + Telegram notification).

**Key Functionality:**
- Contact form with name, phone, client type, and optional message
- Form validation with inline error messages
- Success/error states after submission
- Click-to-call phone number
- Telegram and Viber messenger buttons
- Working hours display
- Dual notification on submit (email + Telegram)

## Recommended Approach: Test-Driven Development

Before implementing this section, **write tests first** based on the test specifications provided.

See `product-plan/sections/contact-section/tests.md` for detailed test-writing instructions including:
- Key user flows to test (success and failure paths)
- Specific UI elements, button labels, and interactions to verify
- Expected behaviors and assertions

**TDD Workflow:**
1. Read `tests.md` and write failing tests for the key user flows
2. Implement the feature to make tests pass
3. Refactor while keeping tests green

## What to Implement

### Components

Copy the section components from `product-plan/sections/contact-section/components/`:

- `ContactSection.tsx` — Main section layout (two-column)
- `ContactForm.tsx` — Form with validation and states
- `ContactInfoCard.tsx` — Contact info display

### Data Layer

The components expect these data shapes:

```typescript
interface FormConfig {
  title: string
  subtitle: string
  fields: FormField[]
  submitButton: { text: string; loadingText: string }
  messages: { success: string; error: string }
}

interface FormField {
  name: string
  type: 'text' | 'tel' | 'select' | 'textarea' | 'hidden'
  label?: string
  placeholder?: string
  required: boolean
  validation?: { pattern?: string; errorMessage: string }
}

interface ContactFormData {
  name: string
  phone: string
  clientType: 'ФОП' | 'ТОВ' | 'Фізична особа'
  comment: string | null
  packageName: string
  timestamp: string
  source: 'landing_page'
}

interface ContactInfo {
  phone: { display: string; href: string }
  email: { primary: string; href: string }
  messengers: Messenger[]
  workingHours: { days: string; hours: string }
}
```

### Form Fields

1. **Ім'я** (required) — Text input, min 2 characters
2. **Телефон** (required) — Tel input, Ukrainian format +380XXXXXXXXX
3. **Тип клієнта** (required) — Select: ФОП, ТОВ, Фізична особа
4. **Коментар** (optional) — Textarea, max 500 chars
5. **packageName** (hidden) — Auto-populated from CTA context

### Backend Requirements

You need to implement:

1. **Form submission endpoint**
   - Validate all fields server-side
   - Store the submission in database
   - Send email notification to ehwazms@gmail.com
   - Send Telegram notification to +380970094566
   - Return success/error response

2. **Email notification**
   - Subject: "Нова заявка з сайту EVAZ-MS - {packageName}"
   - Body: Formatted with all form fields

3. **Telegram notification**
   - Message format with emojis
   - All form fields included

### Callbacks

Wire up these user actions:

| Callback | Description |
|----------|-------------|
| `onFormSubmit` | Form submitted → send to backend, show success/error |
| `onPhoneClick` | Phone clicked → track analytics event |
| `onMessengerClick` | Messenger clicked → track analytics, open app |

## Files to Reference

- `product-plan/sections/contact-section/README.md` — Feature overview and design intent
- `product-plan/sections/contact-section/tests.md` — Test-writing instructions (use for TDD)
- `product-plan/sections/contact-section/components/` — React components
- `product-plan/sections/contact-section/types.ts` — TypeScript interfaces
- `product-plan/sections/contact-section/sample-data.json` — Test data

## Expected User Flows

### Flow 1: Submit Contact Form

1. User scrolls to contact section
2. User fills in name "Олександр"
3. User enters phone "+380971234567"
4. User selects client type "ФОП"
5. User optionally adds a comment
6. User clicks "Надіслати заявку"
7. **Outcome:** Success message appears, form data sent via email + Telegram

### Flow 2: Form Validation Error

1. User clicks submit without filling required fields
2. **Outcome:** Inline error messages appear below each invalid field
3. User fills in the required fields
4. User clicks submit again
5. **Outcome:** Form submits successfully

### Flow 3: Call Directly

1. User views contact info card
2. User clicks phone number
3. **Outcome:** Phone app opens with number pre-filled

### Flow 4: Message via Telegram

1. User views contact info card
2. User clicks Telegram button
3. **Outcome:** Telegram app opens with EVAZ-MS contact

## Done When

- [ ] Contact section displays with form and info card
- [ ] Form validates all required fields
- [ ] Phone validation accepts Ukrainian format
- [ ] Error messages appear inline below invalid fields
- [ ] Form submits to backend successfully
- [ ] Success state shows confirmation message
- [ ] Error state shows error message with retry option
- [ ] Phone number is click-to-call
- [ ] Telegram and Viber buttons work
- [ ] Working hours display correctly
- [ ] Email notification sends on form submit
- [ ] Telegram notification sends on form submit
- [ ] Two-column desktop, stacked mobile layout
- [ ] Matches the visual design
