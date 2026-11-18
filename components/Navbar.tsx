"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { common_texts, NAV_LINKS } from "@/lib/constants/helper-constants";
import { Arrow, Chevron } from "./ui/icons";
import Image from "next/image";

const EASE = "ease-[cubic-bezier(0.65,0,0.35,1)]";

/**
 * How many links stay inline on the desktop bar before the rest move into a
 * "More" dropdown. Add as many NAV_LINKS as you like — the bar never wraps.
 *   lg (1024px+): first INLINE_LG links
 *   xl (1280px+): first INLINE_XL links
 * Below lg the full-screen mobile menu is used.
 */
const INLINE_LG = 4;
const INLINE_XL = 6;

type Item = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

// Hrefs in NAV_LINKS have no leading slash ("our-services"); a relative href
// would resolve against the current route, so normalise to root-relative.
const toHref = (h: string) =>
  /^(\/|#|https?:|mailto:|tel:)/.test(h) ? h : `/${h}`;

const ITEMS: Item[] = NAV_LINKS.map((l) => ({
  label: l.label,
  href: toHref(l.href),
  children: l.children?.map((c) => ({ label: c.label, href: toHref(c.href) })),
}));

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDesktopMenu, setOpenDesktopMenu] = useState<string | null>(null);
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);
  const desktopMenuRef = useRef<HTMLDivElement>(null);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) setOpenMobileMenu(null);
  }, [open]);

  useEffect(() => {
    setOpen(false);
    setOpenDesktopMenu(null);
  }, [pathname]);

  // Close the mobile panel if the window grows into the desktop layout
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) setOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        desktopMenuRef.current &&
        !desktopMenuRef.current.contains(e.target as Node)
      ) {
        setOpenDesktopMenu(null);
      }
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpenDesktopMenu(null);
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  /* ---------------- desktop item renderer ---------------- */

  const renderDesktopItem = (
    item: Item,
    menuKey: string,
    wrapperClass = "",
  ) => {
    const hasChildren = !!item.children?.length;
    const isOpen = openDesktopMenu === menuKey;
    const active =
      isActive(item.href) ||
      (hasChildren && item.children!.some((c) => isActive(c.href)));

    const base = `group relative flex items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-2 text-[14px] font-medium transition-colors duration-200 xl:px-4 xl:text-[15px] ${
      active || isOpen
        ? "text-slate-900"
        : "text-slate-500 hover:text-slate-900"
    }`;

    const underline = (
      <span
        className={`absolute inset-x-3 -bottom-0.5 h-[2px] origin-left rounded-full bg-[#ff0000] transition-transform duration-300 ease-out xl:inset-x-4 ${
          active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
        }`}
      />
    );

    if (!hasChildren) {
      return (
        <div key={menuKey} className={wrapperClass}>
          <Link href={item.href} className={base}>
            {item.label}
            {underline}
          </Link>
        </div>
      );
    }

    return (
      <div key={menuKey} className={`relative ${wrapperClass}`}>
        <button
          type="button"
          onClick={() => setOpenDesktopMenu((v) => (v === menuKey ? null : menuKey))}
          aria-expanded={isOpen}
          className={base}
        >
          {item.label}
          <Chevron open={isOpen} />
          {underline}
        </button>

        <div
          className={`absolute left-1/2 top-full w-72 -translate-x-1/2 pt-5 transition-all duration-300 ease-out ${
            isOpen
              ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
              : "pointer-events-none -translate-y-2 scale-95 opacity-0"
          }`}
        >
          <div className="relative rounded-3xl border border-slate-200/80 bg-white p-2 shadow-[0_30px_60px_rgba(11,16,32,0.3)]">
            <span className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 border-l border-t border-slate-200/80 bg-white" />
            {item.children!.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                onClick={() => setOpenDesktopMenu(null)}
                className={`group/item flex items-center justify-between rounded-2xl px-4 py-3 text-[15px] font-medium transition-colors duration-200 hover:bg-slate-50 ${
                  isActive(child.href)
                    ? "text-slate-900"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <span className="flex items-center gap-3">
                  <span
                    className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                      isActive(child.href)
                        ? "bg-[#ff0000] shadow-[0_0_8px_rgba(255,0,0,0.6)]"
                        : "bg-slate-300 group-hover/item:bg-[#ff0000]"
                    }`}
                  />
                  {child.label}
                </span>
                <Arrow className="-translate-x-2 text-[#ff0000] opacity-0 transition-all duration-300 group-hover/item:translate-x-0 group-hover/item:opacity-100" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Inline links (lg shows the first INLINE_LG, xl the first INLINE_XL)
  const inline = ITEMS.slice(0, INLINE_XL);
  // Overflow menus: one for lg (everything past INLINE_LG), one for xl
  const overflowLg = ITEMS.slice(INLINE_LG);
  const overflowXl = ITEMS.slice(INLINE_XL);

  return (
    <div
      className={`fixed z-50 flex flex-col overflow-hidden border border-slate-200/70 bg-white/95 text-slate-900 backdrop-blur-xl transition-all duration-500 ${EASE}
        lg:left-1/2 lg:right-auto lg:h-16 lg:-translate-x-1/2 lg:overflow-visible lg:rounded-full
        ${
          scrolled
            ? "lg:top-3 lg:w-[calc(100%-3rem)] lg:max-w-6xl lg:shadow-[0_20px_50px_rgba(11,16,32,0.35)]"
            : "lg:top-6 lg:w-[calc(100%-3rem)] lg:max-w-7xl lg:shadow-[0_10px_30px_rgba(11,16,32,0.25)]"
        }
        ${
          open
            ? "inset-0 h-[100dvh] rounded-none border-transparent bg-white"
            : "inset-x-5 top-5 h-16 rounded-[32px] shadow-[0_10px_30px_rgba(11,16,32,0.25)]"
        }`}
    >
      {/* Soft glows inside the mobile panel */}
      <div
        aria-hidden
        className={`pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#ff0000]/10 blur-[90px] transition-opacity duration-700 lg:hidden ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />
      <div
        aria-hidden
        className={`pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-[#4F66FF]/15 blur-[100px] transition-opacity duration-700 lg:hidden ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Header row: logo | nav (fills the middle, never wraps) | CTA */}
      <div
        className={`relative flex h-16 w-full shrink-0 items-center justify-between gap-4 px-6 transition-[margin] duration-500 ${EASE} lg:!mt-0 lg:px-4 lg:pl-6 lg:transition-none ${
          open ? "mt-5" : "mt-0"
        }`}
      >
        {/* Logo */}
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="relative block h-7 w-[100px] shrink-0"
          aria-label="9x Solutions home"
        >
          <Image
            src="/images/logo.png"
            alt={common_texts.App_Name}
            fill
            priority
            sizes="100px"
            className="object-contain object-left"
          />
        </Link>

        {/* Desktop nav */}
        <nav
          ref={desktopMenuRef}
          className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 lg:flex xl:gap-1"
        >
          {inline.map((item, i) =>
            renderDesktopItem(
              item,
              item.href,
              i >= INLINE_LG ? "hidden xl:block" : "",
            ),
          )}

          {/* "More" at lg — everything past INLINE_LG */}
          {overflowLg.length > 0 &&
            renderDesktopItem(
              { label: "More", href: "#more-lg", children: overflowLg },
              "more-lg",
              "xl:hidden",
            )}

          {/* "More" at xl — everything past INLINE_XL */}
          {overflowXl.length > 0 &&
            renderDesktopItem(
              { label: "More", href: "#more-xl", children: overflowXl },
              "more-xl",
              "hidden xl:block",
            )}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/talk-to-us"
          className="group hidden shrink-0 items-center gap-2 whitespace-nowrap rounded-full bg-[#ff0000] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_6px_20px_rgba(255,0,0,0.3)] transition-all duration-300 hover:bg-[#e60000] hover:shadow-[0_8px_28px_rgba(255,0,0,0.45)] lg:inline-flex"
        >
          Talk to us
          <Arrow className="transition-transform duration-300 group-hover:translate-x-0.5" />
        </Link>

        {/* Mobile toggle: burger <-> X */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-900 transition-colors hover:bg-slate-100 lg:hidden"
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-[1.5px] w-5 bg-current transition-transform duration-300 ease-out ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-[1.5px] w-5 bg-current transition-opacity duration-200 ease-out ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] h-[1.5px] w-5 bg-current transition-transform duration-300 ease-out ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile menu content */}
      <div
        className={`relative flex flex-1 flex-col overflow-y-auto px-6 pb-8 lg:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <nav className="mt-4 flex flex-col">
          {ITEMS.map((link, i) => {
            const hasChildren = !!link.children?.length;
            const isOpen = openMobileMenu === link.href;
            const active = isActive(link.href);
            // Cap the stagger so long menus don't take forever to appear
            const delay = {
              transitionDelay: open ? `${150 + Math.min(i, 8) * 50}ms` : "0ms",
            };
            const num = String(i + 1).padStart(2, "0");

            const row = `flex w-full items-baseline gap-4 py-5 text-left text-[28px] leading-none tracking-tight transition-colors ${
              active || isOpen ? "text-slate-900" : "text-slate-500"
            }`;

            const numEl = (
              <span
                className={`text-[13px] font-medium tabular-nums tracking-widest ${
                  active || isOpen ? "text-[#ff0000]" : "text-slate-400"
                }`}
              >
                {num}
              </span>
            );

            if (!hasChildren) {
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  style={delay}
                  className={`border-b border-slate-200 transition-all duration-500 ease-out ${
                    open
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  }`}
                >
                  <span className={row}>
                    {numEl}
                    {link.label}
                  </span>
                </Link>
              );
            }

            return (
              <div
                key={link.href}
                style={delay}
                className={`border-b border-slate-200 transition-all duration-500 ease-out ${
                  open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenMobileMenu((v) =>
                      v === link.href ? null : link.href,
                    )
                  }
                  aria-expanded={isOpen}
                  className={`${row} items-center justify-between`}
                >
                  <span className="flex items-baseline gap-4">
                    {numEl}
                    {link.label}
                  </span>
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-full border transition-colors duration-300 ${
                      isOpen
                        ? "border-[#ff0000] bg-[#ff0000] text-white"
                        : "border-slate-200 text-slate-500"
                    }`}
                  >
                    <Chevron open={isOpen} />
                  </span>
                </button>

                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="mb-6 ml-7 flex flex-col border-l border-slate-200 pl-6">
                      {link.children!.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className={`flex items-center justify-between py-3 text-[20px] font-medium transition-colors ${
                            isActive(child.href)
                              ? "text-slate-900"
                              : "text-slate-500 active:text-slate-900"
                          }`}
                        >
                          {child.label}
                          <Arrow className="text-[#ff0000]" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </nav>

        {/* Mobile CTA */}
        <div
          style={{
            transitionDelay: open
              ? `${150 + Math.min(ITEMS.length, 8) * 50}ms`
              : "0ms",
          }}
          className={`mt-auto pt-10 transition-all duration-500 ease-out ${
            open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <p className="mb-4 text-sm text-slate-500">
            Have a project in mind? Let&apos;s build it together.
          </p>
          <Link
            href="/talk-to-us"
            onClick={() => setOpen(false)}
            className="group flex w-full items-center justify-between rounded-2xl bg-[#ff0000] px-6 py-4 text-[18px] font-semibold text-white shadow-[0_10px_30px_rgba(255,0,0,0.3)] transition-colors hover:bg-[#e60000]"
          >
            Talk to us
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover:translate-x-1">
              <Arrow />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}