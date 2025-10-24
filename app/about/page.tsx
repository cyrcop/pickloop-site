export default function AboutPage() {
  return (
    <>
{/* HERO VARIANT – full width + padding fluide */}
<section
  className="relative overflow-hidden"
  style={{
    background: "linear-gradient(180deg, #1A2C25 0%, var(--vert-deep) 28%, #2F6A52 56%, var(--accent) 100%)",
    color: "var(--light)",
    padding: "96px 5vw",
  }}
>
  <div
    className="z-10 relative"
    style={{
      width: "100%",
      maxWidth: "1200px",
      margin: "0 auto",
      display: "grid",
      gap: 24,
      gridTemplateColumns: "minmax(300px,1.2fr) minmax(260px,1fr)",
      alignItems: "center",
    }}
  >
    {/* Texte à gauche */}
    <div>
      <img
        src="/logo-wordmark-creme.png?v=5"
        alt="Pickloop"
        style={{ height: 64, marginBottom: 18 }} // 👈 logo plus grand
      />
      <h1 className="font-extrabold tracking-tight" style={{ fontSize: "clamp(36px,6.5vw,64px)", lineHeight: 1.08 }}>
        Une innovation française au service du quotidien
      </h1>
      <p className="subtitle" style={{ marginTop: 12, maxWidth: 720 }}>
        Porté par <strong>Kevcyr SASU</strong>, Pickloop développe un réseau de casiers connectés
        pour faciliter l’accès à des objets utiles, 24/7, de façon simple, traçable et durable.
      </p>

      <div className="cta" style={{ marginTop: 22 }}>
        <a href="/collectivites" className="btn" style={{ background: "var(--vert)", color: "#fff", borderColor: "var(--vert)" }}>
          Voir les solutions collectivités
        </a>
        {/* Bouton FAQ retiré (point 6) */}
      </div>
    </div>

    {/* Collage à droite (illustration remaniée – cf. point 4) */}
    <div aria-hidden="true" style={{ position: "relative", height: 380 }}>
      {/* Carte 1 */}
      <div style={{
        position: "absolute", top: 0, right: 10, width: 260, height: 170,
        background: "#fff", borderRadius: 16, overflow: "hidden",
        boxShadow: "0 18px 60px rgba(0,0,0,.18)", transform: "rotate(3deg)"
      }}>
        <img src="/steps/return.png" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }}/>
      </div>
      {/* Carte 2 (centrée au-dessus) */}
      <div style={{
        position: "absolute", top: 90, left: 10, width: 240, height: 160,
        background: "#fff", borderRadius: 16, overflow: "hidden",
        boxShadow: "0 18px 60px rgba(0,0,0,.18)", transform: "rotate(-6deg)"
      }}>
        <img src="/steps/scan.png" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }}/>
      </div>
      {/* Carte 3 */}
      <div style={{
        position: "absolute", bottom: 0, left: 90, width: 260, height: 180,
        background: "#fff", borderRadius: 16, overflow: "hidden",
        boxShadow: "0 18px 60px rgba(0,0,0,.18)"
      }}>
        <img src="/steps/take.png" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }}/>
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
        <div className="promises" style={{
  marginTop: 0,
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(260px, 1fr))",
  gap: 24,
  width: "min(1100px,92vw)",
  marginInline: "auto",
  justifyItems: "center"
}}>
  <article className="card" style={{ textAlign: "center" }}>
    <h3>Innovation pragmatique</h3>
    <p>Des solutions utiles, fiables et réplicables, pensées pour l’opérationnel.</p>
  </article>
  <article className="card" style={{ textAlign: "center" }}>
    <h3>Écologie réaliste</h3>
    <p>Entretenir, réparer, réutiliser : prolonger la vie des objets plutôt que produire davantage.</p>
  </article>
  <article className="card" style={{ textAlign: "center" }}>
    <h3>Service de proximité</h3>
    <p>Un modèle qui s’adapte aussi bien aux métropoles qu’aux communes les plus isolées.</p>
  </article>
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
  <article className="card" style={{ background: "#fff", textAlign: "center" }}>
    <h3>Application fluide</h3>
    <p>Réserver, scanner, ouvrir un casier en quelques secondes.</p>
  </article>
  <article className="card" style={{ background: "#fff", textAlign: "center" }}>
    <h3>Traçabilité</h3>
    <p>Photos/vidéos & horodatage possibles pour limiter les litiges.</p>
  </article>
  <article className="card" style={{ background: "#fff", textAlign: "center" }}>
    <h3>Maintenance organisée</h3>
    <p>Contrôles réguliers, remplacement selon l’état réel, gestion centralisée.</p>
  </article>
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
  <article className="card" style={{ textAlign: "center" }}>
    <h3>Durabilité</h3>
    <p>Allonger la durée de vie des objets par l’entretien et la réutilisation.</p>
  </article>
  <article className="card" style={{ textAlign: "center" }}>
    <h3>Fiabilité</h3>
    <p>Règles claires, retours tracés, usage apaisé.</p>
  </article>
  <article className="card" style={{ textAlign: "center" }}>
    <h3>Accessibilité</h3>
    <p>Un service simple d’accès, disponible 24/7, pour des besoins réels.</p>
  </article>
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
