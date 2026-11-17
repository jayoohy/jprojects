import { creator } from "@/projects/debby/data/creator";
import { Reveal } from "@/projects/debby/components/ui/Reveal";
import { SectionHeading } from "@/projects/debby/components/ui/SectionHeading";
import { WorkCard } from "./WorkCard";

export function WorkSection() {
  return (
    <section id="work" className="scroll-mt-4 bg-debby-violet text-white">
      <div className="mx-auto max-w-7xl px-4 py-24 md:px-8 md:py-36">
        <SectionHeading
          tone="white"
          eyebrow="Recent work"
          title={
            <>
              Videos people actually <span className="text-debby-sun">watch to the end.</span>
            </>
          }
        />

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {creator.work.map((item, index) => (
            <li key={item.title}>
              <Reveal delay={(index % 3) * 100} className="h-full">
                <WorkCard item={item} />
              </Reveal>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-sm text-white">
          Sample projects and view counts for a demo site. Brands are made up.
        </p>
      </div>
    </section>
  );
}
