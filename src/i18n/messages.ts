export type Locale = "fr" | "en";

export const locales: Locale[] = ["fr", "en"];
export const defaultLocale: Locale = "fr";

export const messages = {
  fr: {
    nav: {
      about: "À propos",
      projects: "Projets",
      experience: "Expérience",
      stack: "Stack",
      education: "Formation",
      contact: "Contact",
    },
    hero: {
      availability: "Disponible à partir de septembre 2026",
      title: "Lionel Leguier",
      role: "Développeur Fullstack — Python / React",
      tagline:
        "Étudiant en Master MIAGE (Valorisation et protection des données), désormais tourné vers ma passion pour la conception logicielle. Je construis des applications de bout en bout : API REST en Python ou Express.js, interfaces React/Next.js, bases SQL.",
      ctaProjects: "Voir mes projets",
      ctaCV: "Télécharger mon CV",
      location: "Saint-Maurice (94), Île-de-France",
    },
    hackathons: {
      heading: "Hackathons",
      subheading: "Deux semaines, deux victoires européennes",
      projects: {
        fixit: {
          eyebrow: "Mai 2026 · Paris AI Hackathon — Tech: Europe",
          award: "Finaliste & lauréat du challenge fal",
          title: "FixIT",
          description:
            "Prends en photo un objet cassé (écran fissuré, pneu de vélo…) et obtiens 90 s plus tard une vidéo de réparation pas-à-pas personnalisée à ton modèle exact. Conçu en 8 h.",
          details: [
            "Pipeline IA : GPT-5.5 Vision (identification modèle + localisation du défaut), Tavily (sourcing web de la procédure)",
            "fal — GPT Image 2 → Seedance 2.0 (image-to-video) par étape, Gradium pour la narration en parallèle",
          ],
        },
        iconic: {
          eyebrow: "Avril 2026 · Tech Europe Hackathon — Berlin",
          award: "Vainqueur Track Reonic · 2e au classement général sur 380+ participants",
          title: "Iconic",
          description:
            "Visualise ta maison en 3D avec panneaux solaires, pompe à chaleur, batterie et borne, personnalisés selon ton profil énergétique. Conçu en 36 h.",
          details: [
            "Reconstruction de Google Solar from scratch (algorithme propriétaire à 21 variantes)",
            "Intégration capture satellite Google + Cesium, GPT Image et fal.ai pour la génération de mesh 3D",
          ],
        },
      },
    },
    projects: {
      heading: "Projets école",
      subheading: "Une sélection de projets significatifs réalisés à l'université",
      viewProject: "Voir le projet",
      viewCode: "Voir le code",
      tags: "Stack",
      items: {
        projeqster: {
          title: "projeqSter",
          description:
            "Application web de gestion de projets et de tâches pour PME, conçue en équipe lors de la Licence 3 MIAGE. React + Next.js, modélisation Merise, sprints Agile.",
          context: "Licence 3 MIAGE · Équipe de 3",
        },
        mediatheque: {
          title: "Médiathèque concurrente",
          description:
            "Médiathèque multi-utilisateur avec gestion de l'emprunt, de la réservation et du retour, implémentée à l'aide de threads Java et synchronisation fine.",
          context: "BUT Informatique 2 · Java threads",
        },
        sncf: {
          title: "SncfMapHelper",
          description:
            "Application web d'attribution d'ouvriers sur des gares SNCF en travaux, avec carte interactive et back-office d'administration.",
          context: "BUT Informatique 2 · Équipe de 3 · Web",
        },
        hex: {
          title: "Jeu HEX",
          description:
            "Implémentation du jeu de stratégie HEX avec interface graphique et IA capable de jouer contre un humain. Algorithmes de plateau et heuristiques.",
          context: "BUT Informatique 2 · Algorithmes",
        },
      },
    },
    experience: {
      heading: "Expérience",
      subheading: "3 ans en entreprise pendant mes études",
      jobs: {
        vinciData: {
          company: "Vinci Energies — Système d'information",
          role: "Data Analyst (alternance)",
          period: "Sept. 2024 — Sept. 2026",
          bullets: [
            "Intégration, modélisation et optimisation de pipelines de données en SQL : conception de modèles, requêtes complexes, fiabilisation et automatisation",
            "Conception et déploiement d'applications décisionnelles connectées à de multiples sources de données (SAP Analytics Cloud)",
            "Recueil des besoins avec les équipes Finance et Business, traduction en spécifications techniques",
          ],
        },
        vinciSupport: {
          company: "Vinci Energies — Système d'information",
          role: "Support informatique de gestion (alternance)",
          period: "Sept. 2023 — Sept. 2024",
          bullets: [
            "Conception et mise en œuvre d'un tableau de bord pour le suivi des tickets et le référencement des anomalies",
            "Prise en charge des incidents (support N1), échange avec le support N2 et rédaction de la documentation technique",
          ],
        },
        ndg: {
          company: "Lycée Notre-Dame du Grandchamp",
          role: "Technicien informatique (stage)",
          period: "Avril — Mai 2023 · 8 semaines",
          bullets: [
            "Support utilisateurs sur environnement Windows via l'outil de ticketing Mojo Helpdesk",
            "Formation et accompagnement de deux stagiaires",
          ],
        },
      },
    },
    stack: {
      heading: "Stack technique",
      subheading: "Les outils que j'utilise au quotidien",
      categories: {
        backend: "Backend",
        frontend: "Frontend",
        databases: "Bases de données",
        methods: "Modélisation & méthodes",
        tools: "Outils",
      },
    },
    education: {
      heading: "Formation",
      items: {
        master: {
          school: "Université Paris Cité",
          degree: "Master MIAGE — Valorisation et protection des données",
          period: "2024 — 2026",
        },
        licence: {
          school: "Université Paris Cité",
          degree: "Licence 3 MIAGE",
          period: "2023 — 2024",
        },
        dut: {
          school: "Université Paris Cité",
          degree: "DUT Informatique",
          period: "2021 — 2023",
        },
        bac: {
          school: "Lycée Notre-Dame des Missions, Charenton-le-Pont (94)",
          degree: "Baccalauréat général, mention Bien",
          period: "2021",
        },
      },
      languages: {
        heading: "Langues",
        items: ["Français — langue maternelle", "Anglais — B2", "Espagnol — B1"],
      },
    },
    contact: {
      heading: "Contact",
      subheading: "À la recherche d'un poste de Développeur Fullstack à partir de septembre 2026",
      emailMe: "M'écrire",
      copyEmail: "Copier l'email",
      copied: "Copié",
      cv: "Télécharger le CV",
    },
    footer: {
      built: "Conçu et codé avec Next.js, Tailwind et beaucoup de café.",
      rights: "Tous droits réservés.",
    },
  },
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      experience: "Experience",
      stack: "Stack",
      education: "Education",
      contact: "Contact",
    },
    hero: {
      availability: "Available from September 2026",
      title: "Lionel Leguier",
      role: "Fullstack Developer — Python / React",
      tagline:
        "Master's student in MIAGE (Data valorization and protection) with a strong data background, now leaning into my passion for software design. I build end-to-end applications: REST APIs in Python or Express.js, React/Next.js interfaces, SQL databases.",
      ctaProjects: "See my projects",
      ctaCV: "Download my résumé",
      location: "Saint-Maurice (94), Île-de-France",
    },
    hackathons: {
      heading: "Hackathons",
      subheading: "Two weeks, two European wins",
      projects: {
        fixit: {
          eyebrow: "May 2026 · Paris AI Hackathon — Tech: Europe",
          award: "Finalist & winner of the fal challenge",
          title: "FixIT",
          description:
            "Take a photo of a broken object (cracked screen, bike tire…) and get a step-by-step repair video tailored to your exact model 90 s later. Built in 8 hours.",
          details: [
            "AI pipeline: GPT-5.5 Vision (model identification + defect localization), Tavily (web-sourcing the procedure)",
            "fal — GPT Image 2 → Seedance 2.0 (image-to-video) per step, Gradium for narration in parallel",
          ],
        },
        iconic: {
          eyebrow: "April 2026 · Tech Europe Hackathon — Berlin",
          award: "Reonic Track winner · 2nd overall out of 380+ participants",
          title: "Iconic",
          description:
            "Visualize your home in 3D with solar panels, heat pump, battery and EV charger, all tailored to your energy profile. Built in 36 hours.",
          details: [
            "Rebuilt Google Solar from scratch (proprietary algorithm with 21 variants)",
            "Integrated Google satellite capture + Cesium, GPT Image and fal.ai for 3D mesh generation",
          ],
        },
      },
    },
    projects: {
      heading: "University projects",
      subheading: "A selection of meaningful projects from my studies",
      viewProject: "View project",
      viewCode: "View code",
      tags: "Stack",
      items: {
        projeqster: {
          title: "projeqSter",
          description:
            "Project and task management web app for SMEs, built as a team during my MIAGE bachelor's third year. React + Next.js, Merise modeling, Agile sprints.",
          context: "Bachelor's 3 MIAGE · Team of 3",
        },
        mediatheque: {
          title: "Concurrent Library System",
          description:
            "Multi-user library system handling borrowing, reservations and returns, implemented using Java threads and fine-grained synchronization.",
          context: "BUT Computer Science Y2 · Java threads",
        },
        sncf: {
          title: "SncfMapHelper",
          description:
            "Web application to assign workers to SNCF stations under construction, with an interactive map and admin back-office.",
          context: "BUT Computer Science Y2 · Team of 3 · Web",
        },
        hex: {
          title: "HEX game",
          description:
            "Implementation of the HEX strategy game with a GUI and an AI capable of playing against a human. Board algorithms and heuristics.",
          context: "BUT Computer Science Y2 · Algorithms",
        },
      },
    },
    experience: {
      heading: "Experience",
      subheading: "3 years in industry while studying",
      jobs: {
        vinciData: {
          company: "Vinci Energies — Information Systems",
          role: "Data Analyst (apprenticeship)",
          period: "Sept. 2024 — Sept. 2026",
          bullets: [
            "Integration, modeling and optimization of SQL data pipelines: data model design, complex queries, reliability and automation",
            "Design and deployment of BI applications connected to multiple data sources (SAP Analytics Cloud)",
            "Gathered requirements with Finance and Business teams and translated them into technical specs",
          ],
        },
        vinciSupport: {
          company: "Vinci Energies — Information Systems",
          role: "IT support (apprenticeship)",
          period: "Sept. 2023 — Sept. 2024",
          bullets: [
            "Designed and shipped a dashboard for ticket tracking and anomaly indexing",
            "Handled L1 incidents, escalated to L2 and wrote the technical documentation",
          ],
        },
        ndg: {
          company: "Notre-Dame du Grandchamp High School",
          role: "IT Technician (internship)",
          period: "April — May 2023 · 8 weeks",
          bullets: [
            "End-user support on Windows via the Mojo Helpdesk ticketing tool",
            "Trained and mentored two interns",
          ],
        },
      },
    },
    stack: {
      heading: "Tech stack",
      subheading: "The tools I use daily",
      categories: {
        backend: "Backend",
        frontend: "Frontend",
        databases: "Databases",
        methods: "Modeling & methods",
        tools: "Tools",
      },
    },
    education: {
      heading: "Education",
      items: {
        master: {
          school: "Université Paris Cité",
          degree: "Master's MIAGE — Data valorization and protection",
          period: "2024 — 2026",
        },
        licence: {
          school: "Université Paris Cité",
          degree: "Bachelor's 3 MIAGE",
          period: "2023 — 2024",
        },
        dut: {
          school: "Université Paris Cité",
          degree: "Technology Degree in Computer Science",
          period: "2021 — 2023",
        },
        bac: {
          school: "Notre-Dame des Missions High School, Charenton-le-Pont (94)",
          degree: "Baccalauréat général, with honors",
          period: "2021",
        },
      },
      languages: {
        heading: "Languages",
        items: ["French — native", "English — B2", "Spanish — B1"],
      },
    },
    contact: {
      heading: "Contact",
      subheading: "Looking for a Fullstack Developer role starting September 2026",
      emailMe: "Email me",
      copyEmail: "Copy email",
      copied: "Copied",
      cv: "Download résumé",
    },
    footer: {
      built: "Designed and coded with Next.js, Tailwind and a lot of coffee.",
      rights: "All rights reserved.",
    },
  },
} as const;

export type Messages = (typeof messages)[Locale];
