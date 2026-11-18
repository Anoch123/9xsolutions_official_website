import Link from "next/link";
import { SERVICES } from "@/lib/constants/helper-constants";
import { VISUALS, pickVisual } from "./ServiceVisuals";

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

const slug = (label: string) =>
  label
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M5 12.5L9.5 17L19 7"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className={className}
    >
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Section                                                             */
/* ------------------------------------------------------------------ */

type AllServicesProps = {
  /** Business-impact copy keyed by the visual key from pickVisual (your BENEFIT map). */
  benefits: Record<string, string>;
};

export default function AllServices({ benefits }: AllServicesProps) {
  return (
    <section
      id="all-services"
      aria-labelledby="all-services-heading"
      className="w-full scroll-mt-24 overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-20 md:px-10 lg:px-14 lg:py-24 xl:px-20 2xl:px-24"
    >
      <div className="w-full">
        {/* Heading */}
        <header className="w-full max-w-3xl">
          <p className="text-sm font-semibold tracking-wide text-[#d40000]">
            What we do
          </p>

          <h2
            id="all-services-heading"
            className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-[44px] lg:leading-[1.1] xl:text-5xl"
          >
            Every service, and exactly how it helps
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Each one covers a real slice of the work. Here&apos;s what&apos;s
            included and the business result it&apos;s built to deliver.
          </p>
        </header>

        {/* Jump links */}
        <nav aria-label="Jump to a service" className="mt-8 lg:mt-10">
          <ul role="list" className="flex flex-wrap gap-2">
            {SERVICES.map((service) => (
              <li key={service.label}>
                <a
                  href={`#${slug(service.label)}`}
                  className="inline-flex rounded-md border border-slate-200 bg-white px-3.5 py-2 text-[13px] font-medium text-slate-700 transition-colors hover:border-slate-900 hover:bg-slate-900 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
                >
                  {service.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Services */}
        <ul
          role="list"
          className="mt-10 flex w-full flex-col gap-5 lg:mt-14 lg:gap-6"
        >
          {SERVICES.map((service, index) => {
            const key = pickVisual(service.label, index);
            const Visual = VISUALS[key];
            const alt = index % 2 === 1;
            const benefit = benefits[key];

            return (
              <li key={service.label} className="min-w-0">
                <article
                  id={slug(service.label)}
                  className="grid w-full min-w-0 scroll-mt-28 items-stretch gap-6 overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 lg:grid-cols-2 lg:gap-10 lg:p-8"
                >
                  {/* Copy */}
                  <div
                    className={`flex min-w-0 flex-col justify-center ${
                      alt ? "lg:order-2" : ""
                    }`}
                  >
                    <h3 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl lg:text-[34px] lg:leading-[1.1]">
                      {service.label}
                    </h3>

                    <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                      {service.detail}
                    </p>

                    {/* What's included */}
                    <div className="mt-7">
                      <h4 className="text-sm font-semibold text-slate-900">
                        What&apos;s included
                      </h4>
                      <ul
                        role="list"
                        className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2"
                      >
                        {service.includes.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 text-sm leading-6 text-slate-700"
                          >
                            <span
                              aria-hidden="true"
                              className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-slate-900 text-white"
                            >
                              <CheckIcon />
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Business impact */}
                    {benefit && (
                      <div className="mt-7 rounded-xl border border-slate-200 border-l-4 border-l-[#d40000] bg-slate-50 p-5">
                        <h4 className="text-sm font-semibold text-slate-900">
                          How it helps your business
                        </h4>
                        <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-base">
                          {benefit}
                        </p>
                      </div>
                    )}

                    {/* <Link
                      href="/talk-to-us"
                      className="group mt-7 inline-flex w-fit items-center gap-2 rounded-lg bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
                    >
                      Talk to us about {service.label.toLowerCase()}
                      <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
                    </Link> */}
                  </div>

                  {/* Illustration stage */}
                  <div
                    className={`flex min-h-[300px] min-w-0 flex-col overflow-hidden rounded-xl ${
                      alt
                        ? "border border-slate-800 bg-slate-900 lg:order-1"
                        : "border border-slate-100 bg-slate-50"
                    }`}
                  >
                    {/* Stage header bar */}
                    <div
                      className={`flex items-center justify-between gap-3 border-b px-4 py-3 text-[13px] font-medium ${
                        alt
                          ? "border-white/10 text-slate-300"
                          : "border-slate-200 text-slate-600"
                      }`}
                    >
                      <span className="flex items-center gap-1.5" aria-hidden="true">
                        <span
                          className={`h-2 w-2 rounded-full ${
                            alt ? "bg-white/25" : "bg-slate-300"
                          }`}
                        />
                        <span
                          className={`h-2 w-2 rounded-full ${
                            alt ? "bg-white/25" : "bg-slate-300"
                          }`}
                        />
                        <span
                          className={`h-2 w-2 rounded-full ${
                            alt ? "bg-white/25" : "bg-slate-300"
                          }`}
                        />
                      </span>
                      <span className="truncate">{service.label}</span>
                    </div>

                    {/* Visual */}
                    <div
                      aria-hidden="true"
                      className={`flex flex-1 justify-center px-3 py-8 ${
                        key === "mobile" ? "items-start" : "items-center"
                      }`}
                    >
                      <div className="flex w-full items-center justify-center [&_svg]:h-auto [&_svg]:max-w-full">
                        <Visual dark={alt} />
                      </div>
                    </div>

                    {/* Stage footer bar */}
                    <div
                      className={`flex items-center justify-between gap-3 border-t px-4 py-3 text-[13px] ${
                        alt
                          ? "border-white/10 text-slate-400"
                          : "border-slate-200 text-slate-500"
                      }`}
                    >
                      <span>
                        {service.includes.length}{" "}
                        {service.includes.length === 1
                          ? "deliverable"
                          : "deliverables"}
                      </span>
                      <span
                        aria-hidden="true"
                        className="h-1 w-8 rounded-full bg-[#d40000]"
                      />
                    </div>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}