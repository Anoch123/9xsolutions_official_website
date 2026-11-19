import { ArrowUpRight } from "@/components/ui/icons";
import Link from "next/link";

type Partner = {
  name: string;
  kind: string;
  blurb: string;
  services: string[];
  website: string;
  logo?: string;
  // "light" = white/light logo, shown directly on navy.
  // "dark" = dark logo, shown on a white chip so it stays visible.
  logoTone?: "light" | "dark";
};

// ADD A PARTNER: copy one object below and fill it in. Each partner gets its
// own numbered card, so the section grows with the list.
const partners: Partner[] = [
  {
    name: "Selco Digital",
    kind: "Advertising & growth partner",
    blurb:
      "A digital studio that helps businesses get found and chosen. We build the product, they shape the brand and the campaigns that bring in customers.",
    services: [
      "Branding",
      "Websites that convert",
      "Meta & Google ads",
      "AI WhatsApp funnels",
    ],
    website: "https://www.selcodigital.com",
    // Works as is. For speed and reliability, download it into /public and
    // use e.g. "/images/partners/selco-digital.png" instead.
    logo: "https://selcodigital.com/selco-logo-white.png",
    logoTone: "light",
  },
];

const together = [
  {
    title: "We build",
    body: "Websites, apps, and platforms engineered to perform, with clean code and a solid foundation.",
  },
  {
    title: "They amplify",
    body: "Brand, campaigns, and creative that put the product in front of the people who need it.",
  },
  {
    title: "You grow",
    body: "One joined-up effort from first build to first customers, without the hand-offs.",
  },
];

