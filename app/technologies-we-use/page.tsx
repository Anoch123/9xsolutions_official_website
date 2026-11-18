import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";
import { Arrow, Eyebrow } from "@/components/ui/icons";
import TechIcon from "@/components/ui/tech-icon";
import { technology_stack } from "@/lib/constants/helper-constants";
import Link from "next/link";

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
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/talk-to-us"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#ff0000] px-8 py-4 text-[15px] font-semibold text-white shadow-[0_10px_30px_rgba(255,0,0,0.35)] transition-all duration-300 hover:bg-[#e60000] hover:shadow-[0_10px_40px_rgba(255,0,0,0.55)]"
              >
                Book a Consultation
                <Arrow className="transition-transform duration-300 group-hover:translate-x-1" />
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
            Technology should serve the product.
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

        <div className="mt-12 divide-y divide-slate-200 border-y border-slate-200">
          {technology_stack.map((s) => (
            <div
              key={s.category}
              className="grid gap-6 py-10 md:grid-cols-[1fr_1.6fr] md:gap-16"
            >
              <div>
                <h3 className="text-[24px] font-semibold tracking-[-0.02em] text-slate-900">
                  {s.category}
                </h3>
                <p className="mt-2 max-w-sm text-[15px] leading-relaxed text-slate-600">
                  {s.body}
                </p>
              </div>
              <ul className="flex flex-wrap content-start gap-2.5">
                {s.tools.map((t) => (
                  <li
                    key={t}
                    className="flex items-center gap-2.5 rounded-full border border-slate-200 bg-slate-50 py-2 pl-3 pr-4 text-[14px] font-medium text-slate-700 transition-colors duration-200 hover:border-[#4F66FF]/50 hover:bg-white hover:text-[#4F66FF]"
                  >
                    <TechIcon name={t} />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* How we choose (dark band) */}
      <section className="w-full bg-[#0B1020] px-6 py-20 md:px-12 md:py-28 xl:px-20">
        <Eyebrow dark>How we choose</Eyebrow>
        <h2 className="mt-6 max-w-3xl text-[clamp(1.9rem,3.6vw,3.4rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-white">
          Four rules behind every technology decision.
        </h2>

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-2 xl:grid-cols-4">
          {principles.map((p) => (
            <div key={p.title} className="bg-[#0B1020] p-8">
              <span
                className="block h-1 w-10 rounded-full bg-gradient-to-r from-[#8FA0FF] to-[#ff6b6b]"
                aria-hidden="true"
              />
              <h3 className="mt-6 text-[20px] font-semibold tracking-[-0.02em] text-white">
                {p.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-slate-400">
                {p.body}
              </p>
            </div>
          ))}
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
          {stacks.map((s) => (
            <article
              key={s.name}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-8 transition-all duration-300 hover:border-[#4F66FF]/40 hover:bg-white hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
            >
              <h3 className="text-[22px] font-semibold tracking-[-0.02em] text-slate-900">
                {s.name}
              </h3>
              <dl className="mt-6 divide-y divide-slate-200 border-t border-slate-200">
                {s.layers.map(([label, value]) => (
                  <div key={label} className="py-4">
                    <dt className="text-[13px] font-medium text-slate-500">
                      {label}
                    </dt>
                    <dd className="mt-1 flex items-start gap-3 text-[15px] text-slate-800">
                      <span
                        className="mt-[8px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff0000]"
                        aria-hidden="true"
                      />
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className={`${sectionClass} !pt-0`}>
        <div className="grid gap-12 md:grid-cols-[1fr_1.5fr] md:gap-20">
          <div>
            <Eyebrow>Questions</Eyebrow>
            <h2 className="mt-6 text-[clamp(1.9rem,3.6vw,3.4rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-slate-900">
              About our technology.
            </h2>
          </div>

          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {faqs.map((f) => (
              <details key={f.q} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-[18px] font-semibold tracking-[-0.01em] text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#4F66FF] [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-300 text-slate-600 transition-transform duration-300 group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-slate-600">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA (full-bleed) */}
      {/* <section className="relative w-full overflow-hidden bg-[#0B1020] px-6 py-20 md:px-12 md:py-28 xl:px-20">
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_20%_0%,rgba(79,102,255,0.28),transparent_65%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_100%_100%,rgba(255,0,0,0.16),transparent_70%)]" />
        </div>

        <div className="relative grid items-end gap-10 md:grid-cols-[1fr_auto] md:gap-16">
          <div>
            <h2 className="max-w-4xl text-[clamp(2rem,5vw,4.8rem)] font-semibold leading-[1.02] tracking-[-0.035em] text-white">
              Not sure which stack fits your project?
            </h2>
            <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-slate-300">
              Tell us what you are building and we will recommend the
              technology that gets you there fastest.
            </p>
          </div>
          <Link
            href="/talk-to-us"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#ff0000] px-8 py-4 text-[15px] font-semibold text-white shadow-[0_10px_30px_rgba(255,0,0,0.35)] transition-all duration-300 hover:bg-[#e60000] hover:shadow-[0_10px_40px_rgba(255,0,0,0.55)]"
          >
            Book a Consultation
            <Arrow className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section> */}

      <Footer />
    </main>
  );
}