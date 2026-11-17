"use client";

import dynamic from "next/dynamic";
import { useSyncExternalStore } from "react";
import { useReducedMotion } from "@/projects/debby/hooks/useReducedMotion";
import { hasWebGL } from "@/projects/debby/utils/webgl";
import { HeroSceneFallback } from "./HeroSceneFallback";

// The 3D scene is code-split and only loaded in the browser. The CSS version shows while it loads.
const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
  loading: () => <HeroSceneFallback />,
});

const noopSubscribe = () => () => {};

/** Picks the real 3D scene when it can run, and the CSS 3D stack otherwise. */
export function HeroVisual() {
  const reduced = useReducedMotion();
  const webglAvailable = useSyncExternalStore(noopSubscribe, hasWebGL, () => false);

  return webglAvailable && !reduced ? <HeroScene /> : <HeroSceneFallback />;
}
