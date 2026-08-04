import { stats } from "../data/content";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import { FloatingStar } from "./ui/Decor";

export default function WhyChooseMe() {
  return (
    <section className="relative overflow-hidden bg-olive py-24 text-cream sm:py-32">
      <div className="bg-grid-texture pointer-events-none absolute inset-0 opacity-10" />
      <div className="pointer-events-none absolute -left-16 top-10 h-64 w-64 rounded-full bg-forest/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 bottom-0 h-72 w-72 rounded-full bg-mustard/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Why Choose Me"
            title="Numbers that reflect the way I work."
            tone="cream"
            dark
          />
          <div className="hidden lg:block">
            <FloatingStar size={34} color="var(--color-mustard)" />
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-5 sm:gap-8 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1}>
              <div className="rounded-3xl border border-cream/15 bg-cream/5 px-6 py-8 text-center backdrop-blur-sm">
                <p className="font-display text-4xl italic text-cream sm:text-5xl">{stat.value}</p>
                <p className="mt-3 text-xs uppercase tracking-[0.18em] text-cream/70 sm:text-sm">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
