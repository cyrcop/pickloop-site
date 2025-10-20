export default function Steps() {
  const steps = [
    {
      n: 1,
      title: "Scannez",
      text:
        "Repérez le casier sur l’appli ou via QR ; identification sur la console centrale.",
    },
    {
      n: 2,
      title: "Prenez l’objet",
      text:
        "Ouverture du casier attribué. Photo/vidéo obligatoire à la prise.",
    },
    {
      n: 3,
      title: "Rendez-le",
      text:
        "Déposez l’objet, photo/vidéo retour, reçu & évaluation – maintenance assurée par Pickloop.",
    },
  ];

  return (
    <section
      id="fonctionnement"
      aria-label="Fonctionnement"
      className="py-20 px-6 bg-[var(--fond)] text-[var(--ink)]"
    >
      <div className="grid gap-6 md:grid-cols-3">
        {steps.map((s) => (
          <article
            key={s.n}
            className="rounded-2xl border border-[var(--border)] bg-white shadow-sm hover:shadow-lg transition-all duration-200 p-8"
          >
            <span className="badge">{s.n}</span>
            <h4 className="mt-2 text-lg font-semibold text-[var(--vert)]">
              {s.title}
            </h4>
            <p className="mt-2 text-[var(--muted)] leading-relaxed">
              {s.text}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
