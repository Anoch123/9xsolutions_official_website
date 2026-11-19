import Link from "next/link";
import { AUDIENCES, BENEFIT, FAQS, OUTCOMES, PROCESS, SERVICES } from "@/lib/constants/helper-constants";
import Navbar from "@/components/Navbar";
import { pickVisual, VISUALS } from "@/components/services-components/ServiceVisuals";
import SectionHead from "@/components/page-header";
import { Arrow, ArrowUpRight, Check, Eyebrow } from "@/components/ui/icons";
import FaqSection from "@/components/services-components/faqisection";
import CTASection from "@/components/cta-section";
import AllServices from "@/components/services-components/all-services";
import Footer from "@/components/footer";

const slug = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function ServicesPage() {
  return (
    <>
      {/* ============================ HERO ============================ */}
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
          <Eyebrow dark>Our services</Eyebrow>

          <h1 className="mt-8 w-full text-[clamp(2.6rem,7.6vw,8.5rem)] font-semibold leading-[0.98] tracking-[-0.035em] text-white">
            Services built around
            <br />
            <span className="bg-gradient-to-r from-[#8FA0FF] via-white to-[#ff6b6b] bg-clip-text text-transparent">
              how your business grows.
            </span>
          </h1>

          <div className="mt-10 grid w-full items-end gap-8 md:mt-14 md:grid-cols-[1fr_auto] md:gap-16">
            <p className="max-w-2xl text-[17px] leading-relaxed text-slate-300 md:text-[20px]">
              From first prototype to production at scale, one team covers the
              software, cloud, automation, and AI your business needs.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
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
                href="#all-services"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-4 text-[15px] font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
              >
                Explore services
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

      {/* ========================== OUTCOMES ========================== */}
      <section className="bg-[#F6F7F9] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHead
            eyebrow="Business impact"
            title="What our services do for"
            accent="your business."
            text="Technology only matters if it moves a number you care about. Everything we build is aimed at one of these four outcomes."
          />

          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-5">
            {OUTCOMES.map((o, i) => (
              <div
                key={o.title}
                className="group relative overflow-hidden rounded-[28px] border border-[#E3E5EA] bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_-24px_rgba(18,20,26,0.2)] sm:p-8"
              >
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-[#4F66FF] via-[#9333EA] to-[#ff0000] transition-transform duration-500 group-hover:scale-x-100"
                />
                <span className="font-mono text-xs tracking-widest text-[#ff0000]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-[24px] font-semibold leading-tight tracking-tight text-[#12141A]">
                  {o.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">
                  {o.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================= ALL SERVICES ======================== */}
      <AllServices
        benefits={Object.fromEntries(
          SERVICES.map((service) => [service.label, service.label]),
        )}
      />

      {/* ============================= CTA ============================ */}
      {/* <CTASection /> */}

      {/* ========================= AUDIENCES ========================= */}
      <section className="bg-[#F6F7F9] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHead
            eyebrow="Who we help"
            title="The right fit at every"
            accent="stage."
            text="Whether you're launching, growing, or modernising, we shape the work around where your business is today."
          />

          <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3 lg:mt-20 lg:gap-5">
            {AUDIENCES.map((a, i) => {
              const dark = i === 1;
              return (
                <div
                  key={a.name}
                  className={`relative flex flex-col overflow-hidden rounded-[28px] p-8 transition-all duration-500 hover:-translate-y-1 ${
                    dark
                      ? "bg-[#0F1222] text-white shadow-[0_24px_60px_-20px_rgba(15,18,34,0.6)]"
                      : "border border-[#E3E5EA] bg-white text-[#12141A]"
                  }`}
                >
                  {dark && (
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#ff0000]/20 blur-[70px]"
                    />
                  )}
                  <span
                    className={`relative font-mono text-xs tracking-widest ${
                      dark ? "text-[#ff6b6b]" : "text-[#ff0000]"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="relative mt-3 text-[28px] font-semibold tracking-tight">
                    {a.name}
                  </h3>
                  <p
                    className={`relative mt-3 flex-1 text-[15px] leading-relaxed ${
                      dark ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    {a.text}
                  </p>
                  <div className="relative mt-7 flex flex-wrap gap-2">
                    {a.tags.map((t) => (
                      <span
                        key={t}
                        className={`rounded-full px-3.5 py-1.5 text-[13px] font-medium ${
                          dark
                            ? "bg-white/10 text-slate-200"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================== PROCESS ========================== */}
      <section className="bg-white px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHead
            eyebrow="How we work"
            title="A clear path from first call to"
            accent="live product."
          />

          <div className="relative mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-6">
            {/* connector line (desktop) */}
            <div
              aria-hidden
              className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent lg:block"
            />
            {PROCESS.map((p, i) => (
              <div key={p.title} className="relative">
                <span className="relative flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white font-mono text-sm font-semibold text-[#12141A] shadow-sm">
                  {String(i + 1).padStart(2, "0")}
                  {i === PROCESS.length - 1 && (
                    <span className="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full bg-[#ff0000] shadow-[0_0_10px_rgba(255,0,0,0.6)]" />
                  )}
                </span>
                <h3 className="mt-5 text-[22px] font-semibold tracking-tight text-[#12141A]">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================= FAQ ============================ */}
      <FaqSection />

      <Footer />
    </>
  );
}