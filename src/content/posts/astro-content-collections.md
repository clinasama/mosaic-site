---
title: Astro 7 的内容集合写法
published: 2026-11-15
description: 这个模板依赖的 Content Layer API。
tags: [astro]
---

## 配置文件位置

**`src/content.config.ts`**（`src/` 直下），不是 `src/content/config.ts`。

## 文章标识是 `id`，不是 `slug`

```astro
href={`/posts/${post.id}/`}
```

## 渲染用 `render(entry)`

```ts
import { getCollection, render } from 'astro:content';
const { Content } = await render(post);
```

不是 `await post.render()`。

## `.passthrough()` 的作用

从别的系统迁移文章时，未定义的 frontmatter 字段会导致整篇文章被静默丢弃。`.passthrough()` 允许未知字段通过。