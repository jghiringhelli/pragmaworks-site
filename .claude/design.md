# pragmaworks-site — Design System

> Load when: styling any page, adding components, creating new pages.

## Color Tokens (copy into each page's :root)

```css
--ember:       #C44B1A;   /* primary accent, CTA borders, arrows */
--ember-glow:  #E8652E;   /* hover states */
--molten:      #F4A623;   /* secondary accent, prompt-box left border */
--iron:        #2C2C2E;   /* body text on light pages */
--steel:       #48484A;   /* secondary text on light pages */
--smoke:       #8E8E93;   /* muted text, footnotes, nav links */
--ash:         #D1D1D6;   /* table header text (dark bg) */
--parchment:   #F5F0E8;   /* light page background */
--forge-dark:  #1A1611;   /* dark elements: table headers, code boxes */
--midnight:    #0D0B09;   /* dark page background (index.html, manifesto.html) */
--blue-steel:  #4A6580;   /* transformative tier indicator */
--tempered:    #6B8F71;   /* structural tier / ok/success state */
```

## Two Themes

**Light** (parchment bg, iron text): try, leaders, teams, start, cookbook, diagnose, diagnostico
**Dark** (midnight bg, ash text): index, manifesto

## Typography

| Element | Font | Size | Color | Notes |
|---|---|---|---|---|
| h1 | Cinzel 700 | clamp(28px,5vw,42px) | forge-dark (light) / parchment (dark) | |
| h2 | Cinzel 700 | 26px | forge-dark | border-top: 2px solid ember; padding-top: 24px |
| h3 | Cinzel 700 | 17px | forge-dark | margin: 32px 0 8px |
| body | Source Serif 4 300-400 | 16px | iron (light) / ash (dark) | line-height: 1.55 |
| eyebrow / label | JetBrains Mono | 11px | ember | letter-spacing: 0.35em; uppercase |
| nav links | JetBrains Mono | 0.7rem | smoke | letter-spacing: 0.2em; uppercase |
| code / cmd | JetBrains Mono | 13-14px | molten on forge-dark bg | |

## Key Component Patterns

### Eyebrow
```html
<span class="eyebrow">Section Label</span>
```
Above h1/h2. JetBrains Mono, 11px, ember, 0.35em letter-spacing, uppercase.

### Tables (light pages)
- `th`: forge-dark bg, ash text, JetBrains Mono 10px uppercase, letter-spacing 0.2em
- `td:first-child` (# col): JetBrains Mono 13px, ember, width: 32px
- `td`: Source Serif 4 15px, border-bottom: 1px solid rgba(44,44,46,0.08)
- `tr:hover td`: background: rgba(196,75,26,0.025)
- Wrap in `.table-wrap { overflow-x: auto }` for mobile

### Tier/Severity header strip (above each table group)
```html
<div class="tier-header tier-transformative">💎 Transformative <small>— subtitle</small></div>
```
Colors:
- `.tier-transformative`: bg rgba(74,101,128,0.12), color blue-steel, border-left blue-steel
- `.tier-amplifying`: bg rgba(244,166,35,0.10), color #8B6914, border-left molten
- `.tier-structural`: bg rgba(107,143,113,0.10), color tempered, border-left tempered
- `.sev-critical`: bg rgba(196,75,26,0.08), color ember, border-left ember
- `.sev-high`: bg rgba(232,101,46,0.08), color #A0441A, border-left ember-glow
- `.sev-medium`: bg rgba(244,166,35,0.08), color #8B6914, border-left molten

### Code/audit command box
```html
<code class="audit-cmd">npx pragmaworks audit</code>
```
forge-dark bg, molten text, JetBrains Mono 13px, padding: 10px 16px, border-radius: 2px.

### Buttons
```html
<a href="..." class="btn btn-primary">Primary CTA →</a>
<a href="..." class="btn btn-secondary">Secondary CTA</a>
```
JetBrains Mono, 12px, 0.15em letter-spacing, uppercase. Primary: ember bg, parchment text. Secondary: ember border, ember text, transparent bg.

### i18n Pattern (bilingual pages)
```html
<!-- In <head> -->
<link rel="stylesheet" href="/i18n.css">
<script>(function(){var s=null;try{s=localStorage.getItem('pragmaworks-lang');}catch(e){}var b=(navigator.language||'en').toLowerCase().split('-')[0];document.documentElement.lang=(s==='en'||s==='es')?s:(b==='es'?'es':'en');})();</script>
<script src="/i18n.js" defer></script>

<!-- Content -->
<span lang="en">English text</span><span lang="es">Spanish text</span>

<!-- Toggle -->
<div class="lang-toggle">
  <button data-lang="en">EN</button>
  <button data-lang="es">ES</button>
</div>
```

### Language-specific pages (/diagnose ↔ /diagnostico)
No i18n toggle. Cross-link in nav:
```html
<!-- In diagnose.html nav -->
<a href="/diagnostico" class="lang-link">ES</a>
<!-- In diagnostico.html nav -->
<a href="/diagnose" class="lang-link">EN</a>
```
