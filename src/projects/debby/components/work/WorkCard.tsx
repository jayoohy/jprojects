"use client";

import Image from "next/image";
import type { WorkItem } from "@/projects/debby/data/types";
import { useTilt } from "@/projects/debby/hooks/useTilt";
import { accentStyles } from "@/projects/debby/utils/accent";
import { formatNumber } from "@/projects/debby/utils/formatNumber";
import { Play } from "@/projects/debby/components/ui/icons";

/**
 * A tilting card for one piece of content. Double bezel: a glass tray around the core.
 * The core is a cover photo with a dark fade when the item has one, otherwise a flat accent colour.
 */
export function WorkCard({ item }: { item: WorkItem }) {
  const { ref, ...handlers } = useTilt<HTMLDivElement>(9);
  const accent = accentStyles[item.accent];
  const photo = item.image;

  return (
    <div className="stage-3d h-full touch-pan-y" {...handlers}>
      <div
        ref={ref}
        className="tilt h-full rounded-[2rem] bg-white/10 p-2 ring-1 ring-white/25"
      >
        <article
          className={`relative flex h-full min-h-72 flex-col justify-between overflow-hidden rounded-[calc(2rem-0.5rem)] p-6 ${
            photo ? "bg-debby-ink text-white" : `${accent.bg} ${accent.text}`
          }`}
        >
          {photo && (
            <>
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
                style={{ objectPosition: photo.focus ?? "50% 30%" }}
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-linear-to-t from-debby-ink via-debby-ink/70 to-transparent"
              />
            </>
          )}

          <div className="relative flex items-center justify-between">
            <span
              className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] ${
                photo ? `${accent.bg} ${accent.text}` : "bg-debby-ink/10"
              }`}
            >
              {item.platform}
            </span>
            <span className="grid size-11 place-items-center rounded-full bg-debby-ink text-debby-cream">
              <Play className="size-4 translate-x-px" />
            </span>
          </div>

          <div className="relative">
            <p className="font-debby-display text-6xl font-extrabold leading-none tracking-tight">
              {formatNumber(item.views, { compact: true })}
            </p>
            <p className="mt-1 text-sm font-semibold uppercase tracking-[0.18em]">views</p>
            <h3 className="mt-5 text-xl font-semibold leading-snug">{item.title}</h3>
          </div>
        </article>
      </div>
    </div>
  );
}
