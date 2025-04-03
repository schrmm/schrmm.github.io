# Architecture Overview

## Core Technologies

- **Hugo**: Static site generator
- **TailwindCSS**: Utility-first CSS framework
- **Alpine.js**: Lightweight JavaScript framework
- **PostCSS**: CSS processing

## Directory Structure

### Content Organization
```
content/
├── _index.md          # Home page content
├── blog/              # Blog posts
├── projects/          # Project showcases
├── case-studies/      # Detailed case studies
├── resume/            # Professional experience
└── contact.md         # Contact page
```

### Template Structure
```
layouts/
├── _default/         # Base templates
├── partials/         # Reusable components
│   ├── components/   # UI components
│   ├── header.html   # Site header
│   └── footer.html   # Site footer
├── blog/             # Blog templates
├── projects/         # Project templates
└── case-studies/     # Case study templates
```

### CSS Structure
```
assets/
├── css/
│   └── main.css       # Main stylesheet with all styles
```

## Design System Architecture

### Color System
- Primary teal palette with light/dark variants defined with hex values
- Neutral slate palette for text and backgrounds
- Amber accent colors for highlights and calls to action
- Dark mode color mapping with dedicated variants

### Typography System
- Standard Tailwind type scale
- Consistent element spacing and margins
- Inter and JetBrains Mono font families

### Component System
- Simple component definitions in main.css using @layer directives
- Essential UI components with consistent styling
- Dark mode support for all components

## Component Architecture

### Base Components
- Header with dark mode toggle and responsive navigation
- Footer with social links and site navigation
- Container system for consistent layout spacing
- Skip-to-content link for accessibility

### Content Components
- Card components for projects and blog posts
- Badge components for tags, categories, and labels
- Button system with variants (primary, secondary, ghost)
- Section components with consistent spacing
- Timeline entries for experience and education

### Interactive Features
- Dark/light mode switching with system preference detection
- Mobile menu with smooth transitions
- Form validation and submission
- Pagination components
- Hover animations and transitions

## Styling Architecture

### TailwindCSS Configuration
- Hex-value based color definitions with DEFAULT values
- Extended typography configuration
- Simplified component classes
- Dark mode using class-based toggling
- Extended spacing scale

### CSS Organization
- Single CSS file architecture for simplicity
- Component-first approach using @layer directives
- Base styles for core elements (h1-h6, body, etc.)
- Component styles for reusable UI patterns
- Utility classes for special cases
- Dark mode variants with class-based toggling

## Build Process

### Development
1. Hugo development server
2. TailwindCSS JIT compilation
3. PostCSS processing
4. Alpine.js for interactive elements

### Production
1. Content processing
2. Asset optimization
3. CSS/JS minification
4. Image optimization
5. HTML minification

## Security Features

- Content Security Policy
- HSTS implementation
- XSS protection
- Frame options
- Secure headers

## Performance Optimizations

- Asset minification
- Image optimization
- Lazy loading
- Cache policies
- Critical CSS
- Font loading optimization
- Reduced JS footprint

## Accessibility Features

- Semantic HTML structure
- ARIA attributes where necessary
- Keyboard navigation support
- Skip to content link
- Color contrast compliance
- Focus management