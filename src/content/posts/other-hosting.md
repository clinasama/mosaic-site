---
title: 其他托管平台
published: 2026-11-15
description: Vercel、Netlify、GitHub Pages 的配置要点。
tags: [deploy]
---

`mosaic-site` 是纯静态输出，`dist/` 目录可以直接托管到任何静态平台。

## Vercel

导入仓库，Framework 自动识别为 Astro，构建命令 `pnpm build`，输出 `dist`。

## Netlify

`netlify.toml`：

```toml
[build]
  command = "pnpm build"
  publish = "dist"
```

## GitHub Pages

在 `.github/workflows/ci.yml` 基础上增加部署步骤，或用 `withastro/action`。注意 `astro.config.mjs` 的 `site` 要设为 Pages 域名。