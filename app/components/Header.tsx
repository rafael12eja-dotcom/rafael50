// app/components/Header.tsx
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/" className="brand">
          <Image
            src="/logo.png"
            alt="Rafael50"
            width={44}
            height={44}
            className="brand__logo"
            priority
          />
          <span className="brand__name">Rafael50</span>
        </Link>

        <nav className="site-nav">
          <Link href="/" className="site-nav__link">Início</Link>
          <Link href="/projetos" className="site-nav__link">Projetos</Link>
          <a
            className="site-nav__cta"
            href="https://wa.me/5531999999999"
            target="_blank"
            rel="noopener noreferrer"
          >
            Falar no WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
