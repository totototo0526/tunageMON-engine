# Task: YAML Driven Layout Blocks

## Objective
Convert hardcoded HTML sections in the TunageMON LP template (`TemplateA.astro` and Markdown files) into a fully dynamic, YAML-driven block architecture. This allows for unified, scalable generation of both Web Pages (Astro) and Presentation Slides (Typst) without duplicating component logic for every single theme.

## Goals
1. Establish a `blocks` array in the Markdown YAML Frontmatter.
2. Define a generic schema for these blocks in `content.config.ts`.
3. Create generic layout components (e.g., `BlockCards.astro`, `BlockBeforeAfter.astro`, `BlockFAQ.astro`) that handle presentation logic independent of the specific theme.
4. Update Typst PDF generator to loop through the blocks and dynamically create corresponding slides based on the block type.
5. Comment out or remove legacy hardcoded HTML text in all markdown files.
## Status
**Completed**: All legacy hardcoded HTML text in `07-theme.md` has been fully migrated to generic YAML blocks and rendered properly in both Web (Astro) and PDF (Typst).
