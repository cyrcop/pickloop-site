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
    <section className="promises" id="promesses" aria-label="Bénéfices">
      {items.map((it, i) => (
        <article className="card" key={i}>
          <h3>{it.title}</h3>
          <p>{it.text}</p>
        </article>
      ))}
    </section>
  );
}
