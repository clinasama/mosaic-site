// SPDX-License-Identifier: MPL-2.0
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { siteConfig } from '@/config';

export async function GET(context: APIContext) {
  const posts = await getCollection('posts', ({ data }) => !data.draft);
  return rss({
    title: siteConfig.title,
    description: 'mosaic site',
    site: context.site ?? siteConfig.domain,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.published ?? post.data.pubDate ?? new Date(),
      link: `/posts/${post.id}/`,
    })),
  });
}