"use client";

import { useEffect, useState } from "react";

/** True while the page element with this id is on screen. */
export function useSectionVisible(id: string, threshold = 0.25): boolean {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = document.getElementById(id);
    if (!node || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [id, threshold]);

  return visible;
}
