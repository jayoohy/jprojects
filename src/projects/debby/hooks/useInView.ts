"use client";

import { useEffect, useRef, useState } from "react";

type Options = {
  threshold?: number;
  rootMargin?: string;
  /** Stay "in view" after the first time (default), or toggle on and off. */
  once?: boolean;
};

export function useInView<T extends Element>({
  threshold = 0.15,
  rootMargin = "0px 0px -8% 0px",
  once = true,
}: Options = {}) {
  const ref = useRef<T>(null);
  // Must start false on both server and client so hydration matches.
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Without IntersectionObserver (very old browsers) show everything straight away.
    if (typeof IntersectionObserver === "undefined") {
      const frame = requestAnimationFrame(() => setInView(true));
      return () => cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, inView };
}
