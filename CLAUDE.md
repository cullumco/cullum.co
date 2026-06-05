# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js-based personal consultancy website (scullum.com) built with TypeScript, React, and Tailwind CSS. The site is a single-page application showcasing professional services in design, engineering, and AI-native product development.

## Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (strict mode enabled)
- **Styling**: Tailwind CSS with Manrope font family (via next/font)
- **UI Library**: React 18 with lucide-react for icons
- **Package Manager**: npm (Node.js >= 22.0.0 required)

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (runs on port 3000)
npm run dev

# Type checking (without emitting files)
npm run typecheck

# Lint the codebase
npm run lint

# Build for production
npm run build

# Start production server (runs on port 3000)
npm start
```

## Architecture

### App Structure

The application uses Next.js App Router with a single-page layout pattern:

- **app/layout.tsx**: Root layout with metadata, global styles, and JSON-LD structured data
- **app/page.tsx**: Main page component that composes all sections
- **app/globals.css**: Global styles including Tailwind directives and custom CSS
- **app/components/**: Individual section components
- **app/work/[slug]/page.tsx**: Dynamic routes for individual project case studies
- **app/robots.ts**: Dynamic robots.txt generation
- **app/sitemap.ts**: Dynamic sitemap.xml generation
- **data/content.ts**: Centralized content management (single source of truth)

### Component Architecture

The site follows a section-based component architecture where each major section is an isolated component:

- **Navigation.tsx**: Top navigation bar with mobile menu (client component)
- **Home.tsx**: Hero section with main messaging
- **About.tsx**: About/background section
- **Services.tsx**: Services offered section (imports from data/content.ts)
- **Work.tsx**: Portfolio/work preview cards with links to detail pages (imports from data/content.ts)
- **Footer.tsx**: Footer with contact information

All components are composed together in `app/page.tsx` in a single-page layout. Each component is a named export (not default export).

**Important**: Most components are server components by default. Only Navigation.tsx uses 'use client' directive for interactivity (mobile menu state).

### Data Management

All site content is centralized in a single file for easy updates:

- **data/content.ts**: Single source of truth containing:
  - `siteMeta`: Site-wide metadata (name, email, social links)
  - `nav`: Navigation links
  - `homePage`: Hero content and "How I help" items
  - `aboutPage`: Narrative sections about background and approach
  - `servicesPage`: Detailed service offerings with structured content
  - `workPage`: Project previews and full case study content
  - `footer`: Footer content

This centralized approach allows content updates without touching component code. Components import only what they need from this file.

### Styling Approach

- Uses Tailwind CSS utility classes exclusively
- Custom font: Manrope (loaded via next/font for optimal performance)
- Responsive breakpoints: md, lg variants used throughout
- Color palette: neutral grays with neutral-900 for primary text, orange-600 for accents
- Smooth scroll behavior enabled globally
- Mobile-first responsive design with hamburger menu on mobile

### Configuration

- **Path alias**: `@/*` maps to project root (configured in tsconfig.json)
- **TypeScript**: Strict mode enabled, targeting ES2017
- **Module resolution**: bundler mode for Next.js compatibility
- **ESLint**: Extends `next/core-web-vitals` configuration

## Port Configuration

Both development and production servers are explicitly configured to run on port 3000 (via `-p 3000` flag in package.json scripts).

## SEO & Metadata

- Structured data (JSON-LD) for Person schema in app/layout.tsx
- Open Graph and Twitter Card metadata configured
- Dynamic robots.txt via app/robots.ts
- Dynamic sitemap.xml via app/sitemap.ts
- metadataBase set to https://scullum.com

## Routing Structure

- **/** - Main single-page scroll experience (Home → About → Services → Work → Contact)
- **/work/[slug]** - Individual project case study pages:
  - `/work/ignition-zero-project-air`
  - `/work/wwf-together`
  - `/work/verizon-express-store`
  - `/work/audiusa`

Navigation uses anchor links (`#home`, `#about`, etc.) for smooth scrolling on the main page.

## Content Updates

To update site content, edit `data/content.ts`. No component changes needed for:
- Changing copy/messaging
- Adding/removing services
- Adding/removing projects
- Updating contact information

## Environment Variables

See `.env.local.example` for template. Environment variables should be stored in `.env.local` (gitignored).
