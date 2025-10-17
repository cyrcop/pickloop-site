export default function Steps() {
  const steps = [
    {
      n: 1, title: "Scannez", text:
      "Repérez le casier sur l’appli ou via QR ; identification sur la console centrale."
    },
    {
      n: 2, title: "Prenez l’objet", text:
      "Ouverture du casier attribué. Photo/vidéo obligatoire à la prise."
    },
    {
      n: 3, title: "Rendez-le", text:
      "Déposez l’objet, photo/vidéo retour, reçu & évaluation – maintenance assurée par Pickloop."
    },
  ];
  return (
    <section className="steps" id="fonctionnement" aria-label="Fonctionnement">
      {steps.map(s => (
        <article className="step" key={s.n}>
          <span className="badge">{s.n}</span>
          <h4>{s.title}</h4>
          <p>{s.text}</p>
        </article>
      ))}
    </section>
  );
}
