import type { ReactNode } from "react";

type EyebrowProps = {
  children: ReactNode;
  /** "ink" for light backgrounds, "white" for dark or saturated ones. */
  tone?: "ink" | "white";
};

export function Eyebrow({ children, tone = "ink" }: EyebrowProps) {
  const toneClass =
    tone === "white" ? "bg-white/15 text-white ring-white/30" : "bg-debby-ink/5 text-debby-ink ring-debby-ink/15";

  return (
    <span
      className={`inline-block rounded-full px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] ring-1 ${toneClass}`}
    >
      {children}
    </span>
  );
}
