// SPDX-License-Identifier: MPL-2.0
import { visit } from 'unist-util-visit';

export function rehypeImageLightbox() {
  return (tree) => {
    visit(tree, 'element', (node, index, parent) => {
      if (node.tagName !== 'img' || !parent) return;
      if (parent.tagName === 'a' && parent.properties && parent.properties['data-fancybox']) return;

      const src = node.properties?.src;
      if (!src) return;
      const alt = String(node.properties?.alt ?? '');

      // 注入响应式约束，保证缩放正常
      const prevStyle = node.properties?.style || '';
      node.properties.style = [
        prevStyle,
        'max-width: 100%',
        'height: auto',
        'display: block',
        'margin: 0',
      ].filter(Boolean).join('; ');

      // 包裹 <a data-fancybox="post">，让 Fancybox 有触发目标
      const link = {
        type: 'element',
        tagName: 'a',
        properties: {
          href: src,
          className: ['img-lightbox'],
          'data-fancybox': 'post',
          'data-caption': alt,
        },
        children: [node],
      };
      parent.children[index] = link;
    });
  };
}