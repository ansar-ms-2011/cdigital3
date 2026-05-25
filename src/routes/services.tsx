import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Services, CTASection, Process } from "@/components/sections";
import imgData from "@/assets/img-data.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({ meta: [{ title: "Services — CDigital Technologies" }, { name: "description", content: "ERP, CRM, AI automation, BI, telemetry and cloud services on the Microsoft stack." }] }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={<>End-to-end <span className="text-gradient-orange">enterprise capability,</span> under one roof.</>}
        description="We design, build and operate the digital backbone of modern enterprises — from cloud foundations to AI-native applications."
        cta={{ label: "Talk to our team", to: "/contact" }}
        image={imgData}
      />
      <Services />
      <Process />
      <CTASection />
    </>
  );
}
