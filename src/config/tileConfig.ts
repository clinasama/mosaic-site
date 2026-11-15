// SPDX-License-Identifier: MPL-2.0
import type { TileConfig } from '@/types';

export const tileConfig: TileConfig[] = [
  { label: 'Home',   icon: 'fa7-solid:home',     href: '/posts/',  size: 'large',  color: 'var(--violet)'   },
  { label: 'GitHub', icon: 'fa7-brands:github',  href: 'https://github.com/clinasama', size: 'wide', color: 'var(--violet-3)' },
  { label: 'RSS',    icon: 'fa7-solid:rss',      href: '/rss.xml', size: 'medium', color: 'var(--violet-4)' },
  { label: 'Mail',   icon: 'fa7-solid:envelope', href: 'mailto:hi@clina.top', size: 'medium', color: 'var(--violet-5)' },
];