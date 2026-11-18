"use client";

import { useRef } from "react";

/* ------------------------------------------------------------------ */
/* Data: replace with real client testimonials                         */
/* ------------------------------------------------------------------ */

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  /** Optional headshot, e.g. "/clients/jane.jpg". Falls back to initials. */
  photo?: string;
  /** Optional company logo, e.g. "/clients/acme.svg". Falls back to the name. */
  logo?: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Replace this with a real client quote about the outcome of the project and what it changed for their organisation.",
    name: "Client Name",
    role: "Job title",
    company: "Company One",
  },
  {
    quote:
      "Replace this with a real client quote about what it is like to work with your team day to day.",
    name: "Client Name",
    role: "Job title",
    company: "Company Two",
  },
  {
    quote:
      "Replace this with a real client quote about communication, delivery and reliability.",
    name: "Client Name",
    role: "Job title",
    company: "Company Three",
  },
  {
    quote:
      "Replace this with a real client quote about a long-term relationship or repeat work.",
    name: "Client Name",
    role: "Job title",
    company: "Company Four",
  },
  {
    quote:
      "Replace this with a real client quote about the quality of the finished product.",
    name: "Client Name",
    role: "Job title",
    company: "Company Five",
  },
];

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

function ArrowButton({
  direction,
  onClick,
}: {
  direction: "prev" | "next";
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === "prev" ? "Previous testimonials" : "Next testimonials"}
      className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-900 transition-colors hover:bg-slate-900 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
    >
      <svg
        aria-hidden="true"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        className={direction === "prev" ? "rotate-180" : ""}
      >
        <path
          d="M3 8h10M9 4l4 4-4 4"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

/* ------------------------------------------------------------------ */
/* Section                                                             */
/* ------------------------------------------------------------------ */

export default function Partners() {
  const scroller = useRef<HTMLUListElement>(null);

  const scrollByCard = (direction: 1 | -1) => {
    const el = scroller.current;
    if (!el) return;
    const card = el.querySelector("li");
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    const step = (card?.getBoundingClientRect().width ?? el.clientWidth * 0.8) + gap;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    el.scrollBy({
      left: direction * step,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <section
      aria-labelledby="partners-heading"
      className="w-full overflow-hidden bg-slate-50 px-4 py-16 sm:px-6 sm:py-20 md:px-10 lg:px-14 lg:py-24 xl:px-20 2xl:px-24"
    >
      <div className="w-full">
        {/* Heading + controls */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <header className="w-full max-w-3xl">
            <p className="text-sm font-semibold tracking-wide text-[#d40000]">
              Partners
            </p>

            <h2
              id="partners-heading"
              className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-[44px] lg:leading-[1.1] xl:text-5xl"
            >
              Trusted partnerships and successful collaborations
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              We work as an extension of our clients&apos; teams, not as a
              vendor. Here is what they say about working with us.
            </p>
          </header>

          <div className="flex gap-2">
            <ArrowButton direction="prev" onClick={() => scrollByCard(-1)} />
            <ArrowButton direction="next" onClick={() => scrollByCard(1)} />
          </div>
        </div>

        {/* Carousel: bleeds to the screen edge, snaps card by card */}
        <ul
          ref={scroller}
          role="list"
          tabIndex={0}
          aria-label="Client testimonials"
          className="-mx-4 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-4 px-4 pb-2 [scrollbar-width:none] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 sm:-mx-6 sm:scroll-px-6 sm:gap-5 sm:px-6 md:-mx-10 md:scroll-px-10 md:px-10 lg:-mx-14 lg:mt-14 lg:scroll-px-14 lg:px-14 xl:-mx-20 xl:scroll-px-20 xl:gap-6 xl:px-20 2xl:-mx-24 2xl:scroll-px-24 2xl:px-24 [&::-webkit-scrollbar]:hidden"
        >
          {TESTIMONIALS.map((t, index) => (
            <li
              key={`${t.company}-${index}`}
              className="flex w-[86%] shrink-0 snap-start sm:w-[calc(50%-0.625rem)] lg:w-[30%] xl:w-[29%]"
            >
              <figure className="flex min-h-[360px] w-full min-w-0 flex-col rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 lg:p-7 xl:p-8">
                <blockquote className="flex-1 text-sm leading-7 text-slate-600 sm:text-base">
                  <p>{t.quote}</p>
                </blockquote>

                <figcaption className="mt-8 flex items-end justify-between gap-4 border-t border-slate-100 pt-6">
                  <div className="flex min-w-0 items-center gap-3">
                    {t.photo ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={t.photo}
                        alt=""
                        loading="lazy"
                        className="h-12 w-12 shrink-0 rounded-full object-cover"
                      />
                    ) : (
                      <span
                        aria-hidden="true"
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white"
                      >
                        {initials(t.name)}
                      </span>
                    )}
                    <div className="min-w-0">
                      <div className="truncate text-sm font-semibold text-slate-900">
                        {t.name}
                      </div>
                      <div className="truncate text-sm text-slate-500">
                        {t.role}
                      </div>
                    </div>
                  </div>

                  {t.logo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={t.logo}
                      alt={t.company}
                      loading="lazy"
                      className="max-h-7 w-auto max-w-[96px] shrink-0 object-contain"
                    />
                  ) : (
                    <span className="shrink-0 text-sm font-semibold tracking-tight text-slate-400">
                      {t.company}
                    </span>
                  )}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}