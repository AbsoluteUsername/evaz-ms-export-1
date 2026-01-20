# Services Section

## Overview

Tabbed display of all 12 service packages organized into 3 categories. Each service shows package name, included services, pricing, and CTA button.

## User Flows

1. **Browse Categories** → User clicks tabs → switches between ФОП, ТОВ, Додаткові
2. **View Package** → User sees service cards with details and pricing
3. **Request Consultation** → User clicks CTA → contact modal opens with package pre-filled

## Categories

1. **Послуги для ФОП** — 4 packages (від 3,000-10,000 грн/міс)
2. **Послуги для ТОВ** — 4 packages (від 8,000-10,000 грн/міс)
3. **Додаткові послуги** — 4 packages (fixed or individual pricing)

## Components Provided

- `ServicesSection.tsx` — Main section with tabs and grid
- `ServiceCard.tsx` — Individual service package card

## Callback Props

| Callback | Description |
|----------|-------------|
| `onServiceCtaClick` | Service CTA clicked with (packageId, packageTitle) |
| `onPremiumCtaClick` | Premium offer CTA clicked |
| `onCategoryChange` | Tab changed with (categoryId) |
