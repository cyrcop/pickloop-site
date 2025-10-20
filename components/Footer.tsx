export default function Footer() {
  return (
    <footer
      id="contact"
      className="text-center text-[var(--muted)] text-sm py-8 border-t border-[var(--border)] bg-[var(--fond)]"
    >
      <p className="px-4 leading-relaxed">
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
    </footer>
  );
}
