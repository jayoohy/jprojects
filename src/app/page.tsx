import { projects } from "@/data/projects";
import { PortfolioLink } from "@/components/home/PortfolioLink";
import { ProjectList } from "@/components/home/ProjectList";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 md:px-8 md:py-28">
      <header>
        <span className="inline-block rounded-full bg-zinc-900/5 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-700 ring-1 ring-zinc-900/10">
          jprojects
        </span>
        <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight text-zinc-900 sm:text-6xl">
          Small things I build, finished in public.
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-zinc-600">
          Projects from my TikTok. Each one is live, so go ahead and click around.
        </p>
        <div className="mt-8">
          <PortfolioLink />
        </div>
      </header>

      <section aria-labelledby="projects-heading" className="mt-16 md:mt-24">
        <h2 id="projects-heading" className="sr-only">
          Projects
        </h2>
        <ProjectList projects={projects} />
      </section>
    </main>
  );
}
