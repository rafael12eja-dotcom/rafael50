// app/components/Header.tsx
import Image from "next/image";
import Link from "next/link";

const WHATSAPP = "5531992255812";
const wa = `https://wa.me/${WHATSAPP}?text=Ol%C3%A1%2C%20Rafael!%20Quero%20um%20site%2Fapresenta%C3%A7%C3%A3o.`;

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/" className="brand" aria-label="Ir para a página inicial">
          <Image
            src="/logo.png"
            alt="Rafael50"
            width={40}
            height={40}
            className="brand__logo"
            priority
          />
          <span className="brand__name">Rafael50</span>
        </Link>

        <nav className="site-nav" aria-label="Navegação principal">
          <Link href="/" className="site-nav__link">Início</Link>
          <Link href="/projetos" className="site-nav__link">Projetos</Link>
          <a className="site-nav__cta" href={wa} target="_blank" rel="noopener noreferrer">
            Falar no WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
