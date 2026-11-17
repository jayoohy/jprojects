import { creator } from "@/projects/debby/data/creator";
import { Reveal } from "@/projects/debby/components/ui/Reveal";
import { SectionHeading } from "@/projects/debby/components/ui/SectionHeading";
import { ServiceCard } from "./ServiceCard";

export function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-4 bg-debby-cream">
      <div className="mx-auto max-w-7xl px-4 py-24 md:px-8 md:py-36">
        <SectionHeading
          eyebrow="What I do"
          title={
            <>
              Pick a package. <span className="text-debby-pink">Or tell me what you need.</span>
            </>
          }
        />

        <ul className="mt-16 grid gap-8 md:grid-cols-3 md:items-stretch">
          {creator.services.map((service, index) => (
            <li
              key={service.name}
              className={service.highlight ? "md:-translate-y-4" : undefined}
            >
              <Reveal delay={index * 120} className="h-full">
                <ServiceCard service={service} />
              </Reveal>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-sm text-debby-ink/70">Sample packages and prices for a demo site.</p>
      </div>
    </section>
  );
}
