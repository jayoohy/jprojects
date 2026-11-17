import { creator } from "@/projects/debby/data/creator";
import { BrandsStrip } from "@/projects/debby/components/brands/BrandsStrip";
import { ContactSection } from "@/projects/debby/components/contact/ContactSection";
import { Hero } from "@/projects/debby/components/hero/Hero";
import { StickyHireButton } from "@/projects/debby/components/layout/StickyHireButton";
import { NumbersSection } from "@/projects/debby/components/numbers/NumbersSection";
import { ProcessSection } from "@/projects/debby/components/process/ProcessSection";
import { ServicesSection } from "@/projects/debby/components/services/ServicesSection";
import { Marquee } from "@/projects/debby/components/ui/Marquee";
import { WorkSection } from "@/projects/debby/components/work/WorkSection";

export default function DebbyPage() {
  return (
    <main>
      <Hero />
      <Marquee items={creator.marqueeWords} />
      <WorkSection />
      <NumbersSection />
      <ServicesSection />
      <ProcessSection />
      <BrandsStrip />
      <ContactSection />
      <StickyHireButton />
    </main>
  );
}
