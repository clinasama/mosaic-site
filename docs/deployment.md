# Deployment

推荐 Cloudflare Pages：Framework 选 Astro，构建命令 `pnpm build`，输出 `dist`。

其他平台（Vercel / Netlify / GitHub Pages）见 `src/content/posts/other-hosting.md`。

部署前确认 `astro.config.mjs` 的 `site` 和实际域名一致。