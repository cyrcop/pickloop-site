"use client";

import { QrCode, Box, CheckCircle2 } from "lucide-react";

export default function Steps() {
  const steps = [
    {
      n: 1,
      title: "Scannez",
      text:
        "Repérez le casier sur l’appli ou via QR ; identification sur la console centrale.",
      Icon: QrCode,
    },
    {
      n: 2,
      title: "Prenez l’objet",
      text:
        "Ouverture du casier attribué. Photo/vidéo obligatoire à la prise.",
      Icon: Box,
    },
    {
      n: 3,
      title: "Rendez-le",
      text:
        "Déposez l’objet, photo/vidéo retour, reçu & évaluation – maintenance assurée par Pickloop.",
      Icon: CheckCircle2,
    },
  ];

  return (
    <section
      id="fonctionnement"
      aria-label="Fonctionnement"
      className="py-20 px-6 bg-[var(--fond)] text-[var(--ink)]"
    >
      <div className="grid gap-6 md:grid-cols-3">
        {steps.map(({ n, title, text, Icon }) => (
          <article
            key={n}
            className="rounded-2xl border border-[var(--border)] bg-white shadow-sm hover:shadow-lg transition-all duration-200 p-8"
          >
            {/* Badge + icône */}
            <div className="flex items-center gap-3 mb-2">
              <span className="badge shrink-0">{n}</span>
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent)]/18 text-[var(--vert)]">
                <Icon size={22} strokeWidth={2.2} />
              </div>
            </div>

            <h4 className="mt-1 text-lg font-semibold text-[var(--vert)]">
              {title}
            </h4>
            <p className="mt-2 text-[var(--muted)] leading-relaxed">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
