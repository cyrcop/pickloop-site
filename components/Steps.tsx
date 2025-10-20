"use client";

import Image from "next/image";
import { QrCode, PackageOpen, CheckCircle2 } from "lucide-react";

const STEPS = [
  {
    n: 1,
    title: "Réservez & scannez",
    text:
      "Repérez le casier sur l’appli ou via QR ; identification sur la console centrale.",
    image: "/steps/scan.png",
    Icon: QrCode,
  },
  {
    n: 2,
    title: "Prenez l’objet",
    text:
      "Ouverture du casier attribué. Photo/vidéo obligatoire à la prise.",
    image: "/steps/take.png",
    Icon: PackageOpen,
  },
  {
    n: 3,
    title: "Rendez-le",
    text:
      "Déposez l’objet, photo/vidéo retour, reçu & évaluation – maintenance assurée par Pickloop.",
    image: "/steps/return.png",
    Icon: CheckCircle2,
  },
];

export default function Steps() {
  return (
    <section
      id="fonctionnement"
      aria-label="Fonctionnement"
      className="py-24 bg-[var(--fond)] text-[var(--ink)]"
    >
      <div className="w-[min(1200px,92vw)] mx-auto px-6">
        {/* Titre */}
        <header className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--vert)]">
            Comment ça marche
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded bg-[var(--accent)]/70" />
        </header>

        {/* === GRILLE ROBUSTE (1 col → 3 cols) === */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* ligne connectrice (desktop) */}
          <div
            className="hidden md:block absolute left-0 right-0"
            style={{ top: 110, height: 3, backgroundColor: "rgba(142,217,161,0.35)" }}
          />

          {STEPS.map(({ n, title, text, image, Icon }, i) => (
            <article
              key={n}
              className="relative flex flex-col items-center text-center"
            >
              {/* Image : wrapper sûr (position:relative + hauteur fixe) */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  maxWidth: 360,
                  height: 225, // ~16:10
                  border: "1px solid var(--border)",
                  borderRadius: 16,
                  overflow: "hidden",
                  background: "#fff",
                  boxShadow: "0 6px 24px rgba(0,0,0,.08)",
                  margin: "0 auto",
                }}
              >
                <Image
                  src={image}
                  alt={title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: "cover" }}
                  priority={n === 1}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(0,0,0,.35), rgba(0,0,0,.1) 50%, rgba(0,0,0,0))",
                  }}
                />
              </div>

              {/* Icône ronde */}
              <div className="relative -mt-9 z-10 flex items-center justify-center w-20 h-20 rounded-full bg-[var(--accent)] text-[var(--vert)] shadow-lg ring-4 ring-white">
                <Icon size={40} strokeWidth={2.2} />
              </div>

              <span className="mt-2 text-xs font-bold tracking-wide text-[var(--vert)]/80 uppercase">
                Étape {n}
              </span>
              <h3 className="mt-1 text-xl font-semibold text-[var(--vert)]">
                {title}
              </h3>
              <p className="mt-2 text-[var(--muted)] leading-relaxed max-w-[320px]">
                {text}
              </p>

              {/* flèche de liaison (desktop) */}
              {i < STEPS.length - 1 && (
                <svg
                  className="hidden md:block absolute"
                  style={{
                    top: 104,
                    right: "-12%",
                    width: "24%",
                    height: 24,
                  }}
                  viewBox="0 0 100 6"
                  preserveAspectRatio="none"
                >
                  <line
                    x1="0"
                    y1="3"
                    x2="92"
                    y2="3"
                    stroke="#8ED9A1"
                    strokeWidth="3"
                    strokeDasharray="6 6"
                    strokeLinecap="round"
                  />
                  <polygon points="92,0 100,3 92,6" fill="#8ED9A1" />
                </svg>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
