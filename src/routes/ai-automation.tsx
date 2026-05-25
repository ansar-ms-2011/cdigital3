import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { AIInnovation, CTASection } from "@/components/sections";
import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import imgAi from "@/assets/img-ai.jpg";

export const Route = createFileRoute("/ai-automation")({
  head: () => ({ meta: [{ title: "AI & Automation — CDigital Technologies" }, { name: "description", content: "Generative AI agents, intelligent automation and predictive analytics for enterprise." }] }),
  component: AIPage,
});

function AIPage() {
  const items = [
    { t: "Copilot Studio Agents", d: "Custom AI agents grounded in your enterprise data, deployed across Teams, Dynamics and the web." },
    { t: "Document Intelligence", d: "Azure AI Document Intelligence pipelines for invoices, contracts, and regulatory filings." },
    { t: "Forecasting & Demand Planning", d: "Time-series ML models integrated into Dynamics SCM and Fabric." },
    { t: "Anomaly Detection", d: "Real-time anomaly scoring on telemetry streams with alerting and auto-remediation." },
    { t: "Conversational AI", d: "Voice and chat assistants for customer service, field workers and internal operations." },
    { t: "AI Governance", d: "Responsible AI frameworks, model monitoring, and policy guardrails." },
  ];
  return (
    <>
      <PageHero
        eyebrow="AI & Automation"
        title={<>From <span className="text-gradient-orange">pilots</span> to enterprise-grade AI in production.</>}
        description="We design, deploy and operate generative AI and automation platforms — engineered for security, governance and measurable ROI."
        cta={{ label: "Scope your AI program", to: "/contact" }}
        image={imgAi}
      />
      <AIInnovation />
      <section className="relative py-24 overflow-hidden">
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-cyan-glow/10 blur-[120px]" />
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl max-w-2xl">Capabilities</h2>
          </Reveal>
          <Stagger className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {items.map((m) => (
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
      <CTASection />
    </>
  );
}
