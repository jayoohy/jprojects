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
    title: "UGC creator site",
    description: "A portfolio page for a made-up creator.",
    madeOn: "2026-11-17",
  },
];

export const portfolio = {
  label: "My portfolio",
  url: "https://joyogukah.vercel.app",
};
