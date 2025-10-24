// app/about/page.tsx
export default function AboutPage() {
  return (
    <>
      {/* HERO – sobre, cohérent avec la home (fond dégradé + texte crème) */}
      <section
        className="hero relative text-[var(--light)]"
        aria-labelledby="about-hero-title"
      >
        <div className="hero-inner z-10 relative">
          {/* Logo crème sur fond sombre */}
          <img
            src="/logo-wordmark-creme.png?v=5"
            alt="Pickloop"
            className="hero-logo"
          />

          <h1 id="about-hero-title" className="font-extrabold tracking-tight text-[clamp(38px,6.5vw,72px)] leading-[1.08]">
            Une innovation française au service du quotidien
          </h1>

          <p className="subtitle max-w-[880px] mx-auto leading-relaxed">
            Porté par <strong>Kevcyr SASU</strong>, Pickloop développe un réseau de casiers connectés
            pour faciliter l’accès à des objets utiles, 24/7, de façon simple, traçable et durable.
          </p>

          <div className="cta mt-[clamp(16px,3vw,34px)] flex justify-center flex-wrap gap-4">
            <a href="/contact" className="btn">Contactez-nous</a>
            <a href="/collectivites" className="btn secondary">Solutions collectivités</a>
          </div>
        </div>

        {/* voile léger pour la lisibilité */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/5 to-black/20 pointer-events-none" />
      </section>

      {/* MISSION */}
      <section aria-labelledby="about-mission-title" className="steps-wrap">
        <header className="steps-header">
          <h2 id="about-mission-title">Notre mission</h2>
          <div className="bar" />
        </header>

        <div
          style={{ width: "min(1100px,92vw)", margin: "0 auto" }}
          className="text-[var(--ink)]"
        >
          <p className="text-[17px] leading-7">
            Pickloop propose une alternative concrète à l’achat systématique :{" "}
            <strong>emprunter ce dont on a besoin, quand on en a besoin</strong>. Nos casiers
            connectés donnent accès, en autonomie, à du matériel entretenu et traçable
            (bricolage, jardinage, sport, mobilité, objets du quotidien).
          </p>
          <p className="text-[17px] leading-7 mt-4">
            L’objectif : <strong>simplifier l’usage</strong>, <strong>prolonger la durée de vie des objets</strong> et
            <strong> réduire les contraintes</strong> pour les utilisateurs comme pour les territoires.
          </p>
        </div>
      </section>

      {/* ENTREPRISE / PILIERS KEVCYR */}
      <section aria-labelledby="about-kevcyr-title" className="steps-wrap" id="kevcyr">
        <header className="steps-header">
          <h2 id="about-kevcyr-title">Kevcyr&nbsp;SASU</h2>
          <div className="bar" />
        </header>

        <div className="promises" style={{ marginTop: 0 }}>
          <article className="card">
            <h3>Innovation pragmatique</h3>
            <p>Des solutions utiles, fiables et réplicables, pensées pour l’opérationnel.</p>
          </article>
          <article className="card">
            <h3>Écologie réaliste</h3>
            <p>Entretenir, réparer, réutiliser : prolonger la vie des objets plutôt que produire davantage.</p>
          </article>
          <article className="card">
            <h3>Service de proximité</h3>
            <p>Un modèle qui s’adapte aussi bien aux métropoles qu’aux communes les plus isolées.</p>
          </article>
        </div>
      </section>

      {/* ÉCOSYSTÈME PRODUIT – simple, factuel */}
      <section aria-labelledby="about-ecosys-title" className="steps-wrap">
        <header className="steps-header">
          <h2 id="about-ecosys-title">L’écosystème Pickloop</h2>
          <div className="bar" />
        </header>

        <div className="promises" style={{ marginTop: 0 }}>
          <article className="card">
            <h3>Application fluide</h3>
            <p>Réserver, scanner et ouvrir un casier en quelques secondes depuis son smartphone.</p>
          </article>
          <article className="card">
            <h3>Traçabilité</h3>
            <p>Photos/vidéos et horodatage possibles pour limiter les litiges et clarifier l’usage.</p>
          </article>
          <article className="card">
            <h3>Maintenance organisée</h3>
            <p>Contrôles réguliers, remplacement selon l’état réel, gestion centralisée du stock.</p>
          </article>
        </div>
      </section>

      {/* VALEURS */}
      <section aria-labelledby="about-values-title" className="steps-wrap">
        <header className="steps-header">
          <h2 id="about-values-title">Nos valeurs</h2>
          <div className="bar" />
        </header>

        <div className="promises" style={{ marginTop: 0 }}>
          <article className="card">
            <h3>Durabilité</h3>
            <p>Allonger la durée de vie des objets par l’entretien, la réparation et la réutilisation.</p>
          </article>
          <article className="card">
            <h3>Fiabilité</h3>
            <p>Usage sécurisé et transparent : les règles sont claires, les retours sont tracés.</p>
          </article>
          <article className="card">
            <h3>Accessibilité</h3>
            <p>Un service simple d’accès, disponible 24/7, pour répondre à des besoins réels.</p>
          </article>
        </div>
      </section>

      {/* CTA FINAL */}
      <section
        aria-labelledby="about-cta-title"
        className="steps-wrap"
        style={{ paddingTop: 40, paddingBottom: 100 }}
      >
        <header className="steps-header">
          <h2 id="about-cta-title">Envie d’en savoir plus&nbsp;?</h2>
          <div className="bar" />
        </header>

        <div className="cta" style={{ marginTop: 10 }}>
          <a href="/contact" className="btn">Parler à l’équipe</a>
          <a href="/collectivites" className="btn secondary">Étudier une implantation</a>
        </div>
      </section>
    </>
  );
}
