import type { ReactNode } from "react";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  tone?: "ink" | "white";
};

export function SectionHeading({ eyebrow, title, tone = "ink" }: SectionHeadingProps) {
  return (
    <Reveal className="max-w-3xl">
      <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      <h2
        className={`mt-4 font-debby-display text-3xl font-extrabold leading-[1.02] tracking-tight sm:text-5xl md:mt-5 md:text-6xl ${
          tone === "white" ? "text-white" : "text-debby-ink"
        }`}
      >
        {title}
      </h2>
    </Reveal>
  );
}
