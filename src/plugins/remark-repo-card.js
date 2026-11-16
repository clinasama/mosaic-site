// SPDX-License-Identifier: MPL-2.0
import { visit } from 'unist-util-visit';

export function remarkRepoCard() {
  return (tree) => {
    visit(tree, 'containerDirective', (node) => {
      if (node.name !== 'github' && node.name !== 'codeberg') return;
      const repo = node.attributes?.repo;
      if (!repo) return;

      const platform = node.name;
      const data = node.data || (node.data = {});
      data.hName = 'div';
      data.hProperties = {
        className: ['repo-card-placeholder'],
        'data-platform': platform,
        'data-repo': repo,
      };
    });
  };
}