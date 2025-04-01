# Personal Portfolio Website

A clean, modern portfolio website built with Hugo and deployed on GitHub Pages. The site features a responsive design, project showcase, and resume section.

## Table of Contents
- [Overview](#overview)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Maintaining and Updating](#maintaining-and-updating)
- [Customization Guide](#customization-guide)
- [Deployment](#deployment)
- [Future Improvements](#future-improvements)

## Overview

This portfolio is built using:
- **Hugo**: Fast static site generator
- **TailwindCSS**: Utility-first CSS framework
- **GitHub Actions**: Automated deployment
- **GitHub Pages**: Hosting platform

## Getting Started

### Prerequisites
- [Git](https://git-scm.com/downloads)
- [Hugo Extended](https://gohugo.io/installation/) (v0.80.0+)
- A code editor (VS Code recommended)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/schrmm/schrmm.github.io.git
   cd schrmm.github.io
   ```

2. **Start the Hugo development server**
   ```bash
   hugo server -D
   ```

3. **View the site in your browser**
   - Visit http://localhost:1313

## Project Structure

```
schrmm.github.io/
├── archetypes/       # Template files for new content
├── content/          # Markdown content files
│   ├── _index.md     # Homepage content
│   ├── resume.md     # Resume page content
│   └── projects/     # Project contents
├── data/             # Site data
│   └── portfolio.json # Portfolio information
├── layouts/          # HTML templates
│   ├── _default/     # Default templates
│   ├── partials/     # Reusable template parts
│   └── projects/     # Project-specific templates
├── static/           # Static assets
├── config.toml       # Hugo configuration
└── .github/workflows/ # GitHub Actions workflow
```

## Maintaining and Updating

### Adding New Projects

1. Create a new markdown file in `content/projects/`:
   ```bash
   hugo new projects/my-new-project.md
   ```

2. Edit the new project markdown file with the following front matter:
   ```yaml
   ---
   title: "Project Title"
   description: "Short description of the project"
   tech_stack: ["Technology1", "Technology2", "Technology3"]
   ---
   ```

3. Add content below the front matter using Markdown format.

### Updating Personal Information

Edit `data/portfolio.json` to update:
- Name, title, and bio
- Contact information
- Skills list
- Education history
- Work experience

### Modifying Layout and Design

1. **Template files** are located in `layouts/` directory:
   - `layouts/_default/`: Main layout templates
   - `layouts/partials/`: Reusable components (header, footer, etc.)
   - `layouts/projects/`: Project-specific templates

2. **CSS styling** is handled through TailwindCSS:
   - Styling is applied directly in the HTML templates
   - Global configs are in `layouts/partials/head.html`

## Customization Guide

### Color Scheme

Modify the color scheme in `layouts/partials/head.html`:

```js
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#3b82f6',    // Change this for primary color
                'primary-dark': '#2563eb',
                secondary: '#10b981',  // Change this for secondary color
                'secondary-dark': '#059669',
                dark: '#1f2937',
            },
            // other configs...
        }
    }
}
```

### Typography

The site uses Inter font family. To change it:

1. Update the font imports in `layouts/partials/head.html`
2. Modify the font-family in the Tailwind configuration

### Adding New Pages

1. Create a new markdown file in the `content/` directory:
   ```bash
   hugo new my-new-page.md
   ```

2. Create a corresponding layout in `layouts/_default/` or use the existing single/list templates.

## Deployment

The site is automatically deployed to GitHub Pages through GitHub Actions:

1. **Commit and push your changes**:
   ```bash
   git add .
   git commit -m "Your update message"
   git push
   ```

2. **GitHub Actions workflow will**:
   - Build the site with Hugo
   - Deploy to GitHub Pages
   - Make your changes live at `https://schrmm.github.io`

3. **Monitor the deployment**:
   - Go to your repository's "Actions" tab to see build status
   - If there are any issues, check the workflow logs

## Future Improvements

Here are some ideas for improving the portfolio:

### Content Enhancements
- Add a blog section
- Include case studies with more detailed project information
- Add testimonials or recommendations

### Technical Improvements
- Implement dark mode toggle
- Add site search functionality
- Improve accessibility
- Implement image lazy loading
- Add animations for better user experience

### SEO Optimization
- Add meta description for all pages
- Implement Open Graph and Twitter card meta tags
- Create a sitemap.xml
- Add structured data (JSON-LD)

### Performance
- Optimize images further
- Implement critical CSS
- Add service worker for offline functionality

---

## License

This project is open source and available under the [MIT License](LICENSE).
