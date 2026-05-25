import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { DynamicsShowcase, CTASection } from "@/components/sections";
import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import imgData from "@/assets/img-data.jpg";

export const Route = createFileRoute("/dynamics-365")({
  head: () => ({ meta: [{ title: "Microsoft Dynamics 365 — CDigital Technologies" }, { name: "description", content: "Dynamics 365 ERP and CRM implementation, integration and managed services." }] }),
  component: D365Page,
});

function D365Page() {
  const modules = [
    { t: "Finance", d: "Real-time financial close, multi-entity, multi-currency, with AI assistance." },
    { t: "Supply Chain Management", d: "Demand forecasting, planning optimization, warehouse and IoT-connected operations." },
    { t: "Sales", d: "Pipeline intelligence, Copilot-driven outreach, account-based revenue motion." },
    { t: "Customer Service", d: "Omnichannel case management with knowledge AI and agent productivity tools." },
    { t: "Field Service", d: "Dispatch optimization, mixed-reality assists and IoT-triggered work orders." },
    { t: "Project Operations", d: "Quote-to-cash for services firms with resource and profitability intelligence." },
  ];
  return (
    <>
      <PageHero
        eyebrow="Microsoft Dynamics 365"
        title={<>Dynamics 365, <span className="text-gradient-orange">engineered for your enterprise.</span></>}
        description="A complete Microsoft Business Applications practice — implementation, integration, optimization and managed services across every D365 module."
        cta={{ label: "Plan your rollout", to: "/contact" }}
        image={imgData}
      />
      <section className="relative py-24 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-96 w-[800px] rounded-full bg-orange/5 blur-[120px]" />
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl max-w-2xl">Modules we deliver</h2>
            <p className="mt-4 max-w-xl text-muted-foreground">Production-grade Dynamics 365 rollouts across the full Microsoft Business Applications portfolio.</p>
          </Reveal>
          <Stagger className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {modules.map((m) => (
              <StaggerItem key={m.t}>
                <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 hover:shadow-elegant hover:border-orange/40 transition-all hover-tilt h-full">
                  <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-orange/10 blur-2xl opacity-0 group-hover:opacity-100 transition" />
                  <div className="relative">
                    <h3 className="text-lg font-semibold">{m.t}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{m.d}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
      <DynamicsShowcase />
      <CTASection />
    </>
  );
}
