import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  // The deliberately bad comparison site is a plain HTML file in public/debby/bad,
  // served at /debby/bad (it is not listed on the home page).
  async rewrites() {
    return [
      { source: "/debby/bad", destination: "/debby/bad/index.html" },
      { source: "/debby/bad/", destination: "/debby/bad/index.html" },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
