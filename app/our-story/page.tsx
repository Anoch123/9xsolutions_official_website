import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";
import { Arrow, ArrowUpRight, Eyebrow } from "@/components/ui/icons";
import Link from "next/link";

const h2Class =
  "mt-6 max-w-3xl text-[clamp(1.9rem,3.6vw,3.4rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-slate-900";
const sectionClass = "w-full bg-white px-6 py-20 md:px-12 md:py-28 xl:px-20";

// Edit the dates and wording below to match your real history.
const timeline = [
  {
    when: "The beginning",
    title: "A small team with a big idea",
    body: "We started with a simple belief: businesses deserve software that is built around how they actually work, not the other way around.",
  },
  {
    when: "Early projects",
    title: "Earning trust, one product at a time",
    body: "Our first clients came back with new projects and sent others our way. Every delivery taught us how to build faster and communicate better.",
  },
  {
    when: "Growing the team",
    title: "From developers to a full product team",
    body: "We added designers, cloud engineers, and quality specialists so one team could take an idea from first sketch to production.",
  },
  {
    when: "Expanding our reach",
    title: "Cloud, automation, and AI",
    body: "As our clients' needs grew, so did our skills. We now help businesses automate work and put AI to practical use.",
  },
  {
    when: "Today",
    title: "A long-term partner for growing businesses",
    body: "We work alongside companies as they scale, and we are still guided by the same belief we started with.",
  },
];

const values = [
  {
    title: "Outcomes over output",
    body: "We measure our work by the results it creates for your business, not by hours logged or features shipped.",
  },
  {
    title: "Honest by default",
    body: "Clear timelines, plain language, and early warnings. If something is not working, you hear it from us first.",
  },
  {
    title: "Craft in the details",
    body: "Clean code, thoughtful design, and thorough testing are part of every project, however small.",
  },
  {
    title: "Partnership, not hand-offs",
    body: "We stay involved after launch, because the best products keep improving alongside the business.",
  },
];

const approach = [
  {
    title: "We listen before we build",
    body: "Every project starts with understanding your customers, your constraints, and what success looks like.",
  },
  {
    title: "We work in the open",
    body: "Regular demos, shared boards, and direct access to the people doing the work.",
  },
  {
    title: "We ship in small, safe steps",
    body: "Frequent releases keep risk low and let you see progress and give feedback early.",
  },
  {
    title: "We build for your team to own",
    body: "Documentation, clean handover, and no lock-in, so you stay in control of what we create together.",
  },
];

