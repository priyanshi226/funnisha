import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { aboutParagraphs, aboutFloatingLabels, qualifications } from "../data/content";
import Reveal from "./ui/Reveal";
import Pill from "./ui/Pill";
import PortraitFrame from "./ui/PortraitFrame";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-ivory py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative order-2 mx-auto w-full max-w-md lg:order-1 lg:max-w-none">
            <Reveal>
              <PortraitFrame variant="about" className="paper-shadow-lg" />
            </Reveal>

            {aboutFloatingLabels.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 + i * 0.15 }}
                className={`paper-shadow absolute hidden rounded-2xl border border-ink/5 bg-cream px-4 py-3 sm:block ${
                  i === 0
                    ? "-left-10 top-10"
                    : i === 1
                    ? "-right-8 top-1/2 -translate-y-1/2"
                    : "-left-6 bottom-10"
                }`}
              >
                <p className="font-display text-xl italic text-olive">{item.label}</p>
                <p className="text-xs text-ink-soft">{item.sub}</p>
              </motion.div>
            ))}
          </div>

          <div className="order-1 flex flex-col gap-5 lg:order-2">
            <Reveal>
              <Pill tone="olive">About</Pill>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="text-4xl leading-[1.08] text-ink sm:text-5xl">
                Hello, I'm <span className="italic text-olive">Funnisha.</span>
              </h2>
            </Reveal>

            <div className="flex flex-col gap-5">
              {aboutParagraphs.map((para, i) => (
                <Reveal key={i} delay={0.1 + i * 0.06}>
                  <p className="text-base leading-relaxed text-ink-soft sm:text-lg">{para}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-16 flex items-center gap-2 text-sm font-medium text-olive sm:mt-20">
            <GraduationCap size={18} />
            <span>Qualifications & Credentials</span>
          </div>
        </Reveal>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {qualifications.map((q, i) => (
            <Reveal key={q.title} delay={0.14 + i * 0.05}>
              <div className="paper-shadow h-full rounded-2xl border border-ink/5 bg-cream px-5 py-4">
                <p className="font-display text-lg leading-snug text-ink">{q.title}</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-ink-soft">
                  {q.org} · {q.year}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
