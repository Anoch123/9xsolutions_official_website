import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";
import { Arrow, ArrowUpRight, Eyebrow } from "@/components/ui/icons";
import TechIcon from "@/components/ui/tech-icon";
import { technology_stack } from "@/lib/constants/helper-constants";
import Link from "next/link";
import { pageSEO } from "@/lib/constants/helper-constants";

export const metadata = pageSEO["/technologies-we-use"];

const h2Class =
  "mt-6 max-w-3xl text-[clamp(1.9rem,3.6vw,3.4rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-slate-900";
const sectionClass = "w-full bg-white px-6 py-20 md:px-12 md:py-28 xl:px-20";

const principles = [
  {
    title: "Fit over fashion",
    body: "We pick tools because they suit your product, team, and budget, not because they are trending.",
  },
  {
    title: "Proven in production",
    body: "We favor mature, well-supported technology with active communities and a clear future.",
  },
  {
    title: "Easy to hand over",
    body: "Standard stacks and clean documentation mean your team can own and extend the code.",
  },
  {
    title: "Built to scale",
    body: "Architecture choices leave room to grow users, data, and features without a rewrite.",
  },
];

const stacks = [
  {
    name: "SaaS platform",
    layers: [
      ["Frontend", "Next.js, TypeScript, Tailwind"],
      ["Backend", "Node.js, PostgreSQL, Redis"],
      ["Cloud", "AWS, Docker, Terraform"],
    ],
  },
  {
    name: "Mobile app",
    layers: [
      ["App", "React Native or Flutter"],
      ["Backend", "NestJS or FastAPI, PostgreSQL"],
      ["Services", "Firebase, push, analytics"],
    ],
  },
  {
    name: "AI solution",
    layers: [
      ["Models", "OpenAI, Claude, open-source LLMs"],
      ["Data", "Python, pgvector or Pinecone, Airflow"],
      ["Delivery", "FastAPI, Kubernetes, monitoring"],
    ],
  },
];

const faqs = [
  {
    q: "Can you work with our existing technology?",
    a: "Yes. We regularly extend, modernize, and integrate with existing codebases and platforms, and only recommend a change when it clearly helps.",
  },
  {
    q: "Do we have to use your preferred stack?",
    a: "No. We recommend a stack after understanding your goals and team, and we are happy to adopt the tools you already use.",
  },
  {
    q: "Who owns the code and infrastructure?",
    a: "You do. We hand over source code, documentation, and infrastructure access, so you are never locked in.",
  },
];

function Glow() {
  return (
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
  );
}

// Appears on hover inside a `group` card
function HoverGlow() {
  return (
    <div
      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_0%_0%,rgba(255,0,0,0.18),transparent_65%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_100%_100%,rgba(79,102,255,0.25),transparent_65%)]" />
    </div>
  );
}

function Numeral({ n, className = "" }: { n: number; className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`block select-none bg-gradient-to-b from-[#4F66FF] to-[#4F66FF]/10 bg-clip-text font-semibold leading-[0.85] tracking-[-0.06em] text-transparent transition-all duration-500 group-hover:from-white/60 group-hover:to-white/5 ${className}`}
    >
      {String(n).padStart(2, "0")}
    </span>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 py-1.5 pl-3 pr-4 text-[13px] font-medium text-slate-300">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ff3b3b] opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-[#ff0000]" />
      </span>
      {children}
    </span>
  );
}

