# Design System

This document outlines the design system implemented in this portfolio website, providing consistent guidelines for colors, typography, components, and spacing.

## Color System

The color system is built around three main palettes: primary, neutral, and accent. Each color is available in multiple shades and has dark mode variants.

### Primary Colors (Teal Palette)

Primary colors are used for main interactive elements, important UI components, and primary branding.

```css
primary: {
  DEFAULT: '#00afaf',
  50: '#e6f7f7',
  100: '#ccefef',
  200: '#99dfdf',
  300: '#66cfcf',
  400: '#33bfbf',
  500: '#00afaf',
  600: '#008c8c',
  700: '#006969',
  800: '#004646',
  900: '#002323',
  'light': '#33bfbf',
  'light-dark': '#00afaf',
  'dark': '#008c8c'
}
```

### Neutral Colors (Slate Palette)

Neutral colors are used for text, backgrounds, borders, and non-interactive elements.

```css
neutral: {
  DEFAULT: '#64748b',
  50: '#f8fafc',
  100: '#f1f5f9',
  200: '#e2e8f0',
  300: '#cbd5e1',
  400: '#94a3b8',
  500: '#64748b',
  600: '#475569',
  700: '#334155',
  800: '#1e293b',
  900: '#0f172a',
  950: '#020617'
}
```

### Accent Colors (Amber Palette)

Accent colors are used sparingly for highlighting, secondary interactions, and visual interest.

```css
accent: {
  DEFAULT: '#f59e0b',
  300: '#fcd34d',
  500: '#f59e0b',
  700: '#b45309',
}
```

### Semantic Color Usage

- **Text**: Neutral-900 (light mode), Neutral-50 (dark mode)
- **Background**: White (light mode), Neutral-900 (dark mode)
- **Primary Buttons**: Primary DEFAULT
- **Secondary Buttons**: Neutral-200 (light mode), Neutral-700 (dark mode)
- **Borders**: Neutral-100 (light mode), Neutral-700 (dark mode)
- **Highlights**: Primary DEFAULT or Accent DEFAULT

## Typography System

The typography system ensures consistent text styling throughout the site.

### Font Families

```javascript
fontFamily: {
  sans: ['Inter var', 'system-ui', 'sans-serif'],
  mono: ['JetBrains Mono', 'monospace'],
}
```

### Type Scale

Tailwind's default type scale is used for consistency:

- **text-xs**: 0.75rem (12px)
- **text-sm**: 0.875rem (14px)
- **text-base**: 1rem (16px)
- **text-lg**: 1.125rem (18px) 
- **text-xl**: 1.25rem (20px)
- **text-2xl**: 1.5rem (24px)
- **text-3xl**: 1.875rem (30px)
- **text-4xl**: 2.25rem (36px)
- **text-5xl**: 3rem (48px)

### Typographic Usage

- **h1**: text-4xl, font-bold, mb-6
- **h2**: text-3xl, font-bold, mb-4
- **h3**: text-2xl, font-bold, mb-3
- **h4**: text-xl, font-semibold, mb-2
- **p**: mb-4

## Component System

The component system is built using Tailwind classes with custom components defined in a single CSS file.

### Buttons

```html
<!-- Primary button -->
<button class="btn btn-primary">Primary Action</button>

<!-- Secondary button -->
<button class="btn btn-secondary">Secondary Action</button>

<!-- Small variant -->
<button class="btn btn-primary btn-sm">Small Button</button>

<!-- Large variant -->
<button class="btn btn-primary btn-lg">Large Button</button>
```

#### Button Styles
```css
.btn {
  @apply inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium text-center transition-all duration-200;
}

.btn-sm {
  @apply px-4 py-2 text-sm rounded-md;
}

.btn-lg {
  @apply px-8 py-4 text-lg;
}

.btn-primary {
  @apply bg-primary text-white hover:bg-primary-600 shadow-sm hover:shadow-md;
}

.btn-secondary {
  @apply bg-neutral-200 text-neutral-800 hover:bg-neutral-300 dark:bg-neutral-700 dark:text-neutral-100 dark:hover:bg-neutral-600;
}
```

### Cards

```html
<!-- Card component -->
<div class="card">
  <h3 class="text-xl font-semibold mb-2">Card Title</h3>
  <p>Card content goes here...</p>
</div>
```

#### Card Styles
```css
.card {
  @apply bg-white dark:bg-neutral-800 rounded-xl shadow-sm overflow-hidden border border-neutral-100 dark:border-neutral-700 transition-all duration-200 p-6;
}

.card:hover {
  @apply shadow-md;
}
```

### Navigation

```html
<!-- Navigation link -->
<a href="#" class="nav-link">Link</a>

<!-- Active navigation link -->
<a href="#" class="nav-link nav-link-active">Active Link</a>
```

#### Navigation Styles
```css
.nav-link {
  @apply text-neutral-600 hover:text-primary dark:text-neutral-300 dark:hover:text-primary-400 transition-colors duration-200;
}

.nav-link-active {
  @apply text-primary dark:text-primary-400 font-medium;
}
```

### Layout 

```html
<!-- Section with standard padding -->
<div class="section">
  <!-- Content -->
</div>

<!-- Narrower container for content -->
<div class="container-narrow">
  <!-- Content -->
</div>
```

#### Layout Styles
```css
.section {
  @apply py-12 md:py-16;
}

.container-narrow {
  @apply max-w-4xl mx-auto px-4 sm:px-6;
}
```

## Utility Classes

Additional utility classes are provided to extend Tailwind's functionality:

```css
.text-shadow {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.text-shadow-none {
  text-shadow: none;
}
```

## CSS Organization

All styles are now defined in a single `main.css` file for simplicity, using Tailwind's `@layer` directives:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  /* Base styles */
}

@layer components {
  /* Components */
}

@layer utilities {
  /* Custom utilities */
}
```

This approach simplifies the CSS architecture and makes it easier to maintain.