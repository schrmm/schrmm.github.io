# Personal Portfolio Website

A modern, responsive personal portfolio website built with Hugo and TailwindCSS. This site showcases projects, blog posts, case studies, and professional experience.

## Features

- 🎨 Modern, responsive design with TailwindCSS
- 🌓 Dark/light mode support
- 📱 Mobile-first approach
- 📝 Blog section with categories and tags
- 💼 Project portfolio with detailed case studies
- 📄 Professional resume section
- 📬 Contact form
- 🔍 SEO optimized
- 🚀 Optimized build process
- 🔒 Enhanced security headers

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
- [Content Management](docs/content-management.md)
- [Development Guide](docs/development.md)
- [Deployment Guide](docs/deployment.md)
- [Customization Guide](docs/customization.md)

## Project Structure

```
schrmm.github.io/
├── archetypes/          # Content templates
├── assets/             # Raw assets (CSS, JS)
├── content/            # Site content
├── docs/              # Documentation
├── layouts/           # Hugo templates
├── static/            # Static files
├── config.toml        # Hugo configuration
├── tailwind.config.js # TailwindCSS configuration
└── package.json       # Node.js dependencies
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