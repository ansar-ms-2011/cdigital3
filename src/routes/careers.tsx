import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import { ArrowRight, MapPin } from "lucide-react";
import imgTeam from "@/assets/img-team.jpg";

export const Route = createFileRoute("/careers")({
  head: () => ({ meta: [{ title: "Careers — CDigital Technologies" }, { name: "description", content: "Build the digital backbone of global enterprise. Open roles at CDigital Technologies." }] }),
  component: CareersPage,
});

const JOBS = [
  { t: "Senior D365 F&O Architect", loc: "Remote · EMEA", team: "Business Apps" },
  { t: "Azure Data & AI Engineer", loc: "London / Remote", team: "Data Platform" },
  { t: "Power Platform Lead Developer", loc: "Remote · Global", team: "Business Apps" },
  { t: "Industrial IoT Solutions Architect", loc: "Dubai", team: "Telemetry" },
  { t: "Generative AI Engineer", loc: "Remote", team: "AI Labs" },
  { t: "Engagement Director — Enterprise", loc: "New York", team: "Delivery" },
];

function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title={<>Engineer the systems that <span className="text-gradient-orange">power industry.</span></>}
        description="We hire engineers, consultants and operators who want to ship enterprise-grade systems with real, measurable impact."
        image={imgTeam}
      />
      <section className="relative py-24 overflow-hidden">
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-orange/5 blur-[120px]" />
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight">Open roles</h2>
            <p className="mt-3 text-muted-foreground">We're hiring across our delivery, engineering and AI practices.</p>
          </Reveal>
          <Stagger className="mt-10 divide-y divide-border rounded-2xl border border-border bg-card overflow-hidden">
            {JOBS.map((j) => (
              <StaggerItem key={j.t}>
                <Link to="/careers" className="group flex items-center justify-between gap-6 p-6 hover:bg-gradient-to-r hover:from-orange/5 hover:to-transparent transition-colors">
                  <div>
                    <h3 className="text-base font-semibold group-hover:text-orange transition-colors">{j.t}</h3>
                    <div className="mt-1 flex items-center gap-4 text-xs text-muted-foreground">
                      <span>{j.team}</span>
                      <span className="inline-flex items-center gap-1"><MapPin className="h-3 w-3" /> {j.loc}</span>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-orange group-hover:translate-x-1 transition" />
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}
