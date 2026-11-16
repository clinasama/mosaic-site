// SPDX-License-Identifier: MPL-2.0
import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.looseObject({
    title: z.string(),
    published: z.coerce.date().optional(),
    pubDate: z.coerce.date().optional(),
    updated: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    description: z.string().optional(),
    tags: z.array(z.string()).default([]),
    category: z.string().optional(),
    cover: z.string().optional(),
    image: z.string().optional(),
    pinned: z.boolean().default(false),
    slug: z.string().optional(),
    lang: z.string().optional(),
    author: z.string().optional(),
    comment: z.boolean().default(true),
    licenseName: z.string().optional(),
    licenseUrl: z.string().optional(),
    sourceLink: z.string().optional(),
    password: z.string().optional(),
    passwordHint: z.string().optional(),
  }),
});

const spec = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/spec' }),
  schema: z.looseObject({}),
});

export const collections = { posts, spec };