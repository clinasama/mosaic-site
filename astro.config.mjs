// SPDX-License-Identifier: MPL-2.0
import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import expressiveCode from 'astro-expressive-code';
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers';
import { unified } from '@astrojs/markdown-remark';
import { remarkReadingTime } from './src/plugins/remark-reading-time.ts';
import remarkDirective from 'remark-directive';
import { remarkRepoCard } from './src/plugins/remark-repo-card.js';
import { rehypeImageLightbox } from './src/plugins/rehype-image-lightbox.mjs';

export default defineConfig({
  site: 'https://mosaic-example.netlify.app',
  image: {
    service: { entrypoint: 'astro/assets/services/noop' },
  },
  integrations: [
    expressiveCode({
      themes: ['one-dark-pro', 'one-light'],
      themeCssSelector: (theme) =>
        theme.type === 'dark' ? '[data-mode="dark"]' : '[data-mode="light"]',
      plugins: [pluginLineNumbers()],
      defaultProps: { showLineNumbers: true },
      styleOverrides: {
        borderRadius: '0px',
        codeFontFamily: "'JetBrains Mono Variable', 'Fira Code', monospace",
      },
    }),
    mdx(),
    sitemap(),
    icon(),
  ],
  markdown: {
    syntaxHighlight: false,
    processor: unified({
      remarkPlugins: [remarkDirective, remarkRepoCard, remarkReadingTime],
      rehypePlugins: [rehypeImageLightbox],
    }),
  },
  vite: {
    resolve: {
      alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
    },
  },
});