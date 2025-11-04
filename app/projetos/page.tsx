// app/projetos/page.tsx
export default function ProjetosPage() {
  return (
    <section>
      <h1>Projetos de Rafael50</h1>
      <p>Bem-vindo à área onde compartilho os projetos e criações digitais desenvolvidos no Rafael50.</p>

      <div className="grid">
        <div className="card">
          <h3>📁 Projeto 1: Sistema de Vendas Black Friday</h3>
          <p>Dashboard de acompanhamento em tempo real das metas de vendas do Buffet 1,2 e Já!</p>
        </div>

        <div className="card">
          <h3>💻 Projeto 2: Site Essenzia Eventos</h3>
          <p>Plataforma digital elegante, com identidade visual dourada e foco em eventos sofisticados.</p>
        </div>

        <div className="card">
          <h3>🎨 Projeto 3: Blessed Home Fest</h3>
          <p>Apresentação comercial para festas personalizadas com identidade moderna e aconchegante.</p>
        </div>
      </div>
    </section>
  );
}
