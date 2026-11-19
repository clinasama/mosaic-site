// SPDX-License-Identifier: MPL-2.0
// ============================================================
// 通用站点配置 - Fork 后修改此文件即可个性化你的站点
// 评论系统配置见 src/config/commentConfig.ts
// ============================================================
export const siteConfig = {
  // --- 基本信息 ---
  title: 'mosaic',
  domain: 'https://example.com',
  author: 'Your Name',
  email: 'hello@example.com',
  github: 'https://github.com/yourusername',

  // --- 主题色 ---
  themeColor: {
    hue: 300,
    fixed: false,
  },

  // --- 许可证 ---
  license: {
    enabled: true,
    defaultName: 'CC BY-NC-SA 4.0',
    defaultUrl: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
  },
} as const;

export type SiteConfig = typeof siteConfig;