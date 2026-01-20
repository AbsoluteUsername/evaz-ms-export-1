# Typography Configuration

## Google Fonts Import

Add to your HTML `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Montserrat:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet">
```

Or add to your CSS:

```css
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Montserrat:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap');
```

## Font Usage

### Playfair Display — Headings

Elegant serif font for headings and display text.

```html
<h1 style="font-family: 'Playfair Display', serif;">
  Ми робимо складне простим
</h1>
```

**Use for:**
- Page headings (H1, H2)
- Section titles
- Taglines and quotes
- Hero headlines

**Weights used:**
- 400 (Regular) — Subheadings
- 500 (Medium) — Standard headings
- 600 (SemiBold) — Emphasis
- 700 (Bold) — Hero headlines

### Montserrat — Body Text

Clean geometric sans-serif for body text and UI elements.

```html
<p style="font-family: 'Montserrat', sans-serif;">
  Body text content
</p>
```

**Use for:**
- Body paragraphs
- Navigation labels
- Button text
- Form labels
- Card descriptions
- Footer text

**Weights used:**
- 400 (Regular) — Body text
- 500 (Medium) — Labels, navigation
- 600 (SemiBold) — Buttons, emphasis
- 700 (Bold) — Strong emphasis

### IBM Plex Mono — Technical Text

Monospace font for technical content (optional, not heavily used).

```html
<code style="font-family: 'IBM Plex Mono', monospace;">
  +380970094566
</code>
```

**Use for:**
- Phone numbers (optional)
- Technical references
- Code snippets

## Tailwind Configuration

Add to `tailwind.config.js`:

```js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Montserrat', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
    },
  },
}
```

Then use:
```html
<h1 class="font-heading">Heading</h1>
<p class="font-body">Body text</p>
<code class="font-mono">Code</code>
```

## Inline Style Pattern

The provided components use inline styles for font families:

```tsx
<h1 style={{ fontFamily: "'Playfair Display', serif" }}>
  Heading
</h1>
<p style={{ fontFamily: "'Montserrat', sans-serif" }}>
  Body text
</p>
```

This ensures fonts work without Tailwind configuration. You can refactor to Tailwind classes if preferred.

## Typography Scale

| Element | Font | Size | Weight |
|---------|------|------|--------|
| H1 (Hero) | Playfair | 3rem - 3.75rem | 700 |
| H2 (Section) | Playfair | 1.875rem - 2.25rem | 600 |
| H3 (Card) | Playfair | 1.25rem - 1.5rem | 600 |
| Body Large | Montserrat | 1.125rem | 400 |
| Body | Montserrat | 1rem | 400 |
| Body Small | Montserrat | 0.875rem | 400 |
| Label | Montserrat | 0.875rem | 500 |
| Button | Montserrat | 0.875rem - 1rem | 600 |
| Caption | Montserrat | 0.75rem | 400 |
