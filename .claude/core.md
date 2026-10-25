# pragmaworks-site — Core

> Always loaded. Cross-domain truths only. Hard limit: 50 lines.

## Identity
- Live site: **pragmaworks.dev**
- Repo: `C:\workspace\PragmaWorks\pragmaworks-site\` → GitHub: `jghiringhelli/pragmaworks-site`
- Deploy: GitHub Pages (publishes on push to main; verified 2026-10-24 by the live `Server: GitHub.com` header). `vercel.json` is a leftover from the Vercel days: its redirects do NOT apply on GitHub Pages, so duplicate pages (sentinel, revenido) point their canonical to the replacement (mold, temper)
- Owner: PragmaWorks LLC · juan@pragmaworks.dev
- Tech: Pure HTML/CSS/JS. No build step. No package.json. No npm dependencies.

## Bilingual System
- Files: `i18n.js` + `i18n.css` (in repo root)
- Pattern: `<span lang="en">...</span><span lang="es">...</span>` — CSS hides inactive language via `html[lang]`
- Pre-render (no flash): inline script in each page `<head>` reads `localStorage.getItem('pragmaworks-lang')` or `navigator.language`
- Title/meta swap: `data-en` / `data-es` attributes on `<title>` and `<meta name="description">`
- Toggle UI: `<div class="lang-toggle"><button data-lang="en">EN</button><button data-lang="es">ES</button></div>`
- Language-specific pages (/diagnose vs /diagnostico): link to each other, no toggle needed

## Invariants
- Every page includes `<link rel="icon" type="image/svg+xml" href="favicon.svg">`
- Google Fonts on every page: Cinzel · Source Serif 4 · JetBrains Mono
- CSS custom properties defined inline per page (no shared stylesheet beyond i18n.css)
- Do NOT add bundlers, build tools, or npm packages
- Commit to main → GitHub Pages deploys automatically (no manual deploy step)

## Deploy Workflow
`git add <file> && git commit -m "feat(...): ..." && git push`
GitHub Pages picks it up. Done.

## SEO (added 2026-10-24)
- Every indexable page carries the `<!-- seo-tags -->` block (canonical, Open Graph, Twitter card) right after the favicon link; `og-image.png` (1200x630) is the share image; `index.html` carries the Organization/Person JSON-LD; `robots.txt` and `sitemap.xml` live in the root. A new page needs its own canonical, its sitemap line and a mobile check (no horizontal scroll at 390 px).
