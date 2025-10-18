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
