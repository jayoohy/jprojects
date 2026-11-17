"use client";

import { useTilt } from "@/projects/debby/hooks/useTilt";
import { Play } from "@/projects/debby/components/ui/icons";

/**
 * A layered stack of colourful cards in CSS 3D. Tilts with the pointer (or finger)
 * and sways gently on its own. Used when WebGL is unavailable or while the 3D scene loads.
 */
export function HeroSceneFallback() {
  const { ref, ...handlers } = useTilt<HTMLDivElement>(14);

  return (
    <div className="stage-3d relative size-full touch-pan-y" {...handlers}>
      <div className="animate-sway preserve-3d size-full">
        <div ref={ref} className="tilt relative size-full">
          <div className="absolute inset-[6%] rounded-[2.5rem] bg-debby-violet [transform:translateZ(0)]" />
          <div className="absolute inset-[14%] rounded-[2.25rem] bg-debby-pink [transform:translateZ(55px)_rotate(-5deg)]" />
          <div className="absolute inset-[24%] rounded-[2rem] bg-debby-sun [transform:translateZ(110px)_rotate(4deg)]" />
          <div className="absolute inset-[34%] grid place-items-center rounded-full bg-debby-ink text-debby-cream [transform:translateZ(170px)]">
            <Play className="size-10 translate-x-0.5" />
          </div>
          <div className="absolute left-[4%] top-[10%] size-14 rounded-2xl bg-debby-mint [transform:translateZ(210px)_rotate(12deg)]" />
          <div className="absolute bottom-[8%] right-[6%] size-20 rounded-full bg-debby-tangerine [transform:translateZ(190px)]" />
        </div>
      </div>
    </div>
  );
}