export default function TechnologiesWeUse() {
  return (
    <main className="w-full bg-white">
      {/* Hero */}
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
          <Eyebrow dark>Technologies we use</Eyebrow>

          <h1 className="mt-8 w-full text-[clamp(2.6rem,7.6vw,8.5rem)] font-semibold leading-[0.98] tracking-[-0.035em] text-white">
            Modern tools, chosen
            <br />
            <span className="bg-gradient-to-r from-[#8FA0FF] via-white to-[#ff6b6b] bg-clip-text text-transparent">
              to build what lasts.
            </span>
          </h1>

          <div className="mt-10 grid w-full items-end gap-8 md:mt-14 md:grid-cols-[1fr_auto] md:gap-16">
            <p className="max-w-2xl text-[17px] leading-relaxed text-slate-300 md:text-[20px]">
              From web and mobile to cloud and AI, we work with proven
              technology and pick the right tool for each job, so your product
              is fast, secure, and ready to grow.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
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
                href="#stack"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-4 text-[15px] font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
              >
                Browse our stack
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Intro */}
      <section className={sectionClass}>
        <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-20">
          <h2 className="text-[clamp(1.9rem,3.6vw,3.4rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-slate-900">
            Technology should{" "}
            <span className="bg-gradient-to-r from-[#4F66FF] to-[#ff0000] bg-clip-text text-transparent">
              serve the product.
            </span>
          </h2>
          <div className="space-y-6 text-[17px] leading-relaxed text-slate-600 md:text-[19px]">
            <p>
              The best stack is the one that fits your goals, your team, and
              your timeline. We keep deep expertise across modern languages,
              frameworks, and platforms so we can recommend honestly instead of
              defaulting to what we know.
            </p>
            <p>
              Below is the toolkit we use most. If your project needs
              something else, we will learn it or bring in a specialist.
            </p>
          </div>
        </div>
      </section>

      {/* Stack */}
      <section id="stack" className={`${sectionClass} scroll-mt-24 !pt-0`}>
        <Eyebrow>Our toolkit</Eyebrow>
        <h2 className={h2Class}>Every layer of your product, covered.</h2>

        <div className="mt-12 flex flex-col gap-4">
          {technology_stack.map((s, i) => (
            <article
              key={s.category}
              className="group relative overflow-hidden rounded-[32px] border border-slate-200 bg-slate-50 p-8 transition-all duration-500 hover:border-transparent hover:bg-[#0B1020] hover:shadow-[0_30px_60px_rgba(11,16,32,0.25)] md:rounded-[44px] md:p-12"
            >
              <HoverGlow />

              <div className="relative grid gap-8 md:grid-cols-[1fr_1.6fr] md:gap-16">
                <div className="flex items-start gap-6 md:gap-8">
                  <Numeral
                    n={i + 1}
                    className="text-[clamp(3.5rem,6vw,5.5rem)]"
                  />
                  <div className="pt-1">
                    <h3 className="text-[24px] font-semibold tracking-[-0.02em] text-slate-900 transition-colors duration-500 group-hover:text-white">
                      {s.category}
                    </h3>
                    <p className="mt-2 max-w-sm text-[15px] leading-relaxed text-slate-600 transition-colors duration-500 group-hover:text-slate-300">
                      {s.body}
                    </p>
                  </div>
                </div>

                <ul className="flex flex-wrap content-start gap-2.5">
                  {s.tools.map((t) => (
                    <li
                      key={t}
                      className="flex items-center gap-2.5 rounded-full border border-slate-200 bg-white py-1.5 pl-1.5 pr-4 text-[14px] font-medium text-slate-700 transition-all duration-500 group-hover:border-white/10 group-hover:bg-white/5 group-hover:text-slate-200"
                    >
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-50 transition-colors duration-500 group-hover:bg-white">
                        <TechIcon name={t} />
                      </span>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* How we choose: big navy card, same language as the footer */}
      <section className="w-full bg-white p-3 md:p-5">
        <div className="relative overflow-hidden rounded-[32px] bg-[#0B1020] px-6 py-16 text-white md:rounded-[48px] md:px-12 md:py-24 xl:px-20">
          <Glow />

          <div className="relative">
            <Pill>How we choose</Pill>
            <h2 className="mt-7 max-w-4xl text-[clamp(2.2rem,4.8vw,4.8rem)] font-semibold leading-[1] tracking-[-0.04em]">
              Four rules behind every
              <br />
              <span className="bg-gradient-to-r from-[#8FA0FF] via-white to-[#ff6b6b] bg-clip-text text-transparent">
                technology decision.
              </span>
            </h2>

            <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {principles.map((p, i) => (
                <article
                  key={p.title}
                  className="rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.08]"
                >
                  <span className="block bg-gradient-to-b from-white/70 to-white/5 bg-clip-text text-[clamp(3.5rem,5vw,4.5rem)] font-semibold leading-[0.85] tracking-[-0.06em] text-transparent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-8 text-[20px] font-semibold tracking-[-0.02em] text-white">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-slate-400">
                    {p.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Typical stacks */}
      <section className={sectionClass}>
        <Eyebrow>Typical stacks</Eyebrow>
        <h2 className={h2Class}>How it comes together.</h2>
        <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-slate-600">
          Examples of how we combine tools for common projects. Yours will be
          shaped by your requirements.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {stacks.map((s, i) => (
            <article
              key={s.name}
              className="group relative overflow-hidden rounded-[32px] border border-slate-200 bg-slate-50 p-8 transition-all duration-500 hover:-translate-y-1 hover:border-transparent hover:bg-[#0B1020] hover:shadow-[0_30px_60px_rgba(11,16,32,0.25)] md:p-10"
            >
              <HoverGlow />

              <div className="relative">
                <Numeral n={i + 1} className="text-[clamp(3.5rem,6vw,5.5rem)]" />
                <h3 className="mt-8 text-[22px] font-semibold tracking-[-0.02em] text-slate-900 transition-colors duration-500 group-hover:text-white">
                  {s.name}
                </h3>

                <dl className="mt-6 flex flex-col gap-2.5">
                  {s.layers.map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-2xl border border-slate-200 bg-white px-5 py-4 transition-all duration-500 group-hover:border-white/10 group-hover:bg-white/5"
                    >
                      <dt className="text-[12px] font-medium uppercase tracking-[0.2em] text-slate-500">
                        {label}
                      </dt>
                      <dd className="mt-1.5 flex items-start gap-3 text-[15px] text-slate-800 transition-colors duration-500 group-hover:text-slate-200">
                        <span
                          className="mt-[8px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff0000]"
                          aria-hidden="true"
                        />
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className={`${sectionClass} !pt-0`}>
        <div className="grid gap-12 md:grid-cols-[1fr_1.5fr] md:gap-20">
          <div className="md:sticky md:top-28 md:self-start">
            <Eyebrow>Questions</Eyebrow>
            <h2 className="mt-6 text-[clamp(1.9rem,3.6vw,3.4rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-slate-900">
              About our technology.
            </h2>
          </div>

          <div className="flex flex-col gap-3">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-3xl border border-slate-200 bg-slate-50 px-6 py-5 transition-colors duration-300 open:border-transparent open:bg-[#0B1020] md:px-8 md:py-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-[18px] font-semibold tracking-[-0.01em] text-slate-900 transition-colors group-open:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4F66FF] [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-300 bg-white text-[20px] leading-none text-slate-600 transition-all duration-300 group-hover:border-[#4F66FF]/50 group-open:rotate-45 group-open:border-transparent group-open:bg-[#ff0000] group-open:text-white"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-slate-600 group-open:text-slate-300">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}