# pragmaworks-site — Context Index

## Always Load
@.claude/core.md

## Navigate by Task

| Task | Node | When |
|---|---|---|
| Page structure, what exists, content sources | @.claude/site.md | Adding pages, updating content, checking what's live |
| Design system: colors, fonts, CSS patterns, i18n | @.claude/design.md | Styling pages, adding components, new page creation |

## Navigation Protocol

1. Read this file. Identify task domain.
2. Always read `.claude/core.md` first — site identity, deploy, invariants.
3. Load only the matching node. Do not load siblings.
4. For new pages: load both site.md (where it fits) + design.md (how to build it).
5. If no node matches, read core.md only and flag missing coverage.
