// Stylized representations of Microsoft technology marks used as a trust marquee.
// These are non-official illustrative renderings.

function MsSquares({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 23 23" className={className} aria-hidden>
      <rect x="1" y="1" width="10" height="10" fill="#F25022" />
      <rect x="12" y="1" width="10" height="10" fill="#7FBA00" />
      <rect x="1" y="12" width="10" height="10" fill="#00A4EF" />
      <rect x="12" y="12" width="10" height="10" fill="#FFB900" />
    </svg>
  );
}

function AzureMark({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <defs>
        <linearGradient id="azg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#0078D4" />
          <stop offset="1" stopColor="#5EA0EF" />
        </linearGradient>
      </defs>
      <path d="M9 3 L2 19 H9 L13 8 Z M14 6 L22 21 H10 L13 16 H17 L14 10 Z" fill="url(#azg)" />
    </svg>
  );
}

function D365Mark({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <defs>
        <linearGradient id="d365" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#0B53CE" />
          <stop offset="1" stopColor="#33C7E2" />
        </linearGradient>
      </defs>
      <path d="M5 4h9a6 6 0 0 1 0 12H10v4l-5-3z" fill="url(#d365)" />
    </svg>
  );
}

function PowerBIMark({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <rect x="3" y="11" width="4" height="10" rx="1" fill="#F2C811" />
      <rect x="10" y="6" width="4" height="15" rx="1" fill="#E8A33D" />
      <rect x="17" y="2" width="4" height="19" rx="1" fill="#CC8B27" />
    </svg>
  );
}

function FabricMark({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <defs>
        <linearGradient id="fab" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#13A4EC" />
          <stop offset="1" stopColor="#0078D4" />
        </linearGradient>
      </defs>
      <path d="M12 2l9 5v10l-9 5-9-5V7z" fill="url(#fab)" />
      <path d="M12 2v20M3 7l18 10M21 7L3 17" stroke="#fff" strokeOpacity="0.45" strokeWidth="0.6" />
    </svg>
  );
}

function CopilotMark({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <defs>
        <linearGradient id="cop" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#9168F5" />
          <stop offset="0.5" stopColor="#3FCDFF" />
          <stop offset="1" stopColor="#16D7B0" />
        </linearGradient>
      </defs>
      <path d="M4 14c2-6 6-8 10-6s6 6 4 10-7 6-12 4-4-4-2-8z" fill="url(#cop)" />
    </svg>
  );
}

function GitHubMark({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03A9.56 9.56 0 0 1 12 6.8c.85 0 1.71.12 2.51.34 1.9-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z" />
    </svg>
  );
}

const LOGOS = [
  { Icon: MsSquares, label: "Microsoft" },
  { Icon: AzureMark, label: "Azure" },
  { Icon: D365Mark, label: "Dynamics 365" },
  { Icon: PowerBIMark, label: "Power BI" },
  { Icon: FabricMark, label: "Microsoft Fabric" },
  { Icon: CopilotMark, label: "Copilot" },
  { Icon: MsSquares, label: "Power Platform" },
  { Icon: GitHubMark, label: "GitHub" },
];

export function MicrosoftLogoMarquee() {
  const row = [...LOGOS, ...LOGOS];
  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
      <div className="flex w-max gap-14 animate-marquee">
        {row.map((l, i) => (
          <div key={i} className="flex shrink-0 items-center gap-3 opacity-70 transition hover:opacity-100">
            <l.Icon className="h-7 w-7" />
            <span className="whitespace-nowrap text-base font-semibold tracking-tight text-foreground/70">{l.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function MicrosoftBadgeRow({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const color = tone === "dark" ? "text-white/85 border-white/15" : "text-foreground/70 border-border";
  return (
    <div className="flex flex-wrap items-center gap-3">
      {LOGOS.slice(0, 6).map((l, i) => (
        <div key={i} className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold ${color}`}>
          <l.Icon className="h-4 w-4" />
          {l.label}
        </div>
      ))}
    </div>
  );
}
