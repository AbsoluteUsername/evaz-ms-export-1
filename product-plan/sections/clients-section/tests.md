# Test Instructions: Clients Section

These test-writing instructions are **framework-agnostic**. Adapt to your testing setup (Jest, Vitest, React Testing Library, Playwright, etc.).

## Overview

Test the client slider navigation, statistics animation, and responsive layout behavior.

---

## User Flow Tests

### Flow 1: Browse Clients via Slider

**Steps:**
1. User scrolls to clients section
2. User sees the first client card
3. User clicks right arrow (►)

**Expected Results:**
- [ ] Section heading "Нам довіряють" is visible
- [ ] First client (Капля) is displayed initially
- [ ] Clicking right arrow shows next client (Victori)
- [ ] `onSliderNext` callback is called
- [ ] Dot indicators update to show new position

**Test Code Outline:**
```typescript
test('slider navigates to next client on arrow click', async () => {
  render(<ClientsSection content={mockContent} />)
  
  // Verify initial state
  expect(screen.getByText('Капля')).toBeVisible()
  
  // Click next arrow
  await userEvent.click(screen.getByLabelText('Наступний клієнт'))
  
  // Verify navigation
  expect(screen.getByText('Victori')).toBeVisible()
})
```

### Flow 2: Jump to Specific Client via Dots

**Steps:**
1. User views the client slider
2. User clicks the 4th dot indicator

**Expected Results:**
- [ ] Slider jumps to 4th client (ТЦ Дивоцвіт)
- [ ] 4th dot becomes active (filled)
- [ ] `onDotClick` callback is called with index 3

**Test Code Outline:**
```typescript
test('clicking dot navigates to specific client', async () => {
  render(<ClientsSection content={mockContent} />)
  
  const dots = screen.getAllByRole('button', { name: /slide/i })
  await userEvent.click(dots[3])
  
  expect(screen.getByText('ТЦ Дивоцвіт')).toBeVisible()
})
```

### Flow 3: Statistics Animate on Scroll

**Steps:**
1. Statistics grid enters viewport
2. Numbers animate from 0 to final value

**Expected Results:**
- [ ] Numbers start at 0
- [ ] Numbers animate to final values (68, 14, 7, 7)
- [ ] Suffixes display correctly (68+, 14, 7, 7+)
- [ ] Animation completes within expected duration

**Test Code Outline:**
```typescript
test('statistics animate when scrolled into view', async () => {
  render(<StatsGrid statistics={mockStats} animateOnScroll />)
  
  // Trigger intersection observer
  mockIntersectionObserver.triggerIntersect()
  
  // Wait for animation
  await waitFor(() => {
    expect(screen.getByText('68+')).toBeVisible()
  })
})
```

### Flow 4: Client Card Hover Effects

**Steps:**
1. User hovers over client card
2. Logo transitions from grayscale to color
3. Card lifts with shadow

**Expected Results:**
- [ ] Logo has grayscale filter initially
- [ ] On hover, grayscale filter is removed
- [ ] Card has transform/shadow change on hover

**Test Code Outline:**
```typescript
test('client card shows hover effects', async () => {
  render(<ClientCard client={mockClient} />)
  
  const card = screen.getByRole('article')
  const logo = screen.getByRole('img')
  
  // Check initial state
  expect(logo).toHaveClass('grayscale')
  
  // Hover
  await userEvent.hover(card)
  
  // Check hover state
  expect(logo).not.toHaveClass('grayscale')
})
```

### Flow 5: Mobile Layout (Responsive)

**Steps:**
1. View section on mobile viewport (<768px)
2. Check layout order

**Expected Results:**
- [ ] Stats grid appears first (on top)
- [ ] Client slider appears below stats
- [ ] Touch swipe works on slider