export default function OurStory() {
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
          <Eyebrow dark>Our story</Eyebrow>

          <h1 className="mt-8 w-full text-[clamp(2.6rem,7.6vw,8.5rem)] font-semibold leading-[0.98] tracking-[-0.035em] text-white">
            Built by engineers,
            <br />
            <span className="bg-gradient-to-r from-[#8FA0FF] via-white to-[#ff6b6b] bg-clip-text text-transparent">
              driven by outcomes.
            </span>
          </h1>

          <div className="mt-10 grid w-full items-end gap-8 md:mt-14 md:grid-cols-[1fr_auto] md:gap-16">
            <p className="max-w-2xl text-[17px] leading-relaxed text-slate-300 md:text-[20px]">
              We are a software company that grew from a simple idea: great
              technology should make businesses run better. This is how we got
              here, and what we believe in.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/talk-to-us"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#ff0000] px-8 py-4 text-[15px] font-semibold text-white shadow-[0_10px_30px_rgba(255,0,0,0.35)] transition-all duration-300 hover:bg-[#e60000] hover:shadow-[0_10px_40px_rgba(255,0,0,0.55)]"
              >
                Talk to us
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#ff0000] transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight className="scale-125" />
                </span>
              </Link>
              <a
                href="#story"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-4 text-[15px] font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
              >
                Read our story
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Where it started */}
      <section id="story" className={`${sectionClass} scroll-mt-24`}>
        <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-20">
          <div>
            <Eyebrow>Where it started</Eyebrow>
            <h2 className="mt-6 text-[clamp(1.9rem,3.6vw,3.4rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-slate-900">
              We wanted software that actually helps.
            </h2>
          </div>
          <div className="space-y-6 text-[17px] leading-relaxed text-slate-600 md:text-[19px]">
            <p>
              Too many businesses were stuck with tools that did not fit, and
              too many projects ended with a handover and silence. We believed
              there was a better way: a team that learns your business, builds
              the right thing, and stays to make it better.
            </p>
            <p>
              That belief shaped how we hire, how we work, and how we treat
              every client. We are engineers first, so we care as much about how
              something is built as how it looks, and we care most about whether
              it works for the people using it.
            </p>
          </div>
        </div>
      </section>

      {/* Mission and vision (dark band) */}
      <section className="w-full bg-[#0B1020] px-6 py-20 md:px-12 md:py-28 xl:px-20">
        <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-2">
          <div className="bg-[#0B1020] p-8 md:p-14">
            <Eyebrow dark>Our mission</Eyebrow>
            <p className="mt-6 text-[clamp(1.5rem,2.6vw,2.4rem)] font-semibold leading-[1.15] tracking-[-0.025em] text-white">
              To help businesses grow by building software, cloud, and AI
              solutions that are reliable, practical, and made to last.
            </p>
          </div>
          <div className="bg-[#0B1020] p-8 md:p-14">
            <Eyebrow dark>Our vision</Eyebrow>
            <p className="mt-6 text-[clamp(1.5rem,2.6vw,2.4rem)] font-semibold leading-[1.15] tracking-[-0.025em] text-white">
              A world where every company, large or small, has technology that
              works as hard as its people do.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className={sectionClass}>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Eyebrow>Our journey</Eyebrow>
            <h2 className={h2Class}>How we got here.</h2>
          </div>
          <p className="max-w-sm text-[16px] leading-relaxed text-slate-500">
            Five chapters, one belief. Scroll to follow the story.
          </p>
        </div>

        <ol className="mt-14 flex flex-col gap-6 md:mt-20">
          {timeline.map((t, i) => {
            const isLast = i === timeline.length - 1;
            return (
              <li
                key={t.title}
                style={{ ["--stack" as string]: `${6.5 + i * 1.25}rem` }}
                className="md:sticky md:top-[var(--stack)]"
              >
                <article
                  className={`relative overflow-hidden rounded-[32px] border p-8 shadow-[0_-20px_50px_rgba(15,23,42,0.06)] md:rounded-[44px] md:p-14 ${
                    isLast
                      ? "border-white/10 bg-[#0B1020] text-white"
                      : "border-slate-200 bg-slate-50 text-slate-900"
                  }`}
                >
                  {isLast && (
                    <div
                      className="pointer-events-none absolute inset-0"
                      aria-hidden="true"
                    >
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_0%_0%,rgba(255,0,0,0.18),transparent_65%)]" />
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_100%_100%,rgba(79,102,255,0.25),transparent_65%)]" />
                    </div>
                  )}

                  <div className="relative grid items-center gap-8 md:grid-cols-[auto_1fr] md:gap-16">
                    {/* Giant numeral */}
                    <span
                      aria-hidden="true"
                      className={`select-none text-[clamp(4.5rem,11vw,10rem)] font-semibold leading-[0.85] tracking-[-0.06em] bg-clip-text text-transparent ${
                        isLast
                          ? "bg-gradient-to-b from-white/60 to-white/5"
                          : "bg-gradient-to-b from-[#4F66FF] to-[#4F66FF]/10"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <span
                        className={`inline-flex items-center gap-2.5 rounded-full border py-1.5 pl-3 pr-4 text-[13px] font-medium ${
                          isLast
                            ? "border-white/10 bg-white/5 text-slate-300"
                            : "border-slate-200 bg-white text-[#4F66FF]"
                        }`}
                      >
                        <span className="relative flex h-2 w-2">
                          {isLast && (
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ff3b3b] opacity-75" />
                          )}
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-[#ff0000]" />
                        </span>
                        {t.when}
                      </span>

                      <h3 className="mt-5 max-w-2xl text-[clamp(1.5rem,2.8vw,2.6rem)] font-semibold leading-[1.1] tracking-[-0.03em]">
                        {t.title}
                      </h3>
                      <p
                        className={`mt-4 max-w-2xl text-[16px] leading-relaxed md:text-[18px] ${
                          isLast ? "text-slate-300" : "text-slate-600"
                        }`}
                      >
                        {t.body}
                      </p>
                    </div>
                  </div>
                </article>
              </li>
            );
          })}
        </ol>
      </section>

      {/* Values */}
      <section className={`${sectionClass} !pt-0`}>
        <Eyebrow>What we believe</Eyebrow>
        <h2 className={h2Class}>The values behind our work.</h2>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {values.map((v) => (
            <article
              key={v.title}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-8 transition-all duration-300 hover:border-[#4F66FF]/40 hover:bg-white hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
            >
              <span
                className="block h-1 w-10 rounded-full bg-gradient-to-r from-[#4F66FF] to-[#ff0000]"
                aria-hidden="true"
              />
              <h3 className="mt-6 text-[21px] font-semibold tracking-[-0.02em] text-slate-900">
                {v.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
                {v.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* How we work with clients */}
      <section className={`${sectionClass} !pt-0`}>
        <div className="grid gap-12 md:grid-cols-[1fr_1.5fr] md:gap-20">
          <div className="md:sticky md:top-28 md:self-start">
            <Eyebrow>How we work with you</Eyebrow>
            <h2 className="mt-6 text-[clamp(1.9rem,3.6vw,3.4rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-slate-900">
              A partner, not just a vendor.
            </h2>
            <p className="mt-6 max-w-md text-[17px] leading-relaxed text-slate-600">
              These habits are why clients keep working with us long after the
              first project.
            </p>
          </div>

          <ul className="divide-y divide-slate-200 border-y border-slate-200">
            {approach.map((a) => (
              <li
                key={a.title}
                className="grid gap-2 py-8 md:grid-cols-[240px_1fr] md:gap-10"
              >
                <h3 className="text-[20px] font-semibold tracking-[-0.02em] text-slate-900">
                  {a.title}
                </h3>
                <p className="text-[16px] leading-relaxed text-slate-600">
                  {a.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Footer />
    </main>
  );
}
