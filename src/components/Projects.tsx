"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { Badge } from "./ui/Badge";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { GithubIcon } from "./ui/BrandIcons";

type ProjectKey = "projeqster" | "mediatheque" | "sncf" | "hex";

const projects: {
  key: ProjectKey;
  image: string;
  tech: string[];
  links: { github?: string; live?: string };
}[] = [
  {
    key: "projeqster",
    image: "/projects/projeqster.png",
    tech: ["React", "Next.js", "JavaScript", "Agile/Scrum", "Merise"],
    links: { github: "https://github.com/LionelLeguier/projeqSter" },
  },
  {
    key: "mediatheque",
    image: "/projects/mediatheque.jpg",
    tech: ["Java", "Threads", "Synchronisation", "UML"],
    links: { github: "https://github.com/LionelLeguier/Projet-Mediatheque" },
  },
  {
    key: "sncf",
    image: "/projects/sncf-map-helper.png",
    tech: ["HTML", "CSS", "JavaScript", "PHP"],
    links: {},
  },
  {
    key: "hex",
    image: "/projects/hex.jpg",
    tech: ["Java", "Algorithmes", "IA de jeu"],
    links: { github: "https://github.com/LionelLeguier/HEX" },
  },
];

export function Projects() {
  const { t } = useLanguage();

  return (
    <section className="relative py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="2022 — 2024"
          title={t.projects.heading}
          subtitle={t.projects.subheading}
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {projects.map((p, i) => {
            const data = t.projects.items[p.key];
            return (
              <motion.article
                key={p.key}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: (i % 2) * 0.05 }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-950/60 transition-colors hover:border-zinc-700"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-zinc-800/60 bg-zinc-900">
                  <Image
                    src={p.image}
                    alt={data.title}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover opacity-80 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/10 to-transparent"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-zinc-500">
                    {data.context}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold tracking-tight text-white">
                    {data.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{data.description}</p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tech.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap items-center gap-3 pt-1">
                    {p.links.github ? (
                      <a
                        href={p.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-300 transition-colors hover:text-cyan-300"
                      >
                        <GithubIcon className="size-4" />
                        {t.projects.viewCode}
                      </a>
                    ) : null}
                    {p.links.live ? (
                      <a
                        href={p.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-300 transition-colors hover:text-cyan-300"
                      >
                        <ArrowUpRight className="size-4" />
                        {t.projects.viewProject}
                      </a>
                    ) : null}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
