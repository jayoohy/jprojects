# PRD: Creator Showcase Site (Project 1)

**Track:** A (new project). **Slug:** `creator-showcase`.
**Series context:** Build With Me, week 1. Start video Tue 17 Nov 2026, finish video Thu 19 Nov 2026.

---

## 1. Introduction / Overview

A fun, colourful, 3D-looking single-page website for a content creator. It shows the things a brand or client needs to see before deciding to hire a creator: who they are, their best work, their numbers, what they offer, how working with them goes, and how to get in touch.

It is a showcase project built in public with Claude, not a replacement for the existing portfolio (joyogukah.vercel.app). It is not a link-in-bio tool, and nothing in the build or the videos depends on a TikTok bio link.

**Problem:** Most creator portfolios are flat and forgettable, so brands cannot quickly see why they should hire one creator over another. This project shows what a memorable, hire-ready creator page looks like and doubles as proof of the builder's skills.

**Goal:** Build and deploy one small, animated, mobile-friendly page in about 2 hours of build time, filmed across a Tuesday "start" and a Thursday "finish" video.

## 2. Goals

1. Ship a live, public, single-page site by Thu 19 Nov 2026.
2. Page answers the five questions a brand asks: Who are you? Is your work good? Do people watch you? What do you offer? How do I contact you?
3. Feels creative and playful: 3D-looking visuals, bold colours, and motion on every section.
4. Works well on a phone, since the demo is tested on a phone on camera.
5. Fits the series rules: one page, no logins, no database, fake data only.

## 3. User Stories

- As a **brand manager**, I want to see a creator's best work and numbers immediately so that I can judge fit in under 30 seconds.
- As a **brand manager**, I want clear service packages so that I know what I can book.
- As a **brand manager**, I want a one-tap way to message the creator so that I can start a conversation without filling in forms.
- As a **viewer of the TikTok series**, I want to see the finished site in motion so that I can judge what Claude built and what the builder fixed.
- As a **small creator watching the series**, I want to see how a hire-ready page is structured so that I can copy the idea for my own.
- As the **builder (Joy)**, I want all sample content in one data file so that I can swap in new text without touching components.

## 4. Functional Requirements

**Page sections (in order)**

1. The page must open with a hero section: the creator's name, a one-line pitch, a niche label, and a 3D-looking animated visual (for example a floating, tilting object or layered 3D cards) that responds to pointer movement on desktop and to a gentle automatic motion on mobile.
2. The page must have a "Work" section showing 3 to 6 featured content pieces as cards, each with a title, platform label, and a result line (for example "1.2M views"). Cards must tilt in 3D on hover or touch.
3. The page must have a "Numbers" section showing 3 to 4 headline stats (for example followers, average views, engagement rate, brand collaborations) that count up when scrolled into view.
4. The page must have a "What I do" section listing 3 service packages (name, what is included, starting price or "Ask for a quote").
5. The page must have a "How we'll work together" section with 3 to 4 steps (brief, concept, shoot, deliver).
6. The page must have a "Brands I've worked with" strip. Sample content must be clearly fictional.
7. The page must end with a "Work with me" section containing the hire button.

**Hire button**

8. The "Work with me" button must open a direct message or profile link (TikTok or Instagram) in a new tab, using a link defined in the data file.
9. The page must not include a contact form, backend, or database.
10. The button must also be reachable from a sticky header or floating button on every section.

**Visual and motion**

11. The design must use a bold, colourful palette (at least 4 distinct accent colours) and a distinctive display typeface.
12. Each section must have at least one entrance or scroll-triggered animation.
13. At least one section must include a real 3D element (WebGL) or a convincing CSS 3D transform effect.
14. The page must respect `prefers-reduced-motion` by turning off or greatly reducing animation.

**Content and structure**

15. All text, numbers, links, and image references must live in one data file, separate from components.
16. The site must be a static page deployable to Vercel with a public URL.
17. Sample content must not use real client names, real brand logos, or invented testimonials presented as real. Anything illustrative must be clearly fictional.

## 5. Non-Goals (Out of Scope)

- Not a link-in-bio builder, and no TikTok bio link dependency.
- No contact form, email sending, or backend.
- No login, CMS, or database.
- No multi-page navigation, blog, or shop.
- No real analytics or tracking in v1 (see Open Questions).
- No video hosting or embedded TikTok players in v1; cards use static images or illustrations.
- No real client logos, real testimonials, or real revenue claims.

## 6. Design Considerations

- Mood: playful, loud, "Detty December" energy; think layered colour blocks, sticker-like shapes, chunky type, soft shadows to fake depth.
- 3D can be real (WebGL) or faked with CSS transforms, parallax layers, and tilt effects. Prefer whichever keeps the build inside the 2-hour limit.
- Mobile first: the finish video tests the page on a phone. Minimum tap target 44 by 44 px.
- Text contrast must meet WCAG 2.1 AA even on colourful backgrounds.
- Design skills to use during the build: `high-end-visual-design`, `ui-ux-pro-max`, `three` (if WebGL is used), `design-taste-frontend`.
- A formal design spec (`docs/design/creator-showcase-design-spec.md`) is the next pipeline stage and covers states, responsive rules, and final microcopy.

## 7. Technical Considerations

- Stack: React with Next.js (static export or standard Vercel deploy), as chosen.
- Animation libraries to consider: Framer Motion or GSAP for scroll and entrance motion; React Three Fiber / Three.js only for one hero element, to protect the 2-hour budget and mobile performance.
- Code must follow the code-separation rule: sections as components under `components/`, animation logic under `hooks/`, content in a data file, helpers in `utils/`. No single monolithic page file.
- Images must be optimised (WebP or SVG) and lazy-loaded below the fold.
- The 3D element must degrade gracefully when WebGL is unavailable.
- No secrets or API keys are needed, so none may be committed.
- Dependencies must be from well-known sources and pass `npm audit` with no critical or high findings before launch.

