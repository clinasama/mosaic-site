#Requires -Version 7.0
$ErrorActionPreference = 'Stop'

if (-not (Test-Path 'package.json')) {
    throw '请在 mosaic-site 项目根目录执行'
}

function Write-File {
    param([string]$Path, [string]$Content)
    $parent = Split-Path $Path -Parent
    if ($parent -and -not (Test-Path $parent)) {
        New-Item -ItemType Directory -Path $parent -Force | Out-Null
    }
    [System.IO.File]::WriteAllText(
        (Join-Path (Get-Location) $Path),
        $Content,
        [System.Text.UTF8Encoding]::new($false)
    )
}

Write-Host '→ 修复 src/config/index.ts（补回 tileConfig 导出）' -ForegroundColor Cyan
Write-File 'src/config/index.ts' @'
// SPDX-License-Identifier: MPL-2.0
export { siteConfig } from './siteConfig';
export type { SiteConfig } from './siteConfig';

export { tileConfig } from './tileConfig';

export { commentConfig } from './commentConfig';
export type { CommentConfig, GiscusConfig, CommentProvider } from './commentConfig';
'@

Write-Host '→ 检查 tileConfig.ts 是否导出 tileConfig' -ForegroundColor Cyan
$tilePath = 'src/config/tileConfig.ts'
if (-not (Test-Path $tilePath)) {
    throw "找不到 $tilePath"
}
$tile = Get-Content -LiteralPath $tilePath -Raw
if ($tile -notmatch 'export\s+const\s+tileConfig') {
    Write-Host '  ⚠ tileConfig.ts 中没有 export const tileConfig，正在补写' -ForegroundColor Yellow
    Write-File 'src/config/tileConfig.ts' @'
// SPDX-License-Identifier: MPL-2.0
import type { TileConfig } from '@/types';

export const tileConfig: TileConfig[] = [
  { label: 'Home',    icon: 'fa7-solid:home',       href: '/posts/',   size: 'large',  color: 'var(--accent)'   },
  { label: 'About',   icon: 'fa7-solid:user',       href: '/about/',   size: 'medium', color: 'var(--accent-2)' },
  { label: 'Friends', icon: 'fa7-solid:user-group', href: '/friends/', size: 'medium', color: 'var(--accent-3)' },
  { label: 'GitHub',  icon: 'fa7-brands:github',    href: 'https://github.com/yourusername', size: 'wide', color: 'var(--accent-3)' },
  { label: 'RSS',     icon: 'fa7-solid:rss',        href: '/rss.xml',  size: 'medium', color: 'var(--accent-4)' },
  { label: 'Mail',    icon: 'fa7-solid:envelope',   href: 'mailto:hello@example.com', size: 'medium', color: 'var(--accent-5)' },
];
'@
} else {
    Write-Host '  ✓ tileConfig.ts 已包含正确导出' -ForegroundColor Green
}

Write-Host ''
Write-Host '→ 检查全仓是否还有从 @/config 导入但未被导出的符号' -ForegroundColor Cyan
$configIndex = Get-Content -LiteralPath 'src/config/index.ts' -Raw
$exported = @()
[regex]::Matches($configIndex, 'export\s+\{\s*([^}]+)\s*\}') | ForEach-Object {
    $_.Groups[1].Value -split ',' | ForEach-Object {
        $exported += ($_ -replace '\s+', '').Trim()
    }
}
Write-Host "  已导出：$($exported -join ', ')" -ForegroundColor DarkGray

$files = Get-ChildItem -Path 'src' -Recurse -File -Include '*.astro','*.ts' |
    Where-Object { $_.FullName -notmatch '\\content\\' -and $_.Name -ne 'index.ts' }

$missing = @()
foreach ($f in $files) {
    $content = Get-Content -LiteralPath $f.FullName -Raw
    $importMatches = [regex]::Matches($content, "import\s+\{([^}]+)\}\s+from\s+['""]@/config['""]")
    foreach ($m in $importMatches) {
        $names = $m.Groups[1].Value -split ',' | ForEach-Object { ($_ -replace '\s+', '').Trim() }
        foreach ($name in $names) {
            if ($name -and $exported -notcontains $name) {
                $missing += "$($f.Name): $name"
            }
        }
    }
}

if ($missing) {
    Write-Host '  发现未导出的符号：' -ForegroundColor Yellow
    $missing | ForEach-Object { Write-Host "    $_" }
} else {
    Write-Host '  ✓ 所有从 @/config 导入的符号都已导出' -ForegroundColor Green
}

Write-Host ''
Write-Host '→ 运行 pnpm check' -ForegroundColor Cyan
pnpm check
if ($LASTEXITCODE -ne 0) {
    Write-Host '✗ pnpm check 失败，请检查上方输出' -ForegroundColor Red
    exit 1
}

Write-Host ''
Write-Host '✓ 修复完成：' -ForegroundColor Green
Write-Host '  src/config/index.ts  已补回 tileConfig 导出'
Write-Host '  首页磁贴 .map() 应恢复正常'
Write-Host ''
Write-Host '验证：pnpm dev → 打开 / 应看到 6 个磁贴'