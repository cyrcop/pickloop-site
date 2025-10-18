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
import { useEffect } from "react";

export default function Header(){ 
  useEffect(() => {
    const el = document.querySelector('.header');
    if(!el) return;
    const onScroll = () => {
      if(window.scrollY > 20) el.classList.add('scrolled');
      else el.classList.remove('scrolled');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    /* ton header existant */
  );
}
