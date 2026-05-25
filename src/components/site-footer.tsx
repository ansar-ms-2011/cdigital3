import { Link } from "@tanstack/react-router";
import { Linkedin, Twitter, Github, Mail } from "lucide-react";
import logoFull from "@/assets/logo-full.png";

const cols = [
  {
    title: "Solutions",
    links: [
      { to: "/dynamics-365", label: "Microsoft Dynamics 365" },
      { to: "/ai-automation", label: "AI & Automation" },
      { to: "/services", label: "ERP & CRM" },
      { to: "/services", label: "Business Intelligence" },
      { to: "/services", label: "Telemetry Systems" },
    ],
  },
  {
    title: "Industries",
    links: [
      { to: "/industries", label: "Manufacturing" },
      { to: "/industries", label: "Water & Utilities" },
      { to: "/industries", label: "Logistics" },
      { to: "/industries", label: "Energy & Mining" },
      { to: "/industries", label: "Government" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/about", label: "About" },
      { to: "/case-studies", label: "Case Studies" },
      { to: "/blog", label: "Insights" },
      { to: "/careers", label: "Careers" },
      { to: "/contact", label: "Contact" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-navy-gradient text-white">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-10">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2">
              <img src={logoFull} alt="CDigital Technologies" className="h-10 w-auto brightness-0 invert" />
            </Link>
            <p className="mt-5 max-w-sm text-sm text-white/60 leading-relaxed">
              Enterprise digital transformation powered by Microsoft Dynamics 365, AI automation,
              and real-time telemetry — built for industries that can't slow down.
            </p>
            <div className="mt-6 flex gap-3">
              {[Linkedin, Twitter, Github, Mail].map((Icon, i) => (
                <a key={i} href="#" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:border-orange hover:text-orange">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-white/50">{c.title}</h4>
              <ul className="mt-5 space-y-3">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="text-sm text-white/75 hover:text-orange transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} CDigital Technologies. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
