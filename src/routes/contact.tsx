import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import imgTeam from "@/assets/img-team.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact — CDigital Technologies" }, { name: "description", content: "Talk to our enterprise solutions team." }] }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Let's <span className="text-gradient-orange">talk strategy.</span></>}
        description="Tell us about your goals. A senior solutions architect will respond within one business day."
        image={imgTeam}
      />
      <section className="relative py-24 overflow-hidden">
        <div className="absolute top-0 left-0 h-[400px] w-[400px] rounded-full bg-orange/5 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-cyan-glow/5 blur-[120px]" />
        <div className="relative mx-auto max-w-6xl px-6 grid gap-12 lg:grid-cols-5">
          <Reveal direction="right" className="lg:col-span-2 space-y-4">
            {[
              { icon: Mail, t: "Email", d: "hello@cdigital.tech" },
              { icon: Phone, t: "Phone", d: "+1 (415) 555-0182" },
              { icon: MapPin, t: "Headquarters", d: "1 Market St, San Francisco, CA" },
            ].map((c) => (
              <div key={c.t} className="group flex gap-4 rounded-2xl border border-border bg-card p-6 hover:shadow-elegant hover:border-orange/40 transition-all hover-tilt">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-gradient text-white shadow-orange shrink-0">
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{c.t}</div>
                  <div className="mt-1 text-sm font-medium">{c.d}</div>
                </div>
              </div>
            ))}
            <div className="rounded-2xl border border-border bg-gradient-to-br from-primary to-[oklch(0.18_0.06_260)] p-6 text-white overflow-hidden relative">
              <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-orange/30 blur-3xl" />
              <div className="relative">
                <div className="text-xs font-semibold uppercase tracking-widest text-orange-glow">Response time</div>
                <div className="mt-2 text-2xl font-bold">Under 1 business day</div>
                <div className="mt-1 text-sm text-white/70">For qualified enterprise inquiries.</div>
              </div>
            </div>
          </Reveal>
          <Reveal direction="left" className="lg:col-span-3">
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="rounded-3xl border border-border bg-card p-8 shadow-elegant"
            >
              {sent ? (
                <div className="text-center py-16">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-orange-gradient text-white shadow-orange">
                    <Send className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">Message received</h3>
                  <p className="mt-2 text-sm text-muted-foreground">We'll get back to you within one business day.</p>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold">Send us a brief</h2>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <Field label="Full name" name="name" required />
                    <Field label="Work email" name="email" type="email" required />
                    <Field label="Company" name="company" />
                    <Field label="Role" name="role" />
                  </div>
                  <div className="mt-4">
                    <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">What can we help with?</label>
                    <textarea required rows={5} className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-orange transition" />
                  </div>
                  <button type="submit" className="group mt-6 inline-flex items-center gap-2 rounded-full bg-orange-gradient px-6 py-3 text-sm font-semibold text-white shadow-orange hover:scale-105 transition">
                    Send message <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </>
              )}
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-orange transition"
      />
    </div>
  );
}
