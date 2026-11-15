---
title: 5 分钟改成自己的站点
published: 2026-11-15
description: 从演示内容切换到个人内容的完整步骤。
tags: [guide]
---

## 第 1 分钟：改站点信息

打开 `src/config/siteConfig.ts`：

```ts
export const siteConfig: SiteConfig = {
  title: 'mosaic',
  domain: 'https://clina.top',
  author: 'clina',
  email: 'hi@clina.top',
  github: 'https://github.com/clinasama',
};
```

`domain` 必须和部署域名一致，否则 RSS 里的绝对链接会错。

## 第 2 分钟：改磁贴

`src/config/tileConfig.ts` 是一个数组。`size` 可选 `medium` / `wide` / `large`，`icon` 用 Iconify 名称（`fa7-solid:*` 或 `fa7-brands:*`）。

## 第 3 分钟：删演示文章

```bash
rm src/content/posts/*.md
```

然后新建自己的第一篇，`published` 是排序依据。

## 第 4 分钟：改配色

`src/styles/metro.css` 顶部的 `:root` 变量，改这几个就能整体换色。

## 第 5 分钟：验证

```bash
pnpm build && pnpm preview
```