# pragmaworks-site — Page Inventory

> Load when: adding pages, updating content, checking what pages exist and who owns them.

## Page Map

| URL | File | Status | Content source | Bilingual |
|---|---|---|---|---|
| `/` | index.html | ✅ live | Self-contained | No (EN only) |
| `/try` | try.html | ✅ live | Self-contained | Yes (i18n.js) |
| `/leaders` | leaders.html | ✅ live | Self-contained | Yes (i18n.js) |
| `/teams` | teams.html | ✅ live | Self-contained | Yes (i18n.js) |
| `/start` | start.html | ✅ live | Self-contained | Yes (i18n.js) |
| `/cookbook` | cookbook.html | ✅ live | Self-contained | Yes (i18n.js) |
| `/diagnose` | diagnose.html | ✅ live | `soma/docs/marketing/diagnostico-page-en.md` | No (EN-specific page) |
| `/diagnostico` | diagnostico.html | ✅ live | `soma/docs/marketing/diagnostico-page-es.md` | No (ES-specific page) |
| `/manifesto` | manifesto.html | ✅ live | `soma/docs/marketing/gs-manifesto.md` | No (EN, add ES later) |

All pages in this repo are owned and maintained by PragmaWorks LLC.

## Content Update Workflow

For `/diagnose`, `/diagnostico`, `/manifesto`:
1. The markdown in soma is the source of truth for content
2. When the markdown changes, the corresponding HTML must be updated
3. After updating HTML: `git add <file> && git commit && git push`

## Nav Structure

- `index.html`: sticky dark nav, anchors (#research, #tools, #training, #writing, #contact)
- `try.html` / `leaders.html` / `cookbook.html` / `teams.html` / `start.html`: no sticky nav, light theme, `.container` layout
- `diagnose.html` / `diagnostico.html`: sticky light nav (brand + section anchors + language link)
- `manifesto.html`: sticky dark nav (brand + back to home)
