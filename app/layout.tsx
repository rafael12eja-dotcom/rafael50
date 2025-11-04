import "./styles/globals.css";

export const metadata = {
  title: "Rafael 50 — Nova Vida",
  description: "Sistema pessoal para metas, finanças e hábitos (10 anos).",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
