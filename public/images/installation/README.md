# Installation Screenshots Guide

Place your installation screenshots in this folder with these exact filenames:

## Required Screenshots:

### Main Installation Steps:
1. **download-page.png** - Screenshot of where users download the extension zip file
2. **extracted-folder.png** - Screenshot showing the extracted extension folder
3. **extensions-page.png** - Screenshot of Chrome's extensions page (chrome://extensions/)
4. **developer-mode.png** - Screenshot showing developer mode toggle enabled
5. **extension-loaded.png** - Screenshot showing the extension successfully loaded

### Demo Preview Images (smaller):
6. **gmail-interface.png** - Small preview image of Gmail interface
7. **website-scanner.png** - Small preview image of website scanner
8. **facebook-feed.png** - Small preview image of Facebook feed

## Image Specifications:
- **Format:** PNG or JPG
- **Main screenshots:** Recommended size 400x200px or similar aspect ratio
- **Demo previews:** Recommended size 200x100px or similar aspect ratio
- **Quality:** High enough to be readable but optimized for web

## How the Code Works:
- Images automatically load when files are present
- If an image is missing, it gracefully falls back to the gray placeholder
- Uses Next.js Image component for optimization
- Images are responsive and properly sized

## File Structure:
```
public/
└── images/
    └── installation/
        ├── download-page.png
        ├── extracted-folder.png
        ├── extensions-page.png
        ├── developer-mode.png
        ├── extension-loaded.png
        ├── gmail-interface.png
        ├── website-scanner.png
        ├── facebook-feed.png
        └── README.md (this file)
```

Simply drag and drop your screenshots into this folder with the correct names, and they will automatically appear in the installation guide!