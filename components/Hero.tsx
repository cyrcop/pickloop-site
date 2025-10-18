// components/Hero.tsx
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        {/* Mot-symbole au-dessus du titre (blanc/crème) */}
        <img
          src="/logo-wordmark.png"
          alt="Pickloop"
          className="hero-logo hero-logo--cream"
        />

        <h1>Louez. Utilisez. Répétez.</h1>

        <p className="subtitle">
          Des casiers 24/7 pour emprunter du matériel sport &amp; loisir, au plus près des usagers.
          Service clé en main pour la commune : installation, maintenance, traçabilité et reporting d’usage.
        </p>

        <div className="cta">
          <a className="btn" href="#contact">Demander la présentation</a>
          <a className="btn secondary" href="#fonctionnement">Comment ça marche</a>
        </div>
      </div>
    </section>
  );
}
useEffect(() => {
  const canvas = document.getElementById('hero-canvas');
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  let width = canvas.clientWidth;
  let height = canvas.clientHeight;
  canvas.width = Math.floor(width * devicePixelRatio);
  canvas.height = Math.floor(height * devicePixelRatio);
  ctx.scale(devicePixelRatio, devicePixelRatio);

  const particles = [];
  const count = Math.round(Math.max(6, width / 240)); // scalable count
  for(let i=0;i<count;i++){
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      r: (2 + Math.random()*4),
      vx: (Math.random()-0.5) * 0.2,
      vy: (Math.random()-0.5) * 0.2,
      alpha: 0.5 + Math.random()*0.5
    });
  }

  let rafId;
  function render(){
    ctx.clearRect(0,0,width,height);
    for(const p of particles){
      p.x += p.vx;
      p.y += p.vy;
      // wrap
      if(p.x < -10) p.x = width + 10;
      if(p.x > width + 10) p.x = -10;
      if(p.y < -10) p.y = height + 10;
      if(p.y > height + 10) p.y = -10;

      ctx.beginPath();
      ctx.globalAlpha = p.alpha * 0.9;
      ctx.fillStyle = 'rgba(255,255,255,1)';
      ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
      ctx.fill();
    }
    rafId = requestAnimationFrame(render);
  }
  render();

  const onResize = () => {
    width = canvas.clientWidth;
    height = canvas.clientHeight;
    canvas.width = Math.floor(width * devicePixelRatio);
    canvas.height = Math.floor(height * devicePixelRatio);
    ctx.scale(devicePixelRatio, devicePixelRatio);
  };
  window.addEventListener('resize', onResize, { passive: true });

  return () => {
    cancelAnimationFrame(rafId);
    window.removeEventListener('resize', onResize);
  };
}, []);
