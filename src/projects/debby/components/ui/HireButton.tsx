import { creator } from "@/projects/debby/data/creator";
import { ArrowUpRight } from "./icons";

type HireButtonProps = {
  label?: string;
  href?: string;
  size?: "md" | "lg";
  /** "ink" for light backgrounds, "cream" for dark or saturated ones. */
  tone?: "ink" | "cream";
  className?: string;
};

const tones = {
  ink: "bg-debby-ink text-debby-cream",
  cream: "bg-debby-cream text-debby-ink",
};

const sizes = {
  md: "min-h-12 py-2 pl-6 pr-2 text-base",
  lg: "min-h-14 py-2 pl-6 pr-2 text-lg md:min-h-16 md:py-2.5 md:pl-8 md:pr-2.5 md:text-xl",
};

/** Opens the creator's TikTok DMs in a new tab. No form, no backend. */
export function HireButton({
  label = creator.contact.buttonLabel,
  href = creator.contact.url,
  size = "md",
  tone = "ink",
  className = "",
}: HireButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-4 rounded-full font-semibold transition-transform duration-500 ease-spring active:scale-[0.98] ${tones[tone]} ${sizes[size]} ${className}`}
    >
      <span>{label}</span>
      <span
        className={`grid place-items-center rounded-full bg-debby-pink text-debby-ink transition-transform duration-500 ease-spring group-hover:-translate-y-px group-hover:translate-x-1 group-hover:scale-105 ${
          size === "lg" ? "size-10 md:size-12" : "size-9"
        }`}
      >
        <ArrowUpRight />
      </span>
      <span className="sr-only">(opens {creator.contact.platform} in a new tab)</span>
    </a>
  );
}
