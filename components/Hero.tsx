'use client';
import { useEffect } from 'react';

export default function Hero() {
  useEffect(() => {
    // PARALLAX LOGO
    const logo = document.querySelector('.hero-logo') as HTMLElement | null;
    let ticking = false;
    const onScrollParallax = () => {
      if (!logo) return;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const offset = window.scrollY;
          const translateY = Math.min(40, offset * 0.05);
          logo.style.transform = `translateY(${translateY}px)`;
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScrollParallax, { passive: true });

    // PARTICLES CANVAS
    const canvas = document.getElementById('hero-canvas') as HTMLCanvasElement | null;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        let width = canvas.clientWidth;
        let height = canvas.clientHeight;
        const DPR = window.devicePixelRatio || 1;
        const resize = () => {
          width = canvas.clientWidth;
          height = canvas.clientHeight;
          canvas.width = Math.floor(width * DPR);
          canvas.height = Math.floor(height * DPR);
          ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
        };
        resize();

        const particles: {
          x: number; y: number; r: number; vx: number; vy: number; alpha: number;
        }[] = [];
        const count = Math.max(6, Math.round(width / 240));
        for (let i = 0; i < count; i++) {
          particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            r: 2 + Math.random() * 4,
            vx: (Math.random() - 0.5) * 0.2,
            vy: (Math.random() - 0.5) * 0.2,
            alpha: 0.4 + Math.random() * 0.6
          });
        }

        let rafId = 0;
        const render = () => {
          ctx.clearRect(0, 0, width, height);
          for (const p of particles) {
            p.x += p.vx;
            p.y += p.vy;
            if (p.x < -10) p.x = width + 10;
            if (p.x > width + 10) p.x = -10;
            if (p.y < -10) p.y = height + 10;
            if (p.y > height + 10) p.y = -10;

            ctx.beginPath();
            ctx.globalAlpha = p.alpha * 0.9;
            ctx.fillStyle = 'rgba(255,255,255,1)';
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fill();
          }
          rafId = requestAnimationFrame(render);
        };
        render();

        window.addEventListener('resize', resize, { passive: true });
        // cleanup
        return () => {
          window.removeEventListener('scroll', onScrollParallax);
          window.removeEventListener('resize', resize);
          cancelAnimationFrame(rafId);
        };
      }
    }

    return () => {
      window.removeEventListener('scroll', onScrollParallax);
    };
  }, []);

  return (
    <section className="hero">
      <canvas id="hero-canvas" aria-hidden="true"></canvas>
      <div className="hero-inner">
        <img src="/logo-wordmark.png" alt="Pickloop" className="hero-logo hero-logo--cream" />
        <h1>Louez. Utilisez. Répétez.</h1>
        <p className="subtitle">
          Des casiers 24/7 pour emprunter du matériel sport & loisir, au plus près des usagers. Service clé en main pour la commune : installation, maintenance, traçabilité et reporting d'usage.
        </p>
        <div className="cta">
          <a className="btn" href="#contact">Demander la présentation</a>
          <a className="btn secondary" href="#fonctionnement">Comment ça marche</a>
        </div>
      </div>
    </section>
  );
}
