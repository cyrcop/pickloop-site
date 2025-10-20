"use client";

import { motion } from "framer-motion";
import { Clock, MapPin, ShieldCheck } from "lucide-react";

const items = [
  {
    icon: Clock,
    title: "Réservation instantanée",
    text: "Scannez, prenez, utilisez. Retournez quand vous avez fini.",
  },
  {
    icon: MapPin,
    title: "Partout autour de vous",
    text: "Des casiers connectés sur sites touristiques et municipaux.",
  },
  {
    icon: ShieldCheck,
    title: "Traçabilité & sérénité",
    text: "Photos/vidéos, dépôt et historique réduisent les litiges.",
  },
];

export default function Features() {
  return (
    <section id="services" className="py-24 bg-[var(--fond)] text-[var(--ink)]">
      <div className="container mx-auto px-6">
        {/* ===== Titre section ===== */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-[var(--vert)]">
            Nos services
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded bg-[var(--accent)]/60" />
        </div>

        {/* ===== Cartes ===== */}
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((it, idx) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: idx * 0.05 }}
              className="rounded-2xl border border-[var(--border)] bg-[var(--gris)]/70 backdrop-blur-md p-8 hover:shadow-lg hover:border-[var(--accent)] transition group"
            >
              {/* Icône */}
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent)]/15 group-hover:bg-[var(--accent)]/25 text-[var(--vert)]">
                <it.icon size={26} strokeWidth={2.2} />
              </div>

              {/* Titre + texte */}
              <h3 className="text-xl font-semibold text-[var(--ink)]">
                {it.title}
              </h3>
              <p className="mt-2 text-[var(--muted)] text-sm leading-relaxed">
                {it.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
