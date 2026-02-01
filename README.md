# Third Studio Website - Astro Version

This is the official website for **Third Studio**, a creative agency specializing in VR experiences, architectural visualization, and digital innovation. Migrated from Vite React to Astro for superior performance and SEO.

## 🚀 Project Overview

Third Studio bridges the gap between imagination and reality. This project showcases our portfolio, services, and the technology we use to create immersive digital environments.

### Key Features

- **Astro-Powered**: Lightning-fast performance with static site generation (Astro v5).
- **Hybrid Architecture**: Interactive React components (React 19) where needed, static HTML everywhere else.
- **Responsive Design**: Mobile-first approach using Tailwind CSS v4 with custom animations.
- **Multilingual Support**: Full support for English and Spanish via Astro i18n.
- **SEO Optimized**: Enhanced meta tags, structured data (JSON-LD), and semantic HTML.
- **Immersive UI**: Design language inspired by VR interfaces, featuring GSAP and AOS animations.
- **Digital Brochure**: Dedicated interactive brochure page showcasing our methodology and industries.

## 🏗️ Project Structure

```text
/
├── public/                 # Static assets served at root
│   ├── assets/             # Images, videos, and icons
│   ├── 404.html            # Custom branded 404 page
│   ├── index.html          # Branded entry point/fallback
│   ├── manifest.json       # PWA manifest
│   └── robots.txt          # Search engine instructions
├── src/
│   ├── assets/             # Local assets for processing
│   ├── components/         # Astro and React components
│   │   ├── *.astro         # Static Astro components
│   │   └── *.tsx           # Interactive React components
│   ├── layouts/            # Page layouts (BaseLayout.astro)
│   ├── locales/            # Translation files (en.json, es.json)
│   ├── pages/              # Route pages (index.astro, brochure.astro)
│   └── types/              # TypeScript definitions
├── astro.config.mjs        # Astro configuration
└── package.json            # Dependencies and scripts
```

## 🧞 Commands

All commands are run from the root of the project:

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `npm install`     | Installs dependencies                       |
| `npm run dev`     | Starts local dev server at `localhost:4321` |
| `npm run build`   | Build your production site to `./dist/`     |
| `npm run preview` | Preview your build locally                  |
| `npm run deploy`  | Alias for build                             |

## 🌐 Deployment

The project is optimized for static hosting (e.g., Hostinger, Vercel, Netlify).

1. Run `npm run build`
2. Upload the contents of the `dist/` folder to your hosting provider.
3. Ensure the `.htaccess` file (included in root and public/) is used if deploying to an Apache server for proper routing and compression.

## 🔧 Technologies Used

- **Astro 5**: Modern web framework for content-driven websites.
- **React 19**: For complex interactive UI elements.
- **Tailwind CSS 4**: For rapid, responsive styling with Vite integration.
- **GSAP**: For high-performance web animations.
- **AOS (Animate On Scroll)**: For scroll-triggered animations.
- **TypeScript**: For type-safe development.
- **Swiper**: For touch-enabled sliders.

## 📈 SEO & Performance

- **Lighthouse Optimized**: Built for high performance and Core Web Vitals.
- **Structured Data**: Implements Schema.org JSON-LD for better search engine understanding.
- **i18n Routing**: Native Astro internationalization for SEO-friendly multilingual URLs.
- **Image Optimization**: Using modern formats like WebP and SVG.

---

Developed with ❤️ by **Third Studio**.
[Visit our website](https://thirdstudio.tech)
