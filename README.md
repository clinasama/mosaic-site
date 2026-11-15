# mosaic-site

A personal site with a Windows 8 Start Screen UI. Astro 7.

[![Use this template](https://img.shields.io/badge/Use%20this-template-blue)](https://github.com/clinasama/mosaic-site/generate)

Click **Use this template** to create your own repo. You get a working site
with 8 demo posts — no configuration needed.

## Quick start

```bash
pnpm install
pnpm dev
```

Open `http://localhost:4321/`.

## Customize

| What | Where |
|---|---|
| Site title, domain, author | `src/config/siteConfig.ts` |
| Start screen tiles | `src/config/tileConfig.ts` |
| Posts | `src/content/posts/*.md` |
| Theme colors, fonts | `src/styles/metro.css` |
| Custom remark/rehype | `src/plugins/` |

More: [`docs/getting-started.md`](./docs/getting-started.md)

## License

Source code and demo content: [MPL-2.0](./LICENSE).