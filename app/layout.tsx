// app/layout.tsx
import "./globals.css";
import type { Metadata, Viewport } from "next";
import Header from "@/components/Header";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-poppins",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://pickloop.fr";

const title = "Pickloop – Louez. Utilisez. Répétez.";
const description =
  "Des casiers 24/7 pour emprunter du matériel sport, loisir, bricolage, au bon endroit, au bon moment — service clé en main pour les communes et les usagers.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: siteUrl },
  icons: [
    { rel: "icon", url: "/favicon.svg", type: "image/svg+xml" },
    { rel: "apple-touch-icon", url: "/apple-touch-icon.png" },
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Pickloop – Pick, use, loop",
    title,
    description,
    images: [{ url: "/og-default.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-default.jpg"],
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  // Primaire Pickloop 2.0
  themeColor: "#244E39",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${poppins.className} bg-[var(--fond)] text-[var(--ink)]`}>
        {/* Header gère l’affichage du logo (blanc/crème) via les PNG :
            - /logo-wordmark-blanc.png
            - /logo-wordmark-creme.png */}
        <Header />
        {children}
      </body>
    </html>
  );
}
