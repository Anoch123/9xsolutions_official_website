// Shared mini-illustrations for the home Services section and the Services page.

export type VisualKey =
  | "design"
  | "chart"
  | "code"
  | "cloud"
  | "flow"
  | "ai"
  | "mobile"
  | "ops";

const VISUAL_ORDER: VisualKey[] = [
  "code",
  "design",
  "chart",
  "cloud",
  "flow",
  "ai",
  "mobile",
  "ops",
];

// Pick an illustration from the service label; fall back to card order.
export function pickVisual(label: string, index: number): VisualKey {
  const l = label.toLowerCase();
  if (/mobile|ios|android/.test(l)) return "mobile";
  if (/design|brand|\bui\b|\bux\b/.test(l)) return "design";
  if (/market|seo|growth|analytic|data|insight/.test(l)) return "chart";
  if (/cloud|infra|hosting|migrat/.test(l)) return "cloud";
  if (/automat|workflow|integrat/.test(l)) return "flow";
  if (/\bai\b|\bml\b|machine|intelligen/.test(l)) return "ai";
  if (/devops|secur|support|maint|\bqa\b|test/.test(l)) return "ops";
  if (/web|software|develop|engineer|custom|product/.test(l)) return "code";
  return VISUAL_ORDER[index % VISUAL_ORDER.length];
}

/* ------------------------------------------------------------------ */
/* Mini illustrations                                                  */
/* ------------------------------------------------------------------ */

type VisualProps = { dark: boolean };

const panel = (dark: boolean) =>
  dark
    ? "border border-white/10 bg-white/[0.06] text-white"
    : "border border-slate-200 bg-white text-[#12141A] shadow-[0_8px_24px_-12px_rgba(18,20,26,0.15)]";

const muted = (dark: boolean) => (dark ? "text-slate-400" : "text-slate-500");

function DesignVisual({ dark }: VisualProps) {
  const rows = [
    { name: "Signal", hex: "#FF0000", bg: "#FF0000", fg: "#fff" },
    { name: "Midnight", hex: "#0B1020", bg: "#0B1020", fg: "#fff" },
    { name: "Cobalt", hex: "#4F66FF", bg: "#4F66FF", fg: "#fff" },
  ];
  return (
    <div className="w-[82%] max-w-sm space-y-2.5 transition-transform duration-500 group-hover:-translate-y-1">
      {rows.map((r) => (
        <div
          key={r.hex}
          style={{ background: r.bg, color: r.fg }}
          className={`flex items-center justify-between rounded-xl px-4 py-3 font-mono text-[13px] ${
            r.hex === "#0B1020" && dark ? "ring-1 ring-white/15" : ""
          }`}
        >
          <span>{r.name}</span>
          <span className="opacity-90">{r.hex}</span>
        </div>
      ))}
    </div>
  );
}

function ChartVisual({ dark }: VisualProps) {
  return (
    <div
      className={`w-[88%] max-w-sm rounded-2xl p-4 ${panel(dark)}`}
    >
      <div className="flex items-center justify-between">
        <span className={`text-xs ${muted(dark)}`}>Visitors</span>
        <span className="flex items-center gap-2">
          <span className="text-sm font-semibold tabular-nums">414</span>
          <span className="rounded-md bg-emerald-500/15 px-1.5 py-0.5 text-[11px] font-semibold text-emerald-500">
            ▲ 7%
          </span>
        </span>
      </div>
      <svg viewBox="0 0 200 80" className="mt-3 h-20 w-full" fill="none">
        <defs>
          <linearGradient id={`g-${dark}`} x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#4F66FF" stopOpacity="0.35" />
            <stop offset="1" stopColor="#4F66FF" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[20, 45, 70].map((y) => (
          <line
            key={y}
            x1="0"
            x2="200"
            y1={y}
            y2={y}
            stroke={dark ? "#fff" : "#12141A"}
            strokeOpacity="0.08"
          />
        ))}
        <path
          d="M0 66 C 30 66, 45 30, 80 42 S 130 62, 150 28 S 185 14, 200 12 L200 80 L0 80Z"
          fill={`url(#g-${dark})`}
        />
        <path
          d="M0 66 C 30 66, 45 30, 80 42 S 130 62, 150 28 S 185 14, 200 12"
          stroke="#4F66FF"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="150" cy="28" r="4" fill="#4F66FF" />
        <circle cx="150" cy="28" r="8" fill="#4F66FF" fillOpacity="0.2" />
      </svg>
    </div>
  );
}

function CodeVisual({ dark }: VisualProps) {
  const lines: [string, string][] = [
    ["w-16", "bg-[#ff3b3b]"],
    ["w-32", "bg-slate-400/50"],
    ["w-24 ml-4", "bg-[#4F66FF]"],
    ["w-40 ml-4", "bg-slate-400/50"],
    ["w-20 ml-4", "bg-emerald-500"],
    ["w-12", "bg-[#ff3b3b]"],
  ];
  return (
    <div className={`w-[88%] max-w-sm rounded-2xl p-4 ${panel(dark)}`}>
      <div className="mb-4 flex items-center gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className={`ml-3 font-mono text-[11px] ${muted(dark)}`}>
          app/page.tsx
        </span>
      </div>
      <div className="space-y-2.5">
        {lines.map(([w, c], i) => (
          <div key={i} className={`h-2 rounded-full ${w} ${c}`} />
        ))}
      </div>
    </div>
  );
}

