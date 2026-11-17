# Changelog

## [Unreleased]

### Changed
- Moved the Debby creator site into the jprojects app: it now lives at `/debby`, with the bad version at `/debby/bad`. Its styles, fonts and colour tokens are scoped to `/debby`.

### Added
- Home page listing projects (Debby only; the bad version is not listed) with a link to the portfolio.

### Changed
- Contact section is compact on phones (about half a screen instead of more than a full screen), and the sticky button hides while it is showing.

### Added
- Hero portrait and two cover photos on work cards (placeholder photos; see README before publishing).
- Creator showcase one-page site for a sample UGC creator: hero with 3D scene, work cards, count-up numbers, service packages, process steps, sample brands strip, and a TikTok DM hire button.
- Sticky "Work with me" button on every section.
- Scroll entrance animations, pointer/touch tilt, marquee strips, and reduced-motion support.
- Single content file (`src/data/creator.ts`) with all sample content.
- Unit tests for the data file, number formatting, count-up hook and hire button.
