"use client";

import { useRef, type ReactNode } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import type { Group } from "three";
import { useInView } from "@/projects/debby/hooks/useInView";

const COLORS = {
  pink: "#ff3d8b",
  sun: "#ffd23f",
  mint: "#1fd6a5",
  violet: "#6236ff",
  tangerine: "#ff7a1a",
};

type SatelliteProps = {
  position: [number, number, number];
  spin: number;
  children: ReactNode;
};

/** A small shape that bobs and spins on its own. */
function Satellite({ position, spin, children }: SatelliteProps) {
  const ref = useRef<Group>(null);

  useFrame((state) => {
    const node = ref.current;
    if (!node) return;
    const t = state.clock.elapsedTime;
    node.rotation.x = t * spin;
    node.rotation.y = t * spin * 0.7;
    node.position.y = position[1] + Math.sin(t * 0.9 + position[0]) * 0.18;
  });

  return (
    <group ref={ref} position={position}>
      {children}
    </group>
  );
}

/** The whole cluster leans towards the pointer and drifts when nobody is touching it. */
function Cluster() {
  const group = useRef<Group>(null);

  useFrame((state, delta) => {
    const node = group.current;
    if (!node) return;
    const t = state.clock.elapsedTime;
    const targetY = state.pointer.x * 0.7 + Math.sin(t * 0.4) * 0.3;
    const targetX = -state.pointer.y * 0.45 + Math.cos(t * 0.3) * 0.15;
    const ease = Math.min(delta * 3, 1);
    node.rotation.y += (targetY - node.rotation.y) * ease;
    node.rotation.x += (targetX - node.rotation.x) * ease;
  });

  return (
    <group ref={group}>
      <mesh>
        <torusKnotGeometry args={[0.9, 0.32, 160, 24]} />
        <meshStandardMaterial color={COLORS.pink} roughness={0.32} metalness={0.05} />
      </mesh>

      <Satellite position={[1.9, 1, 0.4]} spin={0.6}>
        <mesh>
          <sphereGeometry args={[0.42, 32, 32]} />
          <meshStandardMaterial color={COLORS.sun} roughness={0.3} />
        </mesh>
      </Satellite>

      <Satellite position={[-1.9, 0.8, 0.2]} spin={0.8}>
        <mesh>
          <octahedronGeometry args={[0.48]} />
          <meshStandardMaterial color={COLORS.mint} roughness={0.3} />
        </mesh>
      </Satellite>

      <Satellite position={[-1.5, -1.4, 0.5]} spin={0.5}>
        <mesh>
          <torusGeometry args={[0.38, 0.14, 24, 48]} />
          <meshStandardMaterial color={COLORS.violet} roughness={0.35} />
        </mesh>
      </Satellite>

      <Satellite position={[1.6, -1.3, 0.3]} spin={0.9}>
        <mesh>
          <boxGeometry args={[0.55, 0.55, 0.55]} />
          <meshStandardMaterial color={COLORS.tangerine} roughness={0.3} />
        </mesh>
      </Satellite>
    </group>
  );
}

/** Lazy-loaded 3D hero element. Stops rendering while it is off screen to save battery. */
export default function HeroScene() {
  const { ref, inView } = useInView<HTMLDivElement>({ once: false, threshold: 0 });

  return (
    <div ref={ref} className="size-full" role="img" aria-label="Colourful 3D shapes floating and spinning">
      <Canvas
        frameloop={inView ? "always" : "never"}
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 6], fov: 40 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={1.1} />
        <directionalLight position={[3, 4, 5]} intensity={2.4} />
        <pointLight position={[-4, -2, 3]} intensity={30} color={COLORS.violet} />
        <Cluster />
      </Canvas>
    </div>
  );
}
