import Link from "next/link";
import type { Project } from "@/data/projects";
import { formatMonth } from "@/utils/formatMonth";
import { ArrowIcon } from "./ArrowIcon";

/** One project. Double bezel: a soft tray around a white core. The whole card is the link. */
export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/${project.slug}`}
      className="group block rounded-[1.75rem] bg-zinc-900/[0.04] p-1.5 ring-1 ring-zinc-900/10 transition-transform duration-500 ease-spring hover:-translate-y-0.5 active:scale-[0.99]"
    >
      <article className="flex items-start justify-between gap-6 rounded-[calc(1.75rem-0.375rem)] bg-white p-6">
        <div>
          <p className="text-sm text-zinc-600">{formatMonth(project.madeOn)}</p>
          <h2 className="mt-1 text-xl font-semibold tracking-tight text-zinc-900">{project.title}</h2>
          <p className="mt-2 max-w-prose text-base leading-relaxed text-zinc-600">{project.description}</p>
        </div>
        <span
          aria-hidden
          className="grid size-10 shrink-0 place-items-center rounded-full bg-zinc-900/5 text-zinc-900 transition-transform duration-500 ease-spring group-hover:-translate-y-px group-hover:translate-x-1"
        >
          <ArrowIcon />
        </span>
      </article>
    </Link>
  );
}
