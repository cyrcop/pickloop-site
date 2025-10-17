// components/Hero.tsx
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        {/* Logo au-dessus du titre */}
        <img
          src="/logo.svg"
          alt="Pickloop"
          className="hero-logo"
          width={120}
          height={120}
        />

        <h1>Louez. Utilisez. Répétez.</h1>

        <p className="subtitle">
          Des casiers 24/7 pour emprunter du matériel sport &amp; loisir, au plus
          près des usagers. Service clé en main pour la commune : installation,
          maintenance, traçabilité et reporting d’usage.
        </p>

        <div className="cta">
          <a className="btn" href="#contact">Demander la présentation</a>
          <a className="btn secondary" href="#fonctionnement">Comment ça marche</a>
        </div>
      </div>
    </section>
  );
}
