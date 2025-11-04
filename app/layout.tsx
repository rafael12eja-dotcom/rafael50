// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "Rafael50",
  description: "Projeto Next.js mínimo para Vercel",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main className="container">
          {children}
        </main>
      </body>
    </html>
  );
}
