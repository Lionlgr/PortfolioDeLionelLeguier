"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { cn } from "@/lib/utils";
import { LanguageToggle } from "./ui/LanguageToggle";

const navItems = [
  { id: "projects", key: "projects" },
  { id: "experience", key: "experience" },
  { id: "stack", key: "stack" },
  { id: "education", key: "education" },
  { id: "contact", key: "contact" },
] as const;

export function Header() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
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

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "border-b border-zinc-900/80 glass" : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 md:px-8">
        <a
          href="#top"
          className="group flex items-center gap-2.5 font-mono text-sm font-medium text-zinc-100"
        >
          <span className="grid size-7 place-items-center rounded-md border border-zinc-800 bg-zinc-950 text-[11px] font-semibold text-cyan-300 transition-colors group-hover:border-cyan-500/40">
            LL
          </span>
          <span className="hidden sm:inline">Lionel Leguier</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="rounded-md px-3 py-1.5 text-sm text-zinc-400 transition-colors hover:bg-zinc-900/60 hover:text-zinc-100"
            >
              {t.nav[item.key]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageToggle />
          <button
            type="button"
            className="rounded-md border border-zinc-800 bg-zinc-950/60 p-2 text-zinc-300 transition-colors hover:border-zinc-700 hover:text-white md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {open ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-zinc-900/80 glass md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-6 py-4 md:px-8" aria-label="Mobile">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base text-zinc-300 transition-colors hover:bg-zinc-900/80 hover:text-white"
              >
                {t.nav[item.key]}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
