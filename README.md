# Portfolio Generator

A Hugo and TailwindCSS portfolio generator for developers and creatives. The reusable generator lives in `themes/portfolio-generator`, while `exampleSite` is a personal demo site that can be deployed to GitHub Pages.

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
    # Start the example site development server
    npm run dev
    ```

4. **Production Build**
    ```bash
    # Build CSS and the example site
    npm run build
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
├── exampleSite/         # Demo/personal site using the generator
│   ├── config.toml      # Example site configuration
│   ├── content/         # Example Markdown content
│   ├── data/            # Example portfolio data
│   └── static/          # Generated CSS and static assets for the demo
├── docs/               # Documentation
├── themes/             # Hugo themes
│   └── portfolio-generator/
│       ├── archetypes/  # Content templates
│       ├── assets/      # Tailwind source CSS
│       └── layouts/     # Reusable generator templates
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
