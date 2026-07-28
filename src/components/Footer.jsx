import { GraduationCap, ExternalLink } from "lucide-react";
import { profile, navLinks, links } from "../data/content";
import { LinkedinGlyph } from "./ui/BrandIcons";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-forest py-16 text-cream">
      <div className="bg-grid-texture pointer-events-none absolute inset-0 opacity-[0.06]" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-8 border-b border-cream/10 pb-10 sm:flex-row">
          <div className="max-w-sm">
            <a href="#home" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cream font-display text-sm italic text-olive">
                FG
              </span>
              <span className="font-display text-xl italic">{profile.name}</span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-cream/65">
              {profile.title}, practical, research-grounded finance and compliance advisory.
            </p>
          </div>

          <div className="flex flex-col gap-3 text-sm text-cream/70">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition-colors hover:text-cream">
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3 text-sm text-cream/70">
            <a href={`tel:${profile.phoneHref}`} className="transition-colors hover:text-cream">
              {profile.phone}
            </a>
            <a href={`mailto:${profile.email}`} className="transition-colors hover:text-cream">
              {profile.email}
            </a>
            <span>{profile.location}</span>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-cream/50">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <div className="flex gap-3">
            <a
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/15 text-cream/70 transition-colors hover:border-cream hover:text-cream"
              aria-label="LinkedIn"
            >
              <LinkedinGlyph size={15} />
            </a>
            <a
              href={links.scholar}
              target="_blank"
              rel="noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/15 text-cream/70 transition-colors hover:border-cream hover:text-cream"
              aria-label="Google Scholar"
            >
              <GraduationCap size={15} />
            </a>
            <a
              href={links.academia}
              target="_blank"
              rel="noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/15 text-cream/70 transition-colors hover:border-cream hover:text-cream"
              aria-label="Academia.edu"
            >
              <ExternalLink size={15} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
