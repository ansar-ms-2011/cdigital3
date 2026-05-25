import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Activity, Cpu, BarChart3, TrendingUp } from "lucide-react";
import logoMark from "@/assets/logo-mark.png";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-hero-gradient pt-16">
      {/* Animated grid */}
      <div className="absolute inset-0 grid-bg animate-grid-move opacity-60 mask-fade-b" />
      {/* Gradient orbs */}
      <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-orange/20 blur-[120px] animate-pulse-glow" />
      <div className="absolute top-1/3 -right-32 h-[600px] w-[600px] rounded-full bg-cyan-glow/15 blur-[140px] animate-pulse-glow" />
      {/* Conic atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[700px] conic-glow animate-spin-slow opacity-40 pointer-events-none" />
      {/* Scan line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange to-transparent animate-scan-line" />
      {/* Noise */}
      <div className="absolute inset-0 noise-overlay opacity-[0.06] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-32 lg:pt-32">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-white/90">
              <Sparkles className="h-3.5 w-3.5 text-orange" />
              Microsoft Solutions Partner · 2026
            </div>
            <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Enterprise <span className="text-gradient-orange">intelligence</span>,
              engineered to scale.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
              We unify Microsoft Dynamics 365, AI automation, and real-time telemetry to
              power digital transformation across industries that can't afford to slow down.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-orange-gradient px-6 py-3.5 text-sm font-semibold text-white shadow-orange transition-transform hover:scale-105"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <span className="relative">Start a project</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center gap-2 rounded-full glass px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10"
              >
                Explore case studies
              </Link>
            </div>

            <div className="mt-14 grid grid-cols-3 gap-6 max-w-md">
              {[
                { n: "200+", l: "Enterprise rollouts" },
                { n: "40+", l: "Countries served" },
                { n: "99.99%", l: "Uptime SLA" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-2xl font-bold text-white">{s.n}</div>
                  <div className="mt-1 text-xs text-white/55">{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Floating dashboards */}
          <div className="relative h-[520px] hidden lg:block">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="absolute top-0 right-0 w-[360px] rounded-2xl glass shadow-glass p-5 animate-float"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-lg bg-orange-gradient flex items-center justify-center">
                    <Activity className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">Telemetry · Live</div>
                    <div className="text-[10px] text-white/50">Plant 4 · North Region</div>
                  </div>
                </div>
                <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <div className="mt-4 h-20 flex items-end gap-1">
                {[40, 65, 50, 72, 58, 82, 70, 90, 75, 88, 95, 80, 92, 85].map((h, i) => (
                  <div key={i} className="flex-1 rounded-sm bg-gradient-to-t from-orange/30 to-orange" style={{ height: `${h}%` }} />
                ))}
              </div>
              <div className="mt-3 flex justify-between text-[10px] text-white/55">
                <span>Throughput</span>
                <span className="text-emerald-400">+18.4%</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute top-44 left-0 w-[320px] rounded-2xl glass shadow-glass p-5 animate-float-slow"
            >
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-white/10 flex items-center justify-center">
                  <Cpu className="h-4 w-4 text-cyan-glow" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">AI Forecast Engine</div>
                  <div className="text-[10px] text-white/50">Demand · Q3 2026</div>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                {[
                  { l: "Inventory accuracy", v: 96, c: "bg-orange" },
                  { l: "Downtime risk", v: 18, c: "bg-cyan-glow" },
                  { l: "Cost optimization", v: 74, c: "bg-emerald-400" },
                ].map((b) => (
                  <div key={b.l}>
                    <div className="flex justify-between text-[10px] text-white/70">
                      <span>{b.l}</span><span>{b.v}%</span>
                    </div>
                    <div className="mt-1 h-1.5 rounded-full bg-white/10 overflow-hidden">
                      <div className={`h-full ${b.c}`} style={{ width: `${b.v}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="absolute bottom-0 right-8 w-[280px] rounded-2xl glass shadow-glass p-5 animate-float"
              style={{ animationDelay: "1s" }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BarChart3 className="h-4 w-4 text-orange" />
                  <span className="text-xs font-semibold text-white">Revenue · YoY</span>
                </div>
                <TrendingUp className="h-3.5 w-3.5 text-emerald-400" />
              </div>
              <div className="mt-3 text-3xl font-bold text-white">$42.8M</div>
              <div className="text-[10px] text-emerald-400">↑ 23.6% vs last cycle</div>
              <svg viewBox="0 0 280 60" className="mt-2 w-full">
                <path d="M0,50 Q40,30 80,35 T160,20 T240,10 L280,5"
                  fill="none" stroke="url(#g)" strokeWidth="2" />
                <defs>
                  <linearGradient id="g" x1="0" x2="1">
                    <stop offset="0" stopColor="#FF6B35" />
                    <stop offset="1" stopColor="#FFB088" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>

            {/* Orbital rings + logo mark center */}
            <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="absolute -inset-40 rounded-full border border-orange/20 animate-spin-slow" />
              <div className="absolute -inset-28 rounded-full border border-cyan-glow/20 animate-spin-reverse" />
              <div className="absolute -inset-16 rounded-full border border-white/10 animate-ring-pulse" />
              <div className="h-32 w-32 rounded-full bg-orange/30 blur-3xl absolute inset-0" />
              <img src={logoMark} alt="" className="relative h-16 w-16 object-contain opacity-90 drop-shadow-[0_0_30px_rgba(255,107,53,0.6)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
