import { common_texts } from "@/lib/constants/helper-constants";

const POINTS = [
  {
    title: "One team, the whole stack",
    text: "Software, cloud, automation, and AI under one roof, so nothing gets lost between vendors.",
  },
  {
    title: "Senior people on your project",
    text: "A small team that stays close to the work, with no hand-offs to juniors after the pitch.",
  },
  {
    title: "Working software, early",
    text: "You see real progress every iteration and can change direction while it's still cheap.",
  },
  {
    title: "Built to scale from day one",
    text: "Clean architecture and cloud foundations that grow with your users instead of fighting them.",
  },
];

const STACK = [
  { name: "Software", text: "Web and mobile products built to last." },
  { name: "Cloud", text: "Infrastructure that scales with you." },
  { name: "Automation", text: "Workflows that run themselves." },
  { name: "AI", text: "Intelligence woven into your stack." },
];

export default function WhyUs() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0B1020] text-white">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(79,102,255,0.2),transparent_65%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_30%_at_100%_55%,rgba(147,51,234,0.12),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_35%_25%_at_0%_100%,rgba(255,0,0,0.1),transparent_70%)]" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "linear-gradient(to bottom, #000, transparent 75%)",
            WebkitMaskImage: "linear-gradient(to bottom, #000, transparent 75%)",
          }}
        />
      </div>

      {/* Heading — edge to edge */}
      <div className="relative w-full px-6 pb-14 pt-20 md:px-12 md:pb-20 md:pt-28 xl:px-20">
        <div className="flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.2em] text-slate-400">
          <span className="h-2 w-2 bg-[#ff0000]" />
          Why {common_texts.Company_name}
        </div>

        <h2 className="mt-8 w-full text-[clamp(2.6rem,7vw,8rem)] font-semibold leading-[0.98] tracking-[-0.04em]">
          One partner for
          <br />
          <span className="text-slate-500">everything it takes.</span>
        </h2>
      </div>

      {/* Reasons — full-width rows */}
      <div className="relative w-full border-b border-white/10">
        {POINTS.map((p, i) => (
          <div
            key={p.title}
            className="group relative w-full border-t border-white/10 transition-colors duration-500 hover:bg-white/[0.03]"
          >
            {/* hover accent */}
            <span
              aria-hidden
              className="absolute inset-y-0 left-0 w-[3px] origin-top scale-y-0 bg-[#ff0000] transition-transform duration-500 ease-out group-hover:scale-y-100"
            />

            <div className="grid w-full items-center gap-4 px-6 py-8 md:grid-cols-12 md:gap-8 md:px-12 md:py-11 xl:px-20">
              <span className="font-mono text-[13px] tracking-widest text-slate-500 transition-colors duration-300 group-hover:text-[#ff6b6b] md:col-span-1">
                {String(i + 1).padStart(2, "0")}
              </span>

              <h3 className="text-[clamp(1.5rem,2.8vw,2.75rem)] font-semibold leading-tight tracking-[-0.02em] transition-transform duration-500 ease-out group-hover:translate-x-2 md:col-span-6">
                {p.title}
              </h3>

              <p className="max-w-xl text-[16px] leading-relaxed text-slate-400 md:col-span-4">
                {p.text}
              </p>

              <span className="hidden justify-self-end md:col-span-1 md:flex">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-white transition-all duration-300 group-hover:border-[#ff0000] group-hover:bg-[#ff0000]">
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
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Full-stack strip — edge to edge */}
      <div className="relative grid w-full grid-cols-2 lg:grid-cols-4">
        {STACK.map((s, i) => (
          <div
            key={s.name}
            className={`group relative overflow-hidden px-6 py-10 transition-colors duration-500 hover:bg-[#ff0000] md:px-12 md:py-14 xl:px-14 ${
              i % 2 === 1 ? "border-l border-white/10" : ""
            } ${i > 1 ? "border-t border-white/10 lg:border-t-0" : ""} ${
              i > 0 ? "lg:border-l lg:border-white/10" : ""
            }`}
          >
            <span className="font-mono text-[11px] tracking-widest text-slate-500 transition-colors duration-300 group-hover:text-white/70">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h4 className="mt-6 text-[clamp(1.75rem,3.6vw,3.5rem)] font-semibold leading-none tracking-[-0.03em]">
              {s.name}
            </h4>
            <p className="mt-4 max-w-[16rem] text-[14px] leading-snug text-slate-400 transition-colors duration-300 group-hover:text-white/90">
              {s.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}