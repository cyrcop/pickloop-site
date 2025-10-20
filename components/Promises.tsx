"use client";

import { motion } from "framer-motion";

export default function Promises() {
  const items = [
    {
      title: "Expérience 24/7",
      text: "Réservation & ouverture en autonomie – accès tous les jours.",
    },
    {
      title: "Clé en main",
      text: "Installation, maintenance, traçabilité (photos/vidéo), reporting d’usage.",
    },
    {
      title: "Démarche durable",
      text: "Moins d’achats, mutualisation et allongement de la durée de vie des objets.",
    },
    {
      title: "Attractivité du territoire",
      text: "Vidéo de mise en valeur du site et données pour piloter l’offre.",
    },
  ];

  return (
    <section
      id="promesses"
      aria-label="Bénéfices"
      className="promises py-24 px-6 bg-[var(--fond)] text-[var(--ink)]"
    >
      <header className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--vert)]">
          Nos bénéfices
        </h2>
        <div className="mx-auto mt-4 h-1 w-16 rounded bg-[var(--accent)]/70" />
      </header>

      <motion.div
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-120px" }}
        variants={{
          hidden: { opacity: 0, y: 30 },
          show: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.15, ease: "easeOut", duration: 0.6 },
          },
        }}
      >
        {items.map((it, i) => (
          <motion.article
            key={i}
            className="card flex flex-col items-center text-center rounded-2xl border border-[var(--border)] bg-[var(--gris)] shadow-sm hover:shadow-xl hover:border-[var(--accent)] transition-all duration-300 p-8"
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0 },
            }}
          >
            <h3 className="text-lg font-semibold text-[var(--vert)] mb-2">
              {it.title}
            </h3>
            <p className="text-[var(--muted)] text-sm leading-relaxed max-w-[280px]">
              {it.text}
            </p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
