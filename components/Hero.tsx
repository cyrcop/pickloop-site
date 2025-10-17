"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <h1>Louez. Utilisez. Répétez.</h1>
        <p className="subtitle">
          Des casiers 24/7 pour emprunter du matériel sport & loisir, au plus près des usagers.
          Service clé en main pour la commune : installation, maintenance, reporting d’usage. 
        </p>
        <div className="cta">
          <a className="btn" href="#contact">Demander la présentation</a>
          <a className="btn secondary" href="#fonctionnement">Comment ça marche</a>
        </div>
      </div>
    </section>
  );
}
