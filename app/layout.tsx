import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// next/font baixa a fonte no build e serve do próprio site (mais rápido, sem layout shift)
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

export const metadata: Metadata = {
  title: "+15.000 Figurinhas para Stories | Pack de Figurinhas",
  description:
    "Transforme seus stories comuns em conteúdos absurdamente bonitos e profissionais em segundos.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
