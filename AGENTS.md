# Agent notes

This repo is a **GitHub Template** for a Windows 8 Metro-style Astro blog.
Anyone creating a repo from it gets a working site with demo content.

## Do not

- Do not move `src/content.config.ts` into `src/content/`.
- Do not replace `post.id` with `post.slug` (Astro 7 removed `slug`).
- Do not change `glob({ base })` paths — they are relative to project root.
- Do not remove `.passthrough()` from the schema; it keeps unknown
  frontmatter fields from silently dropping posts.

## Where to change things

- Site metadata → `src/config/siteConfig.ts`
- Start screen tiles → `src/config/tileConfig.ts`
- Posts → `src/content/posts/*.md`
- Theme → `src/styles/metro.css`
- Custom remark/rehype → `src/plugins/`

## Verify

    pnpm install
    pnpm build