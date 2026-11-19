"use client";

import { common_texts, footerRows } from "@/lib/constants/helper-constants";
import CurrentYear from "@/lib/utils/common-functions";
import Link from "next/link";
import { ArrowUpRight } from "./ui/icons";

export default function Footer() {
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    // White page gutter → one big rounded navy card. Bold shift from flat bands.
    <footer className="w-full bg-white p-3 md:p-5">
      <div className="relative w-full overflow-hidden rounded-[32px] bg-[#0B1020] text-white md:rounded-[48px]">
        {/* Background */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_0%_0%,rgba(255,0,0,0.16),transparent_65%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_100%_100%,rgba(79,102,255,0.22),transparent_65%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_30%_at_70%_20%,rgba(147,51,234,0.12),transparent_70%)]" />
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "radial-gradient(#fff 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
        </div>

        {/* Main split */}
        <div className="relative grid w-full gap-16 px-6 pb-14 pt-16 md:px-12 md:pt-24 lg:grid-cols-12 lg:gap-12 xl:px-20">
          {/* Left: statement + CTA */}
          <div className="lg:col-span-6">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 py-1.5 pl-3 pr-4 text-[13px] font-medium text-slate-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ff3b3b] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#ff0000]" />
              </span>
              Ready when you are
            </span>

            <h2 className="mt-7 text-[clamp(2.4rem,5.2vw,5.5rem)] font-semibold leading-[1] tracking-[-0.04em]">
              Got an idea?
              <br />
              <span className="bg-gradient-to-r from-[#8FA0FF] via-white to-[#ff6b6b] bg-clip-text text-transparent">
                Let&apos;s make it real.
              </span>
            </h2>

            <Link
              href="/talk-to-us"
              className="group mt-10 inline-flex items-center gap-4 rounded-full bg-[#ff0000] py-2 pl-8 pr-2 text-[16px] font-semibold text-white shadow-[0_10px_40px_rgba(255,0,0,0.4)] transition-all duration-300 hover:bg-[#e60000] hover:shadow-[0_10px_50px_rgba(255,0,0,0.6)]"
            >
              Talk to us
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#ff0000] transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="scale-125" />
              </span>
            </Link>
          </div>

          {/* Right: link columns */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-[repeat(auto-fit,minmax(150px,1fr))] sm:gap-x-10">
              {footerRows.map((row) => (
                <div key={row.title}>
                  <h3 className="border-b border-white/10 pb-4 text-[12px] font-medium uppercase tracking-[0.2em] text-slate-500">
                    {row.title}
                  </h3>
                  <nav className="mt-5 flex flex-col gap-1">
                    {row.links.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        className="group/link -mx-3 flex items-center justify-between rounded-xl px-3 py-2 text-[16px] text-slate-300 transition-colors duration-200 hover:bg-white/5 hover:text-white"
                      >
                        {link.label}
                        <ArrowUpRight className="-translate-x-1 translate-y-1 text-[#ff3b3b] opacity-0 transition-all duration-300 group-hover/link:translate-x-0 group-hover/link:translate-y-0 group-hover/link:opacity-100" />
                      </Link>
                    ))}
                  </nav>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="relative w-full px-6 md:px-12 xl:px-20">
          <div className="flex w-full flex-col-reverse items-center gap-4 border-t border-white/10 py-6 sm:flex-row sm:justify-between">
            <p className="text-sm text-slate-500">
              © {CurrentYear()} {common_texts.Company_name}. All Rights
              Reserved.
            </p>
            <a
              href="#"
              onClick={scrollToTop}
              className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 py-1.5 pl-4 pr-1.5 text-sm text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
            >
              Back to top
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:bg-[#ff0000]">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M8 13V3M4 7l4-4 4 4"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>

        {/* Giant wordmark — bottom half cropped by the card edge */}
        <div
          className="pointer-events-none relative -mb-[2.2vw] w-full select-none overflow-hidden px-4 md:-mb-[3vw]"
          aria-hidden="true"
        >
          <p className="whitespace-nowrap bg-gradient-to-b from-white/30 to-white/0 bg-clip-text text-center text-[clamp(3rem,17vw,19rem)] font-semibold leading-[0.8] tracking-[-0.05em] text-transparent">
            {common_texts.Company_name}
          </p>
        </div>
      </div>
    </footer>
  );
}