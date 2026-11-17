import type { Metadata } from "next";
import { Bricolage_Grotesque, Plus_Jakarta_Sans } from "next/font/google";
import { creator } from "@/projects/debby/data/creator";
import "@/projects/debby/debby.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["600", "800"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${creator.name} | ${creator.niche}`,
  description: creator.pitch,
};

export default function DebbyLayout({ children }: { children: React.ReactNode }) {
  return <div className={`debby ${bricolage.variable} ${jakarta.variable}`}>{children}</div>;
}