function hostOf(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

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

function Logo({ p }: { p: Partner }) {
  if (!p.logo) {
    return (
      <span className="bg-gradient-to-r from-[#8FA0FF] via-white to-[#ff6b6b] bg-clip-text text-center text-[clamp(1.8rem,3vw,2.6rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-transparent">
        {p.name}
      </span>
    );
  }

  // eslint-disable-next-line @next/next/no-img-element
  const img = (
    <img
      src={p.logo}
      alt={p.name}
      loading="lazy"
      className="max-h-14 w-auto max-w-[220px] object-contain"
    />
  );

  return p.logoTone === "dark" ? (
    <span className="flex items-center rounded-3xl bg-white px-8 py-5">
      {img}
    </span>
  ) : (
    img
  );
}

export default function PartnerSpotlight() {
  if (partners.length === 0) return null;
  const plural = partners.length > 1;

  return (
    <section
      aria-labelledby="our-partners-heading"
      className="w-full bg-white p-3 md:p-5"
    >
      <div className="relative w-full overflow-hidden rounded-[32px] bg-[#0B1020] px-6 py-16 text-white md:rounded-[48px] md:px-12 md:py-24 xl:px-20">
        <Glow />

        <div className="relative">
          {/* Heading */}
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 py-1.5 pl-3 pr-4 text-[13px] font-medium text-slate-300">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ff3b3b] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#ff0000]" />
                </span>
                Our partner{plural ? "s" : ""}
              </span>

              <h2
                id="our-partners-heading"
                className="mt-7 max-w-5xl text-[clamp(2.2rem,4.8vw,4.8rem)] font-semibold leading-[1] tracking-[-0.04em]"
              >
                We build it.
                <br />
                <span className="bg-gradient-to-r from-[#8FA0FF] via-white to-[#ff6b6b] bg-clip-text text-transparent">
                  Together, we get it seen.
                </span>
              </h2>
            </div>

            <p className="max-w-sm text-[17px] leading-relaxed text-slate-300">
              We team up with specialists we trust, so our clients get more
              than software: they get a path to customers.
            </p>
          </div>

          {/* Partner cards: one per partner, stacked */}
          <ul role="list" className="mt-14 flex flex-col gap-4">
            {partners.map((p, i) => (
              <li key={p.name}>
                <article className="group grid overflow-hidden rounded-[32px] border border-white/10 bg-white/5 transition-colors duration-300 hover:border-white/20 lg:grid-cols-12 lg:rounded-[40px]">
                  {/* Brand panel */}
                  <div className="relative flex min-h-[260px] items-center justify-center overflow-hidden bg-[#141B33] p-10 lg:col-span-5 lg:min-h-[420px]">
                    <div
                      className="pointer-events-none absolute inset-0"
                      aria-hidden="true"
                    >
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_20%_0%,rgba(79,102,255,0.35),transparent_65%)]" />
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_100%_100%,rgba(255,0,0,0.22),transparent_65%)]" />
                      <div
                        className="absolute inset-0 opacity-[0.07]"
                        style={{
                          backgroundImage:
                            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
                          backgroundSize: "40px 40px",
                        }}
                      />
                    </div>

                    <span
                      aria-hidden="true"
                      className="absolute left-7 top-6 select-none bg-gradient-to-b from-white/50 to-white/0 bg-clip-text text-[clamp(3rem,5vw,4.5rem)] font-semibold leading-[0.85] tracking-[-0.06em] text-transparent"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <div className="relative transition-transform duration-500 group-hover:scale-105">
                      <Logo p={p} />
                    </div>

                    <span className="absolute bottom-6 left-7 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.18em] text-slate-300 backdrop-blur">
                      {p.kind}
                    </span>
                  </div>

                  {/* Details */}
                  <div className="flex flex-col p-8 md:p-12 lg:col-span-7">
                    <h3 className="text-[clamp(2rem,3.4vw,3.2rem)] font-semibold leading-[1.02] tracking-[-0.035em]">
                      {p.name}
                    </h3>

                    <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-slate-300">
                      {p.blurb}
                    </p>

                    <p className="mt-9 text-[12px] font-medium uppercase tracking-[0.2em] text-slate-500">
                      What they do
                    </p>
                    <ul
                      role="list"
                      aria-label={`${p.name}: services`}
                      className="mt-4 grid gap-3 sm:grid-cols-2"
                    >
                      {p.services.map((s) => (
                        <li
                          key={s}
                          className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-[15px] font-medium text-slate-200 transition-colors duration-300 hover:bg-white/10"
                        >
                          <span
                            className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff0000]"
                            aria-hidden="true"
                          />
                          {s}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto pt-10">
                      <a
                        href={p.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn inline-flex items-center gap-4 rounded-full bg-white/10 py-1.5 pl-6 pr-1.5 text-[15px] font-semibold text-white transition-colors hover:bg-white/15"
                      >
                        {hostOf(p.website)}
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all duration-300 group-hover/btn:rotate-45 group-hover/btn:bg-[#ff0000]">
                          <ArrowUpRight />
                        </span>
                      </a>
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ul>

          {/* How we work together */}
          <ol className="mt-4 grid gap-4 md:grid-cols-3">
            {together.map((t, i) => (
              <li
                key={t.title}
                className="group rounded-3xl border border-white/10 bg-white/5 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.08]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-[13px] font-semibold text-[#8FA0FF] transition-colors duration-300 group-hover:bg-[#ff0000] group-hover:text-white">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 text-[20px] font-semibold tracking-[-0.02em] text-white">
                  {t.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-slate-400">
                  {t.body}
                </p>
              </li>
            ))}
          </ol>

          {/* Become a partner */}
          <div className="mt-10 flex flex-col gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-md text-[15px] leading-relaxed text-slate-400">
              Run an agency, studio, or service business? We are open to
              partnerships that help our clients succeed.
            </p>
            <Link
              href="/talk-to-us"
              className="group inline-flex w-fit items-center gap-4 rounded-full bg-[#ff0000] py-2 pl-8 pr-2 text-[16px] font-semibold text-white shadow-[0_10px_40px_rgba(255,0,0,0.4)] transition-all duration-300 hover:bg-[#e60000] hover:shadow-[0_10px_50px_rgba(255,0,0,0.6)]"
            >
              Become a partner
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#ff0000] transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="scale-125" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}