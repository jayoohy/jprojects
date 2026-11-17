import type { Accent } from "@/projects/debby/data/types";

/** Static class names so Tailwind can see them. Text is always ink or white for AA contrast. */
export const accentStyles: Record<Accent, { bg: string; text: string }> = {
  pink: { bg: "bg-debby-pink", text: "text-debby-ink" },
  sun: { bg: "bg-debby-sun", text: "text-debby-ink" },
  mint: { bg: "bg-debby-mint", text: "text-debby-ink" },
  tangerine: { bg: "bg-debby-tangerine", text: "text-debby-ink" },
  violet: { bg: "bg-debby-violet", text: "text-white" },
};
