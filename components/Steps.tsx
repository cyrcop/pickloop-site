"use client";

import Image from "next/image";
import { QrCode, PackageOpen, CheckCircle2 } from "lucide-react";

type Step = {
  n: number;
  title: string;
  text: string;
  image: string;
  Icon: any;
};

const STEPS: Step[] = [
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
      className="relative py-24 bg-[var(--fond)] text-[var(--ink)]"
    >
      <div className="w-[min(1200px,92vw)] mx-auto px-4">
        {/* En-tête */}
        <header className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--vert)]">
            Comment ça marche
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded bg-[var(--accent)]/70" />
        </header>

        {/* Grille des étapes */}
        <div className="grid gap-8 md:grid-cols-3">
          {STEPS.map(({ n, title, text, image, Icon }) => (
            <article
              key={n}
              className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Image d’arrière-plan */}
              <div className="relative w-full" style={{ aspectRatio: "3 / 2" }}>
                <Image
                  src={image}
                  alt={title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                  priority={n === 1}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
                {/* Badge numéro */}
                <span className="absolute top-4 left-4 inline-flex items-center justify-center w-11 h-11 rounded-full bg-[var(--vert)] text-white font-extrabold shadow-md">
                  {n}
                </span>
                {/* Icône fixée */}
                <div className="absolute -bottom-6 left-6 flex items-center justify-center w-16 h-16 rounded-2xl bg-[var(--accent)]/90 text-[var(--vert)] shadow-lg ring-4 ring-white">
                  <Icon
                    size={42}
                    strokeWidth={2.2}
                    className="block w-10 h-10"
                  />
                </div>
              </div>

              {/* Texte */}
              <div className="pt-10 px-7 pb-7">
                <h3 className="text-xl font-semibold text-[var(--vert)]">
                  {title}
                </h3>
                <p className="mt-2 text-[var(--muted)] leading-relaxed">
                  {text}
                </p>
                <div className="mt-6 h-[3px] w-0 bg-[var(--accent)] transition-all duration-300 group-hover:w-24" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
