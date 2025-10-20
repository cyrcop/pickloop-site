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
      className="promises grid gap-6 md:grid-cols-2 lg:grid-cols-4 py-20 px-6 bg-[var(--fond)] text-[var(--ink)]"
    >
      {items.map((it, i) => (
        <article
          key={i}
          className="card flex flex-col items-center text-center rounded-2xl border border-[var(--border)] bg-[var(--gris)] shadow-sm hover:shadow-lg hover:border-[var(--accent)] transition-all duration-200 p-8"
        >
          <h3 className="text-lg font-semibold text-[var(--vert)] mb-2">
            {it.title}
          </h3>
          <p className="text-[var(--muted)] text-sm leading-relaxed max-w-[280px]">
            {it.text}
          </p>
        </article>
      ))}
    </section>
  );
}
