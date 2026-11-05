import type { Metadata, Viewport } from "next";
import { Figtree, Shrikhand } from "next/font/google";
import "./globals.css";

// next/font baixa as fontes no build e serve do próprio site (mais rápido, sem layout shift)
// Shrikhand: letreiro de confeitaria, só nos títulos e preços. Figtree: texto corrido.
const display = Shrikhand({ subsets: ["latin"], weight: "400", variable: "--font-display" });
const body = Figtree({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "+140 Figurinhas para Confeiteiras | Pack de Figurinhas",
  description:
    "Figurinhas exclusivas para confeiteiras: transforme seus Stories em vitrines irresistíveis.",
};

export const viewport: Viewport = { themeColor: "#FDE5EE" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
