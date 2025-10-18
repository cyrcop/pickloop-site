// components/Header.tsx
export default function Header() {
  return (
    <header className="header header--over-hero">
      <nav className="nav" aria-label="Navigation principale">
        <a href="/" className="brand" aria-label="Accueil Pickloop">
          {/* Logo mot-symbole sans slogan */}
          <img
            src="/logo-wordmark.png"
            alt="Pickloop"
            className="brand-logo brand-logo--cream"
          />
        </a>

        <div className="nav-links">
          <a href="#promesses">Bénéfices</a>
          <a href="#fonctionnement">Fonctionnement</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    </header>
  );
}
