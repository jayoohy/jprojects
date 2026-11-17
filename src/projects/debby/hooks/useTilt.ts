"use client";

import { useCallback, useRef, type PointerEvent } from "react";
import { useReducedMotion } from "./useReducedMotion";

/**
 * Tilts an element in 3D towards the pointer (mouse or finger).
 * Sets the --rx and --ry CSS variables that the `.tilt` class reads.
 */
export function useTilt<T extends HTMLElement>(maxDegrees = 10) {
  const ref = useRef<T>(null);
  const reduced = useReducedMotion();

  const onPointerMove = useCallback(
    (event: PointerEvent<T>) => {
      const node = ref.current;
      if (!node || reduced) return;
      const box = node.getBoundingClientRect();
      const x = (event.clientX - box.left) / box.width - 0.5;
      const y = (event.clientY - box.top) / box.height - 0.5;
      node.style.setProperty("--ry", `${x * maxDegrees * 2}deg`);
      node.style.setProperty("--rx", `${-y * maxDegrees * 2}deg`);
    },
    [maxDegrees, reduced],
  );

  const reset = useCallback(() => {
    const node = ref.current;
    if (!node) return;
    node.style.setProperty("--rx", "0deg");
    node.style.setProperty("--ry", "0deg");
  }, []);

  return {
    ref,
    onPointerMove,
    onPointerLeave: reset,
    onPointerCancel: reset,
  };
}
