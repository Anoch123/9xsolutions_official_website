import Navbar from "@/components/Navbar";
import { ArrowUpRight, Eyebrow } from "@/components/ui/icons";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

// TODO: swap in the pages you most want lost visitors to reach
const quickLinks = [
    { label: "AI Solutions", href: "/ai-business-solutions" },
    { label: "Talk to us", href: "/talk-to-us" },
    { label: "Our Services", href: "/our-services" },
    { label: "Our Story", href: "/our-story" },
];

export default function NotFound() {
  return (
    <main className="w-full bg-white">
      <header className="relative flex min-h-[100dvh] w-full flex-col justify-end overflow-hidden bg-[#0B1020]">
        <Navbar />

        {/* Background */}
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(79,102,255,0.2),transparent_65%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_90%_35%,rgba(147,51,234,0.14),transparent_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_30%_at_0%_80%,rgba(255,0,0,0.12),transparent_70%)]" />
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

        {/* Giant 404 behind the content */}
        <p
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-[14%] select-none whitespace-nowrap bg-gradient-to-b from-white/20 to-white/0 bg-clip-text text-center text-[clamp(10rem,36vw,34rem)] font-semibold leading-[0.8] tracking-[-0.06em] text-transparent"
        >
          404
        </p>

        <div className="relative z-10 w-full px-6 pb-14 pt-40 md:px-12 md:pb-20 md:pt-36 xl:px-20">
          <Eyebrow dark>Error 404</Eyebrow>

          <h1 className="mt-8 w-full text-[clamp(2.6rem,7.6vw,8.5rem)] font-semibold leading-[0.98] tracking-[-0.035em] text-white">
            This page took
            <br />
            <span className="bg-gradient-to-r from-[#8FA0FF] via-white to-[#ff6b6b] bg-clip-text text-transparent">
              a wrong turn.
            </span>
          </h1>

          <div className="mt-10 grid w-full items-end gap-8 md:mt-14 md:grid-cols-[1fr_auto] md:gap-16">
            <p className="max-w-2xl text-[17px] leading-relaxed text-slate-300 md:text-[20px]">
              The page you are looking for does not exist, or it has moved.
              Head back home, or tell us what you were trying to find and we
              will point you in the right direction.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/"
                className="group inline-flex items-center gap-4 rounded-full bg-[#ff0000] py-2 pl-8 pr-2 text-[16px] font-semibold text-white shadow-[0_10px_40px_rgba(255,0,0,0.4)] transition-all duration-300 hover:bg-[#e60000] hover:shadow-[0_10px_50px_rgba(255,0,0,0.6)]"
              >
                Back to home
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#ff0000] transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight className="scale-125" />
                </span>
              </Link>
              <Link
                href="/talk-to-us"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-4 text-[15px] font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
              >
                Talk to us
              </Link>
            </div>
          </div>

          {/* Quick links */}
          <div className="mt-12 flex w-full flex-wrap items-center gap-2.5 border-t border-white/10 pt-8">
            <span className="mr-2 text-[12px] font-medium uppercase tracking-[0.2em] text-slate-500">
              Try one of these
            </span>
            {quickLinks.map((l, i) => (
              <Link
                key={l.href}
                href={l.href}
                className="group inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 py-2 pl-3 pr-4 text-[14px] font-medium text-slate-200 transition-all duration-200 hover:border-white/25 hover:bg-white/10 hover:text-white"
              >
                <span className="font-mono text-[11px] text-[#ff6b6b]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </header>
    </main>
  );
}