function CloudVisual({ dark }: VisualProps) {
  const rows = ["api-gateway", "database", "edge-cache"];
  const status = ["live", "synced", "warm"];
  return (
    <div className={`w-[88%] max-w-sm space-y-2 rounded-2xl p-3 ${panel(dark)}`}>
      {rows.map((r, i) => (
        <div
          key={r}
          className={`flex items-center justify-between rounded-xl px-3 py-2.5 ${
            dark ? "bg-white/5" : "bg-slate-50"
          }`}
        >
          <span className="font-mono text-[12px]">{r}</span>
          <span className="flex items-center gap-2 text-[11px] font-medium text-emerald-500">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
            {status[i]}
          </span>
        </div>
      ))}
    </div>
  );
}

function FlowVisual({ dark }: VisualProps) {
  const nodes = ["Trigger", "Process", "Done"];
  return (
    <div className="flex w-[90%] max-w-sm items-center">
      {nodes.map((n, i) => (
        <div key={n} className="flex flex-1 items-center last:flex-none">
          <div
            className={`rounded-xl px-3 py-2.5 text-[12px] font-medium ${
              i === 2
                ? "bg-[#ff0000] text-white shadow-[0_6px_20px_rgba(255,0,0,0.35)]"
                : panel(dark)
            }`}
          >
            {n}
          </div>
          {i < nodes.length - 1 && (
            <div
              className={`relative mx-1 h-px flex-1 ${
                dark ? "bg-white/20" : "bg-slate-300"
              }`}
            >
              <span className="absolute -top-[3px] left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#4F66FF]" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function AiVisual({ dark }: VisualProps) {
  return (
    <div className="w-[88%] max-w-sm space-y-2.5">
      <div
        className={`ml-auto w-fit max-w-[80%] rounded-2xl rounded-br-md px-4 py-2.5 text-[12.5px] ${
          dark ? "bg-white/10" : "bg-slate-100"
        }`}
      >
        Summarise this week&apos;s tickets
      </div>
      <div className="w-fit max-w-[85%] rounded-2xl rounded-bl-md bg-gradient-to-br from-[#4F66FF] to-[#9333EA] px-4 py-2.5 text-[12.5px] text-white">
        42 resolved, 3 need review. Want a digest?
      </div>
      <div
        className={`flex w-fit items-center gap-1 rounded-full px-3 py-2 ${
          dark ? "bg-white/10" : "bg-slate-100"
        }`}
      >
        {[0, 1, 2].map((d) => (
          <span
            key={d}
            className="h-1.5 w-1.5 animate-pulse rounded-full bg-slate-400"
            style={{ animationDelay: `${d * 200}ms` }}
          />
        ))}
      </div>
    </div>
  );
}

function MobileVisual({ dark }: VisualProps) {
  return (
    <div className="relative h-full w-full">
      <div
        className={`absolute left-1/2 top-2 h-64 w-36 -translate-x-1/2 rounded-[28px] border-[5px] p-2 transition-transform duration-500 group-hover:-translate-y-2 ${
          dark
            ? "border-white/20 bg-[#0B1020]"
            : "border-[#12141A] bg-white"
        }`}
      >
        <div
          className={`mx-auto mb-2 h-1 w-10 rounded-full ${
            dark ? "bg-white/20" : "bg-slate-200"
          }`}
        />
        <div className="mb-2 h-14 rounded-xl bg-gradient-to-br from-[#4F66FF] to-[#9333EA]" />
        {[0, 1, 2].map((i) => (
          <div key={i} className="mb-1.5 flex items-center gap-2">
            <span
              className={`h-6 w-6 rounded-lg ${
                dark ? "bg-white/10" : "bg-slate-100"
              }`}
            />
            <span className="flex-1 space-y-1">
              <span
                className={`block h-1.5 w-full rounded-full ${
                  dark ? "bg-white/20" : "bg-slate-200"
                }`}
              />
              <span
                className={`block h-1.5 w-2/3 rounded-full ${
                  dark ? "bg-white/10" : "bg-slate-100"
                }`}
              />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function OpsVisual({ dark }: VisualProps) {
  const items = ["Tests passed", "Build deployed", "Monitoring on"];
  return (
    <div className={`w-[88%] max-w-sm space-y-2 rounded-2xl p-3 ${panel(dark)}`}>
      {items.map((t) => (
        <div
          key={t}
          className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-[13px] ${
            dark ? "bg-white/5" : "bg-slate-50"
          }`}
        >
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-white">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12.5L9.5 17L19 7"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          {t}
        </div>
      ))}
    </div>
  );
}

export const VISUALS: Record<VisualKey, (p: VisualProps) => React.ReactElement> = {
  design: DesignVisual,
  chart: ChartVisual,
  code: CodeVisual,
  cloud: CloudVisual,
  flow: FlowVisual,
  ai: AiVisual,
  mobile: MobileVisual,
  ops: OpsVisual,
};