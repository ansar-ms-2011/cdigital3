import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { CASE_STUDIES, CTASection } from "@/components/sections";
import { Stagger, StaggerItem } from "@/components/reveal";
import { ArrowRight } from "lucide-react";
import imgData from "@/assets/img-data.jpg";
import imgAi from "@/assets/img-ai.jpg";
import imgTelemetry from "@/assets/img-telemetry.jpg";
import imgControlRoom from "@/assets/img-control-room.jpg";
import imgTeam from "@/assets/img-team.jpg";

const COVERS = [imgData, imgAi, imgTelemetry, imgControlRoom, imgTeam];

export const Route = createFileRoute("/case-studies")({
  head: () => ({ meta: [{ title: "Case Studies — CDigital Technologies" }, { name: "description", content: "Real outcomes from real transformations: ERP modernization, AI automation, telemetry and BI." }] }),
  component: CSPage,
});

function CSPage() {
  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title={<>Real systems. <span className="text-gradient-orange">Measured outcomes.</span></>}
        description="A selection of transformations we've engineered for global enterprises and public-sector operators."
        image={imgControlRoom}
      />
      <section className="relative py-24 overflow-hidden">
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-orange/5 blur-[120px]" />
        <div className="mx-auto max-w-7xl px-6">
          <Stagger className="grid gap-6 lg:grid-cols-2">
            {CASE_STUDIES.map((c, i) => (
              <StaggerItem key={c.t}>
                <article className="group relative rounded-3xl border border-border bg-card overflow-hidden hover:shadow-elegant transition-all hover-tilt h-full">
                  <div className="relative h-52 overflow-hidden">
                    <img src={COVERS[i % COVERS.length]} alt="" loading="lazy" width={1536} height={1024} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent" />
                    <div className="absolute inset-0 grid-bg opacity-30" />
                    <div className="absolute inset-0 flex items-end p-6">
                      <span className="text-xs font-semibold uppercase tracking-widest text-orange-glow">{c.tag}</span>
                    </div>
                    <div className="absolute top-6 right-6 rounded-full bg-orange-gradient px-4 py-1.5 text-sm font-bold text-white shadow-orange">{c.metric}</div>
                  </div>
                  <div className="p-7">
                    <h3 className="text-xl font-semibold">{c.t}</h3>
                    <p className="mt-3 text-sm text-muted-foreground">{c.d}</p>
                    <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-orange">
                      Read story <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
                    </div>
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
