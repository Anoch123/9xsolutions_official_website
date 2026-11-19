"use client";

import { useState } from "react";
import { Arrow } from "@/components/ui/icons";
import { Status } from "@/lib/types/helper.type";
import { allowedInterests } from "@/lib/constants/helper-constants";

const labelClass =
  "mb-2 block text-[12px] font-medium uppercase tracking-[0.2em] text-slate-400";

const fieldClass =
  "w-full rounded-2xl border border-white/10 bg-white/5 py-4 pl-12 pr-4 text-[16px] text-white placeholder:text-slate-500 outline-none [color-scheme:dark] transition-all duration-200 hover:border-white/20 focus:border-[#8FA0FF] focus:bg-white/[0.07] focus:shadow-[0_0_0_4px_rgba(79,102,255,0.18)]";

const REQUIRED = ["name", "email", "phone", "message"];

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

function Ico({ d }: { d: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d={d}
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const icons = {
  user: "M20 21v-1a5 5 0 00-5-5H9a5 5 0 00-5 5v1M12 11a4 4 0 100-8 4 4 0 000 8z",
  mail: "M4 6h16v12H4zM4 7l8 6 8-6",
  phone:
    "M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z",
  building: "M4 21V5l8-2v18M12 9h8v12M8 9h.01M8 13h.01M8 17h.01M16 13h.01M16 17h.01",
  chat: "M21 12a8 8 0 01-11.6 7.1L4 20l1-4.6A8 8 0 1121 12z",
};

function Field({
  label,
  htmlFor,
  icon,
  top,
  children,
}: {
  label: string;
  htmlFor: string;
  icon: keyof typeof icons;
  top?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="group">
      <label htmlFor={htmlFor} className={labelClass}>
        {label}
      </label>
      <div className="relative">
        <span
          className={`pointer-events-none absolute left-4 text-slate-500 transition-colors duration-200 group-focus-within:text-[#8FA0FF] ${
            top ? "top-[18px]" : "top-1/2 -translate-y-1/2"
          }`}
        >
          <Ico d={icons[icon]} />
        </span>
        {children}
      </div>
    </div>
  );
}

function StepHeader({ n, title }: { n: string; title: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[13px] font-semibold text-[#8FA0FF]">
        {n}
      </span>
      <h4 className="text-[18px] font-semibold tracking-[-0.02em] text-white">
        {title}
      </h4>
      <span className="h-px flex-1 bg-white/10" aria-hidden="true" />
    </div>
  );
}

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [selected, setSelected] = useState<string[]>([]);
  const [filled, setFilled] = useState(0);

  const toggle = (item: string) =>
    setSelected((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item],
    );

  function onChange(e: React.FormEvent<HTMLFormElement>) {
    const f = new FormData(e.currentTarget);
    setFilled(REQUIRED.filter((k) => String(f.get(k) ?? "").trim()).length);
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = new FormData(e.currentTarget);
    const payload = {
      name: form.get("name"),
      email: form.get("email"),
      company: form.get("company"),
      message: form.get("message"),
      phone: form.get("phone"),
      interests: selected,
      website: form.get("website"),
    };

    try {
      // TODO: point this at your own endpoint (API route, email service, CRM)
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="relative flex h-full min-h-[460px] flex-col items-start justify-center overflow-hidden rounded-[32px] bg-[#0B1020] p-8 text-white md:rounded-[44px] md:p-14"
      >
        <Glow />
        <div className="relative">
          <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white text-[#ff0000] shadow-[0_10px_40px_rgba(255,0,0,0.4)]">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M5 12.5l4.5 4.5L19 7.5"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <h3 className="mt-8 text-[clamp(2rem,3.4vw,3rem)] font-semibold leading-[1.05] tracking-[-0.035em]">
            Message sent.
            <br />
            <span className="bg-gradient-to-r from-[#8FA0FF] via-white to-[#ff6b6b] bg-clip-text text-transparent">
              Talk soon.
            </span>
          </h3>
          <p className="mt-5 max-w-md text-[17px] leading-relaxed text-slate-300">
            Thanks for reaching out. We will read your message and get back to
            you by email.
          </p>
          <button
            type="button"
            onClick={() => {
              setStatus("idle");
              setSelected([]);
              setFilled(0);
            }}
            className="mt-8 inline-flex items-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-white/10"
          >
            Send another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      onChange={onChange}
      className="relative overflow-hidden rounded-[32px] bg-[#0B1020] text-white md:rounded-[44px]"
    >
      <Glow />

      {/* Progress */}
      <div className="relative h-1 w-full bg-white/10" aria-hidden="true">
        <div
          className="h-full bg-gradient-to-r from-[#4F66FF] to-[#ff0000] transition-all duration-500"
          style={{ width: `${(filled / REQUIRED.length) * 100}%` }}
        />
      </div>

      <div className="relative p-6 md:p-12">
        {/* Honeypot spam protection */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="website">Leave this field empty</label>
          <input
            type="text"
            id="website"
            name="website"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {/* Header */}
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 py-1.5 pl-3 pr-4 text-[13px] font-medium text-slate-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ff3b3b] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#ff0000]" />
              </span>
              Project brief
            </span>
            <h3 className="mt-5 text-[clamp(1.8rem,3vw,2.6rem)] font-semibold leading-[1.05] tracking-[-0.035em]">
              Tell us what you&apos;re building.
            </h3>
          </div>
          <p className="text-[13px] tabular-nums text-slate-500">
            {filled}/{REQUIRED.length} required fields
          </p>
        </div>

        {/* Step 1 */}
        <fieldset className="mt-10">
          <legend className="sr-only">What do you need help with?</legend>
          <StepHeader n="01" title="What do you need help with?" />
          <div className="mt-5 flex flex-wrap gap-2.5">
            {allowedInterests.map((item) => {
              const active = selected.includes(item);
              return (
                <button
                  key={item}
                  type="button"
                  aria-pressed={active}
                  onClick={() => toggle(item)}
                  className={`group/chip inline-flex items-center gap-2 rounded-full border py-2.5 pr-5 text-[14px] font-medium transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8FA0FF] ${
                    active
                      ? "border-white bg-white pl-3 text-[#0B1020] shadow-[0_8px_30px_rgba(143,160,255,0.35)]"
                      : "border-white/10 bg-white/5 pl-5 text-slate-300 hover:border-white/25 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {active && (
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#ff0000] text-white">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path
                          d="M5 12.5l4.5 4.5L19 7.5"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  )}
                  {item}
                </button>
              );
            })}
          </div>
        </fieldset>

        {/* Step 2 */}
        <div className="mt-12">
          <StepHeader n="02" title="About you" />
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <Field label="Your name" htmlFor="name" icon="user">
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                placeholder="Jane Perera"
                className={fieldClass}
              />
            </Field>
            <Field label="Company" htmlFor="company" icon="building">
              <input
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                placeholder="Your company name"
                className={fieldClass}
              />
            </Field>
            <Field label="Work email" htmlFor="email" icon="mail">
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="jane@company.com"
                className={fieldClass}
              />
            </Field>
            <Field label="Phone number" htmlFor="phone" icon="phone">
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                placeholder="+94 77 123 4567"
                className={fieldClass}
              />
            </Field>
          </div>
        </div>

        {/* Step 3 */}
        <div className="mt-12">
          <StepHeader n="03" title="Your project" />
          <div className="mt-6">
            <Field label="Tell us about your project" htmlFor="message" icon="chat" top>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="What are you trying to build or fix? Any timelines or constraints we should know about?"
                className={`${fieldClass} resize-y`}
              />
            </Field>
          </div>
        </div>

        {status === "error" && (
          <p
            role="alert"
            className="mt-8 rounded-2xl border border-[#ff3b3b]/30 bg-[#ff0000]/10 px-5 py-3 text-[15px] text-[#ff9b9b]"
          >
            Something went wrong and your message was not sent. Please try
            again.
          </p>
        )}

        {/* Submit */}
        <div className="mt-10 flex flex-col items-start gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xs text-[13px] leading-relaxed text-slate-500">
            We only use your details to reply to this message.
          </p>
          <button
            type="submit"
            disabled={status === "sending"}
            className="group inline-flex items-center gap-4 rounded-full bg-[#ff0000] py-2 pl-8 pr-2 text-[16px] font-semibold text-white shadow-[0_10px_40px_rgba(255,0,0,0.4)] transition-all duration-300 hover:bg-[#e60000] hover:shadow-[0_10px_50px_rgba(255,0,0,0.6)] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "sending" ? "Sending..." : "Send message"}
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#ff0000] transition-transform duration-300 group-hover:translate-x-0.5">
              <Arrow />
            </span>
          </button>
        </div>
      </div>
    </form>
  );
}