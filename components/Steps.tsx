"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { QrCode, PackageOpen, CheckCircle2 } from "lucide-react";

type Step = {
  n: number;
  title: string;
  text: string;
  image: string; // /public/steps/*.png
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

// Variants pour l'animation en cascade
const container = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.12, when: "beforeChildren" },
  },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.36, ease: "easeOut" } },
};

export default function Steps() {
  return (
    <section
      id="fonctionnement"
      aria-label="Fonctionnement"
      className="relative py-24 bg-[var(--fond)] text-[var(--ink)]"
    >
      <div className="w-[min(1200px,92vw)] mx-auto px-6">
        {/* Titre */}
        <header className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--vert)]">
            Comment ça marche
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded bg-[var(--accent)]/70" />
        </header>

        {/* Timeline */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
          className="relative flex flex-col md:flex-row items-stretch md:items-start justify-between gap-14 md:gap-6"
        >
          {/* Ligne + flèches (desktop) */}
          <div className="hidden md:block absolute top-[92px] left-0 right-0 h-[3px] bg-[var(--accent)]/35" />
          {/* petites flèches au milieu de chaque segment */}
          <div className="hidden md:flex absolute top-[80px] left-1/3 -translate-x-1/2 text-[var(--accent)]">➜</div>
          <div className="hidden md:flex absolute top-[80px] left-2/3 -translate-x-1/2 text-[var(--accent)]">➜</div>

          {STEPS.map(({ n, title, text, image, Icon }) => (
            <motion.div
              key={n}
              variants={item}
              className="relative flex-1 flex flex-col items-center text-center"
            >
              {/* Image (taille fixe pour un rendu clean) */}
              <div className="relative w-full max-w-[340px] aspect-[16/10] overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-sm hover:shadow-xl transition-all duration-300">
                <Image
                  src={image}
                  alt={title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                  priority={n === 1}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
              </div>

              {/* Icône ronde sous l'image */}
              <div className="relative -mt-9 z-10 flex items-center justify-center w-20 h-20 rounded-full bg-[var(--accent)] text-[var(--vert)] shadow-lg ring-4 ring-white">
                <Icon size={40} strokeWidth={2.2} />
              </div>

              {/* Méta + texte */}
              <span className="mt-2 text-xs font-bold tracking-wide text-[var(--vert)]/80 uppercase">
                Étape {n}
              </span>
              <h3 className="mt-1 text-xl font-semibold text-[var(--vert)]">
                {title}
              </h3>
              <p className="mt-2 text-[var(--muted)] leading-relaxed max-w-[320px]">
                {text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
