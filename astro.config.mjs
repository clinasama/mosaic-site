// SPDX-License-Identifier: MPL-2.0
import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import expressiveCode from 'astro-expressive-code';
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers';
import { unified } from '@astrojs/markdown-remark';
import rehypeCallouts from 'rehype-callouts';
import rehypeCodeGroup from 'rehype-code-group';
import { remarkReadingTime } from './src/plugins/remark-reading-time.ts';

export default defineConfig({
  site: 'https://clina.top',
  integrations: [
    expressiveCode({
      themes: ['one-dark-pro'],
      plugins: [pluginLineNumbers()],
      defaultProps: { showLineNumbers: true },
      styleOverrides: {
        borderRadius: '0px',
        frames: { editorBackground: '#0d0616' },
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
      remarkPlugins: [remarkReadingTime],
      rehypePlugins: [rehypeCallouts, rehypeCodeGroup],
    }),
  },
  vite: {
    resolve: {
      alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
    },
  },
});