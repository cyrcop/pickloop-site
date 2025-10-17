// components/Hero.tsx
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        {/* Mot-symbole au-dessus du titre (blanc/crème) */}
        <img
          src="/logo-wordmark.png"
          alt="Pickloop"
          className="hero-logo hero-logo--cream"
        />

        <h1>Louez. Utilisez. Répétez.</h1>

        <p className="subtitle">
          Des casiers 24/7 pour emprunter du matériel sport &amp; loisir, au plus près des usagers.
          Service clé en main pour la commune : installation, maintenance, traçabilité et reporting d’usage.
        </p>

        <div className="cta">
          <a className="btn" href="#contact">Demander la présentation</a>
          <a className="btn secondary" href="#fonctionnement">Comment ça marche</a>
        </div>
      </div>
    </section>
  );
}
