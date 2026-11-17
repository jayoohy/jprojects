## Relevant Files

- `project-1/tasks/prd-creator-showcase-site.md` - The PRD these tasks implement.
- `project-1/package.json` - Dependencies and scripts (Next.js, animation libraries, test tooling).
- `project-1/src/projects/debby/data/creator.ts` - The single data file: Debby Masqiat's name, niche, pitch, work, stats, services, process, brands, TikTok DM link. All marked as sample content.
- `project-1/src/data/creator.test.ts` - Tests that the data file has the required fields and marks sample content.
- `project-1/src/app/page.tsx` - Home page; only composes section components.
- `project-1/src/app/layout.tsx` - Fonts, metadata, global wrapper.
- `project-1/src/app/globals.css` - Colour tokens, typography, base styles.
- `project-1/src/components/layout/StickyHireButton.tsx` - Floating "Work with me" button visible on every section.
- `project-1/src/components/hero/Hero.tsx` - Hero section.
- `project-1/src/components/hero/HeroScene.tsx` - Lazy-loaded WebGL element.
- `project-1/src/components/hero/HeroSceneFallback.tsx` - CSS 3D fallback when WebGL or motion is unavailable.
- `project-1/src/components/work/WorkSection.tsx` - Work section.
- `project-1/src/components/work/WorkCard.tsx` - Tilting work card.
- `project-1/src/components/numbers/NumbersSection.tsx` - Count-up stats section.
- `project-1/src/components/numbers/StatCounter.tsx` - Single animated stat.
- `project-1/src/components/services/ServicesSection.tsx` - Service packages section.
- `project-1/src/components/services/ServiceCard.tsx` - Single service package.
- `project-1/src/components/process/ProcessSection.tsx` - How we'll work together.
- `project-1/src/components/brands/BrandsStrip.tsx` - Sample brands strip.
- `project-1/src/components/contact/ContactSection.tsx` - Closing section with the hire button.
- `project-1/src/components/ui/HireButton.tsx` - Shared button that opens the TikTok DM link in a new tab.
- `project-1/src/components/ui/HireButton.test.tsx` - Tests that the link opens in a new tab and has no form.
- `project-1/src/hooks/useReducedMotion.ts` - Reads the reduced-motion preference.
- `project-1/src/hooks/useTilt.ts` - Pointer and touch tilt logic.
- `project-1/src/hooks/useCountUp.ts` - Count-up animation when scrolled into view.
- `project-1/src/hooks/useInView.ts` - Scroll-triggered entrance helper.
- `project-1/src/hooks/useCountUp.test.ts` - Tests for count-up behaviour.
- `project-1/src/utils/formatNumber.ts` - Formats views and follower counts (for example 1.2M).
- `project-1/src/utils/formatNumber.test.ts` - Unit tests for `formatNumber.ts`.
- `project-1/docs/pm/creator-showcase-prd.md` - Copy or pointer to the PRD for the project-manager gate (optional).
- `project-1/docs/design/creator-showcase-design-spec.md` - Design spec: states, responsive rules, microcopy.
- `project-1/docs/engineering/creator-showcase-impl-notes.md` - Implementation notes for the security handoff.
- `project-1/docs/security/creator-showcase-security-review.md` - Security review.
- `project-1/README.md` - How to run, build, and deploy.
- `project-1/CHANGELOG.md` - Changelog entry for v1.

### Notes

- Unit tests sit beside the code they test (for example `formatNumber.ts` and `formatNumber.test.ts`).
- Use `npx jest [optional/path/to/test/file]` to run tests. Running without a path runs all tests.
- Per the code-separation rule: sections are components, animation logic is in hooks, content is in the data file, helpers are in utils, and the page only composes components.
- The build must stay inside about 2 hours. If a task runs long, cut features, not the deadline.
- All people, brands, and numbers are fictional sample content. Never put secrets in this project or paste them into a chat.
- Design skills for the build: `high-end-visual-design`, `ui-ux-pro-max`, `design-taste-frontend`, and `three` for the WebGL element.

## Instructions for Completing Tasks

**IMPORTANT:** As you complete each task, you must check it off in this markdown file by changing `- [ ]` to `- [x]`. This helps track progress and ensures you don't skip any steps.

Example:
- `- [x] 1.1 Read file` → `- [x] 1.1 Read file` (after completing)

Update the file after completing each sub-task, not just after completing an entire parent task.

## Tasks

- [x] 0.0 Create feature branch
  - [x] 0.1 Run `git init` inside `project-1` (it is not a repository yet)
  - [x] 0.2 Create and checkout `feature/creator-showcase-site`

