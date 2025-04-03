# Customization Guide

## Theme Customization

### Colors
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563eb',
          dark: '#1d4ed8',
          light: '#3b82f6',
        }
      }
    }
  }
}
```

### Typography
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', 'system-ui'],
        mono: ['JetBrains Mono', 'monospace'],
      }
    }
  }
}
```

### Spacing
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      }
    }
  }
}
```

## Layout Customization

### Base Template
```html
<!-- layouts/_default/baseof.html -->
<!DOCTYPE html>
<html lang="{{ .Site.Language.Lang }}">
  {{ partial "head.html" . }}
  <body>
    {{ partial "header.html" . }}
    <main>
      {{ block "main" . }}{{ end }}
    </main>
    {{ partial "footer.html" . }}
  </body>
</html>
```

### Component Modifications
1. Edit component templates in `layouts/partials/components/`
2. Modify styles using TailwindCSS classes
3. Update responsive breakpoints
4. Add new variations

## Content Customization

### Homepage
```markdown
# content/_index.md
---
title: "Home"
description: "Your description"
---
```

### Project Layout
```html
<!-- layouts/projects/single.html -->
{{ define "main" }}
  <!-- Customize project layout -->
{{ end }}
```

### Blog Layout
```html
<!-- layouts/blog/list.html -->
{{ define "main" }}
  <!-- Customize blog listing -->
{{ end }}
```

## Adding New Features

### Custom Shortcodes
```html
<!-- layouts/shortcodes/feature.html -->
<div class="feature">
  {{ .Inner }}
</div>
```

### Custom Taxonomies
```toml
# config.toml
[taxonomies]
  category = "categories"
  tag = "tags"
  skill = "skills"
```

### Custom Archetypes
```markdown
# archetypes/custom.md
---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
custom_field: ""
---
```

## Style Customization

### Custom CSS
```css
/* assets/css/custom.css */
@layer components {
  .custom-component {
    @apply /* your styles */;
  }
}
```

### Dark Mode
```html
<!-- Toggle in header.html -->
<button @click="darkMode = !darkMode">
  Toggle Dark Mode
</button>
```

### Responsive Design
```html
<!-- Responsive classes -->
<div class="sm:hidden md:block lg:flex">
  <!-- Content -->
</div>
```

## Configuration Options

### Site Parameters
```toml
# config.toml
[params]
  description = "Site description"
  author = "Your Name"
  github = "https://github.com/username"
```

### Menu Customization
```toml
# config.toml
[[menu.main]]
  name = "Custom Page"
  url = "/custom/"
  weight = 7
```

### Build Options
```toml
# config.toml
[build]
  writeStats = true
```

## Adding Functionality

### JavaScript Features
```javascript
// assets/js/custom.js
document.addEventListener('DOMContentLoaded', () => {
  // Custom functionality
});
```

### Alpine.js Components
```html
<!-- Custom component -->
<div x-data="{ open: false }">
  <button @click="open = !open">Toggle</button>
  <div x-show="open">Content</div>
</div>
```

### Hugo Functions
```html
<!-- Custom template function -->
{{ define "customFunction" }}
  <!-- Function logic -->
{{ end }}
```

## Performance Customization

### Image Processing
```html
<!-- Image processing -->
{{ $image := resources.Get "images/example.jpg" }}
{{ $image := $image.Resize "800x" }}
<img src="{{ $image.RelPermalink }}" alt="Example">
```

### Asset Pipeline
```toml
# config.toml
[build]
  writeStats = true
```

### Cache Settings
```html
<!-- Cache busting -->
{{ $css := resources.Get "css/main.css" | fingerprint }}
<link rel="stylesheet" href="{{ $css.RelPermalink }}">
```

## SEO Customization

### Meta Tags
```html
<!-- head.html -->
<meta name="description" content="{{ .Description }}">
<meta name="keywords" content="{{ .Keywords }}">
```

### Open Graph
```html
<!-- head.html -->
<meta property="og:title" content="{{ .Title }}">
<meta property="og:description" content="{{ .Description }}">
```

### Structured Data
```html
<!-- Add structured data -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite"
}
</script>
```