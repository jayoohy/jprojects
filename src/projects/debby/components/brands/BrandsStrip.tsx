import { creator } from "@/projects/debby/data/creator";
import { Eyebrow } from "@/projects/debby/components/ui/Eyebrow";
import { Marquee } from "@/projects/debby/components/ui/Marquee";
import { Reveal } from "@/projects/debby/components/ui/Reveal";

export function BrandsStrip() {
  return (
    <section id="brands" className="bg-debby-ink py-20 text-debby-cream md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal>
          <Eyebrow tone="white">Brands I&apos;ve worked with</Eyebrow>
        </Reveal>
      </div>
      <div className="mt-10">
        <Marquee items={creator.brands} className="bg-transparent text-debby-cream" />
      </div>
      <p className="mx-auto mt-6 max-w-7xl px-4 text-sm text-debby-cream/80 md:px-8">
        Sample brands for a demo site. None of these are real companies.
      </p>
    </section>
  );
}
