import { creator } from "@/projects/debby/data/creator";
import { Reveal } from "@/projects/debby/components/ui/Reveal";
import { SectionHeading } from "@/projects/debby/components/ui/SectionHeading";

export function ProcessSection() {
  return (
    <section id="process" className="scroll-mt-4 bg-debby-mint text-debby-ink">
      <div className="mx-auto max-w-7xl px-4 py-24 md:px-8 md:py-36">
        <SectionHeading
          eyebrow="How we'll work together"
          title="Easy for you. Four steps, no chasing."
        />

        <ol className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {creator.process.map((step, index) => (
            <li key={step.title}>
              <Reveal delay={index * 120} className="h-full">
                <div className="h-full rounded-[2rem] bg-debby-ink/10 p-2 ring-1 ring-debby-ink/15">
                  <div className="h-full rounded-[calc(2rem-0.5rem)] bg-debby-cream p-6">
                    <span
                      aria-hidden
                      className="grid size-14 place-items-center rounded-full bg-debby-ink font-debby-display text-2xl font-extrabold text-debby-cream"
                    >
                      {index + 1}
                    </span>
                    <h3 className="mt-5 font-debby-display text-2xl font-extrabold tracking-tight">
                      <span className="sr-only">Step {index + 1}: </span>
                      {step.title}
                    </h3>
                    <p className="mt-2 text-base leading-relaxed text-debby-ink/80">{step.description}</p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
