"use client";

import { useRef } from "react";
import { Arrow, Eyebrow } from "../ui/icons";
import { TESTIMONIALS } from "@/lib/constants/helper-constants";
import { initials } from "@/lib/utils/common-functions";

const navBtn =
  "flex h-14 w-14 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition-all duration-300 hover:border-transparent hover:bg-[#ff0000] hover:text-white hover:shadow-[0_10px_30px_rgba(255,0,0,0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4F66FF] active:scale-95";

export default function Partners() {
  const scroller = useRef<HTMLUListElement>(null);

  const scrollByCard = (direction: 1 | -1) => {
    const el = scroller.current;
    if (!el) return;
    const card = el.querySelector("li");
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    const step =
      (card?.getBoundingClientRect().width ?? el.clientWidth * 0.8) + gap;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    el.scrollBy({
      left: direction * step,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <section
      aria-labelledby="partners-heading"
      className="w-full overflow-hidden bg-white px-6 py-14 md:px-12 md:py-14 xl:px-20"
    >
      <div className="w-full">
        {/* Heading + controls */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <header className="w-full max-w-4xl">
            <Eyebrow>Partners</Eyebrow>

            <h2
              id="partners-heading"
              className="mt-6 text-[clamp(1.9rem,3.6vw,3.4rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-slate-900"
            >
              Trusted partnerships,{" "}
              <span className="bg-gradient-to-r from-[#4F66FF] to-[#ff0000] bg-clip-text text-transparent">
                successful collaborations.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-slate-600">
              We work as an extension of our clients&apos; teams, not as a
              vendor. Here is what they say about working with us.
            </p>
          </header>

          <div className="flex gap-3">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => scrollByCard(-1)}
              className={navBtn}
            >
              <Arrow className="rotate-180" />
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => scrollByCard(1)}
              className={navBtn}
            >
              <Arrow />
            </button>
          </div>
        </div>

        {/* Carousel: bleeds to the screen edge, snaps card by card */}
        <ul
          ref={scroller}
          role="list"
          tabIndex={0}
          aria-label="Client testimonials"
          className="-mx-6 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-6 px-6 pb-8 pt-2 [scrollbar-width:none] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4F66FF] md:-mx-12 md:scroll-px-12 md:gap-5 md:px-12 lg:mt-16 xl:-mx-20 xl:scroll-px-20 xl:gap-6 xl:px-20 [&::-webkit-scrollbar]:hidden"
        >
          {TESTIMONIALS.map((t, index) => (
            <li
              key={`${t.company}-${index}`}
              className="flex w-[86%] shrink-0 snap-start sm:w-[calc(50%-0.625rem)] lg:w-[30%] xl:w-[29%]"
            >
              <figure className="group relative flex min-h-[380px] w-full min-w-0 flex-col overflow-hidden rounded-[32px] border border-slate-200 bg-slate-50 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-transparent hover:bg-[#0B1020] hover:shadow-[0_30px_60px_rgba(11,16,32,0.25)] xl:p-9">
                {/* Hover glow */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden="true"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_0%_0%,rgba(255,0,0,0.18),transparent_65%)]" />
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_100%_100%,rgba(79,102,255,0.25),transparent_65%)]" />
                </div>

                <div className="relative flex flex-1 flex-col">
                  <span
                    aria-hidden="true"
                    className="block select-none bg-gradient-to-b from-[#4F66FF] to-[#ff0000]/20 bg-clip-text font-serif text-[88px] font-semibold leading-[0.7] text-transparent"
                  >
                    &ldquo;
                  </span>

                  <blockquote className="mt-4 flex-1 text-[16px] leading-relaxed text-slate-600 transition-colors duration-500 group-hover:text-slate-200">
                    <p>{t.quote}</p>
                  </blockquote>

                  <figcaption className="mt-8 flex items-end justify-between gap-4 border-t border-slate-200 pt-6 transition-colors duration-500 group-hover:border-white/10">
                    <div className="flex min-w-0 items-center gap-3">
                      {t.photo ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={t.photo}
                          alt=""
                          loading="lazy"
                          className="h-12 w-12 shrink-0 rounded-full object-cover ring-2 ring-white transition-all duration-500 group-hover:ring-white/20"
                        />
                      ) : (
                        <span
                          aria-hidden="true"
                          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0B1020] text-sm font-semibold text-[#8FA0FF] transition-all duration-500 group-hover:bg-[#ff0000] group-hover:text-white"
                        >
                          {initials(t.name)}
                        </span>
                      )}
                      <div className="min-w-0">
                        <div className="truncate text-[15px] font-semibold text-slate-900 transition-colors duration-500 group-hover:text-white">
                          {t.name}
                        </div>
                        <div className="truncate text-sm text-slate-500 transition-colors duration-500 group-hover:text-slate-400">
                          {t.role}
                        </div>
                      </div>
                    </div>

                    {t.logo ? (
                      // White chip keeps dark logos readable when the card flips to navy
                      <span className="flex h-10 shrink-0 items-center rounded-full border border-slate-200 bg-white px-3.5 transition-colors duration-500 group-hover:border-transparent">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={t.logo}
                          alt={t.company}
                          loading="lazy"
                          className="max-h-5 w-auto max-w-[84px] object-contain"
                        />
                      </span>
                    ) : (
                      <span className="shrink-0 text-sm font-semibold tracking-tight text-slate-400 transition-colors duration-500 group-hover:text-slate-300">
                        {t.company}
                      </span>
                    )}
                  </figcaption>
                </div>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}