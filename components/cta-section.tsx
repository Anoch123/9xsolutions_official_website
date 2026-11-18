import Link from "next/link";
import { Arrow, Eyebrow } from "./ui/icons";

export default function CTASection() {
    return (
        <section className="bg-[#F6F7F9] px-3 pb-3 md:px-5 md:pb-5">
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
              <Eyebrow dark>Ready when you are</Eyebrow>
              <h2 className="mt-7 text-[clamp(2.4rem,5.6vw,6rem)] font-semibold leading-[1] tracking-[-0.04em]">
                Not sure which service
                <br />
                <span className="bg-gradient-to-r from-[#8FA0FF] via-white to-[#ff6b6b] bg-clip-text text-transparent">
                  you need? Let&apos;s talk.
                </span>
              </h2>
              <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-slate-300">
                Tell us what you&apos;re trying to achieve and we&apos;ll point
                you to the right mix of services.
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
      </section>
    )
}