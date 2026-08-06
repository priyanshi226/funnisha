import { process } from "../data/content";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

export default function Process() {
  return (
    <section className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Process"
          title="A clear path from first call to filed."
          description="No ambiguity about what happens next, or when."
        />

        <div className="relative mt-8 sm:mt-16">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-ink/10 sm:block lg:left-1/2" />

          <div className="flex flex-col gap-3 sm:gap-10 lg:gap-0">
            {process.map((item, i) => (
              <Reveal key={item.step} delay={i * 0.08}>
                <div
                  className={`relative flex flex-col gap-4 py-1 sm:flex-row sm:items-center sm:py-4 lg:py-10 ${
                    i % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className="flex-1">
                    <div
                      className={`paper-shadow rounded-3xl border border-ink/5 bg-ivory p-7 lg:max-w-md ${
                        i % 2 === 1 ? "lg:ml-auto" : ""
                      }`}
                    >
                      <span className="font-display text-sm italic text-terracotta">
                        Step {item.step}
                      </span>
                      <h3 className="mt-2 font-display text-2xl text-ink">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="absolute left-6 top-1/2 hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-cream bg-olive sm:block lg:left-1/2" />

                  <div className="hidden flex-1 lg:block" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
