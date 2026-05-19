"use client";

import { motion } from "framer-motion";
import { Award, Trophy } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { Badge } from "./ui/Badge";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";

const hackathons = [
  {
    key: "iconic" as const,
    icon: Trophy,
    accent: "from-amber-400 to-orange-500",
    rank: "1st",
    rankLabel: "Track Reonic · 2nd overall",
    rankLabelFr: "Track Reonic · 2e général",
    tech: ["Next.js", "Cesium", "Google Solar API", "GPT Image", "fal.ai", "3D mesh"],
  },
  {
    key: "fixit" as const,
    icon: Award,
    accent: "from-cyan-400 to-indigo-500",
    rank: "Winner",
    rankLabel: "fal Challenge",
    rankLabelFr: "Challenge fal",
    tech: ["GPT-5.5 Vision", "Tavily", "fal", "GPT Image 2", "Seedance 2.0", "Gradium"],
  },
] as const;

export function Hackathons() {
  const { t, locale } = useLanguage();

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="2026"
          title={t.hackathons.heading}
          subtitle={t.hackathons.subheading}
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {hackathons.map((hk, i) => {
            const project = t.hackathons.projects[hk.key];
            const Icon = hk.icon;
            return (
              <motion.article
                key={hk.key}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-950/60 p-6 md:p-8"
              >
                <div
                  aria-hidden
                  className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${hk.accent} opacity-60`}
                />
                <div
                  aria-hidden
                  className={`absolute -right-20 -top-20 size-60 rounded-full bg-gradient-to-br ${hk.accent} opacity-[0.06] blur-3xl transition-opacity duration-500 group-hover:opacity-[0.12]`}
                />

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.16em] text-zinc-500">
                      {project.eyebrow}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-3xl">
                      {project.title}
                    </h3>
                  </div>
                  <div
                    className={`flex shrink-0 items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950 px-3 py-1.5`}
                  >
                    <Icon className="size-4 text-amber-300" />
                    <span className="text-xs font-medium text-zinc-200">{hk.rank}</span>
                  </div>
                </div>

                <p className="mt-2 text-sm font-medium text-cyan-300/90">{project.award}</p>

                <p className="mt-5 text-base leading-relaxed text-zinc-300">{project.description}</p>

                <ul className="mt-5 space-y-2.5 text-sm text-zinc-400">
                  {project.details.map((d, j) => (
                    <li key={j} className="flex gap-3">
                      <span className="mt-1.5 size-1 shrink-0 rounded-full bg-cyan-400/80" />
                      <span className="leading-relaxed">{d}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {hk.tech.map((tag) => (
                    <Badge key={tag} variant="soft">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="sr-only">{locale === "fr" ? hk.rankLabelFr : hk.rankLabel}</div>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
