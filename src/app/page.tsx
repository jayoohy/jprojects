import { projects } from "@/data/projects";
import { PortfolioLink } from "@/components/home/PortfolioLink";
import { ProjectList } from "@/components/home/ProjectList";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 md:px-8 md:py-28">
      <header>
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
          Joy&apos;s projects
        </h1>
        <p className="mt-3 text-lg text-zinc-600">Things I&apos;ve built for my TikTok.</p>
        <div className="mt-6">
          <PortfolioLink />
        </div>
      </header>

      <section aria-labelledby="projects-heading" className="mt-12 md:mt-16">
        <h2 id="projects-heading" className="sr-only">
          Projects
        </h2>
        <ProjectList projects={projects} />
      </section>
    </main>
  );
}