- [x] 1.0 Project setup: Next.js app, folder structure, and the sample-content data file
  - [x] 1.1 Create the Next.js app (TypeScript) in `project-1`
  - [x] 1.2 Add folders: `components/`, `hooks/`, `utils/`, `data/` under `src/`
  - [x] 1.3 Install animation libraries (Framer Motion or GSAP) and Three.js with React Three Fiber
  - [x] 1.4 Set up the test runner and add a `test` script
  - [x] 1.5 Write `src/projects/debby/data/creator.ts` with Debby Masqiat's sample content: pitch, 3 to 6 work items, 3 to 4 stats, 3 services, 3 to 4 process steps, sample brands, placeholder TikTok link
  - [x] 1.6 Mark every number and brand in the data file as sample content
  - [x] 1.7 Write `creator.test.ts` checking required fields exist and sample flags are set
  - [x] 1.8 Add `.gitignore` entries for env files and build output

- [x] 2.0 Design system: palette, typography, and shared motion hooks
  - [x] 2.1 Define at least 4 accent colours plus background and text tokens in `globals.css`
  - [x] 2.2 Check text and background contrast pairs meet WCAG AA
  - [x] 2.3 Choose and load a distinctive display typeface plus a readable body font
  - [x] 2.4 Write `useReducedMotion` and use it to switch off looping and parallax motion
  - [x] 2.5 Write `useInView` for scroll-triggered entrances
  - [x] 2.6 Write `useTilt` for pointer and touch tilt
  - [x] 2.7 Write `formatNumber` and its tests

- [x] 3.0 Hero section with 3D visual and the sticky hire button
  - [x] 3.1 Build `Hero.tsx` with name, one-line pitch, niche label, and entrance animation
  - [x] 3.2 Build `HeroSceneFallback.tsx` using CSS 3D transforms and layered shapes
  - [x] 3.3 Build `HeroScene.tsx` with one WebGL element that reacts to pointer movement and drifts gently on mobile
  - [x] 3.4 Lazy-load `HeroScene` and fall back to the CSS version if WebGL is unavailable or reduced motion is on
  - [x] 3.5 Build `StickyHireButton.tsx` so the hire button is reachable from every section

- [x] 4.0 Content sections
  - [x] 4.1 Build `WorkCard.tsx` and `WorkSection.tsx` with tilt and a result line per card
  - [x] 4.2 Build `useCountUp` with tests, then `StatCounter.tsx` and `NumbersSection.tsx`
  - [x] 4.3 Build `ServiceCard.tsx` and `ServicesSection.tsx` with 3 packages
  - [x] 4.4 Build `ProcessSection.tsx` with 3 to 4 steps
  - [x] 4.5 Build `BrandsStrip.tsx` labelled as sample brands
  - [x] 4.6 Add at least one entrance or scroll animation to each section
  - [x] 4.7 Compose all sections in `page.tsx` in the PRD order, with no large UI blocks in the page file

- [x] 5.0 Contact section and hire button
  - [x] 5.1 Build `HireButton.tsx` that opens the TikTok DM link in a new tab with `rel="noopener noreferrer"`
  - [x] 5.2 Build `ContactSection.tsx` using `HireButton`
  - [x] 5.3 Confirm there is no form, backend, or database anywhere in the project
  - [x] 5.4 Write `HireButton.test.tsx` checking the link target and attributes

- [ ] 6.0 Responsive, accessibility, and performance pass
  - [x] 6.1 Check layouts at 375, 768, and 1280 px for horizontal scroll or overlapping text
  - [x] 6.2 Make every tap target at least 44 by 44 px
  - [ ] 6.3 Add labels or alt text for non-text elements and check keyboard focus order
  - [ ] 6.4 Test with the OS "reduce motion" setting on
  - [x] 6.5 Optimise images (WebP or SVG) and lazy-load below the fold
  - [ ] 6.6 Run Lighthouse on mobile and reach Performance 80 or higher and Accessibility 90 or higher
  - [ ] 6.7 Test on a real phone, since this is what the finish video shows

- [ ] 7.0 Tests, security hygiene, and deployment
  - [x] 7.1 Run the full test suite, lint, typecheck, and `npm run build` with zero errors
  - [x] 7.2 Search the repo for hardcoded keys, tokens, and passwords
  - [x] 7.3 Run `npm audit` and resolve or waive any critical or high findings
  - [x] 7.4 Write README and CHANGELOG entries
  - [x] 7.5 Write `docs/engineering/creator-showcase-impl-notes.md`
  - [ ] 7.6 Deploy to Vercel and open the live HTTPS URL on a phone
  - [ ] 7.7 Update plan wording for Posts 2, 4 and 19 (remove "bio" language, use "DM me SITE")
