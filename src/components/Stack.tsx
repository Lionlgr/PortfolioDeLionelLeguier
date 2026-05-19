"use client";

import { motion } from "framer-motion";
import {
  Boxes,
  Code2,
  Database,
  GitBranch,
  Layout,
  Wrench,
} from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { Badge } from "./ui/Badge";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";

const groups = [
  {
    key: "backend" as const,
    icon: Code2,
    items: ["Python", "Java (JEE, Spring)", "Express.js", "API REST"],
  },
  {
    key: "frontend" as const,
    icon: Layout,
    items: ["React", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
  },
  {
    key: "databases" as const,
    icon: Database,
    items: ["SQL (SQL3 — DML / DDL / PL)", "Oracle", "MySQL", "SQLite"],
  },
  {
    key: "methods" as const,
    icon: Boxes,
    items: ["UML", "MCD Merise", "Agile", "Scrum"],
  },
  {
    key: "tools" as const,
    icon: Wrench,
    items: ["Git", "VS Code", "Eclipse", "SAP Analytics Cloud"],
  },
] as const;

export function Stack() {
  const { t, locale } = useLanguage();
  const softSkills =
    locale === "fr"
      ? "Esprit d'analyse · Résolution de problèmes · Travail en équipe · Autonomie · Rigueur · Curiosité technique"
      : "Analytical mindset · Problem-solving · Teamwork · Autonomy · Rigor · Technical curiosity";

  return (
    <section id="stack" className="relative py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Toolbox"
          title={t.stack.heading}
          subtitle={t.stack.subheading}
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, i) => {
            const Icon = g.icon;
            return (
              <motion.div
                key={g.key}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.35, delay: (i % 3) * 0.05 }}
                className="rounded-2xl border border-zinc-800/80 bg-zinc-950/60 p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="grid size-9 place-items-center rounded-lg border border-zinc-800 bg-zinc-900/70 text-cyan-300">
                    <Icon className="size-4" />
                  </span>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-zinc-300">
                    {t.stack.categories[g.key]}
                  </h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {g.items.map((it) => (
                    <Badge key={it} variant="soft">
                      {it}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            );
          })}

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.35, delay: 0.15 }}
            className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 via-zinc-950/60 to-zinc-950/60 p-6"
          >
            <div className="flex items-center gap-3">
              <span className="grid size-9 place-items-center rounded-lg border border-cyan-500/30 bg-cyan-500/10 text-cyan-300">
                <GitBranch className="size-4" />
              </span>
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-cyan-200/90">
                Soft skills
              </h3>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-zinc-300">{softSkills}</p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
