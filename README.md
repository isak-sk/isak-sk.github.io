# iskoog.dev

Minimalist homepage, built with [Astro](https://astro.build).

## Structure

- `src/data/resume.ts` — intro, education, experience, projects, links.
- `src/pages/` — home, about, cv, projects, blog and `rss.xml`.
- `src/content/blog/` — blog posts as Markdown.
- `src/data/accounts.json` — GitHub accounts merged into the contribution graph.
- `src/styles/global.css` — global styles.

## Develop

```bash
npm install
npm run dev      # local dev server
npm run check    # type-check .astro files
npm run build    # production build -> dist/
```

## Deploy

Push to `main`. `.github/workflows/deploy.yml` builds the site and
publishes `dist/` via GitHub Pages.
