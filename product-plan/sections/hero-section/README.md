# Hero Section

## Overview

Full-viewport hero section featuring the main headline "Ми робимо складне простим" and value proposition. The first impression visitors get when landing on the EVAZ-MS website.

## User Flows

1. **View Hero** → User lands on page → sees headline, description, CTAs
2. **Explore Services** → User clicks "Обрати пакет послуг" → scrolls to services
3. **Request Consultation** → User clicks "Отримати консультацію" → opens contact modal
4. **Self-Identify** → User clicks audience card → scrolls to relevant services

## Components Provided

- `HeroSection.tsx` — Main hero section with headline, CTAs, audience cards

## Callback Props

| Callback | Description |
|----------|-------------|
| `onCtaClick` | Primary CTA clicked → scroll to services |
| `onSecondaryCtaClick` | Secondary CTA clicked → open contact modal |
| `onAudienceClick` | Audience card clicked → scroll to relevant services |

## Key Content

- **Headline:** "Ми робимо складне простим"
- **Subheadline:** "Від щоденного супроводу ФОП та ТОВ до аудиту фізичних осіб та річної звітності"
- **Primary CTA:** "Обрати пакет послуг"
- **Secondary CTA:** "Отримати консультацію"
- **Audiences:** ФОП, Фізична особа, ТОВ
