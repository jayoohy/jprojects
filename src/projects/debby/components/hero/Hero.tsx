import Image from "next/image";
import { creator } from "@/projects/debby/data/creator";
import { Eyebrow } from "@/projects/debby/components/ui/Eyebrow";
import { HireButton } from "@/projects/debby/components/ui/HireButton";
import { Reveal } from "@/projects/debby/components/ui/Reveal";
import { ArrowDown, Star } from "@/projects/debby/components/ui/icons";
import { formatNumber } from "@/projects/debby/utils/formatNumber";
import { HeroVisual } from "./HeroVisual";

export function Hero() {
  const [firstName, ...rest] = creator.name.split(" ");
  const topStat = creator.work[0];

  return (
    <section className="relative isolate overflow-hidden">
      {/* Decorative blobs */}
      <div aria-hidden className="absolute -left-24 top-24 -z-10 size-72 rounded-full bg-debby-sun/70 animate-float-slow" />
      <div aria-hidden className="absolute -right-20 bottom-10 -z-10 size-80 rounded-full bg-debby-mint/60 animate-float" />
      <Star aria-hidden className="absolute right-[12%] top-24 -z-10 size-16 text-debby-violet animate-spin-slow" />

      <div className="mx-auto grid min-h-[100dvh] w-full max-w-7xl items-center gap-10 px-4 py-24 md:grid-cols-12 md:px-8 md:py-32">
        <div className="md:col-span-7">
          <Reveal>
            <Eyebrow>
              {creator.niche} · {creator.nicheDetail}
            </Eyebrow>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-6 font-debby-display text-[clamp(3.5rem,13vw,9rem)] font-extrabold leading-[0.88] tracking-tight">
              {firstName}
              <span className="relative block text-debby-pink">
                {rest.join(" ")}
                <span aria-hidden className="absolute -bottom-2 left-0 h-3 w-2/3 rounded-full bg-debby-sun -z-10" />
              </span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-8 max-w-xl text-xl leading-relaxed text-debby-ink/80 md:text-2xl">
              {creator.pitch}
            </p>
          </Reveal>

          <Reveal delay={300} className="mt-10 flex flex-wrap items-center gap-4">
            <HireButton size="lg" />
            <a
              href="#work"
              className="group inline-flex min-h-16 items-center gap-3 rounded-full px-6 text-lg font-semibold ring-2 ring-debby-ink transition-transform duration-500 ease-spring active:scale-[0.98]"
            >
              See my work
              <ArrowDown className="transition-transform duration-500 ease-spring group-hover:translate-y-1" />
            </a>
          </Reveal>
        </div>

        <Reveal delay={150} className="md:col-span-5">
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <HeroVisual />

            {/* Floating stickers */}
            {/* Portrait in a bezelled frame */}
            <div className="absolute -bottom-6 -left-3 w-28 -rotate-6 rounded-[1.5rem] bg-debby-cream p-1.5 ring-1 ring-debby-ink/15 shadow-[0_18px_40px_rgba(27,16,48,0.25)] animate-float-slow sm:w-36">
              <Image
                src={creator.portrait.src}
                alt={creator.portrait.alt}
                width={451}
                height={240}
                priority
                sizes="144px"
                className="aspect-4/5 w-full rounded-[1.125rem] object-cover"
                style={{ objectPosition: creator.portrait.focus ?? "50% 30%" }}
              />
            </div>

            <div
              className="absolute -left-2 top-6 rotate-[-8deg] rounded-2xl bg-debby-sun px-4 py-2 font-debby-display text-lg font-extrabold animate-float"
              aria-hidden
            >
              {formatNumber(topStat.views, { compact: true })} views
            </div>
            <div
              className="absolute -right-2 bottom-10 rotate-[6deg] rounded-2xl bg-debby-mint px-4 py-2 font-debby-display text-lg font-extrabold animate-float-slow"
              aria-hidden
            >
              Brand-ready
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
