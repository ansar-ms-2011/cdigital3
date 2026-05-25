import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Database, BrainCircuit, BarChart3, Radio, Workflow, Shield, Building2, Factory, Truck, ShoppingBag, Landmark, Droplets, Pickaxe, Flame, CheckCircle2, Quote } from "lucide-react";
import { MicrosoftLogoMarquee } from "@/components/microsoft-logos";
import imgData from "@/assets/img-data.jpg";
import imgAi from "@/assets/img-ai.jpg";

export function TrustBar() {
  return (
    <section className="border-y border-border bg-secondary/40 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Trusted by enterprise leaders · Built on the Microsoft cloud
        </p>
        <div className="mt-8">
          <MicrosoftLogoMarquee />
        </div>
      </div>
    </section>
  );
}

const SERVICES = [
  { icon: Database, title: "ERP Modernization", desc: "Cloud-native Dynamics 365 Finance & Operations rollouts that replace legacy ERP without disruption." },
  { icon: Workflow, title: "CRM & Customer 360", desc: "Unified sales, service and marketing on Dynamics 365 with Copilot-grade automation." },
  { icon: BrainCircuit, title: "AI & Automation", desc: "Generative AI agents, RPA, and intelligent workflows that compound productivity." },
  { icon: BarChart3, title: "BI & Analytics", desc: "Microsoft Fabric, Power BI and predictive models that turn data into decisions." },
  { icon: Radio, title: "Real-Time Telemetry", desc: "SCADA-grade ingestion, edge gateways and live ops dashboards for critical infrastructure." },
  { icon: Shield, title: "Cloud & Security", desc: "Azure landing zones, identity, and zero-trust architecture engineered for compliance." },
];

