# STST — Lite Site

Static showcase site for **STesso STudio**, a graphic design studio in Brescia. Commissioned mobile-first website with contact info, animated content, and three visual layout variants.

## Quick Start

```bash
bun install
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Stack

| Tool                    | Purpose                |
| ----------------------- | ---------------------- |
| Next.js 16 (App Router) | Static site generation |
| Tailwind CSS v4         | Styling                |
| Framer Motion           | Animations             |
| Biome                   | Lint + format          |
| Lefthook                | Git hooks              |
| commitlint              | Conventional commits   |
| GitHub Actions          | CI/CD                  |
| Release Please          | Versioning & changelog |
| Cloudflare Pages        | Hosting                |

## Scripts

| Command            | Description                 |
| ------------------ | --------------------------- |
| `bun run dev`      | Start dev server            |
| `bun run build`    | Build static site to `out/` |
| `bun run lint`     | Run Biome checks            |
| `bun run lint:fix` | Biome check + auto-fix      |
| `bun run format`   | Format all files            |
| `bun run check`    | Biome check + fix (alias)   |

> **Note:** `bun run start` does not work with `output: "export"`. To preview the production build locally, use `bunx serve out` or build the Docker image:
>
> ```bash
> docker build -t stst .
> docker run -p 8080:80 stst
> ```

## Project Structure

```
src/
  app/           # Next.js App Router pages
fonts/           # Custom font files (root level)
public/          # Static assets
.github/         # CI/CD workflows
.devcontainer/   # VS Code dev container config
Dockerfile       # Multi-stage build (bun + nginx)
nginx.conf       # Production static file server config
biome.json       # Linter & formatter configuration
lefthook.yml     # Git hooks configuration
```

## Docker

```bash
docker build -t stst .
docker run -p 8080:80 stst
```

Nginx serves the static export from `out/`.

## Documentation

- [CONTRIBUTING.md](CONTRIBUTING.md) — setup, workflow, and contribution guidelines
- [AGENTS.md](AGENTS.md) — AI agent context and repo conventions
- [SECURITY.md](SECURITY.md) — vulnerability reporting

## License

[GPL-3.0](LICENSE) — Copyright (C) 2026 STesso STudio
