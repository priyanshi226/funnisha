import { FileText, Download } from "lucide-react";
import { publications } from "../data/content";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

export default function Publications() {
  return (
    <section id="publications" className="bg-ivory py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Research"
          title="Published research, Scopus-indexed and UGC CARE journals."
          description="Peer-reviewed papers and a book chapter spanning taxation, corporate distress resolution, energy policy and capital markets. Full papers are open to read."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {publications.map((pub, i) => (
            <Reveal key={pub.title} delay={i * 0.06}>
              <div className="paper-shadow flex h-full flex-col rounded-3xl border border-ink/5 bg-cream p-7">
                <FileText className="text-olive" size={22} strokeWidth={1.75} />
                <h3 className="mt-4 font-display text-lg leading-snug text-ink">
                  {pub.title}
                </h3>
                <p className="mt-3 flex-1 text-xs leading-relaxed text-ink-soft">
                  {pub.venue}
                </p>
                {pub.pdf ? (
                  <a
                    href={pub.pdf}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 flex w-fit items-center gap-2 rounded-full border border-olive/30 bg-olive/10 px-4 py-2 text-xs font-medium text-olive transition-colors hover:border-olive hover:bg-olive hover:text-cream"
                  >
                    <Download size={14} /> Read Paper
                  </a>
                ) : (
                  <span className="mt-6 w-fit rounded-full border border-ink/10 px-4 py-2 text-xs font-medium text-ink-soft/60">
                    Publication on request
                  </span>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
