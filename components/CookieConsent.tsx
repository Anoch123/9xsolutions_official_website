"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { readConsent, saveConsent } from "@/lib/utils/consent";

type Prefs = { analytics: boolean };

function Toggle({
  checked,
  onChange,
  disabled,
  label,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  disabled?: boolean;
  label: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      disabled={disabled}
      onClick={() => onChange(!checked)}
      className={`relative h-7 w-12 shrink-0 rounded-full transition-colors duration-300 ${
        checked ? "bg-[#ff0000]" : "bg-white/15"
      } ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}
    >
      <span
        className={`absolute left-1 top-1 h-5 w-5 rounded-full bg-white shadow transition-transform duration-300 ${
          checked ? "translate-x-5" : "translate-x-0"
        }`}
      />
    </button>
  );
}

const categories = [
  {
    key: "necessary" as const,
    title: "Strictly necessary",
    desc: "Remembering your cookie choice. Always on.",
  },
  {
    key: "analytics" as const,
    title: "Analytics",
    desc: "Basic site usage statistics through Google Analytics, only if configured and enabled.",
  },
];

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [customizing, setCustomizing] = useState(false);
  const [prefs, setPrefs] = useState<Prefs>({ analytics: false });

  useEffect(() => {
    const existing = readConsent();
    let t: ReturnType<typeof setTimeout> | undefined;
    if (!existing) {
      t = setTimeout(() => setVisible(true), 800);
    }
    const open = () => {
      const current = readConsent();
      if (current) setPrefs({ analytics: current.analytics });
      setCustomizing(true);
      setVisible(true);
    };
    window.addEventListener("open-cookie-settings", open);
    return () => {
      if (t) clearTimeout(t);
      window.removeEventListener("open-cookie-settings", open);
    };
  }, []);

  const commit = (p: Prefs) => {
    saveConsent(p);
    setPrefs(p);
    setVisible(false);
    setCustomizing(false);
  };

  return (
    <div
      role="dialog"
      aria-label="Cookie preferences"
      aria-hidden={!visible}
      className={`fixed inset-x-3 bottom-3 z-[100] transition-all duration-500 md:inset-x-auto md:bottom-5 md:left-5 md:w-[440px] ${
        visible ? "visible translate-y-0 opacity-100" : "invisible translate-y-8 opacity-0"
      }`}
    >
      <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0B1020] p-6 text-white shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_0%_0%,rgba(255,0,0,0.16),transparent_65%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_100%_100%,rgba(79,102,255,0.22),transparent_65%)]" />
        </div>

        <div className="relative">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-lg">🍪</span>
            <h2 className="text-xl font-semibold tracking-[-0.02em]">Your privacy, your call</h2>
          </div>

          {!customizing ? (
            <p className="mt-4 text-[15px] leading-relaxed text-slate-300">
              We use essential storage to remember your choice. Optional analytics are off unless you enable
              them. Your IP address may appear in hosting security logs; we don&apos;t store it with your
              preferences. Read our{" "}
              <Link href="/legal/cookie-policy" className="text-white underline underline-offset-4 hover:text-[#ff6b6b]">
                Cookie Policy
              </Link>{" "}
              and{" "}
              <Link href="/legal/privacy-policy" className="text-white underline underline-offset-4 hover:text-[#ff6b6b]">
                Privacy Policy
              </Link>
              .
            </p>
          ) : (
            <ul className="mt-5 flex max-h-[45vh] flex-col gap-3 overflow-y-auto pr-1">
              {categories.map((c) => (
                <li key={c.key} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex-1">
                    <p className="text-[15px] font-medium">{c.title}</p>
                    <p className="mt-1 text-[13px] leading-relaxed text-slate-400">{c.desc}</p>
                  </div>
                  <Toggle
                    label={c.title}
                    checked={c.key === "necessary" ? true : prefs[c.key]}
                    disabled={c.key === "necessary"}
                    onChange={(v) => setPrefs((p) => ({ ...p, [c.key]: v }))}
                  />
                </li>
              ))}
            </ul>
          )}

          <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
            {customizing ? (
              <button
                onClick={() => commit(prefs)}
                className="flex-1 rounded-full bg-[#ff0000] px-6 py-3 text-[15px] font-semibold shadow-[0_10px_30px_rgba(255,0,0,0.35)] transition hover:bg-[#e60000]"
              >
                Save preferences
              </button>
            ) : (
              <button
                onClick={() => commit({ analytics: true })}
                className="flex-1 rounded-full bg-[#ff0000] px-6 py-3 text-[15px] font-semibold shadow-[0_10px_30px_rgba(255,0,0,0.35)] transition hover:bg-[#e60000]"
              >
                Accept all
              </button>
            )}
            <button
              onClick={() => commit({ analytics: false })}
              className="flex-1 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-[15px] font-medium text-slate-200 transition hover:bg-white/10"
            >
              Essential only
            </button>
          </div>

          {!customizing && (
            <button
              onClick={() => setCustomizing(true)}
              className="mt-4 w-full text-center text-[13px] text-slate-400 underline-offset-4 transition hover:text-white hover:underline"
            >
              Customize
            </button>
          )}
        </div>
      </div>
    </div>
  );
}