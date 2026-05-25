import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoFull from "@/assets/logo-full.png";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/dynamics-365", label: "Dynamics 365" },
  { to: "/ai-automation", label: "AI & Automation" },
  { to: "/industries", label: "Industries" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/blog", label: "Blog" },
  { to: "/careers", label: "Careers" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 12);
    fn();
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-white/10 bg-[oklch(0.18_0.06_260/0.75)] backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="group flex items-center gap-2 text-white">
          <img src={logoFull} alt="CDigital Technologies" className="h-7 w-auto brightness-0 invert transition-transform duration-500 group-hover:scale-105" />
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {NAV.slice(1).map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-[13px] font-medium text-white/70 hover:text-white transition-colors"
              activeProps={{ className: "text-[13px] font-medium text-white" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-1.5 rounded-full bg-orange-gradient px-4 py-2 text-[13px] font-semibold text-white shadow-orange transition-transform hover:scale-105"
          >
            Talk to Sales
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <button className="lg:hidden text-white" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden border-t border-white/10 bg-[oklch(0.15_0.06_260)]"
          >
            <div className="flex flex-col px-6 py-4 gap-1">
              {NAV.map((i) => (
                <Link key={i.to} to={i.to} onClick={() => setOpen(false)} className="py-2 text-sm text-white/80">
                  {i.label}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setOpen(false)} className="mt-3 rounded-full bg-orange-gradient px-4 py-2.5 text-center text-sm font-semibold text-white">
                Talk to Sales
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
