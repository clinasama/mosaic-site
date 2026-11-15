---
title: Hello, Mosaic
published: 2026-11-15
description: Windows 8 开始屏幕风格的 Astro 7 个人站点模板。
tags: [intro]
---

这是 mosaic-site 的默认演示内容。`pnpm dev` 打开即可看到完整的紫色开始屏幕。

## 这个站点是什么

一个用 Astro 7 构建的个人站点模板，界面语言来自 **Windows 8 开始屏幕**：

- 主页磁贴点击后翻转 90° 再进入对应页面
- `/posts/` 把每篇文章渲染成一个磁贴，标题直接写在色块上
- 深紫背景，Segoe UI Light 的字体气质
- 页面间切换用 Astro View Transitions，带横向位移动画

## 怎么用

| 想改什么 | 改哪里 |
|---|---|
| 站点标题、域名、作者 | `src/config/siteConfig.ts` |
| 首页磁贴 | `src/config/tileConfig.ts` |
| 文章 | `src/content/posts/*.md` |
| 主题色、字体 | `src/styles/metro.css` |

完整步骤见 `customize-in-5-minutes`。