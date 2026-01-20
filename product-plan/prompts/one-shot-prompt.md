# One-Shot Implementation Prompt

I need you to implement a complete web application based on detailed design specifications and UI components I'm providing.

## Instructions

Please carefully read and analyze the following files:

1. **@product-plan/product-overview.md** — Product summary with sections and data model overview
2. **@product-plan/instructions/one-shot-instructions.md** — Complete implementation instructions for all milestones

After reading these, also review:
- **@product-plan/design-system/** — Color and typography tokens
- **@product-plan/data-model/** — Entity types and relationships
- **@product-plan/shell/** — Application shell components
- **@product-plan/sections/** — All section components, types, sample data, and test instructions

## Before You Begin

Please ask me clarifying questions about:

1. **Authentication & Authorization**
   - This is a public landing page — no user authentication needed
   - Form submissions should be stored and sent via email + Telegram

2. **Tech Stack Preferences**
   - What frontend framework should I use? (React is assumed from the components)
   - What backend framework/language do you prefer?
   - What database do you prefer for form submissions?
   - Any specific hosting/deployment requirements?

3. **Backend Business Logic**
   - How should form submissions be stored?
   - Email sending service preference (SendGrid, Resend, etc.)?
   - Telegram bot integration approach?

4. **Content Management**
   - Should service packages be editable via CMS?
   - Or is static content acceptable?

5. **Any Other Clarifications**
   - Questions about specific features or user flows
   - Analytics and tracking requirements
   - SEO requirements

Lastly, be sure to ask me if I have any other notes to add for this implementation.

Once I answer your questions, create a comprehensive implementation plan before coding.

## Key Points

- This is a **single-page landing page** with anchor navigation
- Primary goal is **lead generation** via the contact form
- All UI components are **pre-built** — focus on backend and integration
- Form submissions need **dual delivery**: email + Telegram notification
- The site is in **Ukrainian** — preserve all text as-is
