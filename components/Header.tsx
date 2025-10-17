// components/Header.tsx
export default function Header() {
  return (
    <header className="header header--over-hero">
      <nav className="nav" aria-label="Navigation principale">
        {/* Logo wordmark sans slogan */}
        <a href="/" className="brand" aria-label="Accueil Pickloop">
          <img
            src="/logo-wordmark.png"
            alt="Pickloop"
            className="brand-logo brand-logo--light"
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
