const STEPS = [
  {
    title: "Discover",
    text: "We learn your business, users, and goals, then agree on what success looks like.",
  },
  {
    title: "Design",
    text: "Flows, interfaces, and architecture are mapped out and reviewed before code is written.",
  },
  {
    title: "Build",
    text: "Short iterations with working software every step, so you can steer early.",
  },
  {
    title: "Launch & grow",
    text: "We ship, monitor, and keep improving, with room to scale as you do.",
  },
];

export default function HowWeWork() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-medium text-slate-600">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ff0000]" />
            How we work
          </span>
          <h2 className="mt-6 text-[clamp(2rem,4.4vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-[#12141A]">
            From first call to{" "}
            <span className="bg-gradient-to-r from-[#4F66FF] to-[#9333EA] bg-clip-text text-transparent">
              live product.
            </span>
          </h2>
        </div>

        <div className="relative mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-6">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent lg:block"
          />
          {STEPS.map((s, i) => (
            <div key={s.title} className="relative">
              <span className="relative flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white font-mono text-sm font-semibold text-[#12141A] shadow-sm">
                {String(i + 1).padStart(2, "0")}
                {i === STEPS.length - 1 && (
                  <span className="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full bg-[#ff0000] shadow-[0_0_10px_rgba(255,0,0,0.6)]" />
                )}
              </span>
              <h3 className="mt-5 text-[22px] font-semibold tracking-tight text-[#12141A]">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                {s.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}