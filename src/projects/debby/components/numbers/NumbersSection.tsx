import { creator } from "@/projects/debby/data/creator";
import { Reveal } from "@/projects/debby/components/ui/Reveal";
import { SectionHeading } from "@/projects/debby/components/ui/SectionHeading";
import { StatCounter } from "./StatCounter";

export function NumbersSection() {
  return (
    <section id="numbers" className="scroll-mt-4 bg-debby-sun text-debby-ink">
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-8 md:py-24">
        <SectionHeading eyebrow="The numbers" title="Receipts, because brands like those." />

        {/* Two columns on phones so all four stats fit without a long scroll. */}
        <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-6 md:mt-12 md:gap-y-8 lg:grid-cols-4 lg:gap-x-8">
          {creator.stats.map((stat, index) => (
            <li key={stat.label}>
              <Reveal delay={index * 100}>
                <StatCounter stat={stat} />
              </Reveal>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-sm font-medium text-debby-ink/80 md:mt-10">Sample numbers for a demo site.</p>
      </div>
    </section>
  );
}
