// components/Header.tsx
export default function Header() {
  return (
    <header className="header">
      <nav className="nav" aria-label="Navigation principale">
        <a href="/" className="brand" aria-label="Accueil Pickloop">
          {/* Logo complet dans le header */}
          <img src="/logo-header.png" alt="Pickloop — Pick • Use • Loop" className="brand-logo" />
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
