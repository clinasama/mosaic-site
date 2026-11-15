// SPDX-License-Identifier: MPL-2.0
import { toString } from 'mdast-util-to-string';
import type { Root } from 'mdast';
import type { VFile } from 'vfile';

export function remarkReadingTime() {
  return (tree: Root, file: VFile) => {
    const text = toString(tree);
    const words = text.trim().split(/\s+/).filter(Boolean).length;
    const minutes = Math.max(1, Math.ceil(words / 200));
    file.data.astro = file.data.astro || {};
    (file.data.astro as any).frontmatter = {
      ...((file.data.astro as any).frontmatter || {}),
      readingTime: `${minutes} min`,
    };
  };
}