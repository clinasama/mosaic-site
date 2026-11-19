// SPDX-License-Identifier: MPL-2.0
// ============================================================
// 评论系统配置
// 支持：none（关闭） | giscus
// 如需其他系统，扩展 CommentProvider 并实现对应组件
// ============================================================

export interface GiscusConfig {
  repo: `${string}/${string}`;
  repoId: string;
  category: string;
  categoryId: string;
  mapping: 'pathname' | 'title' | 'og:title' | 'specific' | 'number';
  reactionsEnabled: '0' | '1';
  inputPosition: 'top' | 'bottom';
  lang: string;
}

export type CommentProvider = 'none' | 'giscus';

export interface CommentConfig {
  enabled: boolean;
  provider: CommentProvider;
  giscus?: GiscusConfig;
}

export const commentConfig: CommentConfig = {
  enabled: false,
  provider: 'giscus',
  giscus: {
    // 在 https://giscus.app 配置你的仓库后获取以下值
    repo: 'yourusername/your-repo',
    repoId: 'R_kgDOxxxxxxx',
    category: 'Announcements',
    categoryId: 'DIC_kwDOxxxxxxx',
    mapping: 'pathname',
    reactionsEnabled: '1',
    inputPosition: 'top',
    lang: 'zh-CN',
  },
};