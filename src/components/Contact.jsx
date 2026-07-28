import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { profile, services } from "../data/content";
import Reveal from "./ui/Reveal";
import Pill from "./ui/Pill";
import MagneticButton from "./ui/MagneticButton";
import { FloatingStar } from "./ui/Decor";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-grid-texture relative overflow-hidden bg-cream py-24 sm:py-32">
      <div className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-terracotta/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-sage-light/40 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-16 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="flex flex-col gap-8">
          <Reveal>
            <Pill tone="olive">Contact</Pill>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="text-4xl leading-[1.08] text-ink sm:text-5xl">
              Let's Discuss Your <span className="italic text-olive">Financial Goals.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="max-w-md text-base leading-relaxed text-ink-soft sm:text-lg">
              Whether it's a filing deadline, a new incorporation, or a longer-term compliance
              plan, reach out and I'll get back to you within one business day.
            </p>
          </Reveal>

          <div className="flex flex-col gap-5">
            <Reveal delay={0.2}>
              <a
                href={`tel:${profile.phoneHref}`}
                className="paper-shadow flex items-center gap-4 rounded-2xl border border-ink/5 bg-ivory px-6 py-4 transition-transform duration-300 hover:-translate-y-1"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-olive/10 text-olive">
                  <Phone size={18} />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wide text-ink-soft">Phone</p>
                  <p className="font-medium text-ink">{profile.phone}</p>
                </div>
              </a>
            </Reveal>
            <Reveal delay={0.26}>
              <a
                href={`mailto:${profile.email}`}
                className="paper-shadow flex items-center gap-4 rounded-2xl border border-ink/5 bg-ivory px-6 py-4 transition-transform duration-300 hover:-translate-y-1"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-olive/10 text-olive">
                  <Mail size={18} />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wide text-ink-soft">Email</p>
                  <p className="font-medium text-ink">{profile.email}</p>
                </div>
              </a>
            </Reveal>
            <Reveal delay={0.32}>
              <div className="paper-shadow flex items-center gap-4 rounded-2xl border border-ink/5 bg-ivory px-6 py-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-olive/10 text-olive">
                  <MapPin size={18} />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wide text-ink-soft">Based in</p>
                  <p className="font-medium text-ink">{profile.location}</p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="relative hidden pt-4 sm:block">
            <FloatingStar size={26} />
          </div>
        </div>

        <Reveal delay={0.1} className="w-full">
          <form
            onSubmit={handleSubmit}
            className="paper-shadow-lg noise-overlay relative rounded-[2.5rem] border border-ink/5 bg-ivory p-8 sm:p-10"
          >
            {submitted ? (
              <div className="flex h-full min-h-[380px] flex-col items-center justify-center gap-4 text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-olive/10 text-olive">
                  <Send size={26} />
                </span>
                <h3 className="font-display text-2xl text-ink">Message sent.</h3>
                <p className="max-w-xs text-sm text-ink-soft">
                  Thank you for reaching out. I'll respond within one business day.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm text-ink-soft">
                  Name
                  <input
                    required
                    type="text"
                    placeholder="Your full name"
                    className="rounded-xl border border-ink/10 bg-cream px-4 py-3 text-ink outline-none transition-colors focus:border-olive"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm text-ink-soft">
                  Phone
                  <input
                    required
                    type="tel"
                    placeholder="+91 00000 00000"
                    className="rounded-xl border border-ink/10 bg-cream px-4 py-3 text-ink outline-none transition-colors focus:border-olive"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm text-ink-soft sm:col-span-2">
                  Email
                  <input
                    required
                    type="email"
                    placeholder="you@email.com"
                    className="rounded-xl border border-ink/10 bg-cream px-4 py-3 text-ink outline-none transition-colors focus:border-olive"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm text-ink-soft sm:col-span-2">
                  Service
                  <select className="rounded-xl border border-ink/10 bg-cream px-4 py-3 text-ink outline-none transition-colors focus:border-olive">
                    {services.map((s) => (
                      <option key={s.title}>{s.title}</option>
                    ))}
                    <option>Something else</option>
                  </select>
                </label>
                <label className="flex flex-col gap-2 text-sm text-ink-soft sm:col-span-2">
                  Message
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me a little about what you need help with..."
                    className="resize-none rounded-xl border border-ink/10 bg-cream px-4 py-3 text-ink outline-none transition-colors focus:border-olive"
                  />
                </label>

                <div className="sm:col-span-2">
                  <MagneticButton type="submit" className="w-full sm:w-auto">
                    Let's Discuss Your Financial Goals
                  </MagneticButton>
                </div>
              </div>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
