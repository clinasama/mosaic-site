---
title: 部署到 Cloudflare Pages
published: 2026-11-15
description: 从 GitHub 仓库到自定义域名的完整流程。
tags: [deploy]
---

## 第 1 步：推仓库

```bash
git add -A
git commit -m "init"
git remote add origin git@github.com:<you>/mosaic-site.git
git push -u origin main
```

## 第 2 步：创建 Pages 项目

Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git。

| 项 | 值 |
|---|---|
| Framework preset | Astro |
| Build command | `pnpm build` |
| Build output directory | `dist` |
| Node version | 22 |

## 第 3 步：绑定域名

Custom domains → 添加域名，按提示加 CNAME。

`astro.config.mjs` 里的 `site` 必须和实际域名一致。

## 第 4 步：验证

```bash
curl https://clina.top/rss.xml | head -20
```

RSS 里的链接应该是绝对地址。