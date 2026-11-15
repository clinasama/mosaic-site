---
title: Metro 设计的几个取舍
published: 2026-11-15
description: 为什么这个模板看起来像 Windows 8。
tags: [design]
---

## 直角，没有圆角

`.tile` 的 `border-radius` 是 `0`。Win8 磁贴没有一处圆角。

## 字体要细

`body` 的 `font-weight: 300`。Segoe UI Light 的气质是**笔画细但字号大**。

## 翻转是「启动」不是「悬停」

点击先翻转 0.5s，再跳转。这和 Win8 点开一个 Metro 应用的节奏一致。

## 按压必须缩小

```css
.tile:active .tile-scene { transform: scale(.96); }
```

这一行是触摸感的来源。

## 配色不用渐变磁贴

磁贴是纯色块。唯一的渐变在页面背景。