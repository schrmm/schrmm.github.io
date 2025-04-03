# Customization Guide

This guide provides comprehensive information on how to customize your portfolio website, leveraging the modular design system for consistent and attractive results.

## Design System Customization

### Colors
The color system is built around primary, neutral, and accent color palettes. To customize:

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        neutral: {
          50: '#fafafa',
          // ... other shades
          950: '#0a0a0a',
        },
        accent: {
          50: '#fff7ed',
          // ... other shades
          900: '#7c2d12',
        }
      }
    }
  }
}
```

See the full [Design System Documentation](design-system.md) for complete color palette details.

### Typography
Customize typography using the consistent type scale:

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      },
      fontSize: {
        // Match the design system type scale
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
      }
    }
  }
}
```

### Spacing
Custom spacing should follow the systematic spacing scale:

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      spacing: {
        // Standard spacing (matches design system)
        '1': '0.25rem',   // 4px
        '2': '0.5rem',    // 8px
        '3': '0.75rem',   // 12px
        '4': '1rem',      // 16px
        '5': '1.25rem',   // 20px
        '6': '1.5rem',    // 24px
        '8': '2rem',      // 32px
        '10': '2.5rem',   // 40px
        '12': '3rem',     // 48px
        '16': '4rem',     // 64px
        '20': '5rem',     // 80px
        '24': '6rem',     // 96px
        
        // Extended custom spacing if needed
        '128': '32rem',
        '144': '36rem',
      }
    }
  }
}
```

## Component Customization

The design system provides pre-styled components that can be customized while maintaining consistency.

### Button Customization

Modify button styles by extending the base button classes:

```css
/* assets/css/components/buttons.css */
@layer components {
  .btn {
    @apply inline-flex items-center justify-center px-6 py-3 rounded-md font-medium transition-all;
  }
  
  .btn-primary {
    @apply bg-primary-600 text-white hover:bg-primary-700 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2;
  }
  
  .btn-secondary {
    @apply bg-neutral-200 text-neutral-800 hover:bg-neutral-300 dark:bg-neutral-700 dark:text-neutral-100 dark:hover:bg-neutral-600;
  }
  
  .btn-outline {
    @apply border border-neutral-300 text-neutral-800 hover:bg-neutral-100 dark:border-neutral-600 dark:text-neutral-100 dark:hover:bg-neutral-800;
  }
  
  /* Size variants */
  .btn-sm {
    @apply px-4 py-2 text-sm;
  }
  
  .btn-lg {
    @apply px-8 py-4 text-lg;
  }
}
```

### Card Customization

Customize cards while preserving the design system's spacing and colors:

```css
/* assets/css/components/cards.css */
@layer components {
  .card {
    @apply bg-white dark:bg-neutral-800 rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg dark:shadow-neutral-900/30;
  }
  
  .card-body {
    @apply p-6;
  }
  
  .card-title {
    @apply text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2;
  }
  
  .card-text {
    @apply text-neutral-700 dark:text-neutral-300;
  }
  
  .card-image img {
    @apply w-full h-auto;
  }
  
  /* Custom card variants */
  .card-bordered {
    @apply border border-neutral-200 dark:border-neutral-700;
  }
  
  .card-compact {
    @apply shadow-sm;
  }
  
  .card-compact .card-body {
    @apply p-4;
  }
}
```

## Layout Customization

### Base Template
The base template can be customized while maintaining the design system's structure:

```html
<!-- layouts/_default/baseof.html -->
<!DOCTYPE html>
<html lang="{{ .Site.Language.Lang }}" class="scroll-smooth" x-data="{ darkMode: localStorage.getItem('darkMode') === 'true' }" x-bind:class="{ 'dark': darkMode }">
  {{ partial "head.html" . }}
  <body class="bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 transition-colors duration-300">
    {{ partial "header.html" . }}
    <main class="min-h-screen">
      {{ block "main" . }}{{ end }}
    </main>
    {{ partial "footer.html" . }}
  </body>
