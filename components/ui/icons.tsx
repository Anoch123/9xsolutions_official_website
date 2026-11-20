import { panel, track } from "@/lib/constants/helper-constants";

export function Chevron({ open, className = "" }: { open: boolean; className?: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 10 10"
      fill="none"
      className={`shrink-0 transition-transform duration-300 ease-out ${
        open ? "rotate-180" : ""
      } ${className}`}
    >
      <path
        d="M1.5 3.5L5 7L8.5 3.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className={className}
    >
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className={className}>
      <path
        d="M5 11L11 5M6 5h5v5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Check({ className = "" }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M5 12.5L9.5 17L19 7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span
      className={`inline-flex w-fit items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-medium ${
        dark
          ? "border-white/10 bg-white/5 text-slate-300"
          : "border-slate-200 bg-white text-slate-600"
      }`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-[#ff0000]" />
      {children}
    </span>
  );
}

export function Icon({ d }: { d: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  );
}

export function DetailRow({
  label,
  children,
  dark = false,
}: {
  label: string;
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <div
      className={`grid gap-1 py-4 sm:grid-cols-[110px_1fr] sm:gap-6 ${
        dark ? "border-t border-white/10" : "border-t border-[#E3E5EA]"
      }`}
    >
      <dt
        className={`text-[11px] font-semibold uppercase tracking-[0.18em] ${
          dark ? "text-[#ff6b6b]" : "text-[#ff0000]"
        }`}
      >
        {label}
      </dt>
      <dd
        className={`text-[14.5px] leading-relaxed ${
          dark ? "text-slate-300" : "text-slate-600"
        }`}
      >
        {children}
      </dd>
    </div>
  );
}

export function Glow() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_0%_0%,rgba(255,0,0,0.16),transparent_65%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_100%_100%,rgba(79,102,255,0.22),transparent_65%)]" />
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
    </div>
  );
}

// Appears on hover inside a `group` card
export function HoverGlow() {
  return (
    <div
      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_0%_0%,rgba(255,0,0,0.18),transparent_65%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_100%_100%,rgba(79,102,255,0.25),transparent_65%)]" />
    </div>
  );
}

export function Numeral({ n, className = "" }: { n: number; className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`block select-none bg-gradient-to-b from-[#4F66FF] to-[#4F66FF]/10 bg-clip-text font-semibold leading-[0.85] tracking-[-0.06em] text-transparent transition-all duration-500 group-hover:from-white/60 group-hover:to-white/5 ${className}`}
    >
      {String(n).padStart(2, "0")}
    </span>
  );
}

export function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 py-1.5 pl-3 pr-4 text-[13px] font-medium text-slate-300">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ff3b3b] opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-[#ff0000]" />
      </span>
      {children}
    </span>
  );
}

