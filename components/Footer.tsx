export default function Footer() {
  return (
    <footer className="border-top border-black/5 py-10 text-center text-sm text-black/60">
      <div className="container">© {new Date().getFullYear()} Pickloop — Tous droits réservés.</div>
    </footer>
  );
}