</html>
```

### Section Layouts
Customize page sections using the spacing system:

```html
<!-- layouts/partials/sections/featured-projects.html -->
<section class="py-16 bg-neutral-50 dark:bg-neutral-800">
  <div class="container mx-auto px-4">
    <h2 class="section-title mb-12">Featured Projects</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {{ range first 3 (where .Site.RegularPages "Section" "projects") }}
        {{ partial "components/project-card.html" . }}
      {{ end }}
    </div>
    <div class="mt-10 text-center">
      <a href="/projects" class="btn btn-primary">View All Projects</a>
    </div>
  </div>
</section>
```

## Content Customization

### Homepage
Customize your homepage content while leveraging design system components:

```markdown
# content/_index.md
---
title: "Home"
description: "Professional portfolio showcasing my work and expertise"
sections:
  - type: hero
    title: "I build beautiful digital experiences"
    subtitle: "Frontend Developer & UI Designer"
    buttons:
      - label: "View Projects"
        url: "/projects"
        style: "primary"
      - label: "Contact Me"
        url: "/contact"
        style: "outline"
    image: "images/hero.jpg"
  
  - type: featured-projects
    title: "Selected Work"
    count: 3
    
  - type: skills
    title: "My Skills"
    columns: 3
    
  - type: testimonials
    title: "What Clients Say"
    count: 2
---
```

### Project Layout
Customize project pages while maintaining design system consistency:

```html
<!-- layouts/projects/single.html -->
{{ define "main" }}
<article class="py-12">
  <div class="container mx-auto px-4">
    <!-- Project header -->
    <header class="mb-12">
      <h1 class="text-4xl font-bold mb-4">{{ .Title }}</h1>
      <div class="flex flex-wrap gap-2 mb-6">
        {{ range .Params.technologies }}
          <span class="badge badge-primary">{{ . }}</span>
        {{ end }}
      </div>
      {{ with .Params.featured_image }}
        <img src="{{ . }}" alt="{{ $.Title }}" class="w-full h-auto rounded-lg shadow-lg">
      {{ end }}
    </header>
    
    <!-- Project content -->
    <div class="prose prose-lg dark:prose-invert max-w-none">
      {{ .Content }}
    </div>
    
    <!-- Project navigation -->
    <div class="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
      {{ with .PrevInSection }}
        <a href="{{ .Permalink }}" class="card card-bordered hover:-translate-y-1">
          <div class="card-body">
            <span class="text-sm text-neutral-500 dark:text-neutral-400">Previous Project</span>
            <h3 class="card-title">{{ .Title }}</h3>
          </div>
        </a>
      {{ end }}
      {{ with .NextInSection }}
        <a href="{{ .Permalink }}" class="card card-bordered hover:-translate-y-1 md:text-right md:ml-auto">
          <div class="card-body">
            <span class="text-sm text-neutral-500 dark:text-neutral-400">Next Project</span>
            <h3 class="card-title">{{ .Title }}</h3>
          </div>
        </a>
      {{ end }}
    </div>
  </div>
</article>
{{ end }}
```

## Dark Mode Customization

### Dark Mode Toggle
Customize the dark mode toggle while using the design system's animation system:

```html
<!-- layouts/partials/components/dark-mode-toggle.html -->
<button 
  @click="darkMode = !darkMode; localStorage.setItem('darkMode', darkMode)"
  class="w-10 h-10 rounded-full flex items-center justify-center transition-colors dark:bg-neutral-800 bg-neutral-100 text-neutral-700 dark:text-neutral-300"
  title="Toggle dark mode"
  aria-label="Toggle dark mode">
  <svg 
    x-show="!darkMode" 
    xmlns="http://www.w3.org/2000/svg" 
    class="h-5 w-5" 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
  <svg 
    x-show="darkMode" 
    xmlns="http://www.w3.org/2000/svg" 
    class="h-5 w-5" 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
