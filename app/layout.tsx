// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://pickloop.fr";
const title = "Pickloop – Louez. Utilisez. Répétez.";
const description =
  "Des casiers 24/7 pour emprunter le bon objet, au bon endroit, au bon moment — service clé en main pour les communes et les usagers.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: siteUrl },
  icons: [
    { rel: "icon", url: "/favicon.svg", type: "image/svg+xml" },
    { rel: "icon", url: "/favicon.ico" },
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
  themeColor: "#233C2E",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
