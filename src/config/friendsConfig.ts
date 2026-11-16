// SPDX-License-Identifier: MPL-2.0
export interface FriendLink {
  title: string;
  imgurl: string;
  desc: string;
  siteurl: string;
  tags?: string[];
  weight: number;
  enabled: boolean;
}

export const friendsPageConfig = {
  title: 'Friends',
  description: 'Links to sites I read and people I know.',
  showCustomContent: true,
  columns: 3,
};

export const friendsConfig: FriendLink[] = [
  {
    title: 'Clina 的记事本',
    imgurl: 'https://image.clina.top/images/avatar.webp',
    desc: '一个博客站点',
    siteurl: 'https://clina.top',
    tags: ['Blog'],
    weight: 10,
    enabled: true,
  },
  {
    title: 'Astro',
    imgurl: 'https://avatars.githubusercontent.com/u/44914786',
    desc: 'The web framework for content-driven websites.',
    siteurl: 'https://github.com/withastro/astro',
    tags: ['Framework'],
    weight: 8,
    enabled: true,
  },
];

export function getEnabledFriends(): FriendLink[] {
  return friendsConfig
    .filter((f) => f.enabled)
    .sort((a, b) => b.weight - a.weight);
}

export function getAllTags(friends: FriendLink[]): string[] {
  const set = new Set<string>();
  friends.forEach((f) => f.tags?.forEach((t) => set.add(t)));
  return Array.from(set).sort();
}