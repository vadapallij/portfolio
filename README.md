# Portfolio

Personal portfolio of Jagadeesh Vadapalli — AI/ML Engineer.

Built with Next.js 16 (App Router) + Tailwind v4, deployed as a static export to GitHub Pages at `/portfolio`.

## Develop

```bash
npm install
npm run dev          # http://localhost:3000
```

## Build

```bash
npm run build        # outputs static site to ./out
```

The `.github/workflows/deploy.yml` action builds and publishes `out/` to GitHub Pages on every push to `main`.

## Editing content

All page copy lives in [app/page.tsx](app/page.tsx). The `experience`, `projects`, `skills`, and `education` arrays at the top of that file are the single source of truth — edit them and the page updates.

Site metadata (title, description, OG tags) is in [app/layout.tsx](app/layout.tsx).
