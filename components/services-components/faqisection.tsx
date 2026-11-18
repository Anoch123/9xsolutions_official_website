import Link from "next/link";
import { FAQS } from "@/lib/constants/helper-constants";

export default function FaqSection() {
  return (
    <section
      aria-labelledby="faq-heading"
      className="w-full overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-20 md:px-10 lg:px-14 lg:py-24 xl:px-20 2xl:px-24"
    >
      <div className="grid w-full gap-10 lg:grid-cols-12 lg:gap-16">
        {/* Heading */}
        <header className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <p className="text-sm font-semibold tracking-wide text-[#d40000]">
              FAQ
            </p>

            <h2
              id="faq-heading"
              className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-[44px] lg:leading-[1.1]"
            >
              Questions we hear a lot
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-slate-600 sm:text-base">
              Can&apos;t find the answer you need? Talk to us and we&apos;ll
              reply with specifics for your project.
            </p>

            <Link
              href="/talk-to-us"
              className="group mt-8 inline-flex items-center gap-2 rounded-lg bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
            >
              Contact us
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
        </header>

        {/* Accordion */}
        <div className="min-w-0 lg:col-span-8">
          <div className="divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            {FAQS.map((f) => (
              <details key={f.q} className="group bg-white open:bg-slate-50">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-5 py-5 text-left text-base font-semibold text-slate-900 transition-colors hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-slate-900 sm:px-8 sm:py-6 sm:text-lg [&::-webkit-details-marker]:hidden">
                  <span className="min-w-0">{f.q}</span>

                  <span
                    aria-hidden="true"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 transition-colors group-open:border-slate-900 group-open:bg-slate-900 group-open:text-white"
                  >
                    {/* Plus (closed) */}
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="group-open:hidden"
                    >
                      <path
                        d="M8 3v10M3 8h10"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                    {/* Minus (open) */}
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="hidden group-open:block"
                    >
                      <path
                        d="M3 8h10"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </summary>

                <p className="max-w-3xl px-5 pb-6 pr-16 text-sm leading-7 text-slate-600 sm:px-8 sm:pb-8 sm:pr-24 sm:text-base">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}