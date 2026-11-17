import { creator } from "@/projects/debby/data/creator";
import { Eyebrow } from "@/projects/debby/components/ui/Eyebrow";
import { HireButton } from "@/projects/debby/components/ui/HireButton";
import { Reveal } from "@/projects/debby/components/ui/Reveal";
import { Star } from "@/projects/debby/components/ui/icons";

export function ContactSection() {
  return (
    <section id="contact" className="relative isolate overflow-hidden scroll-mt-4 bg-debby-pink text-debby-ink">
      <Star aria-hidden className="absolute -right-6 top-6 -z-10 size-28 text-debby-sun animate-spin-slow md:-right-10 md:top-10 md:size-56" />
      <Star aria-hidden className="absolute -left-8 bottom-6 -z-10 size-20 text-debby-violet animate-spin-slow md:-left-12 md:bottom-10 md:size-36" />

      {/* Compact on every screen: the button and its hint share a row from md up. */}
      <div className="mx-auto max-w-7xl px-4 pb-6 pt-9 md:px-8 md:pb-10 md:pt-14">
        <Reveal>
          <Eyebrow>Let&apos;s work together</Eyebrow>
          <h2 className="mt-3 max-w-4xl font-debby-display text-[1.75rem] font-extrabold leading-[1] tracking-tight sm:text-5xl md:mt-4 md:text-6xl md:leading-[0.98]">
            Let&apos;s make something people actually watch.
          </h2>
        </Reveal>

        <Reveal
          delay={150}
          className="mt-5 flex flex-col items-start gap-2.5 md:mt-7 md:flex-row md:items-center md:gap-6"
        >
          <HireButton size="lg" />
          <p className="max-w-sm text-sm font-medium md:text-base">{creator.contact.hint}</p>
        </Reveal>

        <p className="mt-5 text-xs font-medium md:mt-8 md:text-sm">
          Sample site. {creator.name} is a made-up creator.
        </p>
      </div>
    </section>
  );
}
