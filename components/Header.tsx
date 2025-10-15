"use client";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll(); window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <motion.header initial={{y:-20,opacity:0}} animate={{y:0,opacity:1}}
      className={`fixed top-0 left-0 right-0 z-50 transition ${scrolled ? "backdrop-blur bg-white/70 border-b border-black/5" : "bg-transparent"}`}>
      <div className="container flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <img src="/logo.svg" alt="Pickloop" className="h-7 w-7" />
          <span className="font-semibold tracking-tight">Pickloop</span>
        </a>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#how" className="text-sm hover:opacity-70">Fonctionnement</a>
          <a href="#services" className="text-sm hover:opacity-70">Services</a>
          <a href="#contact" className="pill">Contact</a>
        </nav>
        <button className="md:hidden p-2 rounded-lg hover:bg-black/5" aria-label="Menu"><Menu size={20}/></button>
      </div>
    </motion.header>
  );
}
