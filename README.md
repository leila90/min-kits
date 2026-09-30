# MinKits

Production-ready UI kits landing site built with Next.js (App Router), React 19, Tailwind CSS v4 and TypeScript.
Bilingual: English (`/en`) and Persian (`/fa`, RTL).

## Getting started

```bash
cp .env.example .env.local
npm install
npm run dev
```

Open http://localhost:3000. You are redirected to your locale (cookie `NEXT_LOCALE`, then `Accept-Language`, then `en`).

## Scripts

| Script | Purpose |
|---|---|
| `npm run dev` | Dev server |
| `npm run build` | Production build (locales are statically generated) |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | `tsc --noEmit` |

## Structure

- `proxy.ts`: locale detection and redirect
- `app/[lang]/`: localized routes (`/`, `/about`, `/blog`, `/blog/[slug]`)
- `app/dictionaries/`: translation JSON files (`en.json`, `fa.json`)
- `app/sitemap.ts`, `app/robots.ts`: SEO
- `public/`: static assets

## Environment

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Public site URL used for canonical links and the sitemap |

Requires Node.js >= 20.9.
