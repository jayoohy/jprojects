"use client";

import { useSectionVisible } from "@/projects/debby/hooks/useSectionVisible";
import { HireButton } from "@/projects/debby/components/ui/HireButton";

/** Keeps the hire button within reach on every section, and steps aside when the contact section already shows one. */
export function StickyHireButton() {
  const contactVisible = useSectionVisible("contact");

  return (
    <div
      inert={contactVisible}
      className={`fixed bottom-4 right-4 z-40 drop-shadow-[0_10px_30px_rgba(27,16,48,0.25)] transition-[opacity,transform] duration-500 ease-spring md:bottom-6 md:right-6 ${
        contactVisible ? "pointer-events-none translate-y-6 opacity-0" : "translate-y-0 opacity-100"
      }`}
    >
      <HireButton label="Work with me" />
    </div>
  );
}
