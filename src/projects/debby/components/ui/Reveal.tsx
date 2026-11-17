"use client";

import type { CSSProperties, ReactNode } from "react";
import { useInView } from "@/projects/debby/hooks/useInView";

type RevealProps = {
  children: ReactNode;
  /** Delay in milliseconds, used to stagger siblings. */
  delay?: number;
  className?: string;
};

/** Fades and lifts its children into place when they scroll into view. */
export function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      data-in={inView}
      className={`reveal ${className}`}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}
