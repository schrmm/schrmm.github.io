# Contributing to Portfolio Website

Thank you for your interest in contributing to this portfolio website! This document provides guidelines and instructions for contributing.

## Code of Conduct

Please be respectful and constructive in all interactions. We aim to maintain a welcoming and inclusive environment for everyone.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Hugo Extended** (v0.123.0 or later) - Required for TailwindCSS processing
- **Node.js** (v18 or later) and npm
- **Git**

### Setting Up Your Development Environment

1. **Fork the repository** on GitHub

2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR-USERNAME/schrmm.github.io.git
   cd schrmm.github.io
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Create a feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

5. **Start the development server**:
   ```bash
   npm run dev
   # or
   hugo server -D
   ```

   The site will be available at `http://localhost:1313`

## Development Guidelines

### Code Style

This project follows these style guidelines:

- **HTML**: Use semantic HTML5 elements, maintain consistent indentation (2 spaces)
- **CSS**: Follow the existing TailwindCSS utility-first approach, use custom classes only when necessary
- **JavaScript**: Use modern ES6+ syntax, maintain consistency with existing Alpine.js patterns
- **Hugo Templates**: Follow Go template best practices, use meaningful variable names

The project includes:
- `.editorconfig` - for consistent editor settings
- `.prettierrc` - for code formatting (run `npm run format` before committing)

### Project Structure

```
schrmm.github.io/
├── archetypes/          # Content templates
├── assets/css/          # Source CSS files
├── content/             # Markdown content
├── data/                # Data files (JSON)
├── docs/                # Project documentation
├── layouts/             # Hugo templates
│   ├── _default/        # Default layouts
│   ├── partials/        # Reusable components
│   └── [sections]/      # Section-specific layouts
├── static/              # Static assets
└── themes/custom/       # Custom theme
```

### Making Changes

1. **Write clear, descriptive commit messages**:
   ```bash
   git commit -m "Add: new blog post about Hugo"
   git commit -m "Fix: dark mode toggle on mobile"
   git commit -m "Update: homepage hero section layout"
   ```

2. **Test your changes thoroughly**:
   - Test in multiple browsers (Chrome, Firefox, Safari)
   - Test responsive design (mobile, tablet, desktop)
   - Test both light and dark modes
   - Ensure the build completes successfully:
     ```bash
     npm run build
     ```

3. **Update documentation** if needed:
   - Update relevant files in `/docs` if you change architecture or add features
   - Update README.md if you add new setup steps

## Submitting Changes

### Pull Request Process

1. **Ensure your code is up to date** with the main branch:
   ```bash
   git checkout main
   git pull upstream main
   git checkout your-feature-branch
   git rebase main
   ```

2. **Push your changes** to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```

3. **Open a Pull Request** on GitHub:
   - Use a clear, descriptive title
   - Fill out the pull request template completely
   - Link any related issues
   - Add screenshots for visual changes

4. **Address review feedback**:
   - Respond to comments and questions
   - Make requested changes
   - Push additional commits to your branch

### Pull Request Checklist

Before submitting, ensure:

- [ ] Code follows the project's style guidelines
- [ ] Changes have been tested locally
- [ ] Build completes without errors (`hugo --gc --minify`)
- [ ] Responsive design works on mobile, tablet, and desktop
- [ ] Both light and dark modes work correctly
- [ ] No console errors or warnings
- [ ] Documentation updated (if applicable)
- [ ] Commit messages are clear and descriptive

## Types of Contributions

We welcome various types of contributions:

### Bug Fixes
- Fix broken links
- Resolve styling issues
- Fix responsiveness problems
- Address browser compatibility issues

### Features
- New content sections
- Enhanced functionality
- Improved accessibility
- Performance optimizations

### Documentation
- Improve existing documentation
- Add missing documentation
- Fix typos or unclear explanations
- Add code examples

### Design
- Improve visual design
- Enhance user experience
- Refine animations and transitions
- Improve accessibility

## Content Guidelines

### Adding Blog Posts

1. Create a new file in `content/blog/`:
   ```bash
   hugo new blog/your-post-title.md
   ```

2. Fill in the front matter:
   ```yaml
   ---
   title: "Your Post Title"
   date: 2024-01-15
   draft: false
   description: "A brief description"
   categories: ["Category"]
   tags: ["tag1", "tag2"]
   ---
   ```

3. Write your content using Markdown

### Adding Projects

1. Create a new file in `content/projects/`:
   ```bash
   hugo new projects/your-project.md
   ```

2. Include project details and use the project archetype as a template

## Questions or Problems?

- **General questions**: Open a [GitHub Discussion](https://github.com/schrmm/schrmm.github.io/discussions)
- **Bug reports**: Create a [bug report issue](https://github.com/schrmm/schrmm.github.io/issues/new?template=bug_report.md)
- **Feature requests**: Create a [feature request issue](https://github.com/schrmm/schrmm.github.io/issues/new?template=feature_request.md)

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

## Thank You!

Your contributions help make this project better. Thank you for taking the time to contribute!
