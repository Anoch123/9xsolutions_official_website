import ContactForm from "@/components/forms/contact-form";
import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";
import { Arrow, ArrowUpRight, Eyebrow } from "@/components/ui/icons";
import {
  h2Class,
  sectionClass,
  talk_to_us_contacts,
  talk_to_us_faqs,
  talk_to_us_nextSteps,
  talk_to_us_reasons,
} from "@/lib/constants/helper-constants";

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

export default function TalkToUs() {
  return (
    <main className="w-full bg-white">
      {/* Hero */}
      <header className="relative flex min-h-[72dvh] w-full flex-col justify-end overflow-hidden bg-[#0B1020]">
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
          <Eyebrow dark>Talk to us</Eyebrow>

          <h1 className="mt-8 w-full text-[clamp(2.6rem,7.6vw,8.5rem)] font-semibold leading-[0.98] tracking-[-0.035em] text-white">
            Tell us what you&apos;re building,
            <br />
            <span className="bg-gradient-to-r from-[#8FA0FF] via-white to-[#ff6b6b] bg-clip-text text-transparent">
              we&apos;ll help you get there.
            </span>
          </h1>

          <div className="mt-10 grid w-full items-end gap-8 md:mt-14 md:grid-cols-[1fr_auto] md:gap-16">
            <p className="max-w-2xl text-[17px] leading-relaxed text-slate-300 md:text-[20px]">
              Have a project, a problem, or just a question? Send us a message
              and we will set up a short call to talk it through.
            </p>
            <a
              href="#contact"
              className="group inline-flex items-center gap-4 self-start rounded-full bg-[#ff0000] py-2 pl-8 pr-2 text-[16px] font-semibold text-white shadow-[0_10px_40px_rgba(255,0,0,0.4)] transition-all duration-300 hover:bg-[#e60000] hover:shadow-[0_10px_50px_rgba(255,0,0,0.6)]"
            >
              Send a message
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#ff0000] transition-transform duration-300 group-hover:translate-y-0.5">
                <Arrow className="rotate-90" />
              </span>
            </a>
          </div>
        </div>
      </header>

      {/* Form + what happens next */}
      <section id="contact" className={`${sectionClass} scroll-mt-24`}>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Eyebrow>What happens next</Eyebrow>
            <h2 className="mt-6 text-[clamp(1.9rem,3.6vw,3.4rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-slate-900">
              From hello to a clear plan.
            </h2>

            <ol className="relative mt-10 space-y-9">
              {/* Connector line */}
              <span
                className="absolute bottom-4 left-[18px] top-4 w-px bg-gradient-to-b from-[#4F66FF] via-slate-200 to-[#ff0000]/60"
                aria-hidden="true"
              />
              {talk_to_us_nextSteps.map((s, i) => (
                <li key={s.title} className="relative flex gap-5">
                  <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0B1020] text-[13px] font-semibold text-[#8FA0FF] shadow-[0_0_0_6px_white]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="pt-1">
                    <h3 className="text-[18px] font-semibold tracking-[-0.02em] text-slate-900">
                      {s.title}
                    </h3>
                    <p className="mt-1 max-w-sm text-[15px] leading-relaxed text-slate-600">
                      {s.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* Direct contact: big navy card, same language as the footer */}
      <section className="w-full bg-white p-3 pt-0 md:p-5 md:pt-0">
        <div className="relative overflow-hidden rounded-[32px] bg-[#0B1020] px-6 py-16 text-white md:rounded-[48px] md:px-12 md:py-24 xl:px-20">
          <Glow />

          <div className="relative grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <span className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 py-1.5 pl-3 pr-4 text-[13px] font-medium text-slate-300">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ff3b3b] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#ff0000]" />
                </span>
                Prefer to reach us directly?
              </span>
              <h2 className="mt-7 text-[clamp(2.2rem,4.4vw,4.4rem)] font-semibold leading-[1] tracking-[-0.04em]">
                Email, call,
                <br />
                <span className="bg-gradient-to-r from-[#8FA0FF] via-white to-[#ff6b6b] bg-clip-text text-transparent">
                  or drop by.
                </span>
              </h2>
            </div>

            <div className="divide-y divide-white/10 border-y border-white/10 lg:col-span-7">
              {talk_to_us_contacts.map((c) => {
                const rowClass =
                  "group -mx-4 flex items-center justify-between gap-6 rounded-2xl px-4 py-7 transition-colors duration-200";
                const content = (
                  <>
                    <div className="min-w-0">
                      <p className="text-[12px] font-medium uppercase tracking-[0.2em] text-slate-500">
                        {c.label}
                      </p>
                      <p className="mt-2 break-words text-[clamp(1.25rem,2.2vw,1.9rem)] font-semibold tracking-[-0.02em] text-white">
                        {c.value}
                      </p>
                    </div>
                    {c.href && (
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 group-hover:rotate-45 group-hover:border-transparent group-hover:bg-[#ff0000] group-hover:text-white">
                        <ArrowUpRight />
                      </span>
                    )}
                  </>
                );

                return c.href ? (
                  <a
                    key={c.label}
                    href={c.href}
                    className={`${rowClass} hover:bg-white/5`}
                  >
                    {content}
                  </a>
                ) : (
                  <div key={c.label} className={rowClass}>
                    {content}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why talk to us */}
      <section className={sectionClass}>
        <Eyebrow>Why talk to us</Eyebrow>
        <h2 className={h2Class}>A conversation, not a sales pitch.</h2>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {talk_to_us_reasons.map((r, i) => (
            <article
              key={r.title}
              className="group relative overflow-hidden rounded-[32px] border border-slate-200 bg-slate-50 p-8 transition-all duration-500 hover:-translate-y-1 hover:border-transparent hover:bg-[#0B1020] hover:shadow-[0_30px_60px_rgba(11,16,32,0.25)] md:p-10"
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden="true"
              >
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_0%_0%,rgba(255,0,0,0.18),transparent_65%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_100%_100%,rgba(79,102,255,0.25),transparent_65%)]" />
              </div>

              <div className="relative">
                <span
                  aria-hidden="true"
                  className="block select-none bg-gradient-to-b from-[#4F66FF] to-[#4F66FF]/10 bg-clip-text text-[clamp(3.5rem,6vw,5.5rem)] font-semibold leading-[0.85] tracking-[-0.06em] text-transparent transition-all duration-500 group-hover:from-white/60 group-hover:to-white/5"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-8 text-[22px] font-semibold tracking-[-0.02em] text-slate-900 transition-colors duration-500 group-hover:text-white">
                  {r.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-slate-600 transition-colors duration-500 group-hover:text-slate-300">
                  {r.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className={`${sectionClass} !pt-0`}>
        <div className="grid gap-12 md:grid-cols-[1fr_1.5fr] md:gap-20">
          <div className="md:sticky md:top-28 md:self-start">
            <Eyebrow>Questions</Eyebrow>
            <h2 className="mt-6 text-[clamp(1.9rem,3.6vw,3.4rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-slate-900">
              Before you write.
            </h2>
          </div>

          <div className="flex flex-col gap-3">
            {talk_to_us_faqs.map((f) => (
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