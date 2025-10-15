"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start","end start"] });
  const y = useTransform(scrollYProgress, [0,1], [0,-120]);
  const opacity = useTransform(scrollYProgress, [0,1], [1,0.6]);

  return (
    <section ref={ref} className="relative pt-28 overflow-hidden" style={{minHeight:"90vh"}}>
      <div className="ring-grad" />
      <div className="hero-noise" />
      <div className="container relative">
        <motion.div style={{ y, opacity }} className="mx-auto max-w-4xl text-center">
          <img
  src="/logo.png"
  alt="Pickloop"
  className="mx-auto w-[320px] md:w-[520px]"
/>
          <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.1}} className="mt-8 text-brand-green">
            Pick, use, loop.
          </motion.h1>
          <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.2}} className="mt-4">
            Louez l’objet qu’il vous faut en quelques secondes, depuis un casier proche de vous.
          </motion.p>
          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.3}} className="mt-8">
            <a href="#services" className="btn btn-brand">Découvrir l’offre</a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
