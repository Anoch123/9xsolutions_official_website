import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";
import { ArrowUpRight, Eyebrow } from "@/components/ui/icons";
import { sectionClass } from "@/lib/constants/helper-constants";
import Link from "next/link";

// A block is a paragraph (string) or a bullet list (string[])
export type LegalBlock = string | string[];
export type LegalSection = { id: string; title: string; body: LegalBlock[] };

function Glow() {
  return (
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
  );
}

export default function LegalLayout({
  eyebrow,
  line1,
  line2,
  intro,
  updated,
  sections,
  contactEmail,
  other,
}: {
  eyebrow: string;
  line1: string;
  line2: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
  contactEmail: string;
  other: { href: string; label: string };
}) {
  return (
    <main className="w-full bg-white">
      {/* Hero */}
      <header className="relative flex min-h-[60dvh] w-full flex-col justify-end overflow-hidden bg-[#0B1020]">
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
          <Eyebrow dark>{eyebrow}</Eyebrow>

          <h1 className="mt-8 w-full text-[clamp(2.6rem,7.6vw,8rem)] font-semibold leading-[0.98] tracking-[-0.035em] text-white">
            {line1}
            <br />
            <span className="bg-gradient-to-r from-[#8FA0FF] via-white to-[#ff6b6b] bg-clip-text text-transparent">
              {line2}
            </span>
          </h1>

          <div className="mt-10 flex w-full flex-col gap-6 md:mt-14 md:flex-row md:items-end md:justify-between md:gap-16">
            <p className="max-w-2xl text-[17px] leading-relaxed text-slate-300 md:text-[20px]">
              {intro}
            </p>
            <span className="inline-flex w-fit items-center gap-2.5 rounded-full border border-white/10 bg-white/5 py-1.5 pl-3 pr-4 text-[13px] font-medium text-slate-300">
              <span className="h-2 w-2 rounded-full bg-[#ff0000]" />
              Last updated {updated}
            </span>
          </div>
        </div>
      </header>

      {/* Contents + sections */}
      <section className={sectionClass}>
        <div className="grid gap-12 lg:grid-cols-[320px_1fr] lg:gap-20">
          {/* Table of contents */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-[12px] font-medium uppercase tracking-[0.2em] text-slate-500">
              On this page
            </p>
            <nav className="mt-5 flex flex-col gap-1 border-l border-slate-200">
              {sections.map((s, i) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="group -ml-px flex items-center gap-3 border-l border-transparent py-2 pl-4 text-[15px] text-slate-600 transition-colors duration-200 hover:border-[#ff0000] hover:text-slate-900"
                >
                  <span className="font-mono text-[11px] text-slate-400 transition-colors group-hover:text-[#ff0000]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {s.title}
                </a>
              ))}
            </nav>

            <Link
              href={other.href}
              className="group mt-8 inline-flex items-center gap-3 rounded-full border border-slate-200 bg-slate-50 py-1.5 pl-5 pr-1.5 text-[14px] font-medium text-slate-700 transition-colors hover:bg-white hover:text-[#4F66FF]"
            >
              {other.label}
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0B1020] text-[#8FA0FF] transition-all duration-300 group-hover:rotate-45 group-hover:bg-[#ff0000] group-hover:text-white">
                <ArrowUpRight />
              </span>
            </Link>
          </aside>

          {/* Sections */}
          <div className="flex flex-col gap-4">
            {sections.map((s, i) => (
              <article
                key={s.id}
                id={s.id}
                className="scroll-mt-28 rounded-[32px] border border-slate-200 bg-slate-50 p-7 md:p-10"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0B1020] text-[13px] font-semibold text-[#8FA0FF]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-[clamp(1.4rem,2.2vw,1.9rem)] font-semibold tracking-[-0.025em] text-slate-900">
                    {s.title}
                  </h2>
                </div>

                <div className="mt-6 space-y-4 text-[16px] leading-relaxed text-slate-600 md:pl-14 md:text-[17px]">
                  {s.body.map((block, bi) =>
                    Array.isArray(block) ? (
                      <ul key={bi} className="space-y-2.5">
                        {block.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <span
                              className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff0000]"
                              aria-hidden="true"
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p key={bi}>{block}</p>
                    ),
                  )}
                </div>
              </article>
            ))}

            {/* Contact card */}
            <div className="relative overflow-hidden rounded-[32px] bg-[#0B1020] p-8 text-white md:rounded-[44px] md:p-12">
              <Glow />
              <div className="relative flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                <div>
                  <h2 className="text-[clamp(1.8rem,3vw,2.6rem)] font-semibold leading-[1.05] tracking-[-0.035em]">
                    Questions about this page?
                    <br />
                    <span className="bg-gradient-to-r from-[#8FA0FF] via-white to-[#ff6b6b] bg-clip-text text-transparent">
                      Just ask.
                    </span>
                  </h2>
                  <a
                    href={`mailto:${contactEmail}`}
                    className="mt-5 inline-block text-[17px] text-slate-300 transition-colors hover:text-white"
                  >
                    {contactEmail}
                  </a>
                </div>
                <Link
                  href="/talk-to-us"
                  className="group inline-flex w-fit items-center gap-4 rounded-full bg-[#ff0000] py-2 pl-8 pr-2 text-[16px] font-semibold text-white shadow-[0_10px_40px_rgba(255,0,0,0.4)] transition-all duration-300 hover:bg-[#e60000] hover:shadow-[0_10px_50px_rgba(255,0,0,0.6)]"
                >
                  Talk to us
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#ff0000] transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight className="scale-125" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}