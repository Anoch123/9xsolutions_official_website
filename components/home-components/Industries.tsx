import { Eyebrow } from "@/components/ui/icons";
import { INDUSTRIES } from "@/lib/constants/helper-constants";

export default function Industries() {
  return (
    <section
      aria-labelledby="industries-heading"
      className="w-full bg-white px-6 py-10 md:px-12 md:py-6 xl:px-20"
    >
      {/* Header */}
      <header className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-12">
        <div className="lg:col-span-7">
          <Eyebrow>Industries</Eyebrow>
          <h2
            id="industries-heading"
            className="mt-6 text-[clamp(1.9rem,3.6vw,3.4rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-slate-900"
          >
            Software built around how each industry{" "}
            <span className="bg-gradient-to-r from-[#4F66FF] to-[#ff0000] bg-clip-text text-transparent">
              actually works.
            </span>
          </h2>
        </div>
        <p className="text-[17px] leading-relaxed text-slate-600 lg:col-span-5">
          Different industries have different constraints, users and compliance
          needs. These are the sectors we build for most often.
        </p>
      </header>

      {/* Cards */}
      <ul
        role="list"
        className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-16 xl:grid-cols-4"
      >
        {INDUSTRIES.map(({ name, text, tags, Visual }, i) => (
          <li key={name} className="flex">
            <article className="group relative flex w-full flex-col overflow-hidden rounded-[32px] border border-slate-200 bg-slate-50 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-transparent hover:bg-[#0B1020] hover:shadow-[0_30px_60px_rgba(11,16,32,0.25)] xl:p-8">
              {/* Hover glow */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden="true"
              >
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_0%_0%,rgba(255,0,0,0.18),transparent_65%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_100%_100%,rgba(79,102,255,0.25),transparent_65%)]" />
              </div>

              <div className="relative flex flex-1 flex-col">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-[24px] font-semibold tracking-[-0.025em] text-slate-900 transition-colors duration-500 group-hover:text-white">
                    {name}
                  </h3>
                  <span
                    aria-hidden="true"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0B1020] text-[12px] font-semibold text-[#8FA0FF] transition-all duration-500 group-hover:bg-[#ff0000] group-hover:text-white"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <p className="mt-3 text-[15px] leading-relaxed text-slate-600 transition-colors duration-500 group-hover:text-slate-300">
                  {text}
                </p>

                {/* White panel keeps the illustration readable after the flip */}
                <div
                  aria-hidden
                  className="mt-6 flex min-h-[200px] flex-1 items-center justify-center rounded-3xl border border-slate-200 bg-white py-6 transition-colors duration-500 group-hover:border-transparent"
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
                      className="rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-[13px] font-medium text-slate-700 transition-all duration-500 group-hover:border-white/10 group-hover:bg-white/5 group-hover:text-slate-200"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}