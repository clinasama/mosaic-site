---
title: 图片与主题切换测试
published: 2026-11-15
description: 演示响应式图片、灯箱、亮暗主题下的图片反色。
tags: [test]
image: https://picsum.photos/seed/mosaic-cover/1200/675
---

这篇文章用来验证图片和主题切换。

## 正文图片

下面三张图用于检查不同宽高比在正文容器中的缩放行为。

![横图 16:9](https://picsum.photos/seed/wide/1600/900)

![方图 1:1](https://picsum.photos/seed/square/800/800)

![竖图 2:3](https://picsum.photos/seed/portrait/600/900)

点击任意一张图片，GLightbox 会在全屏打开，底部显示 alt 文本作为描述。

## 亮色主题反色测试

<img src="https://placehold.co/400x200/1a1a1a/ffffff?text=Dark+Logo" alt="反色测试" data-invert-on-light />

切换右上角主题按钮，这张图会反转为白底黑字，上面的照片不受影响。

## 代码块双主题

```js
const posts = await getCollection('posts');
const sorted = posts.sort((a, b) => +b.data.published - +a.data.published);
```

切换主题时，代码块配色跟着切换。

## Callouts

> 引用块在亮暗主题下使用左侧强调色边框。