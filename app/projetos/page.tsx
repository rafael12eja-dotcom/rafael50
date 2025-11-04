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
          combinando identidade visual, sites rápidos e integrações inteligentes.
        </p>

        <ul className="checks">
          <li>✨ Identidade visual e apresentações comerciais (Essenzia, 1,2 e Já!)</li>
          <li>⚙️ Sites e landing pages otimizadas</li>
          <li>🤖 Integrações automáticas (WhatsApp, formulários, sistemas)</li>
        </ul>

        <div className="cta-row">
          <Link href="/projetos" className="btn">
            Ver projetos
          </Link>
          <a
            className="btn-outline"
            href="https://wa.me/553199255812?text=Olá,%20Rafael!%20Quero%20um%20site/apresentação."
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
// app/projetos/page.tsx
export default function ProjetosPage() {
  return (
    <section>
      <h1>Projetos</h1>
      <p>Seleção de trabalhos e produtos que tenho construído recentemente.</p>

      <div className="grid">
        <article className="card">
          <h3>Essenzia Eventos — Site</h3>
          <p>One-page institucional com foco em conversão e identidade elegante.</p>
        </article>

        <article className="card">
          <h3>Black Friday — Painel de Vendas</h3>
          <p>Dashboard simples para metas e status de propostas no 1,2 e Já!.</p>
        </article>

        <article className="card">
          <h3>Apresentação Comercial — 1,2 e Já!</h3>
          <p>Deck enxuto com diferenciais, pacotes e CTA de WhatsApp.</p>
        </article>
      </div>
    </section>
  );
}
