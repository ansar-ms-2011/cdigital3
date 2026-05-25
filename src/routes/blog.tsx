import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { CTASection } from "@/components/sections";
import { Stagger, StaggerItem } from "@/components/reveal";
import { ArrowRight } from "lucide-react";
import imgData from "@/assets/img-data.jpg";
import imgAi from "@/assets/img-ai.jpg";
import imgTelemetry from "@/assets/img-telemetry.jpg";
import imgControlRoom from "@/assets/img-control-room.jpg";
import imgTeam from "@/assets/img-team.jpg";

const COVERS = [imgAi, imgTelemetry, imgData, imgAi, imgTelemetry, imgControlRoom, imgTeam];

export const Route = createFileRoute("/blog")({
  head: () => ({ meta: [{ title: "Insights — CDigital Technologies" }, { name: "description", content: "Perspectives on enterprise AI, Microsoft Dynamics, and industrial digitalization." }] }),
  component: BlogPage,
});

const POSTS = [
  { t: "Why your ERP modernization should start with Copilot, not migration", d: "Most D365 programs underestimate the AI layer. Here's how to flip the order.", cat: "AI", date: "May 2026" },
  { t: "Real-time telemetry: lessons from 14,000 km of water network", d: "Architecture patterns for industrial-grade ingestion on Azure and Fabric.", cat: "Telemetry", date: "Apr 2026" },
  { t: "From Power BI to Microsoft Fabric — what changes for the enterprise", d: "Governance, semantic models, and where to invest your data engineering hours.", cat: "Data", date: "Mar 2026" },
  { t: "Copilot Studio in production: lessons from 12 enterprise rollouts", d: "Grounding, evaluation, security — the patterns that separate pilots from impact.", cat: "AI", date: "Feb 2026" },
  { t: "The case for digital twins in water utilities", d: "Reducing non-revenue water with sensor fusion, hydraulic modelling and ML.", cat: "Industry", date: "Jan 2026" },
  { t: "Designing zero-trust landing zones on Azure", d: "Reference architectures for regulated industries.", cat: "Cloud", date: "Dec 2025" },
];

function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title={<>Field notes from <span className="text-gradient-orange">the enterprise frontier.</span></>}
        description="Long-form perspectives, architecture deep dives and lessons from real production rollouts."
        image={imgData}
      />
      <section className="relative py-24 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-96 w-[800px] rounded-full bg-orange/5 blur-[140px]" />
        <div className="mx-auto max-w-7xl px-6">
          <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {POSTS.map((p, i) => (
              <StaggerItem key={p.t}>
                <article className="group h-full rounded-2xl border border-border bg-card overflow-hidden hover:shadow-elegant hover:border-orange/40 transition-all hover-tilt">
                  <div className="relative h-44 overflow-hidden">
                    <img src={COVERS[i % COVERS.length]} alt="" loading="lazy" width={1536} height={1024} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                    <div className="absolute inset-0 grid-bg opacity-30" />
                    <span className="absolute top-4 left-4 rounded-full bg-orange-gradient px-3 py-1 text-[11px] font-semibold text-white shadow-orange">{p.cat}</span>
                  </div>
                  <div className="p-6">
                    <div className="text-xs text-muted-foreground">{p.date}</div>
                    <h3 className="mt-2 text-lg font-semibold leading-snug group-hover:text-orange transition-colors">{p.t}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
                    <Link to="/blog" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-orange">
                      Read article <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
                    </Link>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
      <CTASection />
    </>
  );
}