**Test Code Outline:**
```typescript
test('mobile layout shows stats above slider', async () => {
  // Set mobile viewport
  window.innerWidth = 375
  
  render(<ClientsSection content={mockContent} />)
  
  const stats = screen.getByTestId('stats-grid')
  const slider = screen.getByTestId('client-slider')
  
  // Check DOM order (stats should come first)
  expect(stats.compareDocumentPosition(slider))
    .toBe(Node.DOCUMENT_POSITION_FOLLOWING)
})
```

---

## Component Tests

### ClientsSection

**Renders correctly:**
- [ ] Section has id="clients" for anchor navigation
- [ ] Heading "Нам довіряють" is visible
- [ ] Two-column layout on desktop
- [ ] Single-column layout on mobile

### ClientSlider

**Renders correctly:**
- [ ] Shows one client card at a time
- [ ] Left arrow button is present
- [ ] Right arrow button is present
- [ ] Dot indicators match client count

**Navigation:**
- [ ] Left arrow disabled on first slide
- [ ] Right arrow disabled on last slide
- [ ] Dots indicate current position
- [ ] Keyboard navigation works (left/right arrows)

### ClientCard

**Renders correctly:**
- [ ] Industry icon is displayed (Lucide)
- [ ] Industry label is visible
- [ ] Logo/image is displayed
- [ ] Client name is visible (Playfair font)
- [ ] Activity type is visible
- [ ] Year badge shows "Співпраця з {year}"

**Visual states:**
- [ ] Logo is grayscale by default
- [ ] Logo becomes color on hover
- [ ] Card has shadow on hover
- [ ] Card lifts on hover

**Logo types:**
- [ ] `logoType: 'logo'` → displays image with grayscale
- [ ] `logoType: 'photo'` → displays image with teal overlay
- [ ] `logoType: 'icon'` → displays large industry icon

### StatCard

**Renders correctly:**
- [ ] Number is displayed (large, Playfair)
- [ ] Suffix is displayed if provided
- [ ] Label is visible
- [ ] Sublabel is visible (muted)

**Animation:**
- [ ] Number animates from 0 to value
- [ ] Animation duration is configurable
- [ ] Animation only triggers once

### StatsGrid

**Renders correctly:**
- [ ] 2×2 grid layout
- [ ] All 4 stats are visible
- [ ] Responsive on mobile (still 2×2)

---

## Accessibility Tests

- [ ] Slider arrows have aria-labels ("Попередній клієнт", "Наступний клієнт")
- [ ] Dots have aria-labels ("Slide 1 of 6", etc.)
- [ ] Current dot has aria-current="true"
- [ ] Cards are keyboard focusable
- [ ] Sufficient color contrast (4.5:1 minimum)
- [ ] Animation respects prefers-reduced-motion

---

## Sample Test Data

```typescript
const mockClient: Client = {
  id: 'kaplya',
  name: 'Капля',
  fullName: 'ФОП Ткачук Андрій Олександрович',
  activityType: 'Магазин сантехніки',
  industry: 'trade',
  industryIcon: 'ShoppingCart',
  partnershipYear: 2011,
  logo: '/assets/clients/kaplya.jpg',
  logoType: 'logo',
}

const mockStats: Statistic[] = [
  { id: 'total', value: 68, suffix: '+', label: 'клієнтів', sublabel: 'за весь час' },
  { id: 'years', value: 14, label: 'років', sublabel: 'на ринку' },
  { id: 'industries', value: 7, label: 'галузей', sublabel: 'бізнесу' },
  { id: 'active', value: 7, suffix: '+', label: 'активних', sublabel: 'клієнтів' },
]

const mockContent: ClientsSectionContent = {
  title: 'Нам довіряють',
  clients: [mockClient, /* ... more clients */],
  statistics: mockStats,
}
```

---

## Edge Cases to Test

1. **Single client:** Slider should hide arrows and dots
2. **No logo provided:** Should show industry icon instead
3. **Very long client name:** Should truncate or wrap gracefully
4. **Animation disabled:** Numbers should show immediately
5. **Dark mode:** All colors should adapt correctly
