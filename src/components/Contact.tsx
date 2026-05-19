"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy, Download, Mail } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { Container } from "./ui/Container";
import { GithubIcon, LinkedinIcon } from "./ui/BrandIcons";

const EMAIL = "lionelleguier@hotmail.fr";

export function Contact() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      // noop
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl border border-zinc-800/80 bg-gradient-to-br from-zinc-950 via-zinc-950/95 to-zinc-950 p-8 md:p-14"
        >
          <div
            aria-hidden
            className="absolute -right-32 -top-32 size-96 rounded-full bg-cyan-500/10 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute -bottom-40 -left-20 size-80 rounded-full bg-indigo-500/10 blur-3xl"
          />

          <div className="relative max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-400/80">
              {t.contact.heading}
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-white md:text-5xl">
              {t.contact.subheading}
            </h2>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${EMAIL}`}
                className="group inline-flex items-center gap-2 rounded-full bg-zinc-100 px-5 py-2.5 text-sm font-medium text-zinc-950 transition-colors hover:bg-white"
              >
                <Mail className="size-4" />
                {t.contact.emailMe}
              </a>
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950/60 px-5 py-2.5 text-sm font-medium text-zinc-200 transition-colors hover:border-zinc-700 hover:text-white"
              >
                {copied ? <Check className="size-4 text-cyan-300" /> : <Copy className="size-4" />}
                {copied ? t.contact.copied : t.contact.copyEmail}
              </button>
              <a
                href="/CV_Lionel_Leguier.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950/60 px-5 py-2.5 text-sm font-medium text-zinc-200 transition-colors hover:border-zinc-700 hover:text-white"
              >
                <Download className="size-4" />
                {t.contact.cv}
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-zinc-400">
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 transition-colors hover:text-zinc-200"
              >
                <Mail className="size-4" />
                {EMAIL}
              </a>
              <a
                href="https://linkedin.com/in/lionel-leguier"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-zinc-200"
              >
                <LinkedinIcon className="size-4" />
                linkedin.com/in/lionel-leguier
              </a>
              <a
                href="https://github.com/Lionlgr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-zinc-200"
              >
                <GithubIcon className="size-4" />
                github.com/Lionlgr
              </a>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
