// SPDX-License-Identifier: MPL-2.0
import { execSync } from 'node:child_process';
import { existsSync, mkdirSync, rmSync, renameSync } from 'node:fs';
import { resolve } from 'node:path';
import { tmpdir } from 'node:os';

const REPO = process.env.CONTENT_REPO;
const TARGET = resolve('src/content');

if (!REPO) {
  console.log('ℹ 未配置 CONTENT_REPO，使用仓库内 src/content/ 内容。');
  console.log('  如需从独立内容仓库同步：');
  console.log('  CONTENT_REPO=https://github.com/you/your-content.git pnpm content:pull');
  process.exit(0);
}

const run = (cmd) => execSync(cmd, { stdio: 'inherit' });
const runQuiet = (cmd) => execSync(cmd, { encoding: 'utf8' }).trim();

if (existsSync(`${TARGET}/.git`)) {
  console.log('快进更新内容…');
  const dirty = runQuiet(`git -C ${TARGET} status --porcelain`);
  if (dirty) {
    console.warn('内容目录有未提交改动，跳过。');
    process.exit(0);
  }
  try {
    run(`git -C ${TARGET} pull --ff-only`);
    console.log('内容已更新');
  } catch {
    console.error('更新失败，保留现有内容。');
  }
  process.exit(0);
}

console.log('克隆内容仓库…');
const tmp = resolve(tmpdir(), `mosaic-content-${Date.now()}`);
try {
  run(`git clone ${REPO} "${tmp}"`);
} catch {
  console.error('克隆失败，保留仓库内现有内容。');
  process.exit(0);
}

if (existsSync(TARGET)) rmSync(TARGET, { recursive: true, force: true });
mkdirSync('src', { recursive: true });
renameSync(tmp, TARGET);
console.log('内容已替换：', TARGET);