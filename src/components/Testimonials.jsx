import { useCallback, useEffect, useRef, useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "../data/content";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

export default function Testimonials() {
  const trackRef = useRef(null);
  const rafRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const scrollToIndex = useCallback((i) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[i];
    if (card) {
      track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: "smooth" });
    }
    setIndex(i);
  }, []);

  // Keep `index` in sync with whatever card is actually centered in view,
  // so manual swipes don't leave the dots/autoplay pointing at the wrong slide.
  const handleScroll = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const track = trackRef.current;
      if (!track) return;
      const children = Array.from(track.children);
      let closest = 0;
      let closestDist = Infinity;
      children.forEach((child, i) => {
        const dist = Math.abs(child.offsetLeft - track.offsetLeft - track.scrollLeft);
        if (dist < closestDist) {
          closestDist = dist;
          closest = i;
        }
      });
      setIndex((prev) => (prev === closest ? prev : closest));
    });
  }, []);

  useEffect(() => {
    if (isPaused) return undefined;
    const timer = setInterval(() => {
      setIndex((prev) => {
        const next = (prev + 1) % testimonials.length;
        scrollToIndex(next);
        return next;
      });
    }, 5500);
    return () => clearInterval(timer);
  }, [isPaused, scrollToIndex]);

  useEffect(() => () => rafRef.current && cancelAnimationFrame(rafRef.current), []);

  return (
    <section id="testimonials" className="relative overflow-hidden bg-beige py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Testimonials"
            title="What it's like to work together."
          />
          <div className="hidden gap-3 sm:flex">
            <button
              type="button"
              onClick={() => scrollToIndex((index - 1 + testimonials.length) % testimonials.length)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors duration-300 hover:border-olive hover:text-olive"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => scrollToIndex((index + 1) % testimonials.length)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors duration-300 hover:border-olive hover:text-olive"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          onScroll={handleScroll}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          className="mt-14 flex snap-x snap-mandatory scroll-smooth gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08} className="w-[85%] shrink-0 snap-center sm:w-[60%] lg:w-[38%]">
              <div
                className={`paper-shadow flex h-full flex-col justify-between rounded-[2rem] border border-ink/5 bg-ivory p-8 transition-all duration-500 ease-out ${
                  i === index ? "opacity-100 sm:scale-100" : "opacity-70 sm:scale-[0.97]"
                }`}
              >
                <Quote className="text-mustard" size={30} />
                <p className="mt-6 flex-1 font-display text-xl italic leading-relaxed text-ink sm:text-2xl">
                  “{t.quote}”
                </p>
                <div className="mt-8 border-t border-ink/10 pt-5">
                  <p className="text-sm font-semibold text-ink">{t.name}</p>
                  <p className="text-xs text-ink-soft">{t.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              onClick={() => scrollToIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-6 bg-olive" : "w-1.5 bg-ink/20 hover:bg-ink/35"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
