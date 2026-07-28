import { Award, BookOpen, GraduationCap, ExternalLink } from "lucide-react";
import { experience, certifications, publications, links } from "../data/content";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import { LinkedinGlyph } from "./ui/BrandIcons";

export default function Experience() {
  return (
    <section id="experience" className="bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Experience"
          title="A practice built across audit, academia and research."
          description="A working history spanning statutory audit, corporate compliance, teaching, and published research."
        />

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="flex flex-col gap-5">
            {experience.map((role, i) => (
              <Reveal key={role.role + role.org} delay={i * 0.06}>
                <div className="paper-shadow rounded-3xl border border-ink/5 bg-ivory p-7">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-xl text-ink sm:text-2xl">{role.role}</h3>
                    {role.period && (
                      <span className="text-xs uppercase tracking-wide text-terracotta">
                        {role.period}
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-sm font-medium text-olive">{role.org}</p>
                  <ul className="mt-4 flex flex-col gap-2">
                    {role.points.map((point) => (
                      <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-ink-soft">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-terracotta" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="flex flex-col gap-8">
            <Reveal>
              <div className="paper-shadow rounded-3xl border border-ink/5 bg-olive p-7 text-cream">
                <div className="flex items-center gap-2.5 text-sm font-medium uppercase tracking-wide text-cream/70">
                  <Award size={16} /> Certifications
                </div>
                <ul className="mt-5 flex flex-col gap-3">
                  {certifications.map((cert) => (
                    <li key={cert} className="flex gap-2.5 text-sm leading-relaxed text-cream/90">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-mustard" />
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="paper-shadow rounded-3xl border border-ink/5 bg-ivory p-7">
                <div className="flex items-center gap-2.5 text-sm font-medium uppercase tracking-wide text-ink-soft">
                  <BookOpen size={16} /> Research & Publications
                </div>
                <ul className="mt-5 flex flex-col gap-4">
                  {publications.map((pub) => (
                    <li key={pub.title} className="border-l-2 border-terracotta/40 pl-4">
                      <p className="text-sm font-medium leading-snug text-ink">{pub.title}</p>
                      <p className="mt-1 text-xs text-ink-soft">{pub.venue}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="paper-shadow flex flex-wrap gap-3 rounded-3xl border border-ink/5 bg-cream p-6">
                <a
                  href={links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-full border border-ink/10 bg-ivory px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:border-olive hover:text-olive"
                >
                  <LinkedinGlyph size={15} /> LinkedIn
                </a>
                <a
                  href={links.scholar}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-full border border-ink/10 bg-ivory px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:border-olive hover:text-olive"
                >
                  <GraduationCap size={15} /> Google Scholar
                </a>
                <a
                  href={links.academia}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-full border border-ink/10 bg-ivory px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:border-olive hover:text-olive"
                >
                  <ExternalLink size={15} /> Academia.edu
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
