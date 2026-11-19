# mosaic-site

A personal site template with a Windows 8 Start Screen UI. Built with Astro 7.

[![Use this template](https://img.shields.io/badge/Use%20this-template-blue)](https://github.com/yourusername/mosaic-site/generate)

Click **Use this template** to create your own repo. You get a working site
with demo posts — no configuration needed.

Live demo: <https://mosaic-example.netlify.app>

## Quick start

```bash
pnpm install
pnpm dev

Open http://localhost:4321/.
Customize
What	Where
Site title, domain, author, email	src/config/siteConfig.ts
Start screen tiles	src/config/tileConfig.ts
Comments (Giscus)	src/config/commentConfig.ts
Posts	src/content/posts/*.md
About / Friends page	src/content/spec/*.md
Theme colors, fonts	src/styles/metro.css
Custom remark/rehype	src/plugins/
Enabling comments

    Visit https://giscus.app and configure your repository.

    Copy the generated data-repo-id and data-category-id.

    Paste them into src/config/commentConfig.ts and set enabled: true.

License

Source code and demo content: MPL-2.0.