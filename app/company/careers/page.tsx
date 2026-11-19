import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";
import { ArrowUpRight, Eyebrow, Glow, HoverGlow, Pill } from "@/components/ui/icons";
import { careers_faqs, careers_perks, careers_roles, careers_steps, common_texts, h2Class, sectionClass } from "@/lib/constants/helper-constants";
import Link from "next/link";
import { pageSEO } from "@/lib/constants/helper-constants";

export const metadata = pageSEO["/company/careers"];

const applyHref = (role?: string) =>
  `mailto:${common_texts.Company_email}?subject=${encodeURIComponent(
    role ? `Application: ${role}` : "Open application",
  )}`;

export default function Careers() {
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
          <Eyebrow dark>Careers</Eyebrow>

          <h1 className="mt-8 w-full text-[clamp(2.6rem,7.6vw,8.5rem)] font-semibold leading-[0.98] tracking-[-0.035em] text-white">
            Build things
            <br />
            <span className="bg-gradient-to-r from-[#8FA0FF] via-white to-[#ff6b6b] bg-clip-text text-transparent">
              that matter.
            </span>
          </h1>

          <div className="mt-10 grid w-full items-end gap-8 md:mt-14 md:grid-cols-[1fr_auto] md:gap-16">
            <p className="max-w-2xl text-[17px] leading-relaxed text-slate-300 md:text-[20px]">
              Join a small, driven team of engineers and designers building
              software, cloud, and AI solutions for growing businesses. Real
              projects, real ownership, and people who care about the craft.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#roles"
                className="group inline-flex items-center gap-4 rounded-full bg-[#ff0000] py-2 pl-8 pr-2 text-[16px] font-semibold text-white shadow-[0_10px_40px_rgba(255,0,0,0.4)] transition-all duration-300 hover:bg-[#e60000] hover:shadow-[0_10px_50px_rgba(255,0,0,0.6)]"
              >
                See open roles
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#ff0000] transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight className="scale-125" />
                </span>
              </a>
              <a
                href="#why"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-4 text-[15px] font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
              >
                Why join us
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Intro */}
      <section className={sectionClass}>
        <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-20">
          <h2 className="text-[clamp(1.9rem,3.6vw,3.4rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-slate-900">
            A place to do{" "}
            <span className="bg-gradient-to-r from-[#4F66FF] to-[#ff0000] bg-clip-text text-transparent">
              your best work.
            </span>
          </h2>
          <div className="space-y-6 text-[17px] leading-relaxed text-slate-600 md:text-[19px]">
            <p>
              At {common_texts.Company_name}, you will work on products that businesses depend on,
              with people who are as invested in the outcome as you are. We keep
              teams small so everyone has a voice and a real impact on what we
              ship.
            </p>
            <p>
              We are engineers first. We care about clean code, honest
              communication, and learning something new on every project.
            </p>
          </div>
        </div>
      </section>

      {/* Why join us */}
      <section id="why" className={`${sectionClass} scroll-mt-24 !pt-0`}>
        <Eyebrow>Why join us</Eyebrow>
        <h2 className={h2Class}>What it&apos;s like to work here.</h2>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {careers_perks.map((p, i) => (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-[32px] border border-slate-200 bg-slate-50 p-8 transition-all duration-500 hover:-translate-y-1 hover:border-transparent hover:bg-[#0B1020] hover:shadow-[0_30px_60px_rgba(11,16,32,0.25)] md:p-10"
            >
              <HoverGlow />
              <div className="relative">
                <span
                  aria-hidden="true"
                  className="block select-none bg-gradient-to-b from-[#4F66FF] to-[#4F66FF]/10 bg-clip-text text-[clamp(3.5rem,6vw,5.5rem)] font-semibold leading-[0.85] tracking-[-0.06em] text-transparent transition-all duration-500 group-hover:from-white/60 group-hover:to-white/5"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-8 text-[22px] font-semibold tracking-[-0.02em] text-slate-900 transition-colors duration-500 group-hover:text-white">
                  {p.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-slate-600 transition-colors duration-500 group-hover:text-slate-300">
                  {p.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Open roles */}
      <section id="roles" className={`${sectionClass} scroll-mt-24 !pt-0`}>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Eyebrow>Open roles</Eyebrow>
            <h2 className={h2Class}>Find your seat on the team.</h2>
          </div>
          <p className="text-[15px] tabular-nums text-slate-500">
            {careers_roles.length} open {careers_roles.length === 1 ? "role" : "roles"}
          </p>
        </div>

        {careers_roles.length > 0 ? (
          <ul className="mt-12 flex flex-col gap-3">
            {careers_roles.map((r) => (
              <li key={r.title}>
                <a
                  href={applyHref(r.title)}
                  className="group relative grid items-center gap-5 overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:border-transparent hover:bg-[#0B1020] md:grid-cols-[1fr_auto] md:gap-10 md:p-8"
                >
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-[12px] font-medium text-[#4F66FF] transition-colors duration-300 group-hover:border-white/10 group-hover:bg-white/5 group-hover:text-[#8FA0FF]">
                        {r.team}
                      </span>
                      <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-[12px] font-medium text-slate-600 transition-colors duration-300 group-hover:border-white/10 group-hover:bg-white/5 group-hover:text-slate-300">
                        {r.type}
                      </span>
                      <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-[12px] font-medium text-slate-600 transition-colors duration-300 group-hover:border-white/10 group-hover:bg-white/5 group-hover:text-slate-300">
                        {r.location}
                      </span>
                    </div>
                    <h3 className="mt-4 text-[clamp(1.4rem,2.4vw,2rem)] font-semibold tracking-[-0.025em] text-slate-900 transition-colors duration-300 group-hover:text-white">
                      {r.title}
                    </h3>
                    <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-slate-600 transition-colors duration-300 group-hover:text-slate-300 md:text-[16px]">
                      {r.body}
                    </p>
                  </div>

                  <span className="inline-flex items-center gap-3 text-[14px] font-semibold text-slate-700 transition-colors duration-300 group-hover:text-white">
                    Apply
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-600 transition-all duration-300 group-hover:rotate-45 group-hover:border-transparent group-hover:bg-[#ff0000] group-hover:text-white">
                      <ArrowUpRight />
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-12 rounded-[32px] border border-dashed border-slate-300 bg-slate-50 p-10 text-center">
            <p className="text-[20px] font-semibold tracking-[-0.02em] text-slate-900">
              No open roles right now.
            </p>
            <p className="mx-auto mt-2 max-w-md text-[16px] leading-relaxed text-slate-600">
              We are always glad to hear from talented people. Send an open
              application and we will keep it on file.
            </p>
          </div>
        )}
      </section>

      {/* Hiring process: big navy card */}
      <section className="w-full bg-white p-3 md:p-5">
        <div className="relative overflow-hidden rounded-[32px] bg-[#0B1020] px-6 py-16 text-white md:rounded-[48px] md:px-12 md:py-24 xl:px-20">
          <Glow />

          <div className="relative">
            <Pill>Hiring process</Pill>
            <h2 className="mt-7 max-w-4xl text-[clamp(2.2rem,4.8vw,4.8rem)] font-semibold leading-[1] tracking-[-0.04em]">
              Simple, quick,
              <br />
              <span className="bg-gradient-to-r from-[#8FA0FF] via-white to-[#ff6b6b] bg-clip-text text-transparent">
                and respectful.
              </span>
            </h2>

            <ol className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {careers_steps.map((s, i) => (
                <li
                  key={s.title}
                  className="rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.08]"
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
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={sectionClass}>
        <div className="grid gap-12 md:grid-cols-[1fr_1.5fr] md:gap-20">
          <div className="md:sticky md:top-28 md:self-start">
            <Eyebrow>Questions</Eyebrow>
            <h2 className="mt-6 text-[clamp(1.9rem,3.6vw,3.4rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-slate-900">
              Before you apply.
            </h2>
          </div>

          <div className="flex flex-col gap-3">
            {careers_faqs.map((f) => (
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

      {/* Open application */}
      <section className="w-full bg-white p-3 pt-0 md:p-5 md:pt-0">
        <div className="relative overflow-hidden rounded-[32px] bg-[#0B1020] px-6 py-16 text-white md:rounded-[48px] md:px-12 md:py-20 xl:px-20">
          <Glow />
          <div className="relative flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
            <div>
              <Pill>Don&apos;t see your role?</Pill>
              <h2 className="mt-7 max-w-3xl text-[clamp(2.2rem,4.4vw,4.4rem)] font-semibold leading-[1] tracking-[-0.04em]">
                Tell us what
                <br />
                <span className="bg-gradient-to-r from-[#8FA0FF] via-white to-[#ff6b6b] bg-clip-text text-transparent">
                  you&apos;d build.
                </span>
              </h2>
              <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-slate-300">
                Send your CV and a few lines about what you want to work on. We
                read every application.
              </p>
            </div>

            <a
              href={applyHref()}
              className="group inline-flex w-fit shrink-0 items-center gap-4 rounded-full bg-[#ff0000] py-2 pl-8 pr-2 text-[16px] font-semibold text-white shadow-[0_10px_40px_rgba(255,0,0,0.4)] transition-all duration-300 hover:bg-[#e60000] hover:shadow-[0_10px_50px_rgba(255,0,0,0.6)]"
            >
              Send open application
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#ff0000] transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="scale-125" />
              </span>
            </a>
          </div>

          <p className="relative mt-10 border-t border-white/10 pt-6 text-sm text-slate-500">
            Prefer to chat first?{" "}
            <Link
              href="/talk-to-us"
              className="text-slate-300 underline-offset-4 transition-colors hover:text-white hover:underline"
            >
              Talk to us
            </Link>
            .
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}