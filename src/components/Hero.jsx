import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { profile } from "../data/content";
import MagneticButton from "./ui/MagneticButton";
import Pill from "./ui/Pill";
import PortraitFrame from "./ui/PortraitFrame";
import { FloatingStar } from "./ui/Decor";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-grid-texture relative overflow-hidden bg-cream pb-20 pt-36 sm:pt-44"
    >
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_75%)]">
        <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-sage-light/40 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-mustard/20 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Pill tone="cream">
              <Sparkles size={13} className="text-terracotta" /> Dr. CA CS · AIR-40, ICAI
            </Pill>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl leading-[1.02] text-ink sm:text-6xl md:text-7xl"
          >
            Research.
            <br />
            <span className="italic text-olive">Compliance.</span>
            <br />
            Growth.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="max-w-lg text-lg leading-relaxed text-ink-soft"
          >
            {profile.heroSub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4"
          >
            <MagneticButton as="a" href="#contact">
              Book a Consultation <ArrowUpRight size={16} />
            </MagneticButton>
            <MagneticButton as="a" href="#services" tone="outline">
              View Services
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="flex items-center gap-6 pt-4 text-sm text-ink-soft"
          >
            <div className="flex flex-col">
              <span className="font-display text-2xl text-olive">6+</span>
              <span>Years of experience</span>
            </div>
            <div className="h-8 w-px bg-ink/10" />
            <div className="flex flex-col">
              <span className="font-display text-2xl text-olive">AIR-40</span>
              <span>CA Final, ICAI</span>
            </div>
            <div className="h-8 w-px bg-ink/10" />
            <div className="flex flex-col">
              <span className="font-display text-2xl text-olive">10+</span>
              <span>Publications</span>
            </div>
          </motion.div>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <PortraitFrame className="paper-shadow-lg" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            className="absolute -left-6 -top-6 hidden sm:block"
          >
            <FloatingStar size={30} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
