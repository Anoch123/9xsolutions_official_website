import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import {
  VISUALS,
  type VisualKey,
} from "@/components/services-components/ServiceVisuals";
import Footer from "@/components/footer";
import { Project } from "@/lib/types/helper.type";
import { PRINCIPLES, PROJECTS } from "@/lib/constants/helper-constants";
import { Arrow, ArrowUpRight, Check, DetailRow } from "@/components/ui/icons";

const host = (url: string) => new URL(url).host.replace(/^www\./, "");

function Stage({
  project,
  dark,
  className = "",
}: {
  project: Project;
  dark: boolean;
  className?: string;
}) {
  const Visual = VISUALS[project.visual];

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden ${
        project.visual === "mobile" && !project.image ? "items-start" : ""
      } ${dark ? "bg-[#0F1222]" : "bg-[#F6F7F9]"} ${className}`}
    >
      {project.image ? (
        <Image
          src={project.image}
          alt={`${project.title} website`}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          unoptimized={project.image.endsWith(".svg")}
          className="object-cover object-top"
        />
      ) : (
        <>
          {dark && (
            <div
              aria-hidden
              className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-[#4F66FF]/30 blur-[80px]"
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
          <div className="relative flex h-full w-full items-center justify-center py-8">
            <Visual dark={dark} />
          </div>
        </>
      )}

      {/* Domain chip */}
      <span
        className={`absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full px-3 py-1.5 font-mono text-[11px] backdrop-blur ${
          dark
            ? "border border-white/10 bg-white/10 text-slate-200"
            : "border border-slate-200 bg-white/90 text-slate-600"
        }`}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
        {host(project.url)}
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function WorkWeHaveDone() {
  const [featured, ...rest] = PROJECTS;
  const total = String(PROJECTS.length).padStart(2, "0");

  return (
    <>
      {/* ============================ HERO ============================ */}
      <header className="relative flex min-h-[80dvh] w-full flex-col justify-end overflow-hidden bg-[#0B1020]">
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
          <span className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-[13px] font-medium text-slate-300 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ff0000]" />
            Our work
          </span>

          <h1 className="mt-8 w-full text-[clamp(2.6rem,7.6vw,8.5rem)] font-semibold leading-[0.98] tracking-[-0.035em] text-white">
            Some of our
            <br />
            <span className="bg-gradient-to-r from-[#8FA0FF] via-white to-[#ff6b6b] bg-clip-text text-transparent">
              previous work.
            </span>
          </h1>

          <div className="mt-10 grid w-full items-end gap-8 md:mt-14 md:grid-cols-[1fr_auto] md:gap-16">
            <p className="max-w-2xl text-[17px] leading-relaxed text-slate-300 md:text-[20px]">
              Live products we&apos;ve built for real businesses and communities,
              from online stores to point-of-sale systems. Open any of them and
              see the work for yourself.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#ff0000] px-8 py-4 text-[15px] font-semibold text-white shadow-[0_10px_30px_rgba(255,0,0,0.35)] transition-all duration-300 hover:bg-[#e60000] hover:shadow-[0_10px_40px_rgba(255,0,0,0.55)]"
              >
                See the projects
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#ff0000] transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight className="scale-125" />
                </span>
              </a>
              <Link
                href="/talk-to-us"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-4 text-[15px] font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
              >
                Start your project
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* ======================== FEATURED CASE ======================== */}
      <section
        id="projects"
        className="scroll-mt-24 bg-white px-5 py-20 sm:px-8 sm:py-28 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 border-b border-[#E3E5EA] pb-12 lg:grid-cols-12 lg:items-end lg:gap-16 lg:pb-16">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                <span className="h-2 w-2 bg-[#ff0000]" />
                Previous work
                <span className="h-px w-8 bg-slate-300" />
                <span className="font-mono tracking-widest text-slate-400">
                  {total}
                </span>
              </div>
              <h2 className="mt-6 text-[clamp(2.1rem,4.4vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-[#12141A]">
                Built, launched, and live today.
              </h2>
            </div>
            <p className="max-w-md text-[16px] leading-relaxed text-slate-500 lg:col-span-5">
              Each project below is a real, running product. Here&apos;s what it
              is and what we built.
            </p>
          </div>

          <article className="mt-12 grid overflow-hidden rounded-[32px] bg-[#0B1020] text-white shadow-[0_30px_80px_-30px_rgba(11,16,32,0.6)] lg:mt-16 lg:grid-cols-2">
            <Stage
              project={featured}
              dark
              className="min-h-[320px] border-b border-white/10 lg:min-h-full lg:border-b-0 lg:border-r"
            />

            <div className="relative flex flex-col p-7 sm:p-10 lg:p-12">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#ff0000]/15 blur-[80px]"
              />
              <span className="relative text-[12px] font-semibold uppercase tracking-[0.18em] text-[#ff6b6b]">
                {featured.category}
              </span>
              <h3 className="relative mt-3 text-[clamp(1.75rem,3.2vw,2.75rem)] font-semibold leading-[1.05] tracking-[-0.025em]">
                {featured.title}
              </h3>
              <p className="relative mt-4 max-w-lg text-[16px] leading-relaxed text-slate-300">
                {featured.summary}
              </p>

              <dl className="relative mt-8">
                <DetailRow label="About" dark>
                  {featured.about}
                </DetailRow>
                <DetailRow label="What we built" dark>
                  {featured.built}
                </DetailRow>
                <DetailRow label="Highlights" dark>
                  <ul className="flex flex-col gap-2">
                    {featured.highlights.map((r) => (
                      <li key={r} className="flex items-start gap-2.5">
                        <Check className="mt-0.5 shrink-0 text-[#8FA0FF]" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </DetailRow>
              </dl>

              <div className="relative mt-8 flex flex-wrap gap-2">
                {featured.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-white/10 px-3.5 py-1.5 text-[13px] font-medium text-slate-200"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={featured.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative mt-9 inline-flex w-fit items-center gap-3 rounded-full bg-[#ff0000] py-2 pl-7 pr-2 text-[15px] font-semibold text-white shadow-[0_10px_30px_rgba(255,0,0,0.35)] transition-all duration-300 hover:bg-[#e60000]"
              >
                Visit {host(featured.url)}
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#ff0000] transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight />
                </span>
              </a>
            </div>
          </article>

          {/* ========================= MORE PROJECTS ========================= */}
          <div className="mt-24 grid gap-10 border-b border-[#E3E5EA] pb-12 lg:mt-32 lg:grid-cols-12 lg:items-end lg:gap-16 lg:pb-16">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                <span className="h-2 w-2 bg-[#ff0000]" />
                More projects - Currently in development
              </div>
              <h2 className="mt-6 text-[clamp(2.1rem,4.4vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-[#12141A]">
                Different needs, one standard of work.
              </h2>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
            {rest.map((p, i) => (
              <article
                key={p.title}
                className="group flex flex-col overflow-hidden rounded-2xl border border-[#E3E5EA] bg-white transition-all duration-300 hover:border-slate-300 hover:shadow-[0_20px_50px_-28px_rgba(18,20,26,0.3)]"
              >
                <div className="relative border-b border-[#E3E5EA]">
                  <Stage project={p} dark={false} className="h-[240px]" />
                  <span className="absolute right-5 top-4 font-mono text-[11px] font-medium tracking-widest text-slate-400">
                    {String(i + 2).padStart(2, "0")} / {total}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#ff0000]">
                    {p.category}
                  </span>
                  <h3 className="mt-2 text-[24px] font-semibold leading-tight tracking-tight text-[#12141A]">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-slate-500">
                    {p.summary}
                  </p>

                  <dl className="mt-6 flex-1">
                    <DetailRow label="About">{p.about}</DetailRow>
                    <DetailRow label="Built">{p.built}</DetailRow>
                    <DetailRow label="Highlights">
                      <ul className="flex flex-col gap-1.5">
                        {p.highlights.map((r) => (
                          <li key={r} className="flex items-start gap-2.5">
                            <Check className="mt-0.5 shrink-0 text-[#12141A]" />
                            {r}
                          </li>
                        ))}
                      </ul>
                    </DetailRow>
                  </dl>

                  <div className="mt-6 flex flex-wrap gap-2 border-t border-[#E3E5EA] pt-6">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-slate-100 px-3.5 py-1.5 text-[13px] font-medium text-slate-600"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link mt-6 inline-flex w-fit items-center gap-2 text-[14px] font-semibold text-[#12141A] transition-colors hover:text-[#ff0000]"
                  >
                    Visit {host(p.url)}
                    <ArrowUpRight className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                  </a> */}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ========================= PRINCIPLES ========================= */}
      <section className="bg-[#F6F7F9] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                <span className="h-2 w-2 bg-[#ff0000]" />
                What stays the same
              </div>
              <h2 className="mt-6 text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-[#12141A]">
                The approach behind every project.
              </h2>
            </div>

            <div className="lg:col-span-7">
              <div className="divide-y divide-[#E3E5EA] border-y border-[#E3E5EA]">
                {PRINCIPLES.map((p, i) => (
                  <div key={p.title} className="flex gap-6 py-8">
                    <span className="pt-1 font-mono text-xs tracking-widest text-[#ff0000]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-[22px] font-semibold tracking-tight text-[#12141A]">
                        {p.title}
                      </h3>
                      <p className="mt-2 max-w-lg text-[15px] leading-relaxed text-slate-500">
                        {p.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= CTA ============================ */}
      {/* <section className="bg-[#F6F7F9] px-3 pb-3 md:px-5 md:pb-5">
        <div className="relative w-full overflow-hidden rounded-[32px] bg-[#0B1020] px-6 py-16 text-white md:rounded-[48px] md:px-12 md:py-24 xl:px-20">
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_0%_0%,rgba(255,0,0,0.16),transparent_65%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_100%_100%,rgba(79,102,255,0.22),transparent_65%)]" />
            <div
              className="absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />
          </div>

          <div className="relative grid w-full items-end gap-10 md:grid-cols-[1fr_auto] md:gap-16">
            <div>
              <h2 className="text-[clamp(2.4rem,5.6vw,6rem)] font-semibold leading-[1] tracking-[-0.04em]">
                Have a project
                <br />
                <span className="bg-gradient-to-r from-[#8FA0FF] via-white to-[#ff6b6b] bg-clip-text text-transparent">
                  in mind?
                </span>
              </h2>
              <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-slate-300">
                Tell us the problem you&apos;re trying to solve. We&apos;ll show
                you how we&apos;d approach it.
              </p>
            </div>

            <Link
              href="/talk-to-us"
              className="group inline-flex items-center gap-4 self-start rounded-full bg-[#ff0000] py-2 pl-8 pr-2 text-[16px] font-semibold text-white shadow-[0_10px_40px_rgba(255,0,0,0.4)] transition-all duration-300 hover:bg-[#e60000] hover:shadow-[0_10px_50px_rgba(255,0,0,0.6)] md:self-end"
            >
              Book a Consultation
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#ff0000] transition-transform duration-300 group-hover:translate-x-0.5">
                <Arrow />
              </span>
            </Link>
          </div>
        </div>
      </section> */}
      <Footer />
    </>
  );
}