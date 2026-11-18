export function Chevron({ open, className = "" }: { open: boolean; className?: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 10 10"
      fill="none"
      className={`shrink-0 transition-transform duration-300 ease-out ${
        open ? "rotate-180" : ""
      } ${className}`}
    >
      <path
        d="M1.5 3.5L5 7L8.5 3.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
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

export function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className={className}>
      <path
        d="M5 11L11 5M6 5h5v5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Check({ className = "" }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M5 12.5L9.5 17L19 7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span
      className={`inline-flex w-fit items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-medium ${
        dark
          ? "border-white/10 bg-white/5 text-slate-300"
          : "border-slate-200 bg-white text-slate-600"
      }`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-[#ff0000]" />
      {children}
    </span>
  );
}

export function Icon({ d }: { d: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  );
}

export function DetailRow({
  label,
  children,
  dark = false,
}: {
  label: string;
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <div
      className={`grid gap-1 py-4 sm:grid-cols-[110px_1fr] sm:gap-6 ${
        dark ? "border-t border-white/10" : "border-t border-[#E3E5EA]"
      }`}
    >
      <dt
        className={`text-[11px] font-semibold uppercase tracking-[0.18em] ${
          dark ? "text-[#ff6b6b]" : "text-[#ff0000]"
        }`}
      >
        {label}
      </dt>
      <dd
        className={`text-[14.5px] leading-relaxed ${
          dark ? "text-slate-300" : "text-slate-600"
        }`}
      >
        {children}
      </dd>
    </div>
  );
}