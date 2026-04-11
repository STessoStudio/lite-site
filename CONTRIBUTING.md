# Contributing

> **Note:** This is a commissioned project for a specific studio. Design changes, content changes, and visual modifications are unlikely to be accepted unless coordinated with the studio.

## Prerequisites

- Node.js 22+
- [bun](https://bun.sh) (latest)

## Getting Started

```bash
git clone git@github.com:STessoStudio/lite-site.git
cd lite-site
bun install
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Git Workflow

1. Branch from `dev`
2. Use prefixed feature branches: `feat/`, `fix/`, `chore/`, `docs/`
3. PR target: `dev` (never directly to `main`)
4. `dev` → `main` merges trigger Release Please

## Commit Convention

Conventional commits are enforced by commitlint + lefthook. Every commit message must follow the format:

```
type(scope): description
```

Examples:

```
feat: add red layout
fix: horse animation timing
docs: update README
```

## Code Style

Biome handles linting and formatting — no ESLint or Prettier.

Run before committing:

```bash
bun run check
```

Lefthook runs Biome and typecheck automatically on pre-commit, so issues are caught before they reach CI.
