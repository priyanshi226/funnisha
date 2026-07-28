import Reveal from "./Reveal";
import Pill from "./Pill";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "olive",
  dark = false,
}) {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <div className={`flex max-w-2xl flex-col gap-5 ${alignment}`}>
      {eyebrow && (
        <Reveal>
          <Pill tone={tone}>{eyebrow}</Pill>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <h2
          className={`text-4xl leading-[1.08] sm:text-5xl md:text-6xl ${
            dark ? "text-cream" : "text-ink"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p
            className={`max-w-xl text-base leading-relaxed sm:text-lg ${
              dark ? "text-cream/75" : "text-ink-soft"
            }`}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
