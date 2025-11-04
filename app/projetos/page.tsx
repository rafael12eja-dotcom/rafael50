// app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <section>
      <span className="badge">Rafael 50</span>
      <h1>Bem-vindo 👋</h1>
      <div className="hero-card">
        <p>
          Construo soluções digitais e apresentações comerciais com foco em conversão,
          combinando identidade visual, sites rápidos e integrações ágeis.
        </p>

        <ul className="checks">
          <li>Identidade visual e apresentação (Essenzia/1,2 e Já!)</li>
          <li>Sites e landing pages otimizadas</li>
          <li>Integrações (formularios, WhatsApp, automações)</li>
        </ul>

        <div className="cta-row">
          <Link href="/projetos" className="btn">Ver projetos</Link>
          <a
            className="btn-outline"
            href="https://wa.me/5531992255812?text=Olá,%20Rafael!%20Quero%20um%20site/apresentação."
            target="_blank"
            rel="noopener noreferrer"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
