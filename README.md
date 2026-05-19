# Portfolio — Lionel Leguier

Portfolio personnel de Lionel Leguier, Développeur Fullstack (Python / React).

Construit avec **Next.js 16**, **Tailwind CSS v4** et **Framer Motion**. Bilingue FR / EN avec dark mode.

## Stack

- **Framework :** Next.js 16 (App Router) + TypeScript
- **Style :** Tailwind CSS v4 + design system custom
- **Animations :** Framer Motion
- **Icônes :** lucide-react
- **i18n :** Provider React custom (FR / EN)
- **Déploiement :** Vercel

## Développement

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm build        # build de production
pnpm start        # serveur de production
```

## Structure

```
src/
├── app/                # Routes Next.js (App Router)
│   ├── layout.tsx      # Layout + metadata SEO
│   ├── page.tsx        # Page d'accueil
│   ├── globals.css     # Design tokens Tailwind v4
│   ├── icon.tsx        # Favicon dynamique
│   ├── opengraph-image.tsx
│   ├── sitemap.ts
│   └── robots.ts
├── components/         # Sections + UI
├── i18n/               # Messages FR/EN + LanguageProvider
└── lib/                # Utilitaires (cn, etc.)
```

## Contact

- Email : [lionelleguier@hotmail.fr](mailto:lionelleguier@hotmail.fr)
- LinkedIn : [linkedin.com/in/lionel-leguier](https://linkedin.com/in/lionel-leguier)
- GitHub : [github.com/Lionlgr](https://github.com/Lionlgr)
