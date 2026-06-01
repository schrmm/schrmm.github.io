# Static Assets

This directory contains static files that are served directly.

## Favicon

The site uses `favicon.svg` as the primary favicon (modern browsers). For older browser support (IE), you should generate a `favicon.ico` file.

### Generating favicon.ico

You can generate `favicon.ico` from the existing `favicon.svg` using:

**Option 1: Online converter**
- Visit https://convertio.co/svg-ico/ or https://favicon.io/
- Upload `favicon.svg`
- Download the generated `favicon.ico`
- Place it in this directory

**Option 2: Using ImageMagick (if installed)**
```bash
convert -resize 256x256 -background transparent favicon.svg -define icon:auto-resize=256,128,96,64,48,32,16 favicon.ico
```

**Option 3: Using Node.js package**
```bash
npm install --save-dev to-ico
npx to-ico favicon.svg > favicon.ico
```

The `head.html` template is already configured to use both:
- `<link rel="icon" href="/favicon.svg" type="image/svg+xml">` (modern browsers)
- `<link rel="icon" href="/favicon.ico" sizes="any">` (fallback for older browsers)
