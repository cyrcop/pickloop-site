"use client";

import { QrCode, PackageOpen, CheckCircle2 } from "lucide-react";

type Step = {
  n: number;
  title: string;
  text: string;
  Icon: any;
  // Optionnel : remplace le dégradé par une image si tu en as une
  // ex: "/steps/scan.jpg"
  image?: string;
};

const STEPS: Step[] = [
  {
    n: 1,
    title: "Scannez",
    text:
      "Repérez le casier sur l’appli ou via QR ; identification sur la console centrale.",
    Icon: QrCode,
    // image: "/steps/scan.jpg",
  },
  {
    n: 2,
    title: "Prenez l’objet",
    text:
      "Ouverture du casier attribué. Photo/vidéo obligatoire à la prise.",
    Icon: PackageOpen,
    // image: "/steps/take.jpg",
  },
  {
    n: 3,
    title: "Rendez-le",
    text:
      "Déposez l’objet, photo/vidéo retour, reçu & évaluation – maintenance assurée par Pickloop.",
    Icon: CheckCircle2,
    // image: "/steps/return.jpg",
  },
];

export default function Steps() {
  return (
    <section
      id="fonctionnement"
      aria-label="Fonctionnement"
      className="py-24 bg-[var(--fond)] text-[var(--ink)]"
    >
      <div className="w-[min(1200px,92vw)] mx-auto px-4">
        <header className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--vert)]">
            Comment ça marche
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded bg-[var(--accent)]/70" />
        </header>

        <div className="grid gap-8 md:grid-cols-3">
          {STEPS.map(({ n, title, text, Icon, image }) => (
            <article
              key={n}
              className="group rounded-2xl overflow-hidden border border-[var(--border)] bg-white shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* HEADER VISUEL */}
              <div
                className="relative h-56 md:h-64 overflow-hidden"
                style={{
                  background: image
                    ? `url(${image}) center/cover no-repeat`
                    : `radial-gradient(120% 80% at 100% 0%, rgba(142,217,161,0.55) 0%, rgba(142,217,161,0.25) 35%, rgba(35,60,46,0.85) 36%, rgba(35,60,46,1) 100%)`,
                }}
              >
                {/* halo décoratif */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/10" />
                {/* Badge numéro */}
                <span className="absolute top-4 left-4 z-10 inline-flex items-center justify-center w-11 h-11 rounded-full bg-[var(--vert)] text-white font-extrabold shadow-md">
                  {n}
                </span>
                {/* Icône XXL */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute -inset-8 rounded-full bg-[var(--accent)]/15 blur-xl" />
                    <Icon
                      size={96}
                      strokeWidth={2.4}
                      className="relative text-white drop-shadow-[0_4px_20px_rgba(0,0,0,.35)]"
                    />
                  </div>
                </div>
              </div>

              {/* CONTENU */}
              <div className="p-7">
                <h3 className="text-xl font-semibold text-[var(--vert)]">
                  {title}
                </h3>
                <p className="mt-2 text-[var(--muted)] leading-relaxed">
                  {text}
                </p>

                {/* Liseré d'accent au survol */}
                <div className="mt-6 h-[3px] w-0 bg-[var(--accent)] transition-all duration-300 group-hover:w-24" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
