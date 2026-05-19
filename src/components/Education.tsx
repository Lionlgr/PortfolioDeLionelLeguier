"use client";

import { motion } from "framer-motion";
import { GraduationCap, Languages } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";

type EduKey = "master" | "licence" | "dut" | "bac";
const eduOrder: EduKey[] = ["master", "licence", "dut", "bac"];

export function Education() {
  const { t } = useLanguage();

  return (
    <section id="education" className="relative py-24 md:py-32">
      <Container>
        <SectionHeading eyebrow="2021 — 2026" title={t.education.heading} />

        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
          <ol className="space-y-4">
            {eduOrder.map((key, i) => {
              const item = t.education.items[key];
              return (
                <motion.li
                  key={key}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                  className="flex items-start gap-4 rounded-2xl border border-zinc-800/80 bg-zinc-950/60 p-5 md:p-6"
                >
                  <span className="grid size-9 shrink-0 place-items-center rounded-lg border border-zinc-800 bg-zinc-900/70 text-cyan-300">
                    <GraduationCap className="size-4" />
                  </span>
                  <div className="flex flex-1 flex-wrap items-baseline justify-between gap-2">
                    <div>
                      <h3 className="text-base font-semibold text-white md:text-lg">
                        {item.degree}
                      </h3>
                      <p className="mt-0.5 text-sm text-zinc-400">{item.school}</p>
                    </div>
                    <span className="font-mono text-xs uppercase tracking-[0.14em] text-zinc-500">
                      {item.period}
                    </span>
                  </div>
                </motion.li>
              );
            })}
          </ol>

          <motion.aside
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.35 }}
            className="rounded-2xl border border-zinc-800/80 bg-zinc-950/60 p-6"
          >
            <div className="flex items-center gap-3">
              <span className="grid size-9 place-items-center rounded-lg border border-zinc-800 bg-zinc-900/70 text-cyan-300">
                <Languages className="size-4" />
              </span>
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-zinc-300">
                {t.education.languages.heading}
              </h3>
            </div>
            <ul className="mt-5 space-y-2.5 text-sm text-zinc-300">
              {t.education.languages.items.map((l) => (
                <li key={l} className="flex items-center gap-2.5">
                  <span className="size-1.5 rounded-full bg-cyan-400/80" />
                  {l}
                </li>
              ))}
            </ul>
          </motion.aside>
        </div>
      </Container>
    </section>
  );
}
