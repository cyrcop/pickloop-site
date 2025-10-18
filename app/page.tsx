// app/page.tsx
import Hero from "@/components/Hero";
import Promises from "@/components/Promises";
import Steps from "@/components/Steps";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main>
      <Hero />
      <Promises />
      <Steps />
      <Footer />
    </main>
  );
}
import { useEffect } from "react";

export default function Hero(){
  useEffect(() => {
    const logo = document.querySelector('.hero-logo');
    if(!logo) return;
    let ticking = false;
    const onScroll = () => {
      if(!ticking){
        window.requestAnimationFrame(() => {
          const offset = window.scrollY;
          // facteur petit : 0.05 -> très discret
          const translateY = Math.min(40, offset * 0.05); 
          logo.style.transform = `translateY(${translateY}px)`;
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    /* ton markup hero existant */
  );
}
