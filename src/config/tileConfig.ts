// SPDX-License-Identifier: MPL-2.0
import type { TileConfig } from '@/types';

export const tileConfig: TileConfig[] = [
  { label: 'Blog', icon: 'fa7-solid:blog', href: '/posts/', size: 'large', color: 'var(--violet)' },
  { label: 'GitHub', icon: 'fa7-brands:github',  href: 'https://github.com/clinasama', size: 'wide', color: 'var(--violet-3)' },
  { label: 'RSS',    icon: 'fa7-solid:rss',      href: '/rss.xml', size: 'medium', color: 'var(--violet-4)' },
  { label: 'Mail',   icon: 'fa7-solid:envelope', href: 'mailto:hi@clina.top', size: 'medium', color: 'var(--violet-5)' },
  { label: 'About', icon: 'fa7-solid:user', href: '/about/', size: 'medium', color: 'var(--violet-2)' },
  { label: 'Friends', icon: 'fa7-solid:users', href: '/friends/', size: 'wide', color: 'var(--violet-3)' },
];