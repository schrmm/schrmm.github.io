# Content Management Guide

## Content Types

### Blog Posts
```yaml
---
title: "Post Title"
date: 2024-03-20
description: "Brief description"
author: "Author Name"
categories: ["Category"]
tags: ["tag1", "tag2"]
featured_image: "/images/blog/image.jpg"
featured: false
toc: true
---
```

### Projects
```yaml
---
title: "Project Title"
date: 2024-03-20
description: "Project description"
tech_stack: ["Tech1", "Tech2"]
github_link: "https://github.com/..."
live_link: "https://..."
featured_image: "/images/projects/image.jpg"
weight: 1
---
```

### Case Studies
```yaml
---
title: "Case Study Title"
date: 2024-03-20
description: "Brief description"
client: "Client Name"
duration: "3 months"
role: "Lead Developer"
tech_stack: ["Tech1", "Tech2"]
featured_image: "/images/case-studies/image.jpg"
---
```

## Content Organization

### Directory Structure
- `/content/blog/` - Blog posts
- `/content/projects/` - Project showcases
- `/content/case-studies/` - Case studies
- `/content/resume/` - Resume sections
- `/static/images/` - Image assets

### Image Guidelines
- Blog images: 1200x630px (16:9)
- Project thumbnails: 800x600px (4:3)
- Case study images: 1600x900px (16:9)
- Optimize all images before upload

## Writing Guidelines

### Blog Posts
1. Use clear, descriptive titles
2. Include a compelling introduction
3. Use proper heading hierarchy
4. Include code examples when relevant
5. End with a conclusion or call-to-action

### Projects
1. Clearly state the project's purpose
2. List key features
3. Explain technical challenges
4. Include screenshots/demos
5. Link to live site/repository

### Case Studies
1. Start with executive summary
2. Describe the challenge
3. Explain your solution
4. Share results and metrics
5. Include lessons learned

## Front Matter Fields

### Common Fields
- `title`: Page title
- `date`: Publication date
- `description`: Brief summary
- `featured_image`: Hero image
- `draft`: Publication status

### Special Fields
- `featured`: Feature on homepage
- `weight`: Order priority
- `toc`: Table of contents
- `author`: Content author

## Adding New Content

### Using Archetypes
```bash
# Create new blog post
hugo new blog/post-name.md

# Create new project
hugo new projects/project-name.md

# Create new case study
hugo new case-studies/case-study-name.md
```

### Image Management
1. Place images in appropriate subdirectory
2. Use relative paths in content
3. Optimize before committing
4. Include alt text

## SEO Best Practices

1. Use descriptive titles
2. Write compelling descriptions
3. Include relevant keywords
4. Use proper heading structure
5. Optimize images
6. Include meta tags

## Content Workflow

1. Create content using archetypes
2. Add required front matter
3. Write content in Markdown
4. Add images and assets
5. Preview locally
6. Commit and push changes