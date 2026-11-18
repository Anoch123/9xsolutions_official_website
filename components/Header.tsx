import { common_texts, PILLARS } from "@/lib/constants/helper-constants";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="relative flex min-h-[100dvh] w-full flex-col justify-end overflow-hidden bg-[#0B1020]">
      <Navbar />

      {/* Background: navy base, layered glows, grid, orbit rings */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(79,102,255,0.2),transparent_65%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_90%_35%,rgba(147,51,234,0.14),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_30%_at_0%_80%,rgba(255,0,0,0.1),transparent_70%)]" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse 90% 80% at 50% 40%, #000 30%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 90% 80% at 50% 40%, #000 30%, transparent 80%)",
          }}
        />
        <svg
          className="absolute -right-48 -top-48 hidden opacity-[0.16] lg:block"
          width="760"
          height="760"
          viewBox="0 0 640 640"
          fill="none"
        >
          <circle cx="320" cy="320" r="319" stroke="#8FA0FF" strokeWidth="1" />
          <circle cx="320" cy="320" r="230" stroke="#8FA0FF" strokeWidth="1" />
          <circle cx="320" cy="320" r="140" stroke="#8FA0FF" strokeWidth="1" />
          <circle cx="320" cy="90" r="5" fill="#8FA0FF" />
          <circle cx="551" cy="320" r="4" fill="#ff3b3b" />
        </svg>
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0B1020] to-transparent" />
      </div>

      {/* Content — edge to edge */}
      <div className="relative z-10 w-full px-6 pt-40 md:px-12 md:pt-36 xl:px-20 mt-4">
       
        <h1 className="w-full text-[clamp(2.6rem,8.2vw,9.5rem)] font-semibold leading-[0.98] tracking-[-0.035em] text-white">
          Smart software.
          <br />
          Seamless automation.
          <br />
          <span className="bg-gradient-to-r from-[#8FA0FF] via-white to-[#ff6b6b] bg-clip-text text-transparent">
            Scalable cloud with AI.
          </span>
        </h1>

        {/* Description + CTAs spread across the full width */}
        <div className="mt-10 grid w-full items-end gap-8 md:mt-14 md:grid-cols-[1fr_auto] md:gap-16">
          <p className="max-w-2xl text-[17px] leading-relaxed text-slate-300 md:text-[20px]">
            {common_texts.App_Name} builds scalable software with cloud, automation, and AI —
            from idea to launch and beyond.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="/talk-to-us"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#ff0000] px-8 py-4 text-[15px] font-semibold text-white shadow-[0_10px_30px_rgba(255,0,0,0.35)] transition-all duration-300 hover:bg-[#e60000] hover:shadow-[0_10px_40px_rgba(255,0,0,0.55)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8FA0FF]"
            >
              Book a Consultation
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-4 text-[15px] font-semibold text-white backdrop-blur transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40"
            >
              View our work
            </a>
          </div>
        </div>

        {/* Full-width pillar strip */}
        <div className="mt-14 grid w-full grid-cols-2 border-t border-white/10 md:mt-20 md:grid-cols-4">
          {PILLARS.map((p, i) => (
            <div
              key={p.n}
              className={`group py-6 transition-colors md:py-8 ${
                i % 2 === 1 ? "pl-5" : ""
              } ${i > 0 ? "md:border-l md:border-white/10 md:pl-8" : ""} ${
                i === 1 || i === 3 ? "border-l border-white/10" : ""
              } ${i > 1 ? "border-t border-white/10 md:border-t-0" : ""}`}
            >
              <span className="text-[12px] font-medium tabular-nums tracking-widest text-[#ff3b3b]">
                {p.n}
              </span>
              <h3 className="mt-2 text-[20px] font-semibold tracking-tight text-white md:text-[24px]">
                {p.title}
              </h3>
              <p className="mt-1.5 max-w-[16rem] text-[14px] leading-snug text-slate-400">
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}