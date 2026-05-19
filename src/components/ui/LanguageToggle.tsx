"use client";

import { useLanguage } from "@/i18n/LanguageProvider";
import { cn } from "@/lib/utils";

export function LanguageToggle({ className }: { className?: string }) {
  const { locale, setLocale } = useLanguage();
  return (
    <div
      className={cn(
        "relative inline-flex items-center rounded-full border border-zinc-800 bg-zinc-950/70 p-0.5 text-xs font-medium",
        className,
      )}
      role="group"
      aria-label="Language switcher"
    >
      {(["fr", "en"] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLocale(l)}
          aria-pressed={locale === l}
          className={cn(
            "relative z-10 rounded-full px-2.5 py-1 uppercase tracking-wider transition-colors",
            locale === l ? "text-zinc-950" : "text-zinc-400 hover:text-zinc-200",
          )}
        >
          {l}
        </button>
      ))}
      <span
        aria-hidden
        className={cn(
          "absolute top-0.5 bottom-0.5 w-[calc(50%-2px)] rounded-full bg-zinc-100 transition-transform duration-300",
          locale === "en" ? "translate-x-[calc(100%+2px)]" : "translate-x-0",
        )}
      />
    </div>
  );
}
