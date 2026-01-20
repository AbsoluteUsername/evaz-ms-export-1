# Application Shell

## Overview

The application shell provides the navigation structure for the EVAZ-MS landing page:
- Sticky header with logo, navigation, and CTA
- Mobile hamburger menu
- Footer with contact info and social links

## Components

### AppShell.tsx
Main layout wrapper that combines Header, MobileMenu, content, and Footer.

**Props:**
- `children` — Page content
- `company` — Company data for branding
- `contact` — Contact information
- `navigation` — Navigation menu items
- `footer` — Footer content
- `onCtaClick` — CTA button callback
- `onSocialClick` — Social link callback

### Header.tsx
Sticky header component with:
- Logo (linked to top of page)
- Desktop navigation links
- CTA button "Отримати консультацію"
- Mobile hamburger button
- Shadow on scroll

**Props:**
- `company` — Company data for logo
- `contact` — Contact info (not displayed in header)
- `navigation` — Navigation items
- `onCtaClick` — CTA button callback
- `onMenuToggle` — Mobile menu toggle callback

### MobileMenu.tsx
Slide-out mobile menu with:
- Logo and close button
- Navigation links
- CTA button
- Contact info at bottom

**Props:**
- `isOpen` — Whether menu is open
- `onClose` — Close callback
- `company` — Company data
- `contact` — Contact info
- `navigation` — Navigation items
- `onCtaClick` — CTA callback

### Footer.tsx
Footer component with:
- Logo and tagline
- Contact info (phone, email, location)
- Social media links
- Navigation links
- Copyright

**Props:**
- `company` — Company data
- `contact` — Contact info
- `navigation` — Navigation items
- `footer` — Footer-specific content
- `onSocialClick` — Social link callback

## Navigation Items

| ID | Label | Href | Type |
|----|-------|------|------|
| services | Послуги | #services | anchor |
| about | Про нас | #about | anchor |
| contact | Контакти | #contact | anchor |

## Wire Up

1. **Navigation clicks** should smooth scroll to the target section
2. **CTA button** should scroll to #contact section
3. **Mobile menu** should close when a nav link is clicked
4. **Header** should gain shadow when page is scrolled

## Logo Assets

The components reference logo images. You'll need to:
1. Place logo images in your assets folder
2. Update the import paths in Header.tsx and Footer.tsx

Logo files needed:
- `logo green .png` — Header logo
- `logo green back.png` — Footer logo (on dark background)
