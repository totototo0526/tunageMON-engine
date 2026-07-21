# TunageMON LP v2 Architecture

## Current Status
- **CMS Migration Completed:** Transformed the codebase from a static HTML structure to a Markdown-driven static site using Astro.
- **Template Engine Active:** Created `TemplateA.astro` layout and extracted `LPHero`, `LPProblems`, `LPPricing` as dynamic UI components.
- **Dynamic Content Injection:** Content schemas extended via `content.config.ts` to support nested objects (pricing, solution lists, arrays).
- **Original Layout Restored (2026-07-21):** Restored all intermediate and remaining sections from the original Hara-san HTML design directly into `TemplateA.astro` to ensure full layout parity with the original mockups (Solution, Scenarios, Features, Comparisons, Security, FAQ, Contact).

## Core Philosophy
1. **CMS-Driven Flexibility:** Any newly created theme should only require editing a single Markdown file (`0x-theme.md`). Layout logic stays within Astro components.
2. **Scalability:** The platform should dynamically support an arbitrary number of integration themes.
3. **Graceful Fallbacks:** Components should conditionally render based on the presence of data, ensuring clean presentation even when optional frontmatter data is missing.
4. **Standardized Operations:** Focus on establishing standardized operational workflows (documented in `docs/`) for adding themes rather than altering source code manually.

## Task List
- [x] Extract core UI blocks into Astro components.
- [x] Configure Content Collections and Zod schemas for validation.
- [x] Update Portal UI (index) to dynamically reflect the number of available themes.
- [x] Populate all 7 themes with foundational Markdown structures.
- [x] Restore original extended layout sections (FAQ, Security, Flow, Scenarios) to `TemplateA.astro`.
- [ ] Refactor newly restored layout sections into standalone Astro components (e.g., `LPFAQ.astro`, `LPScenarios.astro`) to enable conditional rendering based on Markdown frontmatter content.
- [ ] Consolidate newly provided imagery into `web/public/assets/` and bind relative paths within Markdown structures.
