# Kushari Desilva Portfolio

A statically exported Next.js portfolio hosted with Cloudflare Workers Static Assets.

## Local development

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). To preview the production export with Cloudflare's local server, run `npm run start` and open the URL printed by Wrangler (normally `http://127.0.0.1:8787`).

## Checks

```bash
npm run lint
npm run type-check
npm run build
```

The static site is exported to `out/`. Large source PNGs are retained in `public/images/`; the site uses optimized WebP versions. `public/.assetsignore` keeps the original PNGs out of Cloudflare's asset upload.

## Deploy to Cloudflare

Authenticate once with `npx wrangler login`, then run:

```bash
npm run deploy:workers
```

The Worker name and static asset directory are set in `wrangler.jsonc`. The deployment URL is printed by Wrangler. The contact form opens a prefilled message in the visitor's email app, so no server or email API is required.
