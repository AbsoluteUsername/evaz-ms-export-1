# Clients Section

## Overview

Section showcasing trusted clients and company statistics to build trust with potential customers. Features a vertical split layout with client carousel on the left and animated statistics on the right.

## Purpose

- **Trust Building:** Show real clients with names, logos, and partnership duration
- **Social Proof:** Demonstrate experience through impressive statistics
- **Credibility:** Highlight diversity of industries served

## User Flows

1. **Browse Clients** → User clicks arrows or dots → slider navigates
2. **View Statistics** → User scrolls into view → numbers animate up
3. **Interact with Card** → User hovers → logo colorizes, card lifts

## Layout

### Desktop (≥1024px)
- Two-column split (50% / 50%)
- Left: Client slider with navigation
- Right: 2×2 statistics grid

### Mobile (<768px)
- Single column, stacked
- Stats grid on top
- Client slider below
- Touch swipe enabled

## Client Card Content

| Element | Description |
|---------|-------------|
| Industry Icon | Lucide icon representing business category |
| Industry Label | Category name (Торгівля, Медицина, etc.) |
| Logo/Image | Client visual (grayscale → color on hover) |
| Client Name | Business name (Playfair Display) |
| Activity | Type of business activity |
| Year Badge | "Співпраця з 2011" style badge |

## Statistics Content

| Stat | Value | Description |
|------|-------|-------------|
| 68+ | клієнтів за весь час | Total historical clients |
| 14 | років на ринку | Years in business (since 2011) |
| 7 | галузей бізнесу | Industries served |
| 7+ | активних клієнтів | Current active clients |

## Components Provided

- `ClientsSection.tsx` — Main section layout
- `ClientSlider.tsx` — Carousel with navigation
- `ClientCard.tsx` — Individual client card
- `StatCard.tsx` — Animated statistic card
- `StatsGrid.tsx` — 2×2 grid wrapper

## Callback Props

| Callback | Description |
|----------|-------------|
| `onSliderPrev` | Navigate to previous client |
| `onSliderNext` | Navigate to next client |
| `onDotClick` | Jump to specific client by index |
| `onClientClick` | Client card clicked (open website) |

## Design Decisions

- **Unified card design:** Same structure regardless of logo quality
- **Grayscale logos:** Creates visual consistency, reveals brand colors on hover
- **Animated counters:** Adds engagement and draws attention to impressive numbers
- **Year badge:** Emphasizes long-term partnerships (some since 2011)
- **Industry icons:** Quick visual category identification

## Image Handling

| Logo Type | Treatment |
|-----------|-----------|
| Clean logo | Display in grayscale, hover reveals color |
| Photo | Crop square, add teal overlay |
| No logo | Show large industry icon instead |

## Accessibility

- Arrow buttons have aria-labels
- Dot indicators show current position
- Cards are keyboard navigable
- Sufficient color contrast in all states
