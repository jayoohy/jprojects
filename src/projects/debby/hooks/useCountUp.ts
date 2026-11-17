"use client";

import { useEffect, useState } from "react";
import { easeOutCubic } from "@/projects/debby/utils/easing";
import { useReducedMotion } from "./useReducedMotion";

type Options = {
  /** Count starts when this turns true (for example when scrolled into view). */
  start: boolean;
  durationMs?: number;
};

/** Counts from 0 up to `target`. Jumps straight to the target if the visitor prefers reduced motion. */
export function useCountUp(target: number, { start, durationMs = 1600 }: Options): number {
  const reduced = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start || reduced) return;

    let frame = 0;
    const startedAt = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startedAt) / durationMs, 1);
      setValue(target * easeOutCubic(progress));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [start, reduced, target, durationMs]);

  if (reduced) return start ? target : 0;
  return value;
}
