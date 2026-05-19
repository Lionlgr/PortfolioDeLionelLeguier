import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/i18n/LanguageProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://lionel-leguier.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Lionel Leguier — Développeur Fullstack",
    template: "%s — Lionel Leguier",
  },
  description:
    "Portfolio de Lionel Leguier, Développeur Fullstack (Python / React). Master MIAGE, alternance Vinci Energies, lauréat de hackathons européens.",
  keywords: [
    "Lionel Leguier",
    "Développeur Fullstack",
    "Fullstack Developer",
    "Python",
    "React",
    "Next.js",
    "Portfolio",
    "MIAGE",
    "Hackathon",
  ],
  authors: [{ name: "Lionel Leguier" }],
  creator: "Lionel Leguier",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    alternateLocale: "en_US",
    url: siteUrl,
    title: "Lionel Leguier — Développeur Fullstack (Python / React)",
    description:
      "Portfolio de Lionel Leguier, Développeur Fullstack. Master MIAGE, alternance Vinci Energies, lauréat de hackathons européens (Tech Europe Berlin, Paris AI Hackathon).",
    siteName: "Lionel Leguier",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lionel Leguier — Développeur Fullstack",
    description: "Portfolio de Lionel Leguier, Développeur Fullstack (Python / React).",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#09090b",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen overflow-x-hidden">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
