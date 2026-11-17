export type Accent = "pink" | "sun" | "mint" | "tangerine" | "violet";

export type Photo = {
  src: string;
  alt: string;
  /** CSS object-position used when the photo is cropped, for example "30% 25%". Keeps the face in frame. */
  focus?: string;
};

export type WorkItem = {
  title: string;
  platform: "TikTok" | "Instagram Reels" | "YouTube Shorts";
  /** Number of views. Formatted for display, never shown raw. */
  views: number;
  accent: Exclude<Accent, "violet">;
  /** Optional cover photo. Cards without one use their accent colour. */
  image?: Photo;
};

export type Stat = {
  label: string;
  value: number;
  /** Shown straight after the number, for example "%". */
  suffix?: string;
  compact?: boolean;
  decimals?: number;
};

export type Service = {
  name: string;
  summary: string;
  includes: string[];
  /** Starting price in USD, or null to show "Ask for a quote". */
  startingPrice: number | null;
  highlight?: boolean;
  accent: Accent;
};

export type ProcessStep = {
  title: string;
  description: string;
};

export type Creator = {
  /** True while every name, number and brand here is made up. */
  isSampleContent: boolean;
  name: string;
  niche: string;
  nicheDetail: string;
  pitch: string;
  tagline: string;
  /** Hero portrait. */
  portrait: Photo;
  marqueeWords: string[];
  contact: {
    platform: string;
    url: string;
    /** True until a real profile link replaces the placeholder. */
    isPlaceholder: boolean;
    buttonLabel: string;
    hint: string;
  };
  work: WorkItem[];
  stats: Stat[];
  services: Service[];
  process: ProcessStep[];
  brands: string[];
};
