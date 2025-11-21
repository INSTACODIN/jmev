# Images

This directory contains all images used in the JMEV Tunisia website.

## Directory Structure

```
images/
├── hero-background.jpg          # Hero section background
├── models/                      # Vehicle model images
│   ├── elight-main.jpg         # ELIGHT model
│   ├── ev2-main.jpg            # EV2 model
│   └── ev3-main.jpg            # EV3 model
├── charging/                    # Charging-related images
│   ├── home-charging.jpg       # Home charging
│   ├── public-charging.jpg     # Public charging
│   └── fast-charging.jpg       # Fast charging
├── showroom/                    # Showroom images
│   └── showroom-tunisia.jpg    # Main showroom
└── news/                        # News article images
    ├── showroom-sfax.jpg
    ├── charging-network.jpg
    ├── special-offer.jpg
    ├── business-partnership.jpg
    └── milestone-500.jpg
```

## Image Sources

Current images are sourced from https://en.jmev.com for demonstration purposes.

## Replacing Images

To replace images with your own:

1. Replace the files in the appropriate directories
2. Keep the same filenames OR
3. Update the image paths in the corresponding pages:
   - `app/page.tsx` - Homepage
   - `app/models/page.tsx` - Models listing
   - `app/models/[slug]/page.tsx` - Model details
   - `app/charging/page.tsx` - Charging page
   - `app/about/page.tsx` - About page
   - `app/news/page.tsx` - News listing
   - `app/news/[slug]/page.tsx` - News article details

## Image Specifications

- **Format**: JPG, PNG, or WebP
- **Hero Background**: Recommended 1920×1080 or larger
- **Model Images**: Recommended 1200×800 or larger
- **News/Content Images**: Recommended 800×600 or larger

## Notes

- Images are optimized automatically by Next.js Image component
- Fallback placeholders are generated automatically if images fail to load
- All images use lazy loading except hero images (which use `priority`)

