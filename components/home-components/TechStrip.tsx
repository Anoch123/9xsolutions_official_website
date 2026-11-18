// Replace with the stack you actually use. Text wordmarks avoid brand-logo licensing.
const STACK = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "Prisma",
  "PostgreSQL",
  "AWS",
  "Azure",
  "Google Cloud",
  "Docker",
  "OpenAI",
];

export default function TechStrip() {
  const row = [...STACK, ...STACK];

  return (
    <section className="relative w-full border-b border-[#E3E5EA] bg-white py-10 md:py-14">
      <style>{`
        @keyframes cs-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @media (prefers-reduced-motion: reduce) { .cs-marquee { animation: none !important; } }
      `}</style>

      <p className="mb-8 px-6 text-center text-[13px] font-medium uppercase tracking-[0.2em] text-slate-400">
        Built with tools teams trust
      </p>

      <div
        className="relative w-full overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, #000 12%, #000 88%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, #000 12%, #000 88%, transparent)",
        }}
      >
        <div
          className="cs-marquee flex w-max items-center gap-4"
          style={{ animation: "cs-marquee 45s linear infinite" }}
        >
          {row.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="flex shrink-0 items-center gap-3 rounded-full border border-[#E3E5EA] bg-[#F6F7F9] px-6 py-3 text-[17px] font-semibold tracking-tight text-[#12141A]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#ff0000]" />
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}