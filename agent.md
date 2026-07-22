# TunageMON LP v2 Architecture

## Current Status
- **CMS Migration Completed:** Transformed the codebase from a static HTML structure to a Markdown-driven static site using Astro.
- **Template Engine Active:** Created `TemplateA.astro` layout and extracted `LPHero`, `LPProblems`, `LPPricing` as dynamic UI components.
- **Fully YAML-Driven Architecture Completed:** Completely eliminated hardcoded HTML from Markdown files. Replaced with dynamic YAML blocks (`BlockChatDemo`, `BlockReasoningGrid`, etc.).
- **CMS Integration:** Integrated Decap CMS (`public/admin`) to allow local and remote non-technical editing. Astro preview pane disabled for full-screen editing UI.
- **Universal Output Sync:** Built `build.sh` pipeline to successfully render identical presentation PDFs via Typst alongside the Astro static site using a single YAML source.
- **Roadmap & GitHub CMS Backend Integration Completed:** Configured Decap CMS for GitHub backend (Plan A) in `config.yml` while maintaining local backend compatibility. Authored full OAuth setup and team operation documentation under `docs/github_cms_backend/`.

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
- [x] Refactor layout sections into standalone Astro components (e.g., `BlockFAQ.astro`, `BlockScenarios.astro`) to enable conditional rendering based on Markdown frontmatter `blocks`.
- [x] Integrate local CMS to manage the complex YAML block schema.
- [x] Validate Typst PDF compilation and layout sync against the new unified YAML data structure.
- [x] Roll out the fully YAML-ized structure to themes `01-theme` to `06-theme`.
- [x] Make Header dynamic (context-aware links and dynamic theme counts).
- [x] Phase 1: Establish safe phased development roadmap & docs (`docs/github_cms_backend/`).
- [x] Phase 2: Verify asset path references & data generation pipeline (`generate-theme-json.mjs`).
- [x] Phase 3: Prepare Decap CMS `github` backend configuration & auth options (`github_oauth_setup_guide.md`).
- [x] Phase 4: Final verification & team operational documentation (`team_operation_guide.md`).
- [x] VPS Setup 1: Verify documentation & prepare `docs/vps_environment_setup/` (`task.md`, `implementation_plan.md`, `walkthrough.md`).
- [x] VPS Setup 2: Install node dependencies with Node 22 (`bin/node`, `cd web && npm install`).
- [x] VPS Setup 3: Verify build pipeline (`./build.sh`, `generate-theme-json.mjs`, Typst PDF compilation, Astro build, Production ZIP).
- [x] VPS Setup 4: Test & prepare Decap CMS on VPS environment (`npx decap-server` / OAuth proxy).