## 8. Success Metrics

| Metric | Baseline | Target | How measured |
|---|---|---|---|
| Site live on a public URL | Not built | Live by Thu 19 Nov 2026 | Opening the URL on a phone on camera |
| Mobile performance score | Not measured | Lighthouse mobile Performance 80 or higher | Lighthouse run on the live URL |
| Accessibility score | Not measured | Lighthouse Accessibility 90 or higher | Lighthouse run on the live URL |
| Build time | 0 hours | 2 hours of recorded build time (cut features, not the deadline) | Screen recording length |
| DM interest on the Thursday video | 0 DMs | 3 or more DMs or "SITE" comments within 7 days | TikTok inbox and comments, checked in the Sunday review |

## 9. Requirement Priority (MoSCoW)

| Requirement | Priority |
|---|---|
| 1 Hero with 3D-looking visual | Must |
| 2 Work cards | Must |
| 4 Services | Must |
| 7, 8, 9, 10 Hire button via DM link, no form | Must |
| 11, 12 Colour palette and per-section animation | Must |
| 14 Reduced-motion support | Must |
| 15 Content in one data file | Must |
| 16 Deployed to Vercel | Must |
| 17 No fake real-world claims | Must |
| 3 Count-up stats | Should |
| 5 Process steps | Should |
| 13 Real WebGL element | Should (a CSS 3D fallback is acceptable) |
| 6 Brands strip | Could |
| Sound effects, cursor effects, easter eggs | Could |
| Video embeds, analytics, CMS | Won't (this version) |

## 10. Acceptance Criteria

1. **Sections:** Scrolling the live page from top to bottom shows hero, work, numbers, services, process, brands, and contact sections in that order. The Won't and Could items are not required.
2. **Hire button:** Tapping "Work with me" on a phone opens the creator's DM or profile link in a new tab. No form fields exist anywhere on the page.
3. **Floating access:** The hire button is visible or reachable from every section without scrolling back to the end.
4. **Motion:** Every section has at least one visible animation triggered on scroll or interaction. With the OS setting "reduce motion" on, no looping or parallax animation plays.
5. **3D:** At least one element visibly tilts, rotates, or shifts in depth in response to pointer or touch movement.
6. **Mobile:** At widths 375, 768, and 1280 px there is no horizontal scrolling and no overlapping text, and all tap targets are at least 44 by 44 px.
7. **Performance and accessibility:** Lighthouse mobile Performance is 80 or higher and Accessibility is 90 or higher on the deployed URL.
8. **Content separation:** Changing the creator's name in the data file changes it everywhere on the page with no component edits.
9. **Fictional content:** No real brand names, logos, or testimonials appear unless the owner supplied them; any sample numbers are marked as sample content in the data file.
10. **Deployment:** The Vercel URL loads over HTTPS and the build passes lint, typecheck, and `npm run build` with zero errors.
11. **Safety:** A search of the repo finds no API keys, tokens, or passwords, and `npm audit` shows no critical or high vulnerabilities.

## 11. Constraints & Assumptions

- Series rules: one page, no logins, no database, about 2 hours of build time, fake data only, never paste secrets into a chat with Claude.
- Deadline: live by Thu 19 Nov 2026; the build is recorded at the weekend before.
- Assumption: Joy is the builder and the sample "creator" content is placeholder text unless supplied.
- Assumption: the final DM link will be Joy's own TikTok or Instagram profile, added to the data file.
- Dependency: the existing plan videos (Posts 2 and 4) need wording updated to remove "goes in my bio" language.

## 12. Risks

| Risk | Mitigation | Owner |
|---|---|---|
| 3D and animation push the build past 2 hours | Use CSS 3D plus one WebGL object at most; cut sections, not the deadline | Joy |
| Heavy animation hurts mobile performance | Lazy-load the 3D element, cap particle and layer counts, test on a real phone early | Joy |
| Bright colours break text contrast | Check contrast on every text and background pair against WCAG AA | Joy |
| Motion causes discomfort for some visitors | Honour `prefers-reduced-motion` | Joy |
| Sample content mistaken for real claims | Mark sample data clearly and avoid real brand names | Joy |
| Build fails on deploy | Run the build locally before recording the finish video | Joy |

## 13. Definition of Ready checklist

- [x] Problem statement is specific and falsifiable
- [x] At least one success metric is quantified with a baseline and target
- [x] Scope has explicit Out-of-Scope items
- [x] Every requirement has at least one acceptance criterion
- [x] Requirements are prioritised (not everything is a Must)
- [x] Risks section is non-empty
- [x] No placeholder text remains in this document
- [x] File saved at `project-1/tasks/prd-creator-showcase-site.md`

## 14. Open Questions

Resolved:

1. Creator: **Debby Masqiat**, a UGC (user-generated content) creator. Page copy, services, and work cards are written for a UGC creator (product demos, unboxings, ad-style videos for brands). Stats and work results are sample content and are marked as sample in the data file.
2. DM link: TikTok. Only `tiktok.com` was given, so the data file holds a placeholder TikTok profile link until the real handle is supplied.
3. Thursday call to action: "DM me SITE".
4. 3D approach: CSS 3D plus one WebGL element (a full 3D scene is out of scope for the 2-hour build).

Clarification: Debby Masqiat is a fictional sample creator, not a real person. The TikTok link stays a placeholder, and Joy can swap in her own handle later in the data file.

Still open: none.
