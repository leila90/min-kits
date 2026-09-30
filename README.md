# MinKits

Production-ready UI kits and reusable source-code components built with Next.js App Router, React 19, Tailwind CSS v4 and TypeScript.

Bilingual: English (`/en`) and Persian (`/fa`, RTL).

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000. The locale proxy redirects the root path using the `NEXT_LOCALE` cookie, then `Accept-Language`, and finally English.

## Scripts

| Script | Purpose |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Create the production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run TypeScript without emitting files |

## Structure

- `proxy.ts`: locale detection and redirects
- `content/site.ts`: single source of truth for site copy, navigation and blog content; designed to be replaceable by an API later
- `app/[lang]/`: localized routes and shared UI
- `app/fonts.ts`: optimized local font loading with `next/font/local`
- `app/sitemap.ts`, `app/robots.ts`: SEO metadata endpoints
- `public/`: static images, icons and video assets
- `.github/workflows/ci.yml`: lint, typecheck and production-build checks

## Content architecture

Pages and reusable sections receive typed content from `content/site.ts` instead of defining page copy locally. When the API is introduced, the UI contract can stay stable while the content provider changes.

## Requirements

Node.js >= 20.9.
