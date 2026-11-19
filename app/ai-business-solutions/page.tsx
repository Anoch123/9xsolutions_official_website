import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";
import { Arrow, ArrowUpRight, Eyebrow, Glow, HoverGlow, Icon, Numeral, Pill } from "@/components/ui/icons";
import {
  AI_benefits,
  AI_capabilities,
  AI_engagements,
  AI_industries,
  AI_principles,
  AI_problems,
  AI_Solutions_faqs,
  AI_steps,
  AI_useCases,
  h2Class,
  sectionClass,
  SERVICES,
} from "@/lib/constants/helper-constants";
import Link from "next/link";
import { pageSEO } from "@/lib/constants/helper-constants";

export const metadata = pageSEO["/ai-business-solutions"];

const slug = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const tinyLabel =
  "text-[12px] font-medium uppercase tracking-[0.2em] text-slate-500";

export default function AIBusinessSolutions() {
  return (
    <main className="w-full bg-white">
      {/* Hero */}
      <header className="relative flex min-h-[88dvh] w-full flex-col justify-end overflow-hidden bg-[#0B1020]">
        <Navbar />

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
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0B1020] to-transparent" />
        </div>

        <div className="relative z-10 w-full px-6 pb-14 pt-40 md:px-12 md:pb-20 md:pt-36 xl:px-20">
          <Eyebrow dark>AI business solutions</Eyebrow>

          <h1 className="mt-8 w-full text-[clamp(2.6rem,7.6vw,8.5rem)] font-semibold leading-[0.98] tracking-[-0.035em] text-white">
            AI that takes work off
            <br />
            <span className="bg-gradient-to-r from-[#8FA0FF] via-white to-[#ff6b6b] bg-clip-text text-transparent">
              your team&apos;s plate.
            </span>
          </h1>

          <div className="mt-10 grid w-full items-end gap-8 md:mt-14 md:grid-cols-[1fr_auto] md:gap-16">
            <p className="max-w-2xl text-[17px] leading-relaxed text-slate-300 md:text-[20px]">
              We design, build, and run AI solutions that automate routine work,
              sharpen decisions, and help your business serve customers faster,
              from first pilot to full rollout.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/talk-to-us"
                className="group inline-flex items-center gap-4 rounded-full bg-[#ff0000] py-2 pl-8 pr-2 text-[16px] font-semibold text-white shadow-[0_10px_40px_rgba(255,0,0,0.4)] transition-all duration-300 hover:bg-[#e60000] hover:shadow-[0_10px_50px_rgba(255,0,0,0.6)]"
              >
                Book a Consultation
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#ff0000] transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight className="scale-125" />
                </span>
              </Link>
              <a
                href="#how-ai-helps"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-4 text-[15px] font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
              >
                See how AI helps
              </a>
            </div>
          </div>

          
        </div>
      </header>

      {/* Intro */}
      <section className={sectionClass}>
        <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-20">
          <h2 className="text-[clamp(1.9rem,3.6vw,3.4rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-slate-900">
            AI that does real work,{" "}
            <span className="bg-gradient-to-r from-[#4F66FF] to-[#ff0000] bg-clip-text text-transparent">
              not demos.
            </span>
          </h2>
          <div className="space-y-6 text-[17px] leading-relaxed text-slate-600 md:text-[19px]">
            <p>
              Most AI projects stall between a promising prototype and a system
              people actually rely on. We close that gap by pairing AI
              specialists with software engineers who build, secure, and run
              what we design.
            </p>
            <p>
              Whether you want to automate a slow process, put an assistant in
              front of your customers, or get more from your data, we start with
              the outcome and choose the technology to fit it.
            </p>
          </div>
        </div>
      </section>

      {/* How AI helps */}
      <section
        id="how-ai-helps"
        className={`${sectionClass} scroll-mt-24 !pt-0`}
      >
        <Eyebrow>How AI helps your business</Eyebrow>
        <h2 className={h2Class}>Six ways AI pays for itself.</h2>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {AI_benefits.map((b, i) => (
            <article
              key={b.title}
              className="group relative overflow-hidden rounded-[32px] border border-slate-200 bg-slate-50 p-8 transition-all duration-500 hover:-translate-y-1 hover:border-transparent hover:bg-[#0B1020] hover:shadow-[0_30px_60px_rgba(11,16,32,0.25)] md:p-10"
            >
              <HoverGlow />
              <div className="relative">
                <Numeral n={i + 1} className="text-[clamp(3.5rem,6vw,5.5rem)]" />
                <h3 className="mt-8 text-[22px] font-semibold tracking-[-0.02em] text-slate-900 transition-colors duration-500 group-hover:text-white">
                  {b.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-slate-600 transition-colors duration-500 group-hover:text-slate-300">
                  {b.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Problems we solve */}
      <section className={`${sectionClass} !pt-0`}>
        <Eyebrow>Problems we solve</Eyebrow>
        <h2 className={h2Class}>From daily friction to automatic.</h2>

        <div className="mt-12 space-y-4">
          <div className="hidden grid-cols-[1fr_auto_1fr] gap-4 px-3 md:grid">
            <span className={tinyLabel}>Today</span>
            <span className="w-12" aria-hidden="true" />
            <span className={tinyLabel}>With AI</span>
          </div>

          {AI_problems.map((p) => (
            <div
              key={p.problem}
              className="grid items-stretch gap-3 md:grid-cols-[1fr_auto_1fr] md:gap-4"
            >
              <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-7 md:p-8">
                <p className={`${tinyLabel} mb-3 md:hidden`}>Today</p>
                <p className="text-[16px] leading-relaxed text-slate-500">
                  {p.problem}
                </p>
              </div>

              <div className="flex items-center justify-center">
                <span className="flex h-12 w-12 rotate-90 items-center justify-center rounded-full bg-[#ff0000] text-white shadow-[0_10px_30px_rgba(255,0,0,0.35)] md:rotate-0">
                  <Arrow />
                </span>
              </div>

              <div className="relative overflow-hidden rounded-[28px] bg-[#0B1020] p-7 text-white md:p-8">
                <div className="pointer-events-none absolute inset-0" aria-hidden="true">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_100%_100%,rgba(79,102,255,0.25),transparent_65%)]" />
                </div>
                <div className="relative">
                  <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.2em] text-[#8FA0FF] md:hidden">
                    With AI
                  </p>
                  <p className="text-[16px] font-medium leading-relaxed">
                    {p.solution}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Capabilities */}
      <section
        id="all-services"
        className={`${sectionClass} scroll-mt-24 !pt-0`}
      >
        <Eyebrow>What we build</Eyebrow>
        <h2 className={h2Class}>AI business solutions, end to end.</h2>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {AI_capabilities.map((c) => (
            <article
              key={c.title}
              className="group relative flex flex-col overflow-hidden rounded-[32px] border border-slate-200 bg-slate-50 p-8 transition-all duration-500 hover:-translate-y-1 hover:border-transparent hover:bg-[#0B1020] hover:shadow-[0_30px_60px_rgba(11,16,32,0.25)] md:p-10"
            >
              <HoverGlow />
              <div className="relative flex flex-1 flex-col">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0B1020] text-[#8FA0FF] transition-all duration-500 group-hover:rotate-6 group-hover:bg-[#ff0000] group-hover:text-white">
                  <Icon d={c.icon} />
                </div>
                <h3 className="mt-8 text-[23px] font-semibold tracking-[-0.02em] text-slate-900 transition-colors duration-500 group-hover:text-white">
                  {c.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-slate-600 transition-colors duration-500 group-hover:text-slate-300">
                  {c.body}
                </p>
                <ul className="mt-6 space-y-2.5 border-t border-slate-200 pt-6 text-[14px] text-slate-700 transition-colors duration-500 group-hover:border-white/10 group-hover:text-slate-300">
                  {c.points.map((p) => (
                    <li key={p} className="flex items-start gap-3">
                      <span
                        className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff0000]"
                        aria-hidden="true"
                      />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Industries */}
      <section className={`${sectionClass} !pt-0`}>
        <Eyebrow>Industries</Eyebrow>
        <h2 className={h2Class}>Built for the way your industry works.</h2>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {AI_industries.map((i) => (
            <div
              key={i.name}
              className="group relative rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#4F66FF]/40 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-[20px] font-semibold tracking-[-0.02em] text-slate-900">
                  {i.name}
                </h3>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-500 transition-all duration-300 group-hover:rotate-45 group-hover:border-transparent group-hover:bg-[#ff0000] group-hover:text-white">
                  <ArrowUpRight />
                </span>
              </div>
              <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
                {i.example}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Use cases by team */}
      <section className={`${sectionClass} !pt-0`}>
        <div className="grid gap-12 md:grid-cols-[1fr_1.5fr] md:gap-20">
          <div className="md:sticky md:top-28 md:self-start">
            <Eyebrow>Where it pays off</Eyebrow>
            <h2 className="mt-6 text-[clamp(1.9rem,3.6vw,3.4rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-slate-900">
              Practical wins for every team.
            </h2>
            <p className="mt-6 max-w-md text-[17px] leading-relaxed text-slate-600">
              We focus on work that is repetitive, data-heavy, or slow, where AI
              frees people for the judgment calls only they can make.
            </p>
          </div>

          <ul className="flex flex-col gap-3">
            {AI_useCases.map((u, i) => (
              <li
                key={u.team}
                className="group grid items-center gap-3 rounded-3xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:border-transparent hover:bg-[#0B1020] md:grid-cols-[56px_200px_1fr] md:gap-8 md:p-8"
              >
                <span
                  aria-hidden="true"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0B1020] text-[13px] font-semibold text-[#8FA0FF] transition-colors duration-300 group-hover:bg-[#ff0000] group-hover:text-white"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-[20px] font-semibold tracking-[-0.02em] text-slate-900 transition-colors duration-300 group-hover:text-white">
                  {u.team}
                </h3>
                <p className="text-[16px] leading-relaxed text-slate-600 transition-colors duration-300 group-hover:text-slate-300">
                  {u.outcome}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process: big navy card, same language as the footer */}
      <section className="w-full bg-white p-3 md:p-5">
        <div className="relative overflow-hidden rounded-[32px] bg-[#0B1020] px-6 py-16 text-white md:rounded-[48px] md:px-12 md:py-24 xl:px-20">
          <Glow />

          <div className="relative">
            <Pill>How we work</Pill>
            <h2 className="mt-7 max-w-4xl text-[clamp(2.2rem,4.8vw,4.8rem)] font-semibold leading-[1] tracking-[-0.04em]">
              From idea to production
              <br />
              <span className="bg-gradient-to-r from-[#8FA0FF] via-white to-[#ff6b6b] bg-clip-text text-transparent">
                in four steps.
              </span>
            </h2>

            <ol className="relative mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {AI_steps.map((s, i) => (
                <li
                  key={s.title}
                  className="group relative rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.08]"
                >
                  <span className="block bg-gradient-to-b from-white/70 to-white/5 bg-clip-text text-[clamp(3.5rem,5vw,4.5rem)] font-semibold leading-[0.85] tracking-[-0.06em] text-transparent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-8 text-[20px] font-semibold tracking-[-0.02em] text-white">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-slate-400">
                    {s.body}
                  </p>
                  {i < AI_steps.length - 1 && (
                    <span
                      className="absolute -bottom-3 left-1/2 z-10 flex h-6 w-6 -translate-x-1/2 rotate-90 items-center justify-center rounded-full bg-[#ff0000] text-white md:hidden"
                      aria-hidden="true"
                    >
                      <Arrow className="scale-75" />
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Engagement options */}
      <section className={sectionClass}>
        <Eyebrow>Ways to work with us</Eyebrow>
        <h2 className={h2Class}>Start small or go all in.</h2>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {AI_engagements.map((e, i) => (
            <div
              key={e.name}
              className="group relative flex flex-col overflow-hidden rounded-[32px] border border-slate-200 bg-slate-50 p-8 transition-all duration-500 hover:-translate-y-1 hover:border-transparent hover:bg-[#0B1020] hover:shadow-[0_30px_60px_rgba(11,16,32,0.25)]"
            >
              <HoverGlow />
              <div className="relative flex flex-1 flex-col">
                <Numeral n={i + 1} className="text-[clamp(3rem,4.5vw,4rem)]" />
                <h3 className="mt-8 text-[21px] font-semibold tracking-[-0.02em] text-slate-900 transition-colors duration-500 group-hover:text-white">
                  {e.name}
                </h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-slate-600 transition-colors duration-500 group-hover:text-slate-300">
                  {e.body}
                </p>
                <p className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-[13px] font-medium text-[#4F66FF] transition-all duration-500 group-hover:border-white/10 group-hover:bg-white/5 group-hover:text-[#8FA0FF]">
                  {e.for}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Principles */}
      <section className={`${sectionClass} !pt-0`}>
        <Eyebrow>Built to be trusted</Eyebrow>
        <h2 className={h2Class}>Responsible by design.</h2>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {AI_principles.map((p) => (
            <div
              key={p.title}
              className="flex gap-5 rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:border-[#4F66FF]/40 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
            >
              <span
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0B1020] text-[#8FA0FF]"
                aria-hidden="true"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12.5l4.5 4.5L19 7.5"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div>
                <h3 className="text-[20px] font-semibold tracking-[-0.02em] text-slate-900">
                  {p.title}
                </h3>
                <p className="mt-2 max-w-lg text-[15px] leading-relaxed text-slate-600">
                  {p.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className={`${sectionClass} !pt-0`}>
        <div className="grid gap-12 md:grid-cols-[1fr_1.5fr] md:gap-20">
          <div className="md:sticky md:top-28 md:self-start">
            <Eyebrow>Questions</Eyebrow>
            <h2 className="mt-6 text-[clamp(1.9rem,3.6vw,3.4rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-slate-900">
              Before you get started.
            </h2>
          </div>

          <div className="flex flex-col gap-3">
            {AI_Solutions_faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-3xl border border-slate-200 bg-slate-50 px-6 py-5 transition-colors duration-300 open:border-transparent open:bg-[#0B1020] md:px-8 md:py-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-[18px] font-semibold tracking-[-0.01em] text-slate-900 transition-colors group-open:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4F66FF] [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-300 bg-white text-[20px] leading-none text-slate-600 transition-all duration-300 group-hover:border-[#4F66FF]/50 group-open:rotate-45 group-open:border-transparent group-open:bg-[#ff0000] group-open:text-white"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-slate-600 group-open:text-slate-300">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}