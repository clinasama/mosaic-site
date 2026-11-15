// SPDX-License-Identifier: MPL-2.0
export type TileSize = 'medium' | 'wide' | 'large';

export interface TileConfig {
  label: string;
  icon: string;
  href: string;
  size?: TileSize;
  color?: string;
}

export interface SiteConfig {
  title: string;
  domain: string;
  author: string;
  email: string;
  github: string;
  themeColor: {
    hue: number;
    fixed: boolean;
  };
}