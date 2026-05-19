"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download, MapPin, Sparkles } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { Container } from "./ui/Container";
import { GithubIcon, LinkedinIcon } from "./ui/BrandIcons";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
      <div aria-hidden className="ring-grid absolute inset-0 -z-10" />

      <Container>
        <div className="grid items-center gap-12 md:grid-cols-[1fr_auto] md:gap-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 px-3 py-1 text-xs font-medium text-cyan-300"
            >
              <Sparkles className="size-3.5" />
              {t.hero.availability}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mt-5 text-balance text-4xl font-semibold tracking-tight md:text-6xl"
            >
              <span className="text-gradient">{t.hero.title}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-3 font-mono text-sm uppercase tracking-[0.18em] text-cyan-400/90 md:text-base"
            >
              {t.hero.role}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-6 max-w-xl text-balance text-base leading-relaxed text-zinc-400 md:text-lg"
            >
              {t.hero.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-zinc-100 px-5 py-2.5 text-sm font-medium text-zinc-950 transition-colors hover:bg-white"
              >
                {t.hero.ctaProjects}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="/CV_Lionel_Leguier.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950/50 px-5 py-2.5 text-sm font-medium text-zinc-200 transition-colors hover:border-zinc-700 hover:text-white"
              >
                <Download className="size-4" />
                {t.hero.ctaCV}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-zinc-500"
            >
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="size-4" />
                {t.hero.location}
              </span>
              <a
                href="https://github.com/Lionlgr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-zinc-200"
              >
                <GithubIcon className="size-4" />
                github.com/Lionlgr
              </a>
              <a
                href="https://linkedin.com/in/lionel-leguier"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-zinc-200"
              >
                <LinkedinIcon className="size-4" />
                linkedin.com/in/lionel-leguier
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative mx-auto"
          >
            <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-cyan-500/30 via-indigo-500/20 to-transparent blur-2xl" />
            <div className="relative size-44 overflow-hidden rounded-full border border-zinc-800 bg-zinc-950 ring-4 ring-zinc-950 md:size-56">
              <Image
                src="/avatar.png"
                alt="Lionel Leguier"
                fill
                priority
                sizes="(min-width: 768px) 224px, 176px"
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
