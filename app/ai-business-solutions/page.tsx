"use client";
import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";
import { Arrow, Eyebrow, Icon } from "@/components/ui/icons";
import { AI_benefits, AI_capabilities, AI_engagements, AI_industries, AI_principles, AI_problems, AI_Solutions_faqs, AI_steps, AI_useCases, h2Class, sectionClass, SERVICES } from "@/lib/constants/helper-constants";
import Link from "next/link";

const slug = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

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
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/talk-to-us"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#ff0000] px-8 py-4 text-[15px] font-semibold text-white shadow-[0_10px_30px_rgba(255,0,0,0.35)] transition-all duration-300 hover:bg-[#e60000] hover:shadow-[0_10px_40px_rgba(255,0,0,0.55)]"
              >
                Book a Consultation
                <Arrow className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <a
                href="#how-ai-helps"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-4 text-[15px] font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
              >
                See how AI helps
              </a>
            </div>
          </div>

          {/* Jump chips */}
          <div className="mt-12 flex w-full flex-wrap gap-2.5 border-t border-white/10 pt-8">
            {SERVICES.map((s, i) => (
              <a
                key={s.label}
                href={`#${slug(s.label)}`}
                className="group inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 py-2 pl-3 pr-4 text-[14px] font-medium text-slate-200 transition-colors hover:border-[#ff0000]/60 hover:bg-white/10 hover:text-white"
              >
                <span className="font-mono text-[11px] text-[#ff6b6b]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </header>

      {/* Intro */}
      <section className={sectionClass}>
        <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-20">
          <h2 className="text-[clamp(1.9rem,3.6vw,3.4rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-slate-900">
            AI that does real work, not demos.
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

        <div className="mt-12 grid gap-x-10 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
          {AI_benefits.map((b) => (
            <div key={b.title} className="border-t-2 border-slate-900 pt-6">
              <h3 className="text-[21px] font-semibold tracking-[-0.02em] text-slate-900">
                {b.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
                {b.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Problems we solve */}
      <section className={`${sectionClass} !pt-0`}>
        <Eyebrow>Problems we solve</Eyebrow>
        <h2 className={h2Class}>From daily friction to automatic.</h2>

        <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200">
          <div className="hidden grid-cols-2 border-b border-slate-200 bg-slate-50 px-8 py-4 text-[14px] font-semibold text-slate-500 md:grid">
            <span>Today</span>
            <span>With AI</span>
          </div>
          {AI_problems.map((p) => (
            <div
              key={p.problem}
              className="grid gap-3 border-b border-slate-200 px-8 py-7 last:border-b-0 md:grid-cols-2 md:gap-10"
            >
              <p className="text-[16px] leading-relaxed text-slate-500">
                {p.problem}
              </p>
              <p className="text-[16px] font-medium leading-relaxed text-slate-900">
                {p.solution}
              </p>
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
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-8 transition-all duration-300 hover:border-[#4F66FF]/40 hover:bg-white hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0B1020] text-[#8FA0FF]">
                <Icon d={c.icon} />
              </div>
              <h3 className="mt-6 text-[22px] font-semibold tracking-[-0.02em] text-slate-900">
                {c.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
                {c.body}
              </p>
              <ul className="mt-6 space-y-2 border-t border-slate-200 pt-6 text-[14px] text-slate-700">
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
            </article>
          ))}
        </div>
      </section>

      {/* Industries */}
      <section className={`${sectionClass} !pt-0`}>
        <Eyebrow>Industries</Eyebrow>
        <h2 className={h2Class}>Built for the way your industry works.</h2>

        <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-slate-200 bg-slate-200 md:grid-cols-2 xl:grid-cols-3">
          {AI_industries.map((i) => (
            <div key={i.name} className="bg-white p-8">
              <h3 className="text-[20px] font-semibold tracking-[-0.02em] text-slate-900">
                {i.name}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-slate-600">
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

          <ul className="divide-y divide-slate-200 border-y border-slate-200">
            {AI_useCases.map((u) => (
              <li
                key={u.team}
                className="grid gap-2 py-8 md:grid-cols-[200px_1fr] md:gap-10"
              >
                <h3 className="text-[20px] font-semibold tracking-[-0.02em] text-slate-900">
                  {u.team}
                </h3>
                <p className="text-[16px] leading-relaxed text-slate-600">
                  {u.outcome}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process (dark band for contrast) */}
      <section className="w-full bg-[#0B1020] px-6 py-20 md:px-12 md:py-28 xl:px-20">
        <Eyebrow dark>How we work</Eyebrow>
        <h2 className="mt-6 max-w-3xl text-[clamp(1.9rem,3.6vw,3.4rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-white">
          From idea to production in four steps.
        </h2>

        <ol className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-2 xl:grid-cols-4">
          {AI_steps.map((s, i) => (
            <li key={s.title} className="bg-[#0B1020] p-8">
              <span className="bg-gradient-to-r from-[#8FA0FF] to-[#ff6b6b] bg-clip-text text-[40px] font-semibold leading-none tracking-[-0.04em] text-transparent">
                {i + 1}
              </span>
              <h3 className="mt-6 text-[20px] font-semibold tracking-[-0.02em] text-white">
                {s.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-slate-400">
                {s.body}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* Engagement options */}
      <section className={sectionClass}>
        <Eyebrow>Ways to work with us</Eyebrow>
        <h2 className={h2Class}>Start small or go all in.</h2>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {AI_engagements.map((e) => (
            <div
              key={e.name}
              className="flex flex-col rounded-3xl border border-slate-200 p-8"
            >
              <h3 className="text-[20px] font-semibold tracking-[-0.02em] text-slate-900">
                {e.name}
              </h3>
              <p className="mt-3 flex-1 text-[15px] leading-relaxed text-slate-600">
                {e.body}
              </p>
              <p className="mt-6 border-t border-slate-200 pt-4 text-[14px] font-medium text-[#4F66FF]">
                {e.for}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Principles */}
      <section className={`${sectionClass} !pt-0`}>
        <Eyebrow>Built to be trusted</Eyebrow>
        <h2 className={h2Class}>Responsible by design.</h2>

        <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
          {AI_principles.map((p) => (
            <div key={p.title} className="border-l-2 border-[#ff0000]/70 pl-6">
              <h3 className="text-[20px] font-semibold tracking-[-0.02em] text-slate-900">
                {p.title}
              </h3>
              <p className="mt-2 max-w-lg text-[15px] leading-relaxed text-slate-600">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className={`${sectionClass} !pt-0`}>
        <div className="grid gap-12 md:grid-cols-[1fr_1.5fr] md:gap-20">
          <div>
            <Eyebrow>Questions</Eyebrow>
            <h2 className="mt-6 text-[clamp(1.9rem,3.6vw,3.4rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-slate-900">
              Before you get started.
            </h2>
          </div>

          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {AI_Solutions_faqs.map((f) => (
              <details key={f.q} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-[18px] font-semibold tracking-[-0.01em] text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#4F66FF] [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-300 text-slate-600 transition-transform duration-300 group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-slate-600">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      {/* <section className="w-full bg-white px-6 pb-20 md:px-12 md:pb-28 xl:px-20">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#0B1020] px-8 py-16 md:px-16 md:py-24">
          <div className="absolute inset-0" aria-hidden="true">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_20%_0%,rgba(79,102,255,0.28),transparent_65%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_100%_100%,rgba(255,0,0,0.16),transparent_70%)]" />
          </div>

          <div className="relative grid items-end gap-10 md:grid-cols-[1fr_auto] md:gap-16">
            <div>
              <h2 className="max-w-3xl text-[clamp(2rem,4.6vw,4.2rem)] font-semibold leading-[1.02] tracking-[-0.035em] text-white">
                Tell us what slows your business down.
              </h2>
              <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-slate-300">
                In a 30-minute consultation we will identify where AI can help
                most and outline a first project.
              </p>
            </div>
            <Link
              href="/talk-to-us"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#ff0000] px-8 py-4 text-[15px] font-semibold text-white shadow-[0_10px_30px_rgba(255,0,0,0.35)] transition-all duration-300 hover:bg-[#e60000] hover:shadow-[0_10px_40px_rgba(255,0,0,0.55)]"
            >
              Book a Consultation
              <Arrow className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section> */}

      <Footer />
    </main>
  );
}
