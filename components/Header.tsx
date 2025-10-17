// components/Header.tsx
export default function Header() {
  return (
    <header className="header">
      <nav className="nav" aria-label="Navigation principale">
        {/* Logo complet avec slogan = image unique */}
        <a href="/" className="brand" aria-label="Accueil Pickloop">
          <img src="/logo-header.png" alt="Pickloop — Pick • Use • Loop" width={172} height={40} />
        </a>

        <div style={{display:"flex", gap:14}}>
          <a href="#promesses" className="slogan">Bénéfices</a>
          <a href="#fonctionnement" className="slogan">Fonctionnement</a>
          <a href="#contact" className="slogan">Contact</a>
        </div>
      </nav>
    </header>
  );
}
