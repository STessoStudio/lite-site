# Security Policy

## Supported Versions

Only the latest release on `main` is supported with security updates. Older versions will not receive patches.

| Branch | Supported |
| ------ | --------- |
| `main` | ✅         |
| Other  | ❌         |

## Reporting a Vulnerability

**Do not open a public issue for security vulnerabilities.**

Use GitHub Security Advisories to report vulnerabilities privately:

1. Go to the repository **Settings → Security → Advisories**
2. Click **New draft security advisory**
3. Fill in the details and submit

A maintainer will acknowledge your report within 7 days and work with you on a fix.

## Disclosure Policy

- Vulnerabilities will not be disclosed publicly until a fix has been released.
- Reporters will be credited in the release notes unless they prefer to remain anonymous.

## Scope

This is a static site with no backend, database, or user authentication. The attack surface is limited to:

- **Build pipeline** — CI/CD configuration and build scripts
- **Dependencies** — npm/bun packages used at build time or bundled into the output
- **Hosting configuration** — web server and deployment settings
