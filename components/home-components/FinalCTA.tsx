import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-24 text-center md:px-10 md:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_100%,rgba(79,102,255,0.12),transparent_70%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_30%_40%_at_15%_100%,rgba(255,0,0,0.07),transparent_70%)]"
      />

      <div className="relative mx-auto max-w-5xl">
        <h2 className="text-[clamp(2.2rem,6vw,5.5rem)] font-semibold leading-[1.02] tracking-[-0.035em] text-[#12141A]">
          Helping ambitious teams turn ideas into{" "}
          <span className="bg-gradient-to-r from-[#4F66FF] to-[#9333EA] bg-clip-text text-transparent">
            products that scale.
          </span>
        </h2>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/talk-to-us"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#ff0000] px-8 py-4 text-[15px] font-semibold text-white shadow-[0_10px_30px_rgba(255,0,0,0.3)] transition-all duration-300 hover:bg-[#e60000] hover:shadow-[0_10px_40px_rgba(255,0,0,0.45)]"
          >
            Book a Consultation
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <Link
            href="/our-services"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-4 text-[15px] font-semibold text-[#12141A] transition-colors hover:bg-slate-50"
          >
            Explore services
          </Link>
        </div>
      </div>
    </section>
  );
}