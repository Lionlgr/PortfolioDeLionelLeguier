"use client";

import { useLanguage } from "@/i18n/LanguageProvider";
import { Container } from "./ui/Container";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-900/80 py-10">
      <Container className="flex flex-col items-center justify-between gap-3 text-center text-xs text-zinc-500 md:flex-row md:text-left">
        <p>
          © {year} Lionel Leguier — {t.footer.rights}
        </p>
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-zinc-600">
          {t.footer.built}
        </p>
      </Container>
    </footer>
  );
}
