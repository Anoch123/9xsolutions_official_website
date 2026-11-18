import React from "react";

/* ------------------------------------------------------------------ */
/* Shared styles                                                       */
/* ------------------------------------------------------------------ */

const panel =
  "w-[88%] max-w-sm rounded-xl border border-slate-200 bg-white p-4 text-slate-900 shadow-sm";
const track = "bg-slate-100";

/* ------------------------------------------------------------------ */
/* Mini illustrations (decorative previews of each industry)           */
/* ------------------------------------------------------------------ */

function EducationVisual() {
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

function MobilityVisual() {
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

function TravelVisual() {
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

function RetailVisual() {
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

function LogisticsVisual() {
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

function FinanceVisual() {
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

function HealthcareVisual() {
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

function SaasVisual() {
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

/* ------------------------------------------------------------------ */
/* Data — edit to the industries you actually serve                    */
/* ------------------------------------------------------------------ */

const INDUSTRIES: {
  name: string;
  text: string;
  tags: string[];
  Visual: () => React.ReactElement;
}[] = [
  {
    name: "Education",
    text: "Learning platforms, portals, and student tools that keep learners engaged.",
    tags: ["Learning platforms", "Student portals", "Progress tracking"],
    Visual: EducationVisual,
  },
  {
    name: "Mobility & energy",
    text: "Fleet, charging, and live monitoring dashboards.",
    tags: ["Live dashboards", "IoT feeds", "Fleet tools"],
    Visual: MobilityVisual,
  },
  {
    name: "Travel & hospitality",
    text: "Booking sites, itineraries, and payments.",
    tags: ["Booking engines", "Itineraries", "Payments"],
    Visual: TravelVisual,
  },
  {
    name: "Retail & e-commerce",
    text: "Storefronts, catalogs, and order automation.",
    tags: ["Storefronts", "Catalogs", "Order flows"],
    Visual: RetailVisual,
  },
  {
    name: "Logistics",
    text: "Tracking, routing, and operations tooling.",
    tags: ["Tracking", "Routing", "Ops tools"],
    Visual: LogisticsVisual,
  },
  {
    name: "Finance",
    text: "Secure internal tools, reporting, and workflows.",
    tags: ["Reporting", "Workflows", "Secure access"],
    Visual: FinanceVisual,
  },
  {
    name: "Healthcare",
    text: "Scheduling, records access, and patient portals.",
    tags: ["Scheduling", "Patient portals", "Records"],
    Visual: HealthcareVisual,
  },
  {
    name: "SaaS & startups",
    text: "From MVP to a product that holds up at scale.",
    tags: ["MVP build", "Subscriptions", "Scaling"],
    Visual: SaasVisual,
  },
];

/* ------------------------------------------------------------------ */
/* Section — full width, edge to edge                                  */
/* ------------------------------------------------------------------ */

export default function Industries() {
  return (
    <section
      aria-labelledby="industries-heading"
      className="w-full bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* Header */}
      <header className="grid gap-6 px-5 sm:px-8 lg:grid-cols-12 lg:items-end lg:gap-12 lg:px-12">
        <div className="lg:col-span-7">
          <p className="text-sm font-semibold text-[#d40000]">Industries</p>
          <h2
            id="industries-heading"
            className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[44px] lg:leading-[1.1]"
          >
            Software built around how each industry actually works
          </h2>
        </div>
        <p className="text-base leading-7 text-slate-600 lg:col-span-5">
          Different industries have different constraints, users and compliance
          needs. These are the sectors we build for most often.
        </p>
      </header>

      {/* Full-bleed grid with hairline dividers */}
      <ul
        role="list"
        className="mt-12 grid grid-cols-1 gap-px border-y border-slate-200 bg-slate-200 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4"
      >
        {INDUSTRIES.map(({ name, text, tags, Visual }) => (
          <li key={name} className="flex bg-white">
            <article className="flex w-full flex-col p-6 sm:p-8">
              <h3 className="text-xl font-semibold tracking-tight text-slate-900">
                {name}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>

              <div
                aria-hidden
                className="mt-6 flex min-h-[200px] flex-1 items-center justify-center rounded-lg border border-slate-100 bg-slate-50 py-6"
              >
                <Visual />
              </div>

              <ul
                role="list"
                aria-label={`${name}: what we build`}
                className="mt-6 flex flex-wrap gap-2"
              >
                {tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-md bg-slate-100 px-3 py-1.5 text-[13px] font-medium text-slate-700"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}