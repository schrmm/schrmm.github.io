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
│   ├── design-system/  # Design system components
│   │   ├── colors.css     # Color variables and utilities
│   │   ├── typography.css # Typography styles
│   │   └── components.css # Component styles
│   ├── main.css       # Main stylesheet
```

## Design System Architecture

### Color System
- Primary color palette with light/dark variants
- Neutral color palette for text and backgrounds
- Accent colors for highlights and calls to action
- Semantic color usage for consistent UI patterns
- Dark mode color mapping

### Typography System
- Consistent type scale with responsive adjustments
- Clear typographic hierarchy
- Optimized line heights and letter spacing
- Font family configurations
- Reading-optimized text styles

### Component System
- Reusable UI components with consistent styling
- Composition-based approach
- Responsive variants
- State handling (hover, focus, active)
- Dark mode support

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
- Custom color scheme with primary, neutral, and accent colors
- Extended typography configuration
- Custom component classes
- Dark mode variants
- Extended spacing scale

### CSS Organization
- Component-first approach using @layer directives
- Base styles for global elements
- Component styles for reusable UI elements
- Utility classes for edge cases
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