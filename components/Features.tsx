"use client";
import { motion } from "framer-motion";
import { Clock, MapPin, ShieldCheck } from "lucide-react";

const items = [
  { icon: Clock, title: "Réservation instantanée", text: "Scannez, prenez, utilisez. Retournez quand vous avez fini."},
  { icon: MapPin, title: "Partout autour de vous", text: "Des casiers connectés sur sites touristiques et municipaux."},
  { icon: ShieldCheck, title: "Traçabilité & sérénité", text: "Photos/vidéos, dépôt et historique réduisent les litiges."},
];

export default function Features() {
  return (
    <section id="services" className="py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-brand-green">Our Services</h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded bg-brand-light/60" />
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((it, idx) => (
            <motion.div key={it.title} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true, margin:"-80px"}} transition={{delay:idx*0.05}}
              className="rounded-2xl border border-black/5 bg-white/70 backdrop-blur p-8 hover:shadow-soft transition group">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green/10 group-hover:bg-brand-green/15">
                <it.icon />
              </div>
              <h3 className="text-xl font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm text-black/70">{it.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
