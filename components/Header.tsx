"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const base =
    scrolled
      ? "font-bold transition-colors text-[var(--ink)] hover:text-[var(--vert)]"
      : "font-bold transition-colors";
  const active = "text-[var(--light)]"; // actif sans soulignement

  return (
    <header className={scrolled ? "header scrolled" : "header header--over-hero"}>
      <nav className="nav" aria-label="Navigation principale">
        <a href="/" className="brand" aria-label="Accueil Pickloop">
          <img
            src={scrolled ? "/logo-wordmark.png?v=5" : "/logo-wordmark-creme.png?v=5"}
            alt="Pickloop"
            className="brand-logo"
          />
        </a>

        <div className="nav-links">
          <a href="/about" className={`${base} ${pathname === "/about" ? active : ""}`}>
            Qui sommes-nous
          </a>
          <a href="/#promesses" className={base}>Bénéfices</a>
          <a href="/#fonctionnement" className={base}>Fonctionnement</a>
          <a href="/#contact" className={base}>Contact</a>
        </div>
      </nav>
    </header>
  );
}
