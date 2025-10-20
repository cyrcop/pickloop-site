// app/page.tsx
import Hero from "@/components/Hero";
import Promises from "@/components/Promises";
import Steps from "@/components/Steps";
import Footer from "@/components/Footer";

/**
 * Page d’accueil Pickloop
 * Structure : Hero → Promesses → Étapes → Footer
 * Toutes les couleurs et espacements sont gérés par les variables CSS (globals.css)
 */
export default function Page() {
  return (
    <main className="bg-[var(--fond)] text-[var(--ink)]">
      <Hero />
      <Promises />
      <Steps />
      <Footer />
    </main>
  );
}
