import ContactForm from "@/components/forms/contact-form";
import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";
import { Arrow, Eyebrow } from "@/components/ui/icons";
import { h2Class, sectionClass, talk_to_us_contacts, talk_to_us_faqs, talk_to_us_nextSteps, talk_to_us_reasons } from "@/lib/constants/helper-constants";

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
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#ff0000] px-8 py-4 text-[15px] font-semibold text-white shadow-[0_10px_30px_rgba(255,0,0,0.35)] transition-all duration-300 hover:bg-[#e60000] hover:shadow-[0_10px_40px_rgba(255,0,0,0.55)]"
            >
              Send a message
              <Arrow className="transition-transform duration-300 group-hover:translate-x-1" />
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

            <ol className="mt-10 space-y-8 border-l border-slate-200">
              {talk_to_us_nextSteps.map((s, i) => (
                <li key={s.title} className="relative pl-8">
                  <span className="absolute -left-[15px] top-0 flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#0B1020] text-[13px] font-semibold text-[#8FA0FF]">
                    {i + 1}
                  </span>
                  <h3 className="text-[18px] font-semibold tracking-[-0.01em] text-slate-900">
                    {s.title}
                  </h3>
                  <p className="mt-1 max-w-sm text-[15px] leading-relaxed text-slate-600">
                    {s.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* Direct contact (dark band) */}
      <section className="w-full bg-[#0B1020] px-6 py-20 md:px-12 md:py-28 xl:px-20">
        <Eyebrow dark>Prefer to reach us directly?</Eyebrow>
        <h2 className="mt-6 max-w-3xl text-[clamp(1.9rem,3.6vw,3.4rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-white">
          Email, call, or drop by.
        </h2>

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-3">
          {talk_to_us_contacts.map((c) => (
            <div key={c.label} className="bg-[#0B1020] p-8">
              <p className="text-[14px] font-medium text-slate-500">{c.label}</p>
              {c.href ? (
                <a
                  href={c.href}
                  className="mt-3 block break-words text-[20px] font-semibold tracking-[-0.02em] text-white transition-colors hover:text-[#8FA0FF]"
                >
                  {c.value}
                </a>
              ) : (
                <p className="mt-3 text-[20px] font-semibold tracking-[-0.02em] text-white">
                  {c.value}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Why talk to us */}
      <section className={sectionClass}>
        <Eyebrow>Why talk to us</Eyebrow>
        <h2 className={h2Class}>A conversation, not a sales pitch.</h2>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {talk_to_us_reasons.map((r) => (
            <article
              key={r.title}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-8 transition-all duration-300 hover:border-[#4F66FF]/40 hover:bg-white hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
            >
              <span
                className="block h-1 w-10 rounded-full bg-gradient-to-r from-[#4F66FF] to-[#ff0000]"
                aria-hidden="true"
              />
              <h3 className="mt-6 text-[21px] font-semibold tracking-[-0.02em] text-slate-900">
                {r.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
                {r.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className={`${sectionClass} !pt-0`}>
        <div className="grid gap-12 md:grid-cols-[1fr_1.5fr] md:gap-20">
          <div>
            <Eyebrow>Questions</Eyebrow>
            <h2 className="mt-6 text-[clamp(1.9rem,3.6vw,3.4rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-slate-900">
              Before you write.
            </h2>
          </div>

          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {talk_to_us_faqs.map((f) => (
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

      <Footer />
    </main>
  );
}