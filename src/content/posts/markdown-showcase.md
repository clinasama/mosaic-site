---
title: Markdown 示例
published: 2026-11-15
description: 演示文章页对各类 Markdown 语法的渲染效果。
tags: [guide]
---

## 标题

### 三级标题

段落文字。中文和 English 混排，字体回退到 Noto Sans SC Variable。

## 列表

- 无序列表项
- 第二项
  - 嵌套项

1. 有序列表
2. 第二项

## 引用

> 引用块用左边框标记。

## 代码

行内代码：`npm run dev`。

```js
const posts = await getCollection('posts');
posts.sort((a, b) => +b.data.published - +a.data.published);
```

## 表格

| 尺寸 | 像素 | 用途 |
|---|---|---|
| medium | 150×150 | 常规文章 |
| wide | 308×150 | 重要文章 |
| large | 308×308 | 最新一篇 |