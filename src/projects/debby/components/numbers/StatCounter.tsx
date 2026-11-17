"use client";

import type { Stat } from "@/projects/debby/data/types";
import { useCountUp } from "@/projects/debby/hooks/useCountUp";
import { useInView } from "@/projects/debby/hooks/useInView";
import { formatNumber } from "@/projects/debby/utils/formatNumber";

/** A big number that counts up when it scrolls into view. */
export function StatCounter({ stat }: { stat: Stat }) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.4 });
  const current = useCountUp(stat.value, { start: inView });
  const format = { compact: stat.compact, decimals: stat.decimals };

  return (
    <div ref={ref}>
      {/* Screen readers get the final value straight away; the animated one is decoration. */}
      <p className="sr-only">
        {stat.label}: {formatNumber(stat.value, format)}
        {stat.suffix}
      </p>
      <p
        aria-hidden
        className="font-debby-display text-5xl font-extrabold leading-none tracking-tight sm:text-6xl lg:text-7xl"
      >
        {formatNumber(current, format)}
        {stat.suffix}
      </p>
      <p aria-hidden className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] md:mt-3 md:text-base">
        {stat.label}
      </p>
    </div>
  );
}
