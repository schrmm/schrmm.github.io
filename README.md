# Personal Portfolio Website

A modern, responsive personal portfolio website built with Hugo and TailwindCSS. This site showcases projects, blog posts, case studies, and professional experience with a thoughtfully implemented design system.

## Features

- 🎨 Comprehensive design system with component library
- 🌓 Enhanced dark/light mode support with improved color contrasts
- 📱 Fully responsive design across all device sizes
- 📝 Blog section with categories, tags, and reading time
- 💼 Project portfolio with detailed case studies and gallery support
- 📄 Professional resume section with timeline components
- 📬 Contact form with improved validation
- 🔍 SEO optimized with semantic HTML
- 🚀 Optimized build process
- 🔒 Enhanced security headers
- ♿ Improved accessibility features

## Design System

The site implements a comprehensive design system featuring:

- **Color system**: Primary, neutral, and accent color palettes with dark mode variants
- **Typography system**: Consistent type scale and font treatments
- **Component library**: Buttons, cards, badges, navigation elements
- **Spacing system**: Consistent margins and paddings
- **Animation system**: Subtle transitions and hover effects

## Quick Start

1. **Prerequisites**
   ```bash
   # Install Hugo Extended (required for TailwindCSS)
   # Install Node.js and npm
   ```

2. **Installation**
   ```bash
   # Clone the repository
   git clone https://github.com/schrmm/schrmm.github.io.git
   cd schrmm.github.io

   # Install dependencies
   npm install
   ```

3. **Development**
   ```bash
   # Start development server
   hugo server -D
   ```

4. **Production Build**
   ```bash
   # Build for production
   hugo --gc --minify
   ```

## Documentation

Detailed documentation is available in the `/docs` directory:

- [Architecture Overview](docs/architecture.md)
- [Design System](docs/design-system.md)
- [Content Management](docs/content-management.md)
- [Development Guide](docs/development.md)
- [Deployment Guide](docs/deployment.md)
- [Customization Guide](docs/customization.md)

## Project Structure

```
schrmm.github.io/
├── archetypes/          # Content templates
├── assets/              # Asset files processed by Hugo
│   ├── css/             # CSS files
│   │   └── main.css     # Main stylesheet with all styles
├── content/            # Site content
├── data/               # Hugo data files
├── docs/               # Documentation
├── layouts/            # Hugo templates
│   ├── _default/       # Default templates
│   ├── partials/       # Partial templates
│   │   ├── components/ # Reusable UI components
├── static/             # Static files
├── themes/             # Hugo themes
│   └── custom/         # Custom theme files
├── config.toml         # Hugo configuration
├── tailwind.config.js  # TailwindCSS configuration
└── package.json        # Node.js dependencies
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with [Hugo](https://gohugo.io/)
- Styled with [TailwindCSS](https://tailwindcss.com/)
- Icons from [Heroicons](https://heroicons.com/)