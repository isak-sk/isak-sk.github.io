import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://iskoog.dev',
  markdown: {
    shikiConfig: { theme: 'github-light' },
  },
});
