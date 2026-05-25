import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { CTASection } from "@/components/sections";
import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import { Award, Globe, Users, Target } from "lucide-react";
import imgTeam from "@/assets/img-team.jpg";
import imgControlRoom from "@/assets/img-control-room.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "About — CDigital Technologies" }, { name: "description", content: "We engineer enterprise digital transformation on the Microsoft cloud." }] }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About CDigital"
        title={<>The engineering partner for <span className="text-gradient-orange">industrial-grade transformation.</span></>}
        description="We are a Microsoft-first technology firm specializing in enterprise ERP, AI automation and real-time telemetry across mission-critical industries."
        image={imgControlRoom}
      />

      <section className="relative py-24 overflow-hidden">
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-orange/5 blur-[120px]" />
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal direction="right">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Built by engineers. <span className="text-gradient-orange">Trusted by enterprises.</span></h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              CDigital Technologies was founded on a simple conviction: enterprise transformation requires
              engineering rigor, not consultants in slide decks. We bring deep specialization in the
              Microsoft cloud stack and operate as an extension of your CTO office.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              From Dynamics 365 rollouts across continents to telemetry platforms running on the edge of
              the grid, we ship infrastructure your business can stake its operations on.
            </p>
          </Reveal>
          <Reveal direction="left">
            <div className="relative rounded-3xl overflow-hidden shadow-elegant group">
              <img src={imgTeam} alt="CDigital enterprise team" loading="lazy" width={1536} height={1024} className="w-full h-[420px] object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="text-xs font-semibold uppercase tracking-widest text-orange-glow">Global delivery teams</div>
                <div className="mt-1 text-lg font-semibold">Engineering pods across 4 continents.</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Stagger className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Award, n: "12+", l: "Years delivering" },
              { icon: Globe, n: "40+", l: "Countries" },
              { icon: Users, n: "320+", l: "Engineers" },
              { icon: Target, n: "200+", l: "Programs shipped" },
            ].map((s) => (
              <StaggerItem key={s.l}>
                <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 hover:border-orange/40 transition-all hover-tilt">
                  <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-orange/10 blur-2xl opacity-0 group-hover:opacity-100 transition" />
                  <div className="relative">
                    <s.icon className="h-6 w-6 text-orange" />
                    <div className="mt-4 text-4xl font-bold text-gradient-orange">{s.n}</div>
                    <div className="mt-1 text-sm text-muted-foreground">{s.l}</div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-secondary/40 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight max-w-2xl">Our values</h2>
          </Reveal>
          <Stagger className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              { t: "Engineering integrity", d: "We say what's true, ship what works, and document what we built." },
              { t: "Outcome over output", d: "Every engagement ties to measurable KPIs in throughput, cost or risk." },
              { t: "Long-term partnership", d: "We are still operating systems we deployed a decade ago. We're built to stay." },
            ].map((v) => (
              <StaggerItem key={v.t}>
                <div className="rounded-2xl border border-border bg-card p-7 hover-tilt h-full">
                  <h3 className="text-lg font-semibold">{v.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
      <CTASection />
    </>
  );
}
