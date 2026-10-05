# MinKits

Production-ready UI kits and components for React, Next.js and Tailwind CSS.

MinKits supports English (`/en`) and Persian (`/fa`) with RTL-aware routing.

## Stack

- Next.js 16 — App Router
- React 19
- TypeScript
- Tailwind CSS v4
- Headless UI
- Heroicons
- Framer Motion
- Lenis

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000. Requests without a locale are redirected to the detected locale using the `NEXT_LOCALE` cookie, then `Accept-Language`, with English as the fallback.

## Scripts

| Script | Purpose |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run TypeScript without emitting files |

## Structure

- `app/[lang]/` — localized App Router pages and UI components
- `app/dictionaries/` — English and Persian translations
- `app/robots.ts` — robots metadata
- `app/sitemap.ts` — localized sitemap
- `proxy.ts` — locale detection and routing
- `public/` — static images, video and other assets

## Environment

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical public URL used by metadata, robots and sitemap |

Requires Node.js 20.9 or newer.

## UI architecture

- `components/ui/` contains reusable primitives.
- `components/registry/` is the single source of truth for the public component catalog, metadata, props, examples and source-file mapping.
- `components/sections/componentCatalog/` renders catalog browsing, previews, source tabs and detail navigation from the registry.
- `/[lang]/search` provides locale-aware search across components, component packs and blog posts.
- Component pages are statically generated from the registry, with canonical and language alternates.
