// SPDX-License-Identifier: MPL-2.0
export function formatDate(input?: Date | string): string {
  if (!input) return '';
  const d = typeof input === 'string' ? new Date(input) : input;
  if (Number.isNaN(d.getTime())) return '';
  return d.toLocaleDateString('zh-CN', { year: 'numeric', month: '2-digit', day: '2-digit' });
}