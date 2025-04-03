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

## Component Architecture

### Base Components
- Header with dark mode toggle
- Responsive navigation
- Footer with social links
- Contact form

### Content Components
- Project cards
- Blog post cards
- Skills list
- Timeline entries
- Case study sections

### Interactive Features
- Dark/light mode switching
- Mobile menu
- Form validation
- Category/tag filtering

## Styling Architecture

### TailwindCSS Configuration
- Custom color scheme
- Typography system
- Responsive breakpoints
- Component classes

### CSS Organization
- Base styles
- Component styles
- Utility classes
- Dark mode variants

## Build Process

### Development
1. Hugo development server
2. TailwindCSS JIT compilation
3. PostCSS processing

### Production
1. Content processing
2. Asset optimization
3. CSS/JS minification
4. Image optimization

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