export function Services() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-8 flex-wrap">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange/20 bg-orange/5 px-3 py-1 text-xs font-medium text-orange">
              Services
            </div>
            <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
              Six disciplines.
              <br />
              <span className="text-gradient-orange">One enterprise platform.</span>
            </h2>
          </div>
          <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-orange">
            All services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all hover:border-orange/40 hover:shadow-elegant"
            >
              <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-orange/10 blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <div className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-orange opacity-0 transition-opacity group-hover:opacity-100">
                  Learn more <ArrowRight className="h-3 w-3" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyCDigital() {
  const points = [
    { t: "Microsoft-first engineering", d: "Solutions partner credentials across Business Applications, Data & AI and Azure infrastructure." },
    { t: "Industrial depth", d: "Deep specialization in water, utilities, mining, manufacturing and logistics — not generic SaaS." },
    { t: "AI-native delivery", d: "Every engagement ships with Copilot, generative agents and automation built-in by default." },
    { t: "Outcome accountability", d: "Fixed-outcome statements of work tied to throughput, cost and risk KPIs — not billable hours." },
  ];
  return (
    <section className="relative overflow-hidden bg-navy-gradient py-28 text-white">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-orange/15 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium">
              Why CDigital
            </div>
            <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
              The partner enterprises call <span className="text-gradient-orange">when the stakes are real.</span>
            </h2>
            <p className="mt-5 max-w-lg text-white/65">
              From a single plant rollout to a multi-country digital backbone, we operate as an extension
              of your CTO office — engineering, integrating and running it with you.
            </p>
          </div>
          <div className="space-y-4">
            {points.map((p, i) => (
              <motion.div
                key={p.t}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-4 rounded-2xl glass p-5"
              >
                <CheckCircle2 className="h-6 w-6 shrink-0 text-orange" />
                <div>
                  <h4 className="font-semibold">{p.t}</h4>
                  <p className="mt-1 text-sm text-white/65">{p.d}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function DynamicsShowcase() {
  const modules = ["Finance", "Supply Chain", "Sales", "Customer Service", "Field Service", "Project Ops", "HR", "Commerce"];
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1">
            <div className="relative rounded-3xl border border-border bg-gradient-to-br from-secondary to-background p-8 shadow-elegant overflow-hidden">
              <img src={imgData} alt="" loading="lazy" width={1536} height={1024} className="absolute inset-0 h-full w-full object-cover opacity-20 mix-blend-luminosity" />
              <div className="absolute inset-0 bg-gradient-to-br from-background/85 via-background/70 to-transparent" />
              <div className="relative">
                <div className="absolute -top-16 -left-16 h-24 w-24 rounded-2xl bg-orange-gradient shadow-orange flex items-center justify-center text-white font-bold text-2xl">D365</div>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {modules.map((m, i) => (
                    <motion.div
                      key={m}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="rounded-xl border border-border bg-card/90 backdrop-blur px-4 py-4 text-sm font-semibold shadow-sm hover:border-orange/40 hover:shadow-elegant transition-all"
                    >
                      {m}
                    </motion.div>
                  ))}
                </div>
                <div className="mt-6 rounded-xl border border-border bg-background/90 backdrop-blur p-4">
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Copilot · suggested action</span>
                    <span className="text-orange font-semibold">98% confidence</span>
                  </div>
                  <p className="mt-2 text-sm">Reorder SKU-44820 — projected stock-out in 4 days based on regional demand spike.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange/20 bg-orange/5 px-3 py-1 text-xs font-medium text-orange">
              Microsoft Dynamics 365
            </div>
            <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
              A unified ERP & CRM platform, <span className="text-gradient-orange">tailored to your operation.</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              We design, implement and operate every module of Dynamics 365 — connected to Azure, Fabric, Power Platform and Copilot.
              The result: one source of truth across finance, supply chain, sales and service.
            </p>
            <div className="mt-8 space-y-3">
              {[
                "End-to-end Finance & Operations modernization",
                "Customer Engagement with native Copilot",
                "Power Platform extensions & ISV integrations",
                "Managed services with 24/7 enterprise SLA",
              ].map((t) => (
                <div key={t} className="flex items-center gap-3 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-orange" />
                  {t}
                </div>
              ))}
            </div>
            <Link to="/dynamics-365" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
              Explore Dynamics 365 <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AIInnovation() {
  return (
    <section className="relative overflow-hidden bg-[oklch(0.97_0.005_260)] py-28">
      <div className="absolute inset-0 grid-bg-light opacity-50" />
      <img src={imgAi} alt="" loading="lazy" width={1536} height={1024} className="absolute inset-0 h-full w-full object-cover opacity-[0.08] mix-blend-multiply" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-orange/10 blur-[140px]" />
      <div className="absolute top-1/3 left-0 h-[400px] w-[400px] rounded-full bg-cyan-glow/10 blur-[140px]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange/20 bg-orange/5 px-3 py-1 text-xs font-medium text-orange">
            AI Innovation
          </div>
          <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            From <span className="text-gradient-orange">automation</span> to autonomous operations.
          </h2>
          <p className="mt-5 text-muted-foreground">
            We build generative AI agents, predictive models and intelligent automation embedded directly
            into your workflows — measurable in hours saved, errors avoided, and revenue unlocked.
          </p>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {[
            { icon: BrainCircuit, t: "Copilot for Business", d: "Custom Copilot agents trained on your data, embedded in Dynamics, Teams and the web." },
            { icon: Workflow, t: "Hyperautomation", d: "Power Automate, RPA and Azure Functions composed into resilient end-to-end flows." },
            { icon: BarChart3, t: "Predictive Analytics", d: "Demand forecasting, churn prediction and risk scoring delivered on Fabric & Synapse." },
          ].map((c) => (
            <div key={c.t} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 hover:shadow-elegant transition-all">
              <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-orange/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-gradient text-white">
                <c.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{c.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export const INDUSTRIES = [
  { icon: Factory, t: "Manufacturing", d: "Connected factories, MES integration, OEE dashboards." },
  { icon: ShoppingBag, t: "Retail", d: "Unified commerce, customer 360, AI merchandising." },
  { icon: Truck, t: "Logistics", d: "Fleet telemetry, route optimization, supply chain visibility." },
  { icon: Landmark, t: "Government", d: "Citizen services, secure data, regulated cloud." },
  { icon: Building2, t: "Infrastructure", d: "Asset intelligence and predictive maintenance." },
  { icon: Droplets, t: "Water & Utilities", d: "SCADA, NRW reduction and real-time grid telemetry." },
  { icon: Pickaxe, t: "Mining", d: "Pit-to-port digitalization and operations control." },
  { icon: Flame, t: "Energy", d: "Generation analytics, ESG reporting, grid edge intelligence." },
];

export function Industries() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange/20 bg-orange/5 px-3 py-1 text-xs font-medium text-orange">
              Industries
            </div>
            <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
              Built for the industries that <span className="text-gradient-orange">power the world.</span>
            </h2>
          </div>
          <Link to="/industries" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-orange">
            All industries <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {INDUSTRIES.map((ind, i) => (
            <motion.div
              key={ind.t}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 hover:border-orange/40 hover:shadow-elegant transition-all"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-secondary text-primary group-hover:bg-orange group-hover:text-white transition-colors">
                <ind.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-semibold">{ind.t}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{ind.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export const CASE_STUDIES = [
  { tag: "ERP Modernization", t: "Global manufacturer cut close cycle by 62%", d: "Dynamics 365 Finance rollout across 14 entities and 6 currencies on Azure.", metric: "62% faster close" },
  { tag: "AI Automation", t: "Retail group automated 2.1M invoices a year", d: "Copilot + Power Automate replaced manual AP processing.", metric: "$8.4M saved/yr" },
  { tag: "Telemetry", t: "Water utility reduced non-revenue water 38%", d: "Edge telemetry + Fabric analytics on 14,000 km of network.", metric: "38% NRW drop" },
  { tag: "Supply Chain", t: "Logistics leader gained real-time fleet vision", d: "Unified telemetry across 9,000 vehicles with Azure IoT and Power BI.", metric: "23% fuel savings" },
  { tag: "BI Transformation", t: "Energy operator unified 47 data silos", d: "Microsoft Fabric Lakehouse with governed self-service for 3,200 analysts.", metric: "47 → 1 platform" },
];

export function CaseStudies() {
  return (
    <section className="relative overflow-hidden bg-navy-gradient py-28 text-white">
      <div className="absolute inset-0 grid-bg opacity-25" />
      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-orange/20 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium">
              Case Studies
            </div>
            <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl max-w-2xl">
              Outcomes you can <span className="text-gradient-orange">measure.</span>
            </h2>
          </div>
          <Link to="/case-studies" className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-orange">
            All case studies <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {CASE_STUDIES.slice(0, 3).map((c, i) => (
            <motion.div
              key={c.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl glass p-7 hover:bg-white/10 transition-all"
            >
              <div className="text-xs font-semibold uppercase tracking-widest text-orange">{c.tag}</div>
              <h3 className="mt-3 text-xl font-semibold">{c.t}</h3>
              <p className="mt-3 text-sm text-white/65">{c.d}</p>
              <div className="mt-6 border-t border-white/10 pt-4 flex items-center justify-between">
                <span className="text-2xl font-bold text-gradient-orange">{c.metric}</span>
                <ArrowRight className="h-5 w-5 text-white/50 group-hover:text-orange group-hover:translate-x-1 transition-all" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Process() {
  const steps = [
    { n: "01", t: "Discover", d: "Co-design workshops, KPI baselining and a tailored transformation roadmap." },
    { n: "02", t: "Architect", d: "Solution architecture on Microsoft cloud — secure, scalable and audit-ready." },
    { n: "03", t: "Build", d: "Agile pods of engineers, consultants and data scientists shipping in 2-week increments." },
    { n: "04", t: "Operate", d: "Managed services, observability, FinOps and continuous AI optimization." },
  ];
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange/20 bg-orange/5 px-3 py-1 text-xs font-medium text-orange">
            How we work
          </div>
          <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            A delivery model built for <span className="text-gradient-orange">enterprise reality.</span>
          </h2>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative rounded-2xl border border-border bg-card p-7"
            >
              <div className="text-5xl font-bold text-gradient-orange">{s.n}</div>
              <h3 className="mt-4 text-lg font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  const quotes = [
    { q: "CDigital didn't just deliver a system — they re-architected how our operation thinks. Our supply chain runs on a different clock now.", a: "CIO · Global Manufacturing", c: "Fortune 500" },
    { q: "The most disciplined Microsoft partner we've worked with. They show up like an internal team and ship like a product company.", a: "Head of Digital · Energy Sector", c: "Public utility" },
    { q: "Telemetry that finally tells the truth. We saw non-revenue water drop almost overnight once we onboarded their platform.", a: "COO · Water Utility", c: "National operator" },
  ];
  return (
    <section className="bg-secondary/40 py-28">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-4xl font-bold tracking-tight sm:text-5xl max-w-2xl mx-auto">
          What enterprise leaders <span className="text-gradient-orange">say.</span>
        </h2>
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {quotes.map((qu, i) => (
            <motion.div
              key={qu.a}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-card p-7"
            >
              <Quote className="h-8 w-8 text-orange/60" />
              <p className="mt-4 text-base leading-relaxed text-foreground">"{qu.q}"</p>
              <div className="mt-6 border-t border-border pt-4">
                <div className="text-sm font-semibold">{qu.a}</div>
                <div className="text-xs text-muted-foreground">{qu.c}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTASection() {
  return (
    <section className="relative overflow-hidden py-28">
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[700px] rounded-full bg-orange/25 blur-[140px]" />
      <div className="relative mx-auto max-w-4xl px-6 text-center text-white">
        <h2 className="text-5xl font-bold tracking-tight sm:text-6xl">
          Let's build your <span className="text-gradient-orange">digital backbone.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-white/70">
          A 30-minute strategy call with our solutions team — no slideware. Walk away with a tailored
          transformation outline for your business.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full bg-orange-gradient px-7 py-4 text-sm font-semibold text-white shadow-orange transition-transform hover:scale-105">
            Book a strategy call
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link to="/services" className="inline-flex items-center gap-2 rounded-full glass px-7 py-4 text-sm font-semibold text-white hover:bg-white/10">
            Explore solutions
          </Link>
        </div>
      </div>
    </section>
  );
}
