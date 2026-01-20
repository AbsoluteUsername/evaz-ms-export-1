# Data Model

## Overview

The EVAZ-MS landing page uses the following data entities. All types are defined in `types.ts`.

## Core Entities

### Company
Core brand identity including company name, tagline, founding year, legal status, and company story narrative.

### Contact
All contact information including phone numbers (display/raw/href formats), email addresses, and social media platform links.

### NavigationItem
Main navigation menu items for the header with id, label, href, and type (anchor or link).

## Service Entities

### ServicePackage
Individual service package offering with:
- `id` — Unique identifier
- `title` — Package name
- `targetAudience` — Description of who this is for
- `pricing` — FixedPricing or IndividualPricing
- `includes` — List of included services
- `priority` — Whether to highlight
- `popular` — Whether to show "popular" badge

### ServiceCategory
Grouping for service packages (FOP, TOV, Additional) with id, title, and description.

### PremiumOffer
Special seasonal premium offer with badge, headline, target audience segments, included services, risk warnings, and CTA.

## Marketing Entities

### Audience
Target client profile describing who the service is for (FOP/TOV/Individual).

### Problem
Pain points that target clients experience, grouped by category.

### Benefit
Positive outcomes clients receive, with reference to which problems it solves.

### Differentiator
Unique features that set EVAZ-MS apart from competitors.

### FAQ
Frequently asked questions with answers.

### Testimonial
Client testimonials with client name, type, industry, and highlight quote.

## Form Entities

### FormConfig
Complete contact form configuration including title, subtitle, fields, submit button, and messages.

### FormField
Individual form field with type, label, placeholder, validation rules.

### ContactFormData
Submitted form data structure with name, phone, client type, comment, package name, timestamp.

### EmailNotification
Email notification template for form submissions.

### TelegramNotification
Telegram notification configuration for form submissions.

## Relationships

```
Company ─────► Header, Footer

Contact ─────► Header, Footer, ContactSection

NavigationItem ─────► Header, Footer, MobileMenu

ServicePackage ─────► ServiceCard
      │
      └─────► ServiceCategory (grouped by)

PremiumOffer ─────► ServicesSection (featured)

Audience ─────► HeroSection (cards)

Problem ◄────► Benefit (solves)

FormConfig ─────► ContactForm
      │
      └─────► FormField[]

ContactFormData ─────► EmailNotification
                 └────► TelegramNotification
```
