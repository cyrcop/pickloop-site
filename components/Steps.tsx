"use client";

import Image from "next/image";
import { QrCode, PackageOpen, CheckCircle2 } from "lucide-react";

const STEPS = [
  {
    n: 1,
    title: "Réservez & scannez",
    text:
      "Repérez le casier sur l’appli ou via QR ; identification sur la console centrale.",
    image: "/steps/scan.png",
    Icon: QrCode,
  },
  {
    n: 2,
    title: "Prenez l’objet",
    text:
      "Ouverture du casier attribué. Photo/vidéo obligatoire à la prise.",
    image: "/steps/take.png",
    Icon: PackageOpen,
  },
  {
    n: 3,
    title: "Rendez-le",
    text:
      "Déposez l’objet, photo/vidéo retour, reçu & évaluation – maintenance assurée par Pickloop.",
    image: "/steps/return.png",
    Icon: CheckCircle2,
  },
];

export default function Steps() {
  return (
    <section id="fonctionnement" aria-label="Fonctionnement" className="steps-wrap">
      <header className="steps-header">
        <h2>Comment ça marche</h2>
        <div className="bar" />
      </header>

      {/* Grille 1 col (mobile) → 3 cols (≥768px) */}
      <div className="steps-grid">
        {STEPS.map(({ n, title, text, image, Icon }, i) => (
          <article key={n} className="step-card">
            {/* Image */}
            <div className="img-wrap">
              <Image
                src={image}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ objectFit: "cover" }}
                priority={n === 1}
              />
              <div className="img-overlay" />
            </div>

            {/* Icône ronde */}
            <div className="round-icon">
              <Icon size={40} strokeWidth={2.2} />
            </div>

            <span className="kicker">Étape {n}</span>
            <h3>{title}</h3>
            <p>{text}</p>

            {/* Connecteur fléché entre cartes (desktop uniquement) */}
            {i < STEPS.length - 1 && (
              <svg className="connector" viewBox="0 0 100 6" preserveAspectRatio="none">
                <line x1="0" y1="3" x2="92" y2="3" stroke="#8ED9A1" strokeWidth="3" strokeDasharray="6 6" strokeLinecap="round" />
                <polygon points="92,0 100,3 92,6" fill="#8ED9A1" />
              </svg>
            )}
          </article>
        ))}
      </div>

      <style jsx>{`
        /* Section */
        .steps-wrap{
          padding: 96px 24px;
          background: var(--fond);
          color: var(--ink);
          width: min(1200px, 92vw);
          margin: 0 auto;
        }
        .steps-header{ text-align:center; margin-bottom: 64px; }
        .steps-header h2{
          margin:0;
          font-weight: 800;
          font-size: clamp(28px, 3.2vw, 40px);
          letter-spacing: -0.02em;
          color: var(--vert);
        }
        .steps-header .bar{
          width: 64px; height: 4px; border-radius: 6px;
          margin: 14px auto 0;
          background: rgba(142,217,161,.7); /* --accent */
        }

        /* Grille PURE CSS (fiable sans Tailwind) */
        .steps-grid{
          display: grid;
          grid-template-columns: 1fr;
          gap: 48px;
          position: relative;
        }
        @media (min-width: 768px){
          .steps-grid{
            grid-template-columns: repeat(3, 1fr);
            gap: 48px;
          }
        }

        .step-card{
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        /* Image wrapper FIABLE */
        .img-wrap{
          position: relative;
          width: 100%;
          max-width: 360px;
          height: 225px; /* ≈ 16:10 */
          margin: 0 auto;
          overflow: hidden;
          border: 1px solid var(--border);
          border-radius: 16px;
          background: #fff;
          box-shadow: 0 6px 24px rgba(0,0,0,.08);
        }
        .img-overlay{
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,.35), rgba(0,0,0,.1) 50%, rgba(0,0,0,0));
        }

        .round-icon{
          position: relative;
          margin-top: -36px;
          z-index: 1;
          width: 80px; height: 80px;
          border-radius: 999px;
          background: var(--accent);
          color: var(--vert);
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 10px 24px rgba(0,0,0,.12);
          outline: 4px solid #fff; /* anneau blanc */
        }

        .kicker{
          margin-top: 8px;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: .12em;
          text-transform: uppercase;
          color: color-mix(in srgb, var(--vert) 80%, transparent);
        }
        h3{
          margin: 6px 0 0;
          font-size: 20px;
          font-weight: 700;
          color: var(--vert);
        }
        p{
          margin: 8px auto 0;
          color: var(--muted);
          line-height: 1.6;
          max-width: 320px;
        }

        /* Connecteur fléché (desktop) */
        .connector{
          display: none;
        }
        @media (min-width: 768px){
          .connector{
            display: block;
            position: absolute;
            top: 112px;           /* aligné verticalement au centre de l'image */
            right: -12%;
            width: 24%;
            height: 24px;
          }
        }
      `}</style>
    </section>
  );
}
    </section>
  );
}
