import {
  PenTool,
  Building2,
  ClipboardList,
  Calculator,
  Landmark,
  TrendingUp,
  BookOpen,
  Percent,
  Users,
  GraduationCap,
} from "lucide-react";
import { services } from "../data/content";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

const icons = {
  PenTool,
  Building2,
  ClipboardList,
  Calculator,
  Landmark,
  TrendingUp,
  BookOpen,
  Percent,
  Users,
  GraduationCap,
};

export default function Services() {
  return (
    <section id="services" className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Services"
          title="Practical support, across every stage of the business."
          description="From first incorporation to ongoing statutory compliance, a single point of accountability for the numbers and the paperwork."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[service.icon];
            return (
              <Reveal key={service.title} delay={(i % 3) * 0.08}>
                <div className="paper-shadow relative h-full overflow-hidden rounded-3xl border border-ink/5 bg-ivory p-7">
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-olive/10 text-olive">
                    {Icon && <Icon size={22} />}
                  </div>
                  <h3 className="relative mt-6 font-display text-2xl text-ink">{service.title}</h3>
                  <ul className="relative mt-4 flex flex-col gap-2">
                    {service.items.map((item) => (
                      <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-ink-soft">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-terracotta" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