export function ArrowButton({
  direction,
  onClick,
}: {
  direction: "prev" | "next";
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === "prev" ? "Previous testimonials" : "Next testimonials"}
      className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-900 transition-colors hover:bg-slate-900 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
    >
      <svg
        aria-hidden="true"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        className={direction === "prev" ? "rotate-180" : ""}
      >
        <path
          d="M3 8h10M9 4l4 4-4 4"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

export function EducationVisual() {
  const rows = [
    { t: "Intro to design", w: "w-[85%]" },
    { t: "Web fundamentals", w: "w-[55%]" },
    { t: "Data basics", w: "w-[20%]" },
  ];
  return (
    <div className={panel}>
      <div className="mb-3 flex items-center justify-between">
        <span className="text-sm font-semibold">My courses</span>
        <span className="text-[11px] text-slate-500">3 active</span>
      </div>
      <div className="space-y-3">
        {rows.map((r) => (
          <div key={r.t}>
            <div className="mb-1.5 text-xs text-slate-700">{r.t}</div>
            <div className={`h-1.5 w-full rounded-full ${track}`}>
              <div className={`h-full rounded-full bg-slate-900 ${r.w}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function MobilityVisual() {
  return (
    <div className={`${panel} space-y-3`}>
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold">Battery</span>
        <span className="text-xs font-semibold text-slate-700">72%</span>
      </div>
      <div className="flex items-center gap-1">
        {[0, 1, 2, 3, 4].map((i) => (
          <span
            key={i}
            className={`h-6 flex-1 rounded ${i < 4 ? "bg-slate-900" : track}`}
          />
        ))}
        <span className={`ml-0.5 h-3 w-1 rounded-r ${track}`} />
      </div>
      <div className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2.5 text-xs">
        <span className="font-medium text-slate-700">Station 04</span>
        <span className="flex items-center gap-2 font-medium text-emerald-600">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Ready
        </span>
      </div>
    </div>
  );
}

export function TravelVisual() {
  const stops = ["Arrival & check-in", "City & culture", "Hill country"];
  return (
    <div className={panel}>
      <div className="mb-3 text-sm font-semibold">Trip itinerary</div>
      <div className="relative space-y-3 pl-5">
        <span className={`absolute bottom-1 left-[5px] top-1 w-px ${track}`} />
        {stops.map((s, i) => (
          <div key={s} className="relative text-xs text-slate-700">
            <span
              className={`absolute -left-5 top-1 h-2.5 w-2.5 rounded-full ${
                i === 0 ? "bg-slate-900" : "bg-slate-300"
              }`}
            />
            <span className="mr-2 text-[11px] text-slate-400">Day {i + 1}</span>
            {s}
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-lg bg-slate-900 py-2 text-center text-xs font-semibold text-white">
        Book now
      </div>
    </div>
  );
}

export function RetailVisual() {
  return (
    <div className={`${panel} flex gap-3 !p-3`}>
      <div className="h-24 w-24 shrink-0 rounded-lg bg-slate-200" />
      <div className="flex flex-1 flex-col justify-between py-0.5">
        <div>
          <div className="text-[13px] font-semibold">Everyday tee</div>
          <div className={`mt-1 h-1.5 w-2/3 rounded-full ${track}`} />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold">$24</span>
          <span className="rounded-md bg-slate-900 px-2.5 py-1.5 text-[11px] font-semibold text-white">
            Add to cart
          </span>
        </div>
      </div>
    </div>
  );
}

export function LogisticsVisual() {
  return (
    <div className={panel}>
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-semibold">Delivery #1042</span>
        <span className="rounded bg-slate-100 px-1.5 py-0.5 text-[11px] font-semibold text-slate-700">
          In transit
        </span>
      </div>
      <svg viewBox="0 0 200 70" className="h-16 w-full" fill="none">
        <path
          d="M10 55 C 50 55, 50 15, 100 25 S 150 55, 190 15"
          stroke="#94a3b8"
          strokeWidth="2"
          strokeDasharray="4 5"
          strokeLinecap="round"
        />
        <path
          d="M10 55 C 50 55, 50 15, 100 25"
          stroke="#0f172a"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="10" cy="55" r="4" fill="#0f172a" />
        <circle cx="190" cy="15" r="4" fill="#cbd5e1" />
        <circle cx="100" cy="25" r="5" fill="#d40000" />
      </svg>
    </div>
  );
}

export function FinanceVisual() {
  const rows = ["Payment received", "Invoice sent", "Report ready"];
  return (
    <div className={`${panel} space-y-2 !p-3`}>
      <div className="flex items-center justify-between px-1 pb-1">
        <span className="text-sm font-semibold">Activity</span>
        <span className="flex items-center gap-1 text-[11px] font-medium text-slate-500">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden>
            <rect x="5" y="11" width="14" height="9" rx="2" stroke="currentColor" strokeWidth="2" />
            <path d="M8 11V8a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="2" />
          </svg>
          Encrypted
        </span>
      </div>
      {rows.map((r) => (
        <div
          key={r}
          className="flex items-center gap-3 rounded-lg bg-slate-50 px-3 py-2.5 text-xs text-slate-700"
        >
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 text-white">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M5 12.5L9.5 17L19 7"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          {r}
        </div>
      ))}
    </div>
  );
}

export function HealthcareVisual() {
  const slots = ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30"];
  return (
    <div className={panel}>
      <div className="mb-3 text-sm font-semibold">Choose a time</div>
      <div className="grid grid-cols-3 gap-2">
        {slots.map((s, i) => (
          <span
            key={s}
            className={`rounded-md py-2 text-center text-xs ${
              i === 2
                ? "bg-slate-900 font-semibold text-white"
                : "bg-slate-100 text-slate-600"
            }`}
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

export function SaasVisual() {
  const bars = ["h-6", "h-9", "h-11", "h-14", "h-[4.25rem]", "h-20"];
  return (
    <div className={panel}>
      <div className="mb-3 flex items-center justify-between">
        <span className="text-sm font-semibold">Active users</span>
        <span className="rounded bg-slate-100 px-1.5 py-0.5 text-[11px] font-semibold text-slate-700">
          Growing
        </span>
      </div>
      <div className="flex h-20 items-end gap-2">
        {bars.map((h, i) => (
          <span
            key={i}
            className={`flex-1 rounded-t ${h} ${
              i < 3 ? "bg-slate-300" : "bg-slate-900"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export const socials = [
  {
    label: "Facebook",
    href: "https://facebook.com/yourcompany",
    icon: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/yourcompany",
    icon: (
      <>
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/yourcompany",
    icon: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@yourcompany",
    icon: (
      <>
        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
        <path d="m10 15 5-3-5-3z" />
      </>
    ),
  },
];