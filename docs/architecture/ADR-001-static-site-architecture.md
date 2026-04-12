# Static Single-Page Site Architecture

**Source:** Task 001 (April 2025)

## Decision

Build the STST site as a fully static, single-route Next.js app with client-side layout cycling, deployed to Cloudflare Pages.

## Why

- No dynamic data — the site is a fixed showcase with contact info
- Static export (`output: "export"`) eliminates server infrastructure
- Single-page with client-side state keeps the architecture minimal
- Cloudflare Pages provides free, fast CDN hosting for static assets

## Solution

### Stack

| Layer      | Choice                        | Rationale                                       |
| ---------- | ----------------------------- | ----------------------------------------------- |
| Framework  | Next.js (App Router)          | Static export, built-in font optimization       |
| Styling    | Tailwind CSS v4 (PostCSS)     | Utility-first, design-token friendly            |
| Animation  | Framer Motion                 | `AnimatePresence` for layout transitions        |
| Linting    | Biome                         | Single tool replaces ESLint + Prettier          |
| Git hooks  | Lefthook + commitlint         | Conventional commits, pre-push lint/type checks |
| Deployment | Dockerfile + Cloudflare Pages | Static build served via nginx or CF edge        |

### 3-Layout Cycling Pattern

The site has one route (`/`) with three visual variants — bianca (white), nera (black), rossa (red) — cycled via a central dot click. All state is client-side:

```tsx
type LayoutVariant = "bianca" | "nera" | "rossa";

// Cycle: bianca → nera → rossa → bianca
const cycleLayout = useCallback(() => {
  setLayout((prev) => {
    if (prev === "bianca") return "nera";
    if (prev === "nera") return "rossa";
    return "bianca";
  });
}, []);
```

Each variant is a standalone component (`WhiteSkin`, `BlackSkin`, `RedSkin`) wrapped in Framer Motion's `AnimatePresence` for cross-fade transitions.

### Splash Screen Flow

```
SplashScreen (2s timeout) → fade-out → WhiteSkin → dot-click cycling
```

The splash auto-dismisses after 2 seconds. On subsequent cycles back to bianca, the splash is skipped.

### Typography System

Three local fonts loaded via `next/font/local` with CSS custom properties:

| Font                          | Variable                | Usage                      |
| ----------------------------- | ----------------------- | -------------------------- |
| IBM Plex Mono (200, 500)      | `--font-ibm-mono-var`   | Body text, footer, buttons |
| Neue Haas Grotesk Display 65M | `--font-neue-haas-var`  | Headings, title            |
| Slipstream Std Demi           | `--font-slipstream-var` | "ST" logo pairs (Nera)     |

### Color Palette

| Token         | Value     | Usage                    |
| ------------- | --------- | ------------------------ |
| `--st-bianco` | `#FFFFFF` | White layout background  |
| `--st-nero`   | `#000000` | Black layout, text       |
| `--st-rosso`  | `#E20303` | Red layout, accent/hover |

## Implementation Phases

| Phase                    | What Changed                                                      |
| ------------------------ | ----------------------------------------------------------------- |
| 1. Next.js scaffold      | App Router project with Tailwind v4, Framer Motion, static export |
| 2. Tooling & linting     | Biome, commitlint, lefthook git hooks                             |
| 3. CI/CD & containers    | GitHub Actions, Dockerfile (nginx), Cloudflare Pages deploy       |
| 4. Docs & community      | README, CONTRIBUTING, AGENTS.md, LICENSE, CoC, SECURITY           |
| 5. Fonts & design tokens | 3 local fonts wired via CSS variables, color palette              |
| 6. Mobile skeleton       | Splash screen, 3 layout components, dot-click cycling             |
| 7. SEO & metadata        | Meta tags, OG/Twitter cards, JSON-LD, robots, sitemap, manifest   |

## SEO & Metadata Architecture

All SEO is handled via Next.js built-in Metadata API — no third-party SEO libraries.

### Shared Constants

SEO values are centralized in `src/lib/seo.ts` to avoid duplication across metadata exports:

```ts
export const SITE_URL = "https://stessostudio.it";
export const SITE_NAME = "STST — STesso STudio";
export const SITE_DESCRIPTION = "STesso STudio è uno studio di graphic design con sede a Brescia.";
export const SITE_LOCALE = "it_IT";
```

### File-Based Metadata Convention

Static metadata files are generated at build time via Next.js route conventions:

| File                  | Generates                  | Pattern                  |
| --------------------- | -------------------------- | ------------------------ |
| `src/app/robots.ts`   | `out/robots.txt`           | `MetadataRoute.Robots`   |
| `src/app/sitemap.ts`  | `out/sitemap.xml`          | `MetadataRoute.Sitemap`  |
| `src/app/manifest.ts` | `out/manifest.webmanifest` | `MetadataRoute.Manifest` |

These work with `output: "export"` because they are GET-only route handlers that render to static files during build.

### Metadata in Layout

`layout.tsx` (Server Component) owns all metadata — `page.tsx` is `"use client"` and cannot export metadata. This includes:

- `metadataBase`, title, description, Open Graph, Twitter card, robots meta, canonical URL, keywords
- JSON-LD `<script type="application/ld+json">` injected in `<body>` with `Organization`/`LocalBusiness` structured data
- `lang="it"` on `<html>` (Italian audience)

### Client-Provided Assets

OG image (`public/images/og-image.jpg`), SVG favicon (`src/app/icon.svg`), and Apple touch icon (`src/app/apple-icon.png`) are referenced but must be provided by the client.

## Current Structure

```
src/
├── app/
│   ├── globals.css      # Tailwind v4 imports, design tokens
│   ├── layout.tsx        # Root layout with font classes, metadata, JSON-LD
│   ├── manifest.ts       # Web app manifest (PWA)
│   ├── page.tsx          # Single route — splash + layout cycling
│   ├── robots.ts         # robots.txt generation
│   └── sitemap.ts        # sitemap.xml generation
├── components/
│   ├── CycleDot.tsx      # Central dot triggering layout cycle
│   ├── WhiteSkin.tsx     # White variant
│   ├── BlackSkin.tsx     # Black variant
│   ├── RedSkin.tsx       # Red variant
│   └── SplashScreen.tsx  # 2s intro splash
├── fonts/                # Local font files (TTF, WOFF, WOFF2)
└── lib/
    ├── fonts.ts          # next/font/local declarations
    └── seo.ts            # SEO constants (URL, name, description, locale)
```

## Key Conventions

- **Mobile-first** — designed for 320px viewport; desktop is out of scope
- **All components are `"use client"`** — required by Framer Motion, fits the fully-static model
- **No server-side logic** — `output: "export"` enforces this at build time
- **Biome only** — no ESLint or Prettier; `bun run lint` runs Biome
- **SEO via built-in APIs** — no `next-seo` or similar; Next.js Metadata API covers all needs
- **SEO constants centralized** — `src/lib/seo.ts` is the single source of truth for site URL, name, description

## Updates

| Date       | Task | Summary                                                                   |
| ---------- | ---- | ------------------------------------------------------------------------- |
| April 2026 | 003  | Added SEO layer: metadata, OG/Twitter, JSON-LD, robots, sitemap, manifest |
