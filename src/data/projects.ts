export type Project = {
  /** Folder name and URL path: jprojects.vercel.app/<slug>. */
  slug: string;
  title: string;
  description: string;
  /** ISO date the project was made, used for sorting and shown as a month. */
  madeOn: string;
};

/**
 * Every project on the home page. To add one: build it under src/app/<slug>,
 * then add an entry here. Sub-pages (like /debby/bad) are not listed on purpose.
 */
export const projects: Project[] = [
  {
    slug: "debby",
    title: "Creator showcase site",
    description:
      "A colourful, animated one-page site for a made-up UGC creator: her work, her numbers, her packages, and one button to message her.",
    madeOn: "2026-11-17",
  },
];

export const portfolio = {
  label: "See my portfolio",
  url: "https://joyogukah.vercel.app",
};
