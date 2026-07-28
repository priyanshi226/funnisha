import {
  HeartPulse,
  ShoppingBag,
  Factory,
  Cpu,
  Laptop,
  Rocket,
  HandHeart,
  GraduationCap,
  Briefcase,
} from "lucide-react";
import { industries } from "../data/content";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

const icons = [HeartPulse, ShoppingBag, Factory, Cpu, Laptop, Rocket, HandHeart, GraduationCap, Briefcase];

export default function Industries() {
  return (
    <section className="relative overflow-hidden bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Industries Served"
          title="Sector-aware advice, not one-size templates."
          align="center"
        />

        <div className="mt-16 flex flex-wrap justify-center gap-4">
          {industries.map((industry, i) => {
            const Icon = icons[i % icons.length];
            const rotate = i % 3 === 0 ? "-rotate-1" : i % 3 === 1 ? "rotate-1" : "rotate-0";
            return (
              <Reveal key={industry} delay={(i % 5) * 0.06}>
                <div
                  className={`paper-shadow flex items-center gap-3 rounded-full border border-ink/5 bg-cream px-6 py-3.5 ${rotate}`}
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-terracotta/10 text-terracotta">
                    <Icon size={17} />
                  </span>
                  <span className="text-sm font-medium text-ink">{industry}</span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
