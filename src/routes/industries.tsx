import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { INDUSTRIES, CTASection } from "@/components/sections";
import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import imgTelemetry from "@/assets/img-telemetry.jpg";

export const Route = createFileRoute("/industries")({
  head: () => ({ meta: [{ title: "Industries — CDigital Technologies" }, { name: "description", content: "Specialized digital transformation for manufacturing, water, utilities, mining, energy, logistics and government." }] }),
  component: IndustriesPage,
});

function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title={<>Industry depth that <span className="text-gradient-orange">moves the needle.</span></>}
        description="We bring sector-specific accelerators, reference architectures and seasoned engineers to industries where operations cannot fail."
        image={imgTelemetry}
      />
      <section className="relative py-24 overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-orange/5 blur-[140px]" />
        <div className="mx-auto max-w-7xl px-6">
          <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((ind) => (
              <StaggerItem key={ind.t}>
                <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 hover:shadow-elegant hover:border-orange/40 transition-all hover-tilt h-full">
                  <div className="absolute -top-12 -right-12 h-36 w-36 rounded-full bg-orange-gradient opacity-0 blur-3xl group-hover:opacity-30 transition" />
                  <div className="relative">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white group-hover:bg-orange-gradient transition">
                      <ind.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold">{ind.t}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{ind.d}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy-gradient py-24 text-white">
        <div className="absolute inset-0 grid-bg opacity-25" />
        <img src={imgTelemetry} alt="" loading="lazy" width={1536} height={1024} className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.18_0.06_260/0.95)] via-[oklch(0.18_0.06_260/0.7)] to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium">Industrial digitalization</div>
              <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
                Telemetry at the edge of <span className="text-gradient-orange">critical infrastructure.</span>
              </h2>
              <p className="mt-5 text-white/70">
                Edge gateways, SCADA integration, Fabric-native lakehouses and Power BI control rooms —
                engineered for utilities, water networks and energy operators that run 24/7.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
