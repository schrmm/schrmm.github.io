# Design System

This document outlines the design system implemented in this portfolio website, providing consistent guidelines for colors, typography, components, and spacing.

## Color System

The color system is built around three main palettes: primary, neutral, and accent. Each color is available in multiple shades and has dark mode variants.

### Primary Colors

Primary colors are used for main interactive elements, important UI components, and primary branding.

```css
--primary-50: #f0f9ff;  /* Lightest */
--primary-100: #e0f2fe;
--primary-200: #bae6fd;
--primary-300: #7dd3fc;
--primary-400: #38bdf8;
--primary-500: #0ea5e9;
--primary-600: #0284c7;
--primary-700: #0369a1;
--primary-800: #075985;
--primary-900: #0c4a6e;  /* Darkest */
```

### Neutral Colors

Neutral colors are used for text, backgrounds, borders, and non-interactive elements.

```css
--neutral-50: #fafafa;  /* Lightest */
--neutral-100: #f5f5f5;
--neutral-200: #e5e5e5;
--neutral-300: #d4d4d4;
--neutral-400: #a3a3a3;
--neutral-500: #737373;
--neutral-600: #525252;
--neutral-700: #404040;
--neutral-800: #262626;
--neutral-900: #171717;
--neutral-950: #0a0a0a;  /* Darkest */
```

### Accent Colors

Accent colors are used sparingly for highlighting, secondary interactions, and visual interest.

```css
--accent-50: #fff7ed;  /* Lightest */
--accent-100: #ffedd5;
--accent-200: #fed7aa;
--accent-300: #fdba74;
--accent-400: #fb923c;
--accent-500: #f97316;
--accent-600: #ea580c;
--accent-700: #c2410c;
--accent-800: #9a3412;
--accent-900: #7c2d12;  /* Darkest */
```

### Semantic Color Usage

- **Text**: Neutral-900 (light mode), Neutral-100 (dark mode)
- **Background**: White/Neutral-50 (light mode), Neutral-900/950 (dark mode)
- **Primary Buttons**: Primary-600
- **Secondary Buttons**: Neutral-200 (light mode), Neutral-700 (dark mode)
- **Borders**: Neutral-200 (light mode), Neutral-700 (dark mode)
- **Highlights**: Primary-600 or Accent-500
- **Success**: Green-600
- **Error**: Red-600
- **Warning**: Amber-500

## Typography System

The typography system ensures consistent text styling throughout the site.

### Font Families

```css
/* Base fonts */
--font-sans: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
--font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
```

### Type Scale

```css
/* Font Sizes */
--text-xs: 0.75rem;     /* 12px */
--text-sm: 0.875rem;    /* 14px */
--text-base: 1rem;      /* 16px */
--text-lg: 1.125rem;    /* 18px */
--text-xl: 1.25rem;     /* 20px */
--text-2xl: 1.5rem;     /* 24px */
--text-3xl: 1.875rem;   /* 30px */
--text-4xl: 2.25rem;    /* 36px */
--text-5xl: 3rem;       /* 48px */
```

### Font Weights

```css
--font-thin: 100;
--font-extralight: 200;
--font-light: 300;
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
--font-extrabold: 800;
--font-black: 900;
```

### Line Heights

```css
--leading-none: 1;
--leading-tight: 1.25;
--leading-snug: 1.375;
--leading-normal: 1.5;
--leading-relaxed: 1.625;
--leading-loose: 2;
```

### Typographic Usage

- **Headings**: Font weight 700, with scaled sizes (h1: text-4xl, h2: text-3xl, etc.)
- **Body Text**: Font weight 400, text-base for main content, text-lg for featured content
- **Labels/Captions**: Font weight 500, text-sm
- **Code**: Mono font, text-sm

## Component System

The component system provides consistent, reusable UI elements.

### Buttons

```html
<!-- Primary button -->
<button class="btn btn-primary">Primary Action</button>

<!-- Secondary button -->
<button class="btn btn-secondary">Secondary Action</button>

<!-- Outline button -->
<button class="btn btn-outline">Outline Button</button>

<!-- Ghost button -->
<button class="btn btn-ghost">Ghost Button</button>

<!-- Small variant -->
<button class="btn btn-primary btn-sm">Small Button</button>

<!-- Large variant -->
<button class="btn btn-primary btn-lg">Large Button</button>
```

