export default function Footer() {
  return (
    <footer id="contact" className="footer bg-[var(--fond)]">
      <div className="mx-auto w-[min(1200px,92vw)] px-4 text-center">
        <p className="text-[var(--muted)] text-sm leading-relaxed">
          © {new Date().getFullYear()} <strong>Pickloop</strong> — KEVCYR&nbsp;SASU — RCS&nbsp;Avignon&nbsp;989&nbsp;699&nbsp;608 —{" "}
          <a
            href="https://pickloop.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--vert)] hover:text-[var(--accent)] transition-colors font-medium"
          >
            pickloop.fr
          </a>
        </p>
      </div>
    </footer>
  );
}
