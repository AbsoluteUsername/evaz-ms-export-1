# Contact Section

## Overview

The Contact Section is the primary conversion point for the EVAZ-MS landing page. It provides multiple ways for potential clients to reach the company — a contact form for consultation requests, direct phone call, and messenger apps (Telegram, Viber).

## User Flows

1. **Submit Consultation Request**
   - User fills form (name, phone, client type, optional message)
   - User clicks submit
   - Form validates and sends to backend
   - Success message appears
   - Email + Telegram notifications sent

2. **Call Directly**
   - User sees phone number prominently displayed
   - User clicks to call (tel: link)
   - Phone app opens with number pre-filled

3. **Message via Messenger**
   - User clicks Telegram or Viber button
   - Messenger app opens with EVAZ-MS contact

## Design Decisions

- **Two-column layout** (desktop): Form on left, contact info on right
- **Stacked layout** (mobile): Contact info on top, form below
- **Form validation**: Inline error messages, Ukrainian phone format
- **Success/error states**: Full-card states with illustrations
- **Dark contact info card**: Creates visual contrast with light form

## Data Used

**Entities:**
- `FormConfig` — Form structure and messages
- `FormField` — Individual field definitions
- `ContactInfo` — Phone, email, messengers, hours
- `ContactFormData` — Submitted data structure

## Components Provided

- `ContactSection.tsx` — Main section layout
- `ContactForm.tsx` — Form with validation and states
- `ContactInfoCard.tsx` — Contact info display

## Callback Props

| Callback | Description |
|----------|-------------|
| `onFormSubmit` | Called with form data when submitted successfully |
| `onPhoneClick` | Called when phone link is clicked (for analytics) |
| `onMessengerClick` | Called with messenger ID when clicked |

## Form Fields

| Field | Type | Required | Validation |
|-------|------|----------|------------|
| name | text | Yes | Min 2 characters |
| phone | tel | Yes | Ukrainian format +380XXXXXXXXX |
| clientType | select | Yes | ФОП, ТОВ, Фізична особа |
| comment | textarea | No | Max 500 characters |
| packageName | hidden | Yes | Auto-populated from CTA context |

## Backend Requirements

1. **Form submission endpoint**
   - Validate all fields server-side
   - Store submission in database
   - Return success/error response

2. **Email notification**
   - Send to: ehwazms@gmail.com
   - Subject: "Нова заявка з сайту EVAZ-MS - {packageName}"

3. **Telegram notification**
   - Send to: +380970094566
   - Format with emojis per template
