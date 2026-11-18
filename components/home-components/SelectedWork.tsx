import Link from "next/link";
import {
  VISUALS,
  type VisualKey,
} from "@/components/services-components/ServiceVisuals";

// PLACEHOLDERS — swap in your real projects (title, result line, tags, visual).
const PROJECTS: {
  title: string;
  category: string;
  result: string;
  tags: string[];
  visual: VisualKey;
}[] = [
  {
    title: "Retail analytics platform",
    category: "Web app · Data",
    result: "One live view of sales, stock, and customers across every store.",
    tags: ["Next.js", "PostgreSQL", "Dashboards"],
    visual: "chart",
  },
  {
    title: "Booking & payments app",
    category: "Mobile · Product design",
    result: "A booking flow that cut the steps from search to confirmation.",
    tags: ["React Native", "Payments", "UX"],
    visual: "mobile",
  },
  {
    title: "Operations automation suite",
    category: "Automation · Cloud",
    result: "Manual hand-offs replaced by workflows that run on their own.",
    tags: ["Workflows", "Integrations", "AWS"],
    visual: "flow",
  },
  {
    title: "AI support assistant",
    category: "AI · Integration",
    result: "Instant answers from company documents, with a human fallback.",
    tags: ["LLM", "Search", "Chat"],
    visual: "ai",
  },
];

export default function SelectedWork() {
  return (
    <section
      id="work"
      className="scroll-mt-24 bg-white px-5 py-20 sm:px-8 sm:py-28 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-medium text-slate-600">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ff0000]" />
            Selected work
          </span>
          <h2 className="mt-6 text-[clamp(2rem,4.6vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-[#12141A]">
            Products we&apos;ve{" "}
            <span className="bg-gradient-to-r from-[#4F66FF] to-[#9333EA] bg-clip-text text-transparent">
              shipped and scaled.
            </span>
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:mt-20">
          {PROJECTS.map((p, i) => {
            const Visual = VISUALS[p.visual];
            const dark = i === 1 || i === 2;

            return (
              <article
                key={p.title}
                className="group flex flex-col overflow-hidden rounded-[32px] border border-[#E3E5EA] bg-[#F6F7F9] p-3 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_70px_-30px_rgba(18,20,26,0.3)]"
              >
                <div
                  className={`relative flex min-h-[300px] items-center justify-center overflow-hidden rounded-[24px] ${
                    p.visual === "mobile" ? "items-start" : ""
                  } ${dark ? "bg-[#0F1222]" : "bg-white"}`}
                >
                  {dark && (
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-[#4F66FF]/30 blur-[70px]"
                    />
                  )}
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-50"
                    style={{
                      backgroundImage: `radial-gradient(${
                        dark ? "rgba(255,255,255,0.08)" : "rgba(18,20,26,0.07)"
                      } 1px, transparent 1px)`,
                      backgroundSize: "18px 18px",
                    }}
                  />
                  <div className="relative flex h-full w-full items-center justify-center py-10">
                    <Visual dark={dark} />
                  </div>
                </div>

                <div className="flex items-start justify-between gap-4 p-6 sm:p-7">
                  <div>
                    <span className="text-[12px] font-medium uppercase tracking-[0.18em] text-[#ff0000]">
                      {p.category}
                    </span>
                    <h3 className="mt-2 text-[26px] font-semibold leading-tight tracking-tight text-[#12141A]">
                      {p.title}
                    </h3>
                    <p className="mt-2 max-w-md text-[15px] leading-relaxed text-slate-500">
                      {p.result}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-white px-3 py-1 text-[12.5px] font-medium text-slate-600 ring-1 ring-slate-200"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition-all duration-300 group-hover:rotate-45 group-hover:border-[#ff0000] group-hover:bg-[#ff0000] group-hover:text-white">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M5 11L11 5M6 5h5v5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/talk-to-us"
            className="group inline-flex items-center gap-3 rounded-full bg-[#12141A] py-2 pl-7 pr-2 text-[15px] font-semibold text-white transition-colors hover:bg-black"
          >
            Start your project
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ff0000] transition-transform duration-300 group-hover:translate-x-0.5">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}