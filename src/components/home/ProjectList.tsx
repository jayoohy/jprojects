import type { Project } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

/** Newest project first. */
export function ProjectList({ projects }: { projects: Project[] }) {
  const newestFirst = [...projects].sort((a, b) => b.madeOn.localeCompare(a.madeOn));

  return (
    <ul className="space-y-4">
      {newestFirst.map((project) => (
        <li key={project.slug}>
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  );
}
