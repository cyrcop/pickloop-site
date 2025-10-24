// app/page.tsx
import Hero from "@/components/Hero";
import Promises from "@/components/Promises";
import Steps from "@/components/Steps";

export default function Page() {
  return (
    <main className="bg-[var(--fond)] text-[var(--ink)]">
      <Hero />
      <Promises />
      <Steps />
    </main>
  );
}
