// components/Header.tsx
export default function Header() {
  return (
    <header className="header">
      <nav className="nav" aria-label="Navigation principale">
        <div className="brand">
          <img src="/logo.svg" alt="Pickloop" />
          <div>
            <div className="word">Pickloop</div>
            <div className="slogan">Pick • Use • Loop</div>
          </div>
        </div>
        <div style={{display:"flex", gap:12}}>
          <a href="#promesses" className="slogan">Bénéfices</a>
          <a href="#fonctionnement" className="slogan">Fonctionnement</a>
          <a href="#contact" className="slogan">Contact</a>
        </div>
      </nav>
    </header>
  );
}
