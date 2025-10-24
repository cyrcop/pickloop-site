export default function AboutPage() {
  return (
    <>
{/* HERO VARIANT – full width + mouvement */}
<section
  className="hero relative overflow-hidden"
  style={{ padding: "96px 0" }} // le fond dégradé + full-width viennent de .hero
>
  {/* Blobs animés (décor) */}
  <div className="blob blob--1" />
  <div className="blob blob--2" />
  <div className="blob blob--3" />

  <div
    className="z-10 relative"
    style={{
      width: "min(1200px,92vw)",
      margin: "0 auto",
      display: "grid",
      gap: 24,
      gridTemplateColumns: "minmax(320px,1.15fr) minmax(300px,0.85fr)",
      alignItems: "center",
    }}
  >
    {/* Texte à gauche */}
    <div>
      <img
        src="/logo-wordmark-creme.png?v=5"
        alt="Pickloop"
        style={{ height: 64, marginBottom: 18 }}
      />
      <h1 className="font-extrabold tracking-tight" style={{ fontSize: "clamp(36px,6.5vw,64px)", lineHeight: 1.08, color: "var(--light)" }}>
        Une innovation française au service du quotidien
      </h1>
      <p className="subtitle" style={{ marginTop: 14, maxWidth: 720, color: "var(--light)" }}>
        Porté par <strong>Kevcyr SASU</strong>, Pickloop développe un réseau de casiers connectés
        pour faciliter l’accès à des objets utiles, 24/7, de façon simple, traçable et durable.
      </p>

      <div className="cta" style={{ marginTop: 26 }}>
        <a href="/collectivites" className="btn" style={{ background: "var(--vert)", color: "#fff", borderColor: "var(--vert)" }}>
          Voir les solutions collectivités
        </a>
      </div>
    </div>

    {/* Collage animé à droite */}
    <div aria-hidden="true" style={{ position: "relative", height: 420 }}>
      <div className="tilt-card float-slow" style={{
        position: "absolute", top: 0, right: 0, width: 280, height: 180,
        transform: "rotate(3deg)"
      }}>
        <img src="/steps/return.png" alt="" />
      </div>
      <div className="tilt-card float-medium" style={{
        position: "absolute", top: 110, left: 10, width: 250, height: 170,
        transform: "rotate(-6deg)"
      }}>
        <img src="/steps/scan.png" alt="" />
      </div>
      <div className="tilt-card float-fast" style={{
        position: "absolute", bottom: 0, left: 90, width: 280, height: 190
      }}>
        <img src="/steps/take.png" alt="" />
      </div>
    </div>
  </div>

  <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/5 to-black/20 pointer-events-none" />
</section>

      {/* MISSION */}
      <section aria-labelledby="about-mission-title" className="steps-wrap">
        <header className="steps-header">
          <h2 id="about-mission-title">Notre mission</h2>
          <div className="bar" />
        </header>
        <div style={{ width: "min(1100px,92vw)", margin: "0 auto" }}>
          <p className="text-[17px] leading-7">
            Pickloop propose une alternative concrète à l’achat systématique : <strong>emprunter ce dont on a besoin, quand on en a besoin</strong>.
            Nos casiers connectés donnent accès, en autonomie, à du matériel entretenu et traçable (bricolage, jardinage, sport, mobilité, objets du quotidien).
          </p>
          <p className="text-[17px] leading-7 mt-4">
            Objectif : <strong>simplifier l’usage</strong>, <strong>prolonger la durée de vie des objets</strong> et <strong>réduire les contraintes</strong> pour les utilisateurs comme pour les territoires.
          </p>
        </div>
      </section>

      {/* KEVCYR – 3 piliers */}
      <section aria-labelledby="kevcyr-title" className="steps-wrap">
        <header className="steps-header">
          <h2 id="kevcyr-title">Kevcyr SASU</h2>
          <div className="bar" />
        </header>
        <div style={{
  width: "min(1100px,92vw)", margin: "0 auto",
  display: "grid", gridTemplateColumns: "repeat(3, minmax(260px, 1fr))",
  gap: 24, justifyItems: "center"
}}>
  {[
    { t:"Innovation pragmatique", p:"Des solutions utiles, fiables et réplicables, pensées pour l’opérationnel." },
    { t:"Écologie réaliste", p:"Entretenir, réparer, réutiliser : prolonger la vie des objets plutôt que produire davantage." },
    { t:"Service de proximité", p:"Un modèle qui s’adapte aussi bien aux métropoles qu’aux communes les plus isolées." }
  ].map((c)=>(
    <article key={c.t} className="card card-soft">
      <h3>{c.t}</h3><p>{c.p}</p>
    </article>
  ))}
</div>
      </section>

      {/* ÉCOSYSTÈME – 3 blocs */}
      <section aria-labelledby="eco-title" className="steps-wrap">
        <header className="steps-header">
          <h2 id="eco-title">L’écosystème Pickloop</h2>
          <div className="bar" />
        </header>
        <div style={{
  width: "min(1100px,92vw)", margin: "0 auto",
  display: "grid", gridTemplateColumns: "repeat(3, minmax(260px, 1fr))",
  gap: 24, justifyItems: "center"
}}>
  {[
    { t:"Application fluide", p:"Réserver, scanner, ouvrir un casier en quelques secondes." },
    { t:"Traçabilité", p:"Photos/vidéos & horodatage possibles pour limiter les litiges." },
    { t:"Maintenance organisée", p:"Contrôles réguliers, remplacement selon l’état réel, gestion centralisée." }
  ].map((c)=>(
    <article key={c.t} className="card card-soft">
      <h3>{c.t}</h3><p>{c.p}</p>
    </article>
  ))}
</div>
      </section>

      {/* VALEURS */}
      <section aria-labelledby="values-title" className="steps-wrap">
        <header className="steps-header">
          <h2 id="values-title">Nos valeurs</h2>
          <div className="bar" />
        </header>
        <div style={{
  width: "min(1100px,92vw)", margin: "0 auto",
  display: "grid", gridTemplateColumns: "repeat(3, minmax(260px, 1fr))",
  gap: 24, justifyItems: "center"
}}>
  {[
    { t:"Durabilité", p:"Allonger la durée de vie des objets par l’entretien et la réutilisation." },
    { t:"Fiabilité", p:"Règles claires, retours tracés, usage apaisé." },
    { t:"Accessibilité", p:"Un service simple d’accès, disponible 24/7, pour des besoins réels." }
  ].map((c)=>(
    <article key={c.t} className="card card-soft">
      <h3>{c.t}</h3><p>{c.p}</p>
    </article>
  ))}
</div>
      </section>

      {/* CTA final – contrasté */}
      <section className="steps-wrap" style={{ paddingTop: 40, paddingBottom: 100 }}>
        <header className="steps-header">
          <h2>Envie d’en savoir plus ?</h2>
          <div className="bar" />
        </header>
        <div className="cta" style={{ marginTop: 10 }}>
          <a href="/collectivites" className="btn" style={{ background: "var(--vert)", color: "#fff", borderColor: "var(--vert)" }}>
  Étudier une implantation
</a>
        </div>
      </section>
    </>
  );
}
