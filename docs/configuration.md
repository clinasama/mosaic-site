# Configuration

## 站点信息

`src/config/siteConfig.ts`：标题、域名、作者、邮箱、GitHub。

## 磁贴

`src/config/tileConfig.ts`：首页每一块磁贴的 `label` / `icon` / `href` / `size` / `color`。

## 文章

`src/content/posts/*.md`，frontmatter 字段见 `src/content.config.ts`。

## 主题

`src/styles/metro.css` 顶部的 CSS 变量。

## 扩展

- 自定义 remark/rehype 插件放 `src/plugins/`，在 `astro.config.mjs` 注册
- 工具函数放 `src/utils/`