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

| Layer        | Choice                      | Rationale                                        |
| ------------ | --------------------------- | ------------------------------------------------ |
| Framework    | Next.js (App Router)        | Static export, built-in font optimization        |
| Styling      | Tailwind CSS v4 (PostCSS)   | Utility-first, design-token friendly             |
| Animation    | Framer Motion               | `AnimatePresence` for layout transitions         |
| Linting      | Biome                       | Single tool replaces ESLint + Prettier           |
| Git hooks    | Lefthook + commitlint       | Conventional commits, pre-push lint/type checks  |
| Deployment   | Dockerfile + Cloudflare Pages | Static build served via nginx or CF edge        |

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

Each variant is a standalone component (`LayoutBianca`, `LayoutNera`, `LayoutRossa`) wrapped in Framer Motion's `AnimatePresence` for cross-fade transitions.

### Splash Screen Flow

```
SplashScreen (2s timeout) → fade-out → LayoutBianca → dot-click cycling
```

The splash auto-dismisses after 2 seconds. On subsequent cycles back to bianca, the splash is skipped.

### Typography System

Three local fonts loaded via `next/font/local` with CSS custom properties:

| Font                          | Variable              | Usage                       |
| ----------------------------- | --------------------- | --------------------------- |
| IBM Plex Mono (200, 500)      | `--font-ibm-mono-var` | Body text, footer, buttons  |
| Neue Haas Grotesk Display 65M | `--font-neue-haas-var`| Headings, title             |
| Slipstream Std Demi           | `--font-slipstream-var`| "ST" logo pairs (Nera)     |

### Color Palette

| Token         | Value     | Usage                      |
| ------------- | --------- | -------------------------- |
| `--st-bianco` | `#FFFFFF` | White layout background    |
| `--st-nero`   | `#000000` | Black layout, text         |
| `--st-rosso`  | `#E20303` | Red layout, accent/hover   |

## Implementation Phases

| Phase                    | What Changed                                                |
| ------------------------ | ----------------------------------------------------------- |
| 1. Next.js scaffold      | App Router project with Tailwind v4, Framer Motion, static export |
| 2. Tooling & linting     | Biome, commitlint, lefthook git hooks                       |
| 3. CI/CD & containers    | GitHub Actions, Dockerfile (nginx), Cloudflare Pages deploy |
| 4. Docs & community      | README, CONTRIBUTING, AGENTS.md, LICENSE, CoC, SECURITY     |
| 5. Fonts & design tokens | 3 local fonts wired via CSS variables, color palette        |
| 6. Mobile skeleton       | Splash screen, 3 layout components, dot-click cycling       |

## Current Structure

```
src/
├── app/
│   ├── globals.css      # Tailwind v4 imports, design tokens
│   ├── layout.tsx        # Root layout with font classes
│   └── page.tsx          # Single route — splash + layout cycling
├── components/
│   ├── CycleDot.tsx      # Central dot triggering layout cycle
│   ├── LayoutBianca.tsx  # White variant
│   ├── LayoutNera.tsx    # Black variant
│   ├── LayoutRossa.tsx   # Red variant
│   └── SplashScreen.tsx  # 2s intro splash
├── fonts/                # Local font files (TTF, WOFF, WOFF2)
└── lib/
    └── fonts.ts          # next/font/local declarations
```

## Key Conventions

- **Mobile-first** — designed for 320px viewport; desktop is out of scope
- **All components are `"use client"`** — required by Framer Motion, fits the fully-static model
- **No server-side logic** — `output: "export"` enforces this at build time
- **Biome only** — no ESLint or Prettier; `bun run lint` runs Biome
