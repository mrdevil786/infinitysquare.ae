# Infinity Square AE

Marketing website for Infinity Square, a premium interior design studio crafting timeless, elegant spaces across the UAE.

## Tech stack

- [Astro](https://astro.build) 5 (static)
- [Tailwind CSS](https://tailwindcss.com) 4
- Deployed to **GitHub Pages** via GitHub Actions

## Local setup

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:4321`.

## Build and preview

```bash
npm run build
npm run preview
```

Production output is written to `./dist/`.

## Environment

| Variable     | Description |
| ------------ | ----------- |
| `SITE_BASE` | Optional. Base path for the site (e.g. `/infinitysquare.ae/` for GitHub Pages project sites). Defaults to `/`. See [Astro base](https://docs.astro.build/en/guides/deploy/github/). |

Set in the GitHub Actions workflow or locally in a `.env` file if needed.

## Deployment

The site is built and deployed to **GitHub Pages** by the workflow in [.github/workflows/astro.yml](.github/workflows/astro.yml):

- **Trigger:** Push to `main` or manual run from the Actions tab
- **Build:** `astro build` with `--site` and `--base` from the configure-pages action
- **Output:** Contents of `./dist` are uploaded as the Pages artifact

Ensure **Settings → Pages** is set to deploy from GitHub Actions.

## Contact form

The contact page uses **Netlify Forms** (`data-netlify="true"`). For submissions to work:

- Deploy the site on **Netlify**, or
- If you stay on GitHub Pages, point the form `action` to a third-party form backend (e.g. [Formspree](https://formspree.io)) and set the `action` URL accordingly.

## Project structure

```text
/
├── public/           # Static assets (favicon, etc.)
├── src/
│   ├── components/   # Header, Footer
│   ├── data/         # Site data (nav, contact, footer)
│   ├── layouts/      # Layout.astro
│   ├── pages/        # Astro pages (index, about, services, portfolio, contact, 404)
│   └── styles/       # global.css, Tailwind theme
├── astro.config.mjs
└── package.json
```
