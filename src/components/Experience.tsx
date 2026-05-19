"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";

type JobKey = "vinciData" | "vinciSupport" | "ndg";

const jobOrder: JobKey[] = ["vinciData", "vinciSupport", "ndg"];

export function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="relative py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="2023 — 2026"
          title={t.experience.heading}
          subtitle={t.experience.subheading}
        />

        <ol className="relative space-y-10 border-l border-zinc-800/70 pl-6 md:pl-10">
          {jobOrder.map((key, i) => {
            const job = t.experience.jobs[key];
            return (
              <motion.li
                key={key}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="relative"
              >
                <span
                  aria-hidden
                  className="absolute -left-[33px] top-1.5 grid size-6 place-items-center rounded-full border border-zinc-800 bg-zinc-950 md:-left-[49px]"
                >
                  <Briefcase className="size-3 text-cyan-400" />
                </span>

                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold text-white md:text-xl">{job.role}</h3>
                  <span className="font-mono text-xs uppercase tracking-[0.15em] text-zinc-500">
                    {job.period}
                  </span>
                </div>
                <p className="mt-1 text-sm text-cyan-300/90">{job.company}</p>

                <ul className="mt-4 space-y-2 text-sm text-zinc-400">
                  {job.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3 leading-relaxed">
                      <span className="mt-1.5 size-1 shrink-0 rounded-full bg-zinc-600" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
