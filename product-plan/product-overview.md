# EVAZ-MS Landing Page — Product Overview

## Summary

A conversion-focused landing page for EVAZ-MS, a Ukrainian accounting and consulting firm that helps FOPs, small TOVs, and individuals navigate complex tax and bookkeeping requirements with confidence. The page transforms website visitors into consultation requests by showcasing how EVAZ-MS makes accounting simple, safe, and stress-free.

### Problems Solved

1. **Fear of Tax Penalties & Fines** — Professional oversight and proactive deadline monitoring ensures clients never miss a filing or payment
2. **Complexity & Confusion** — Expert accountants translate constantly-changing Ukrainian tax law into clear guidance
3. **Time Drain** — Full-service accounting packages free up entrepreneurs to focus on running their business
4. **Finding Trustworthy Help** — Real office, dedicated team, personal attention, and owner accountability

### Key Features

- Contact form system with modal dialog, validation, and dual delivery (email + Telegram)
- Dynamic service cards displaying all 13 service packages with package-specific CTAs
- Responsive design system (mobile-first: 320px → 1440px+)
- Navigation with smooth scroll and mobile hamburger menu
- Scroll animations and micro-interactions
- Performance optimizations (lazy loading, WebP images)
- Accessibility compliance (keyboard navigation, ARIA labels)
- Contact information display with click-to-call and messenger links

## Planned Sections

1. **Foundation** — Navigation shell, header, footer, responsive layout, and global components (modal, toast notifications)
2. **Hero Section** — First impression with headline, value proposition, and primary CTA button
3. **Services Section** — Dynamic grid displaying all 13 service packages with pricing and consultation CTAs
4. **Benefits Section** — Why choose EVAZ-MS - addresses the 4 pain points with trust signals (real office, team, accountability)
5. **Contact Section** — Contact form modal, phone number, Telegram/Viber links, and office information

## Data Model

### Entities

- **Company** — Core brand identity including company name, tagline, founding year, legal status
- **Contact** — All contact information including phone, email, and social media links
- **NavigationItem** — Main navigation menu items for the header
- **ServicePackage** — Individual service package with title, target audience, pricing, included services
- **ServiceCategory** — Grouping for service packages (FOP, TOV, Additional)
- **PremiumOffer** — Special seasonal premium offer with enhanced features
- **Audience** — Target client profile (FOP/TOV/Individual)
- **Problem** — Pain points that target clients experience
- **Benefit** — Positive outcomes clients receive
- **Differentiator** — Unique features that set EVAZ-MS apart
- **FormConfig** — Contact form configuration with fields and validation
- **ContactFormData** — Submitted form data structure

## Design System

**Colors:**
- Primary: `teal` — Used for buttons, links, key accents
- Secondary: `cream` — Used for backgrounds, highlights
- Neutral: `stone` — Used for text, borders, backgrounds

**Typography:**
- Heading: `Playfair Display` — Elegant serif for headings
- Body: `Montserrat` — Clean sans-serif for body text
- Mono: `IBM Plex Mono` — Technical/code text

## Implementation Sequence

Build this product in milestones:

1. **Foundation** — Set up design tokens, data model types, routing structure, and application shell (header, footer, navigation)
2. **Hero Section** — Full-viewport hero with team photo, headline, and CTA
3. **Services Section** — Tabbed display of 12 service packages with pricing
4. **Benefits Section** — 4 benefit cards addressing pain points + team carousel
5. **Contact Section** — Contact form + contact info display

Each milestone has a dedicated instruction document in `product-plan/instructions/`.
