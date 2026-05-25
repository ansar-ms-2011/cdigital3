import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/hero";
import { TrustBar, Services, WhyCDigital, DynamicsShowcase, AIInnovation, Industries, CaseStudies, Process, Testimonials, CTASection } from "@/components/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CDigital Technologies — Enterprise Digital Transformation" },
      { name: "description", content: "Microsoft Dynamics 365, AI automation, predictive analytics and real-time telemetry for enterprise leaders." },
      { property: "og:title", content: "CDigital Technologies" },
      { property: "og:description", content: "Enterprise digital transformation, AI & Microsoft Dynamics 365." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <WhyCDigital />
      <DynamicsShowcase />
      <AIInnovation />
      <Industries />
      <CaseStudies />
      <Process />
      <Testimonials />
      <CTASection />
    </>
  );
}
