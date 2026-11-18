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

const NODES = [
  { label: "Software", x: 200, y: 10 },
  { label: "Cloud", x: 390, y: 200 },
  { label: "Automation", x: 200, y: 390 },
  { label: "AI", x: 10, y: 200 },
];

export default function WhyUs() {
  return (
    <section className="w-full bg-white p-3 md:p-5">
      <div className="relative w-full overflow-hidden rounded-[32px] bg-[#0B1020] text-white md:rounded-[48px]">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_100%_0%,rgba(79,102,255,0.22),transparent_65%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_0%_100%,rgba(255,0,0,0.12),transparent_65%)]" />
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
        </div>

        <div className="relative grid w-full items-center gap-14 px-6 py-16 md:px-12 md:py-24 lg:grid-cols-2 xl:px-20">
          {/* Copy */}
          <div>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-slate-300">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ff0000]" />
              Why CloudScap
            </span>
            <h2 className="mt-6 text-[clamp(2.2rem,4.8vw,4.5rem)] font-semibold leading-[1.02] tracking-[-0.035em]">
              One partner for{" "}
              <span className="bg-gradient-to-r from-[#8FA0FF] via-white to-[#ff6b6b] bg-clip-text text-transparent">
                everything it takes.
              </span>
            </h2>

            <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
              {POINTS.map((p, i) => (
                <div key={p.title} className="flex gap-5 py-6">
                  <span className="pt-1 font-mono text-xs tracking-widest text-[#ff6b6b]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-[20px] font-semibold tracking-tight">
                      {p.title}
                    </h3>
                    <p className="mt-1.5 max-w-md text-[15px] leading-relaxed text-slate-400">
                      {p.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Orbit visual */}
          <div className="relative mx-auto w-full max-w-[520px]">
            <svg
              viewBox="-70 -30 540 460"
              className="h-auto w-full"
              fill="none"
              aria-hidden="true"
            >
              <circle cx="200" cy="200" r="190" stroke="#8FA0FF" strokeOpacity="0.25" />
              <circle cx="200" cy="200" r="130" stroke="#8FA0FF" strokeOpacity="0.2" />
              <circle cx="200" cy="200" r="70" stroke="#8FA0FF" strokeOpacity="0.2" />
              <line x1="200" y1="10" x2="200" y2="390" stroke="#8FA0FF" strokeOpacity="0.15" />
              <line x1="10" y1="200" x2="390" y2="200" stroke="#8FA0FF" strokeOpacity="0.15" />

              <circle cx="200" cy="200" r="46" fill="#ff0000" fillOpacity="0.15" />
              <circle cx="200" cy="200" r="30" fill="#ff0000" />
              <text
                x="200"
                y="205"
                textAnchor="middle"
                fontSize="11"
                fontWeight="600"
                fill="#fff"
              >
                You
              </text>

              {NODES.map((n) => (
                <g key={n.label}>
                  <circle cx={n.x} cy={n.y} r="26" fill="#0F1222" stroke="#8FA0FF" strokeOpacity="0.5" />
                  <circle cx={n.x} cy={n.y} r="5" fill="#ff3b3b" />
                  <text
                    x={n.x}
                    y={n.y + (n.y < 100 ? -40 : n.y > 300 ? 52 : 0)}
                    dx={n.x < 100 ? -40 : n.x > 300 ? 40 : 0}
                    dy={n.y === 200 ? 5 : 0}
                    textAnchor={n.x < 100 ? "end" : n.x > 300 ? "start" : "middle"}
                    fontSize="15"
                    fontWeight="600"
                    fill="#fff"
                  >
                    {n.label}
                  </text>
                </g>
              ))}
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}