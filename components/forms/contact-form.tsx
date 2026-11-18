"use client";

import { useState } from "react";
import { Arrow } from "@/components/ui/icons";

const interests = [
  "Software development",
  "Cloud and DevOps",
  "Automation",
  "AI solutions",
  "Not sure yet",
];

type Status = "idle" | "sending" | "success" | "error";

const fieldClass =
  "mt-2 w-full rounded-2xl border border-slate-200 bg-white px-5 py-3.5 text-[16px] text-slate-900 placeholder:text-slate-400 transition-colors focus:border-[#4F66FF] focus:outline-none focus:ring-4 focus:ring-[#4F66FF]/15";
const labelClass = "block text-[14px] font-medium text-slate-700";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (item: string) =>
    setSelected((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item],
    );

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = new FormData(e.currentTarget);
    const payload = {
      name: form.get("name"),
      email: form.get("email"),
      company: form.get("company"),
      message: form.get("message"),
      interests: selected,
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
        className="flex h-full min-h-[420px] flex-col items-start justify-center rounded-3xl border border-slate-200 bg-slate-50 p-8 md:p-12"
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0B1020] text-[#8FA0FF]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 12.5l4.5 4.5L19 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <h3 className="mt-6 text-[28px] font-semibold tracking-[-0.025em] text-slate-900">
          Message sent.
        </h3>
        <p className="mt-3 max-w-md text-[16px] leading-relaxed text-slate-600">
          Thanks for reaching out. We will read your message and get back to
          you by email.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-10"
    >
      <fieldset>
        <legend className={labelClass}>What do you need help with?</legend>
        <div className="mt-3 flex flex-wrap gap-2.5">
          {interests.map((item) => {
            const active = selected.includes(item);
            return (
              <button
                key={item}
                type="button"
                aria-pressed={active}
                onClick={() => toggle(item)}
                className={`rounded-full border px-4 py-2 text-[14px] font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#4F66FF] ${
                  active
                    ? "border-[#0B1020] bg-[#0B1020] text-white"
                    : "border-slate-200 bg-white text-slate-700 hover:border-[#4F66FF]/50 hover:text-[#4F66FF]"
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>
      </fieldset>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>Your name</label>
          <input id="name" name="name" type="text" required autoComplete="name" placeholder="Jane Perera" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>Work email</label>
          <input id="email" name="email" type="email" required autoComplete="email" placeholder="jane@company.com" className={fieldClass} />
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="company" className={labelClass}>Company</label>
        <input id="company" name="company" type="text" autoComplete="organization" placeholder="Your company name" className={fieldClass} />
      </div>

      <div className="mt-6">
        <label htmlFor="message" className={labelClass}>Tell us about your project</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="What are you trying to build or fix? Any timelines or constraints we should know about?"
          className={`${fieldClass} resize-y`}
        />
      </div>

      {status === "error" && (
        <p role="alert" className="mt-6 rounded-2xl border border-[#ff0000]/30 bg-[#ff0000]/5 px-5 py-3 text-[15px] text-[#b30000]">
          Something went wrong and your message was not sent. Please try again.
        </p>
      )}

      <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === "sending"}
          className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#ff0000] px-8 py-4 text-[15px] font-semibold text-white shadow-[0_10px_30px_rgba(255,0,0,0.35)] transition-all duration-300 hover:bg-[#e60000] hover:shadow-[0_10px_40px_rgba(255,0,0,0.55)] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "sending" ? "Sending..." : "Send message"}
          <Arrow className="transition-transform duration-300 group-hover:translate-x-1" />
        </button>
        <p className="max-w-xs text-[13px] leading-relaxed text-slate-500">
          We only use your details to reply to this message.
        </p>
      </div>
    </form>
  );
}