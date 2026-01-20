# Tailwind Color Configuration

## Color Choices

- **Primary:** `teal` — Used for buttons, links, key accents
- **Secondary:** `cream` (#E8DCC8) — Used for backgrounds, highlights, secondary elements
- **Neutral:** `stone` — Used for text, borders, backgrounds

## Tailwind Config

Add to your `tailwind.config.js`:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#E8DCC8',
          light: 'rgba(232, 220, 200, 0.3)',
          dark: 'rgba(232, 220, 200, 0.5)',
        },
      },
    },
  },
}
```

## Usage Examples

### Primary (Teal)

```html
<!-- Primary button -->
<button class="bg-teal-600 hover:bg-teal-700 text-white">
  Отримати консультацію
</button>

<!-- Primary link -->
<a class="text-teal-600 hover:text-teal-700 dark:text-teal-400">
  Link text
</a>

<!-- Primary accent -->
<div class="border-teal-500 bg-teal-50 dark:bg-teal-900/20">
  Accent content
</div>
```

### Secondary (Cream)

```html
<!-- Secondary background -->
<section class="bg-[#E8DCC8]/30 dark:bg-stone-900">
  Content with warm background
</section>

<!-- Secondary gradient -->
<div class="bg-gradient-to-b from-[#E8DCC8]/30 to-white">
  Gradient content
</div>
```

### Neutral (Stone)

```html
<!-- Text colors -->
<h1 class="text-stone-900 dark:text-stone-100">Heading</h1>
<p class="text-stone-600 dark:text-stone-400">Body text</p>
<span class="text-stone-500 dark:text-stone-500">Muted text</span>

<!-- Backgrounds -->
<div class="bg-white dark:bg-stone-950">Main background</div>
<div class="bg-stone-100 dark:bg-stone-800">Card background</div>
<div class="bg-stone-900">Footer</div>

<!-- Borders -->
<div class="border border-stone-200 dark:border-stone-700">
  Bordered content
</div>
```

## Dark Mode

All colors support dark mode with `dark:` variants:

```html
<div class="
  bg-white dark:bg-stone-950
  text-stone-900 dark:text-stone-100
  border-stone-200 dark:border-stone-700
">
  Adaptive content
</div>
```

## Common Patterns

### CTA Button
```html
<button class="
  px-6 py-3 rounded-xl
  bg-teal-600 hover:bg-teal-700
  dark:bg-teal-500 dark:hover:bg-teal-600
  text-white font-semibold
  transition-all duration-300
  hover:shadow-lg hover:shadow-teal-500/25
  hover:-translate-y-0.5
">
  Отримати консультацію
</button>
```

### Card
```html
<div class="
  p-6 rounded-2xl
  bg-white dark:bg-stone-900
  border border-stone-200 dark:border-stone-700
  shadow-lg
">
  Card content
</div>
```

### Section
```html
<section class="
  py-16 md:py-24
  bg-[#E8DCC8]/20 dark:bg-stone-900
">
  Section content
</section>
```