</button>
```

## Responsive Design Customization

### Responsive Components
Customize responsive behavior using the design system's breakpoints:

```html
<!-- layouts/partials/components/responsive-grid.html -->
<div class="grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4">
  {{ range .items }}
    <div class="flex flex-col h-full">
      <!-- Component content -->
    </div>
  {{ end }}
</div>
```

## Advanced Customization

### Custom CSS
Add custom components that extend the design system:

```css
/* assets/css/custom.css */
@layer components {
  /* Custom timeline component */
  .timeline {
    @apply relative pl-8 border-l border-neutral-200 dark:border-neutral-700;
  }
  
  .timeline-item {
    @apply relative mb-10 last:mb-0;
  }
  
  .timeline-item::before {
    @apply content-[''] absolute w-4 h-4 bg-primary-500 rounded-full -left-[2.1rem] top-1 border-4 border-white dark:border-neutral-900;
  }
  
  .timeline-date {
    @apply text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-1;
  }
  
  .timeline-title {
    @apply text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-2;
  }
  
  .timeline-content {
    @apply text-neutral-700 dark:text-neutral-300;
  }
}
```

### Custom JavaScript Features
Add JavaScript features while maintaining design system animations:

```javascript
// assets/js/custom.js
document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll with animation timing from design system
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Intersection Observer for reveal animations
  const revealElements = document.querySelectorAll('.reveal');
  const revealOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, revealOptions);
  
  revealElements.forEach(el => {
    revealObserver.observe(el);
  });
});
```

### Alpine.js Components
Create interactive components using Alpine.js:

```html
<!-- layouts/partials/components/accordion.html -->
<div x-data="{ active: null }" class="space-y-4">
  {{ range $index, $item := .items }}
    <div class="border border-neutral-200 dark:border-neutral-700 rounded-lg overflow-hidden">
      <button 
        @click="active !== {{ $index }} ? active = {{ $index }} : active = null"
        class="w-full flex justify-between items-center p-4 text-left font-medium text-neutral-900 dark:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
        :aria-expanded="active === {{ $index }}"
        aria-controls="accordion-content-{{ $index }}">
        {{ $item.title }}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          class="h-5 w-5 transform transition-transform" 
          :class="{ 'rotate-180': active === {{ $index }} }"
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div 
        id="accordion-content-{{ $index }}"
        x-show="active === {{ $index }}"
        x-transition:enter="transition-all ease-out duration-300"
        x-transition:enter-start="opacity-0 max-h-0"
        x-transition:enter-end="opacity-100 max-h-96"
        x-transition:leave="transition-all ease-in duration-200"
        x-transition:leave-start="opacity-100 max-h-96"
        x-transition:leave-end="opacity-0 max-h-0"
        class="p-4 border-t border-neutral-200 dark:border-neutral-700">
        {{ $item.content | markdownify }}
      </div>
    </div>
  {{ end }}
</div>
```

## Performance Customization

### Image Processing
Optimize images while maintaining design consistency:

```html
<!-- layouts/partials/components/optimized-image.html -->
{{ $image := resources.Get (.src | default "images/placeholder.jpg") }}
{{ $smallw := default "500x" }}
{{ $mediumw := default "1000x" }}
{{ $largew := default "1500x" }}

{{ $small := $image.Resize $smallw }}
{{ $medium := $image.Resize $mediumw }}
{{ $large := $image.Resize $largew }}

<img 
  src="{{ $small.RelPermalink }}" 
  srcset="{{ $small.RelPermalink }} 500w, {{ $medium.RelPermalink }} 1000w, {{ $large.RelPermalink }} 1500w"
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
  alt="{{ .alt }}"
  class="{{ .class }}"
  loading="{{ .loading | default "lazy" }}"
  width="{{ $image.Width }}"
  height="{{ $image.Height }}">
```

For a complete overview of the design system, see the [Design System Documentation](design-system.md).