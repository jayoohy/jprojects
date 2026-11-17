import type { Creator } from "./types";

/**
 * The single source of content for the page.
 * Everything here is SAMPLE content: the creator, brands, numbers and prices are made up.
 * To personalise the site, edit this file only (and set contact.url to a real profile).
 */
export const creator: Creator = {
  isSampleContent: true,
  name: "Debby Masqiat",
  niche: "UGC creator",
  nicheDetail: "Beauty, food & lifestyle",
  pitch: "Scroll-stopping UGC that sells without feeling like an ad.",
  tagline: "Real people. Real hooks. Real sales.",
  portrait: {
    src: "/debby/images/portrait.png",
    alt: "Portrait of the sample creator laughing with her hair flying, in front of a plain wall",
    focus: "50% 30%",
  },
  marqueeWords: [
    "Unboxings",
    "Product demos",
    "Hooks that stop thumbs",
    "Get ready with me",
    "Honest reviews",
    "15-second ads",
  ],
  contact: {
    platform: "TikTok",
    // Placeholder: swap in the real profile link, for example https://www.tiktok.com/@yourhandle
    url: "https://www.tiktok.com/",
    isPlaceholder: true,
    buttonLabel: "Work with me",
    hint: "DMs are open on TikTok. Say hi and tell me about your product.",
  },
  work: [
    {
      title: "Glow Serum: get ready with me demo",
      platform: "TikTok",
      views: 1_200_000,
      accent: "pink",
      image: {
        src: "/debby/images/work-glow.png",
        alt: "Close-up of the sample creator's freckled face and light eyes, looking straight at the camera",
        focus: "55% 40%",
      },
    },
    {
      title: "Nimbus sneakers in 15 seconds",
      platform: "Instagram Reels",
      views: 2_100_000,
      accent: "mint",
      image: {
        src: "/debby/images/work-nimbus.png",
        alt: "Sample creator standing on a city street at sunset, looking at the camera",
        focus: "50% 30%",
      },
    },
    {
      title: "Sip Sparkle unboxing and taste test",
      platform: "TikTok",
      views: 840_000,
      accent: "sun",
      image: {
        src: "/debby/images/work-sip.png",
        alt: "Sample creator smiling as she holds a glass cup of herbal tea at a table with a teapot and flowers",
        focus: "30% 30%",
      },
    },
    {
      title: "Crumb & Co. lunchbox hack",
      platform: "Instagram Reels",
      views: 410_000,
      accent: "tangerine",
      image: {
        src: "/debby/images/work-crumb.png",
        alt: "Sample creator sitting on a white tufted sofa against a teal wall",
        focus: "35% 25%",
      },
    },
    {
      title: "Bloom Lab 3-step skincare routine",
      platform: "YouTube Shorts",
      views: 650_000,
      accent: "pink",
      image: {
        src: "/debby/images/work-bloom.png",
        alt: "Sample creator surrounded by soft pink flowers and fabric",
        focus: "50% 35%",
      },
    },
    {
      title: "Tidy Tote: what's in my bag",
      platform: "TikTok",
      views: 300_000,
      accent: "sun",
      image: {
        src: "/debby/images/work-tidy.png",
        alt: "Sample creator lying on a sandy beach with the sea behind her",
        focus: "45% 35%",
      },
    },
  ],
  stats: [
    { label: "Followers", value: 128_000, compact: true },
    { label: "Average views per video", value: 85_000, compact: true },
    { label: "Engagement rate", value: 7.4, suffix: "%", decimals: 1 },
    { label: "Brand collaborations", value: 42 },
  ],
  services: [
    {
      name: "Single Video",
      summary: "One thumb-stopping video for one product.",
      includes: ["1 video, 15 to 45 seconds", "Hook and script written for you", "1 round of edits"],
      startingPrice: 150,
      accent: "sun",
    },
    {
      name: "Content Bundle",
      summary: "A set of videos to test what sells.",
      includes: ["3 videos with different hooks", "Raw footage included", "2 rounds of edits"],
      startingPrice: 400,
      highlight: true,
      accent: "pink",
    },
    {
      name: "Monthly Partner",
      summary: "A steady stream of fresh creative.",
      includes: ["8 videos each month", "Monthly planning call", "Priority turnaround"],
      startingPrice: null,
      accent: "mint",
    },
  ],
  process: [
    { title: "Brief", description: "You tell me about your product, your audience and what a win looks like." },
    { title: "Script & hooks", description: "I write three hook ideas. You pick the one you like best." },
    { title: "Shoot", description: "I film it at home in real light, the way your customers actually watch." },
    { title: "Edit & deliver", description: "Captions, sound and cuts done. You get files ready to post or run as ads." },
  ],
  brands: ["Glow Serum Co.", "Sip Sparkle", "Nimbus", "Crumb & Co.", "Bloom Lab", "Tidy Tote"],
};
