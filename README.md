# iskoog.dev

Minimalist homepage, built with [Astro](https://astro.build).

## Structure

- `src/data/resume.ts` — education, experience, projects, links. Edit
  arrays here to update content; no markup to touch.
- `src/pages/index.astro` — page layout, maps the data above onto markup.
- `src/components/Terminal.astro` — the little "poke around" terminal
  widget at the bottom of the page. Self-contained; add commands to the
  `commands` object in its `<script>`.
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

**One-time setup:** in the repo's Settings → Pages, set "Source" to
"GitHub Actions" (it's currently set to deploy the branch directly,
which won't pick up the build output).
