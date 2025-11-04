export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p>© {new Date().getFullYear()} Rafael50 — Todos os direitos reservados.</p>
        <div className="links">
          <a href="/sobre">Sobre</a>
          <a href="https://wa.me/5531992255812" target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
          <a href="mailto:contato@rafael50.vercel.app">E-mail</a>
        </div>
      </div>
    </footer>
  );
}
