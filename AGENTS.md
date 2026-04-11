<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Project Context

Static single-page site for STST (STesso STudio), a graphic design studio in Brescia. Commissioned mobile-first website with contact info.

## Architecture

- Single route (`/`), all client-side state
- `output: "export"` in `next.config.ts` — purely static, no server
- 3 layout variants (bianca/nera/rossa) cycled via dot click
- Mobile-first (320px), desktop out of scope for now

## Tech & Tooling

- Biome for lint + format (no ESLint, no Prettier)
- Lefthook for git hooks (pre-commit, commit-msg, pre-push)
- commitlint enforcing conventional commits
- Framer Motion for animations (requires `"use client"`)
- Tailwind CSS v4 via PostCSS

## Commands

| Command             | Purpose      |
| ------------------- | ------------ |
| `bun install`       | Install deps |
| `bun run dev`       | Dev server   |
| `bun run build`     | Static build |
| `bun run lint`      | Lint check   |
| `bunx tsc --noEmit` | Type check   |

## Key Config Files

- `next.config.ts` — static export, React strict mode
- `biome.json` — linter and formatter rules
- `lefthook.yml` — git hook definitions
- `commitlint.config.mjs` — conventional commit rules
- `release-please-config.json` — versioning and changelog config

## Learned Patterns

| Pattern | Reference | Date |
| ------- | --------- | ---- |
