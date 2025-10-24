"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll(); // état correct si on arrive ancré
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={
        scrolled
          ? "header scrolled"
          : "header header--over-hero"
      }
    >
      <nav className="nav" aria-label="Navigation principale">
        <a href="/" className="brand" aria-label="Accueil Pickloop">
          {/* Logo mot-symbole sans slogan */}
<img
  src={scrolled ? "/logo-wordmark.png" : "/logo-wordmark-creme.png"}
  alt="Pickloop"
  className="brand-logo"
/>
        </a>

        <div className="nav-links">
          <a
            href="#promesses"
            className={
              scrolled
                ? "text-[var(--ink)] hover:text-[var(--vert)] font-bold transition-colors"
                : undefined
            }
          >
            Bénéfices
          </a>
          <a
            href="#fonctionnement"
            className={
              scrolled
                ? "text-[var(--ink)] hover:text-[var(--vert)] font-bold transition-colors"
                : undefined
            }
          >
            Fonctionnement
          </a>
          <a
            href="#contact"
            className={
              scrolled
                ? "text-[var(--ink)] hover:text-[var(--vert)] font-bold transition-colors"
                : undefined
            }
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
