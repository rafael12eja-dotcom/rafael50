// app/page.tsx
import Link from "next/link";

const WHATSAPP = "5531992255812";
const wa = `https://wa.me/${WHATSAPP}?text=Ol%C3%A1%2C%20Rafael!%20Quero%20um%20site%2Fapresenta%C3%A7%C3%A3o.`;

export default function Home() {
  return (
    <section>
      <span className="badge">Rafael 50</span>
      <h1>Crio experiências digitais que geram valor</h1>

      <div className="hero-card">
        <p>
          Portfólio enxuto com foco em apresentação comercial, sites rápidos e integrações
          que convertem. Identidade visual consistente e execução ágil do conceito à entrega.
        </p>

        <ul className="checks">
          <li>Apresentações e propostas que vendem mais</li>
          <li>Sites e landing pages otimizadas (SEO + performance)</li>
          <li>Formulários e automações (WhatsApp, captação e follow-up)</li>
        </ul>

        <div className="cta-row">
          <Link href="/projetos" className="btn">Ver projetos</Link>
          <a className="btn-outline" href={wa} target="_blank" rel="noopener noreferrer">
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
