# Cullum & Co

Scott Cullum's practice website, branded Cullum & Co and built with Next.js 14. The site keeps Scott's first-person voice, experience, and judgment central, with trusted collaborators and AI agents joining when the work calls for them. Case studies include his Cullum & Co projects and work at their credited organizations.

Canonical site: https://cullumandco.com. Current contact: scott@cullumandco.com. Page metadata, structured data, sitemap, and robots use the URL in `siteMeta`; the footer uses its email address.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📦 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Inter (via next/font)
- **Icons**: Lucide React
- **Animations**: Framer Motion

## 🏗️ Project Structure

```
cullum.co/
├── app/
│   ├── components/       # React components
│   ├── about/            # About page
│   ├── services/         # Services page
│   ├── work/[slug]/      # Dynamic project pages
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Main page
│   └── globals.css       # Global styles
├── data/
│   └── content.ts        # All site content (single source of truth)
├── public/
│   └── images/           # Static assets (photos, etc.)
└── CLAUDE.md            # Developer documentation
```

## 📝 Content Management

All site content lives in `data/content.ts`. Update this file to:
- Change copy and messaging
- Add/remove services
- Add/remove projects
- Update contact information

No component code changes needed for content updates!

## 🛠️ Available Scripts

```bash
npm run dev        # Start development server (port 3000)
npm run build      # Build for production
npm start          # Start production server
npm run lint       # Run ESLint
npm run typecheck  # Type check without building
```

## 🌐 Site Structure

- **Main Page** (`/`): Single-page scroll with sections:
  - Home (hero section with orange background)
  - "How I help" (full-width orange section)
  - Work (project previews)
  - Contact

- **About Page** (`/about`): Professional background and experience
  - Bio and approach
  - Interactive career timeline with scroll animations
  - Photo and personal details

- **Services Page** (`/services`): Detailed service offerings
  - Service descriptions
  - What's included
  - Good for sections

- **Project Pages** (`/work/[slug]`): Individual case studies
  - Ignition Zero & Project AIR
  - WWF Together
  - Verizon Express Store
  - AudiUSA.com

## 🎨 Design Features

- Mobile-first responsive design
- Orange accent color system (orange-600 for section headers and CTAs)
- Smooth scroll navigation with Intersection Observer
- Page transitions with Framer Motion (300ms fade)
- Interactive timeline with scroll-based animations
- Optimized font loading (next/font)
- SEO optimized (JSON-LD, Open Graph, Twitter Cards)
- Accessible (ARIA labels, keyboard navigation)

## 📱 Performance

- Static generation for optimal performance
- Minimal JavaScript bundle
- Server components by default
- Dynamic routes pre-rendered at build time

## 🔧 Environment Variables

Copy `.env.local.example` to `.env.local` and add your environment variables.

## 📄 License

All rights reserved © 2026 Cullum & Co

## Brand assets

`public/images/cullum-and-co-wordmark.png` is the original, unmodified transparent wordmark supplied for the Studio One deck (2018 × 779). Keep its aspect ratio and letterforms. The `Wordmark` component uses its exact alpha as a CSS mask: white on the orange hero, and the site's `orange-600` on light navigation and footer backgrounds. The original scroll handoff reveals the header mark after 100px; opening the mobile menu also reveals it. Forced-color mode uses the system text color.

Run `node scripts/generate-brand-assets.mjs` to regenerate the orange logo metadata asset, social sharing card, and reversed PNG icons from that same alpha mask using Next.js ImageResponse. The generator resolves the site's actual Tailwind orange token. The headshot and historical project images remain in their original contexts.
