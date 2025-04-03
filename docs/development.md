# Development Guide

## Development Environment Setup

### Prerequisites
1. Hugo Extended (required for TailwindCSS)
2. Node.js and npm
3. Git

### Installation
```bash
# Clone repository
git clone https://github.com/schrmm/schrmm.github.io.git
cd schrmm.github.io

# Install dependencies
npm install

# Start development server
hugo server -D
```

## Development Workflow

### Branch Strategy
- `main`: Production branch
- `develop`: Development branch
- Feature branches: `feature/feature-name`
- Bug fixes: `fix/bug-name`

### Local Development
1. Create feature branch
2. Make changes
3. Test locally
4. Commit changes
5. Push and create PR

### Code Style

#### HTML
- Use semantic HTML5 elements
- Include ARIA attributes
- Maintain proper indentation
- Use meaningful class names

#### CSS (TailwindCSS)
- Follow mobile-first approach
- Use utility classes
- Create component classes for reuse
- Maintain consistent spacing

#### JavaScript
- Use ES6+ features
- Keep functions small and focused
- Add comments for complex logic
- Use meaningful variable names

## Building Components

### Template Structure
```
layouts/
├── _default/
│   ├── baseof.html    # Base template
│   ├── list.html      # List template
│   └── single.html    # Single template
└── partials/
    ├── components/    # Reusable components
    ├── header.html    # Site header
    └── footer.html    # Site footer
```

### Creating New Components
1. Create component file in `layouts/partials/components/`
2. Use proper Hugo templating syntax
3. Include responsive design
4. Add dark mode support
5. Test across browsers

### Component Best Practices
- Keep components focused
- Use proper HTML semantics
- Include accessibility features
- Document component usage
- Test responsive behavior

## Testing

### Local Testing
1. Test responsive design
2. Verify dark mode
3. Check accessibility
4. Validate forms
5. Test performance

### Cross-browser Testing
- Chrome
- Firefox
- Safari
- Edge

### Performance Testing
- Lighthouse audits
- PageSpeed Insights
- WebPageTest

## Build Process

### Development Build
```bash
# Start development server
hugo server -D

# With drafts disabled
hugo server
```

### Production Build
```bash
# Build for production
hugo --gc --minify

# With environment variables
HUGO_ENV=production hugo --gc --minify
```

## Troubleshooting

### Common Issues
1. TailwindCSS not compiling
2. Hugo server errors
3. Template parsing issues
4. Asset pipeline problems

### Debug Tools
- Hugo debug prints
- Browser DevTools
- npm debugging
- Hugo verbose output

## Performance Optimization

### Asset Optimization
- Minimize CSS/JS
- Optimize images
- Use proper caching
- Implement lazy loading

### Code Optimization
- Remove unused CSS
- Minimize JavaScript
- Optimize templates
- Reduce dependencies

## Security Considerations

### Headers
- Content Security Policy
- HSTS
- XSS Protection
- Frame Options

### Best Practices
- Validate user input
- Sanitize output
- Use secure dependencies
- Regular updates

## Deployment

### GitHub Pages
1. Configure GitHub Actions
2. Set up deployment workflow
3. Configure custom domain
4. Verify deployment

### Other Platforms
- Netlify configuration
- Vercel setup
- Custom server deployment