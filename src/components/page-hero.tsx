import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { MicrosoftBadgeRow } from "@/components/microsoft-logos";

interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  cta?: { label: string; to: string };
  image?: string;
  showBadges?: boolean;
}

export function PageHero({ eyebrow, title, description, cta, image, showBadges = true }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-hero-gradient pt-32 pb-24 text-white">
      <div className="absolute inset-0 grid-bg opacity-40 mask-fade-b" />
      <div className="absolute -top-20 right-0 h-[460px] w-[460px] rounded-full bg-orange/20 blur-[130px] animate-pulse-glow" />
      <div className="absolute bottom-0 left-1/4 h-[380px] w-[380px] rounded-full bg-cyan-glow/15 blur-[130px] animate-pulse-glow" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange to-transparent animate-scan-line" />
      {image && (
        <div className="absolute inset-0">
          <img src={image} alt="" className="h-full w-full object-cover opacity-25" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.15_0.06_260/0.92)] via-[oklch(0.15_0.06_260/0.7)] to-transparent" />
        </div>
      )}
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-orange animate-pulse" />
          {eyebrow}
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-5 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl max-w-4xl"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-2xl text-lg text-white/70"
        >
          {description}
        </motion.p>
        {cta && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Link to={cta.to} className="group mt-8 inline-flex items-center gap-2 overflow-hidden rounded-full bg-orange-gradient px-6 py-3 text-sm font-semibold text-white shadow-orange hover:scale-105 transition">
              {cta.label} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        )}
        {showBadges && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10"
          >
            <MicrosoftBadgeRow tone="dark" />
          </motion.div>
        )}
      </div>
    </section>
  );
}
