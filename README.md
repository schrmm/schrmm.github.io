# Hugo Portfolio for GitHub Pages

A simple and elegant portfolio site built with Hugo and automatically deployed to GitHub Pages.

## Usage

### Setting Up (One-time)

1. Push to GitHub:
   ```
   ./push_to_github.bat
   ```

2. Configure GitHub Pages:
   - Go to repository Settings → Pages
   - Set source to "GitHub Actions"

### Updating Your Portfolio

1. Edit your portfolio data in `data/portfolio.json`
2. Run `push_to_github.bat`
3. Wait for GitHub Actions to deploy your changes

## Project Structure

- `data/portfolio.json` - Your portfolio information
- `layouts/` - HTML templates
- `content/` - Content pages
- `.github/workflows/` - Deployment automation

## Local Preview (Optional)

With Hugo installed, run:
```
hugo server -D
```

Then visit: http://localhost:1313