### Cards

```html
<!-- Basic card -->
<div class="card">
  <div class="card-body">
    <h3 class="card-title">Card Title</h3>
    <p class="card-text">Card content goes here...</p>
  </div>
</div>

<!-- Card with image -->
<div class="card">
  <div class="card-image">
    <img src="..." alt="...">
  </div>
  <div class="card-body">
    <h3 class="card-title">Card Title</h3>
    <p class="card-text">Card content goes here...</p>
  </div>
</div>
```

### Badges

```html
<!-- Primary badge -->
<span class="badge badge-primary">Primary</span>

<!-- Neutral badge -->
<span class="badge badge-neutral">Neutral</span>

<!-- Accent badge -->
<span class="badge badge-accent">Accent</span>
```

### Section Titles

```html
<!-- Section title with underline -->
<h2 class="section-title">Section Heading</h2>
```

### Navigation

```html
<!-- Navigation link -->
<a href="#" class="nav-link">Link Text</a>

<!-- Active navigation link -->
<a href="#" class="nav-link nav-link-active">Active Link</a>
```

### Pagination

```html
<!-- Pagination container -->
<ul class="pagination">
  <!-- Previous page link -->
  <li><a href="#" class="pagination-link">Previous</a></li>
  
  <!-- Page number -->
  <li><a href="#" class="pagination-number">1</a></li>
  
  <!-- Active page number -->
  <li><a href="#" class="pagination-number active">2</a></li>
  
  <!-- Next page link -->
  <li><a href="#" class="pagination-link">Next</a></li>
</ul>
```

## Spacing System

The spacing system ensures consistent spacing throughout the site.

### Base Scale

```css
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
```

### Section Spacing

- **Small sections**: py-8 (padding-top and padding-bottom: 2rem)
- **Medium sections**: py-12 (padding-top and padding-bottom: 3rem)
- **Large sections**: py-16 (padding-top and padding-bottom: 4rem)
- **Extra large sections**: py-24 (padding-top and padding-bottom: 6rem)

### Component Spacing

- **Card padding**: p-6 (padding: 1.5rem)
- **Button padding**: px-6 py-3 (padding-left and padding-right: 1.5rem, padding-top and padding-bottom: 0.75rem)
- **Small button padding**: px-4 py-2 (padding-left and padding-right: 1rem, padding-top and padding-bottom: 0.5rem)
- **Large button padding**: px-8 py-4 (padding-left and padding-right: 2rem, padding-top and padding-bottom: 1rem)

## Animation System

The animation system provides subtle, consistent animations throughout the site.

### Transitions

```css
/* Default transition */
--transition-default: all 0.2s ease-in-out;

/* Slow transition */
--transition-slow: all 0.3s ease-in-out;

/* Fast transition */
--transition-fast: all 0.1s ease-in-out;
```

### Hover Effects

- **Button hover**: Background color change, subtle shadow
- **Card hover**: Slight elevation (shadow increase), subtle Y-axis transform
- **Link hover**: Color change, optional underline
- **Navigation hover**: Color change

### Focus States

- **Button focus**: Outline ring in primary color
- **Input focus**: Border color change, subtle shadow
- **Link focus**: Outline ring, color change

## Responsive Design

The design system includes responsive breakpoints and behavior.

### Breakpoints

```css
--screen-sm: 640px;
--screen-md: 768px;
--screen-lg: 1024px;
--screen-xl: 1280px;
--screen-2xl: 1536px;
```

### Responsive Patterns

- **Mobile-first approach**: Default styles for mobile, then enhanced for larger screens
- **Flexible grids**: Changing from single column to multi-column layouts
- **Component adaptation**: Components can change appearance based on screen size
- **Typography scaling**: Font sizes can be adjusted for different screen sizes

## Usage Guidelines

1. **Consistency**: Always use design system components rather than creating custom ones
2. **Composition**: Combine components to create more complex UI elements
3. **Responsive design**: Test all components across different screen sizes
4. **Accessibility**: Ensure all components are accessible (keyboard navigation, screen readers)
5. **Performance**: Keep component CSS efficient and minimal