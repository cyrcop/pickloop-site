export default function Hero() {
  return (
    <section
      className="hero relative text-white"
      id="hero"
      style={{
        background:
          "linear-gradient(180deg, #1A2C25 0%, var(--vert-deep) 28%, #2F6A52 56%, var(--accent) 100%)",
      }}
    >
      <div className="hero-inner z-10 relative">
        {/* Logo crème (fond transparent) */}
        <img
          src="/logo-wordmark-creme.png"   // <- crème #FAF8F4
          alt="Pickloop"
          className="hero-logo"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />

        {/* Titre principal */}
        <h1 className="font-extrabold tracking-tight text-[clamp(42px,8vw,96px)] leading-[1.05]">
          Louez. Utilisez. Répétez.
        </h1>

        {/* Sous-titre */}
        <p className="subtitle max-w-[880px] mx-auto text-[clamp(16px,2.1vw,22px)] opacity-95 leading-relaxed">
          Des casiers 24/7 pour emprunter du matériel <strong>sport &amp; loisir</strong>, au plus
          près des usagers. Service clé en main pour les communes : installation, maintenance,
          traçabilité et reporting d’usage.
        </p>

        {/* Appels à l’action */}
        <div className="cta mt-[clamp(16px,3vw,34px)] flex justify-center flex-wrap gap-4">
          <a
            href="#contact"
            className="btn bg-white text-[var(--vert)] border border-white/40 hover:bg-[var(--accent)] hover:text-[#111] hover:border-[var(--accent)] transition-all"
          >
            Demander la présentation
          </a>
          <a
            href="#fonctionnement"
            className="btn secondary bg-transparent border border-white/60 text-white hover:bg-white/10 hover:border-white transition-all"
          >
            Comment ça marche
          </a>
        </div>
      </div>

      {/* Dégradé d’ombre doux en superposition (facilite lecture du texte) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/5 to-black/20 pointer-events-none" />
    </section>
  );
}
