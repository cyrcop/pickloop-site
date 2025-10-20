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
      className="relative py-28 bg-[var(--fond)] text-[var(--ink)]"
    >
      <div className="w-[min(1200px,92vw)] mx-auto px-6">
        {/* ====== Titre ====== */}
        <header className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--vert)]">
            Comment ça marche
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded bg-[var(--accent)]/70" />
        </header>

        {/* ====== Ligne horizontale ====== */}
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-14 md:gap-4">
          {/* Ligne connectrice (desktop) */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-[3px] bg-[var(--accent)]/40" />

          {STEPS.map(({ n, title, text, image, Icon }, i) => (
            <div
              key={n}
              className="relative flex flex-col items-center text-center w-full md:w-1/3"
            >
              {/* Image en haut */}
              <div className="relative w-full max-w-[300px] aspect-[4/3] overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-sm hover:shadow-xl transition-all duration-300">
                <Image
                  src={image}
                  alt={title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
                {/* overlay pour la lisibilité */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
              </div>

              {/* Icône ronde superposée */}
              <div className="relative -mt-10 z-10 flex items-center justify-center w-20 h-20 rounded-full bg-[var(--accent)] text-[var(--vert)] shadow-lg ring-4 ring-white">
                <Icon size={38} strokeWidth={2.2} />
              </div>

              {/* Numéro + texte */}
              <span className="mt-2 mb-1 inline-block text-sm font-bold text-[var(--vert)] opacity-80">
                Étape {n}
              </span>
              <h3 className="text-xl font-semibold text-[var(--vert)]">
                {title}
              </h3>
              <p className="mt-2 text-[var(--muted)] leading-relaxed max-w-[280px]">
                {text}
              </p>

              {/* Flèche décorative entre étapes (desktop) */}
              {i < STEPS.length - 1 && (
                <div className="hidden md:block absolute top-[54px] right-[-10%] w-[20%] border-t-[3px] border-dashed border-[var(--accent)]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
