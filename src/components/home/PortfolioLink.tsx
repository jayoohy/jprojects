import { portfolio } from "@/data/projects";
import { ArrowIcon } from "./ArrowIcon";

export function PortfolioLink() {
  return (
    <a
      href={portfolio.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex min-h-12 items-center gap-3 rounded-full bg-zinc-900 py-2 pl-6 pr-2 text-base font-medium text-white transition-transform duration-500 ease-spring active:scale-[0.98]"
    >
      {portfolio.label}
      <span className="grid size-9 place-items-center rounded-full bg-white/15 transition-transform duration-500 ease-spring group-hover:-translate-y-px group-hover:translate-x-1">
        <ArrowIcon />
      </span>
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  );
}
