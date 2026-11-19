
import Link from "next/link";
import { SERVICES } from "@/lib/constants/helper-constants";
import { VISUALS, pickVisual } from "./ServiceVisuals";

/* ------------------------------------------------------------------ */
/* Layout config                                                       */
/* ------------------------------------------------------------------ */

const FEATURED_INDEX = 0;
const FEATURED_SPAN = "lg:col-span-4";
const DEFAULT_SPAN = "lg:col-span-2";
const MAX_VISIBLE_ITEMS = 4;

/* ------------------------------------------------------------------ */
/* Section                                                             */
/* ------------------------------------------------------------------ */

export default function Services() {
  return (
    <section
      aria-labelledby="services-heading"
      className="w-full overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-20 md:px-10 lg:px-14 lg:py-24 xl:px-20 2xl:px-24"
    >
      <div className="w-full">

        {/* Heading */}
        <header className="w-full max-w-3xl">
          <p className="text-sm font-semibold tracking-wide text-[#d40000]">
            Services
          </p>

          <h2
            id="services-heading"
            className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-[44px] lg:leading-[1.1] xl:text-5xl"
          >
            Engineering support from first release to long-term operation
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Each service covers a defined part of the delivery lifecycle.
            Work with us on a single area, or bring us in across the whole
            project.
          </p>
        </header>

        {/* Services Grid */}
        <ul
          role="list"
          className="mt-10 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:mt-14 lg:grid-cols-6 lg:gap-5 xl:gap-6"
        >
          {SERVICES.map((service, index) => {
            const featured = index === FEATURED_INDEX;
            const visualKey = pickVisual(service.label, index);
            const Visual = VISUALS[visualKey];
            const isMobileVisual = visualKey === "mobile";

            const tags = service.includes.slice(0, MAX_VISIBLE_ITEMS);
            const extra = Math.max(
              0,
              service.includes.length - tags.length
            );

            return (
              <li
                key={service.label}
                className={`flex min-w-0 ${
                  featured
                    ? `${FEATURED_SPAN} sm:col-span-2`
                    : DEFAULT_SPAN
                }`}
              >
                <article
                  className={`flex h-full w-full min-w-0 flex-col overflow-hidden rounded-2xl p-5 sm:p-6 lg:p-7 xl:p-8 ${
                    featured
                      ? "bg-slate-900 text-white"
                      : "border border-slate-200 bg-white text-slate-900"
                  }`}
                >
                  {/* Title + Description */}
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                      {service.label}
                    </h3>

                    <p
                      className={`mt-3 max-w-xl text-sm leading-6 sm:text-base sm:leading-7 ${
                        featured ? "text-slate-300" : "text-slate-600"
                      }`}
                    >
                      {service.detail}
                    </p>
                  </div>

                  {/* Illustration */}
                  <div
                    aria-hidden="true"
                    className={`mt-6 flex min-h-[180px] w-full flex-1 justify-center overflow-hidden rounded-xl sm:min-h-[210px] lg:min-h-[230px] ${
                      isMobileVisual ? "items-start" : "items-center"
                    } ${
                      featured
                        ? "border border-white/10 bg-white/[0.04]"
                        : "border border-slate-100 bg-slate-50"
                    }`}
                  >
                    <div className="flex h-full min-h-[180px] w-full items-center justify-center overflow-hidden px-3 py-6 sm:min-h-[210px] lg:min-h-[230px]">
                      <div className="flex h-full w-full items-center justify-center [&_svg]:h-auto [&_svg]:max-w-full">
                        <Visual dark={featured} />
                      </div>
                    </div>
                  </div>

                  {/* What's Included */}
                  <ul
                    role="list"
                    aria-label={`${service.label}: what's included`}
                    className="mt-6 flex flex-wrap gap-2"
                  >
                    {tags.map((item) => (
                      <li
                        key={item}
                        className={`max-w-full rounded-md px-3 py-1.5 text-[12px] font-medium sm:text-[13px] ${
                          featured
                            ? "bg-white/10 text-slate-200"
                            : "bg-slate-100 text-slate-700"
                        }`}
                      >
                        {item}
                      </li>
                    ))}

                    {extra > 0 && (
                      <li
                        className={`rounded-md px-3 py-1.5 text-[12px] font-medium sm:text-[13px] ${
                          featured ? "text-slate-400" : "text-slate-500"
                        }`}
                      >
                        +{extra} more
                      </li>
                    )}
                  </ul>
                </article>
              </li>
            );
          })}
        </ul>

        {/* View All Services */}
        <div className="mt-10 flex w-full justify-center sm:mt-12">
          <Link
            href="/our-services"
            className="group inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
          >
            View all services

            <svg
              aria-hidden="true"
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
        </div>

      </div>
    </section>
  );
}
