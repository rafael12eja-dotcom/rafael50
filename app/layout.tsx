// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Header from "./components/Header";

const siteTitle = "Rafael50 — Portfólio";
const siteDesc =
  "Apresentações comerciais, sites rápidos e integrações que convertem. Portfólio Rafael50.";
const siteUrl = "https://rafael50.vercel.app";
const ogImage = "/og.png";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDesc,
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: siteTitle,
    description: siteDesc,
    url: siteUrl,
    siteName: "Rafael50",
    images: [{ url: ogImage, width: 1200, height: 630, alt: "Rafael50" }],
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDesc,
    images: [ogImage],
  },
  icons: {
    icon: "/icon.png", // gerado via app/icon.png
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
