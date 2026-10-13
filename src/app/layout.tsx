import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Consultório de Estética - Daniele Sousa | Arcos - MG",
  description:
    "Clínica de estética em Arcos - MG. Tratamentos faciais, limpeza de pele, peeling e mais. Agende pelo WhatsApp com Daniele Sousa.",
  keywords: [
    "estética",
    "Arcos MG",
    "Daniele Sousa",
    "limpeza de pele",
    "tratamentos faciais",
  ],
  openGraph: {
    title: "Consultório de Estética - Daniele Sousa",
    description:
      "Realce sua beleza natural com cuidado profissional em Arcos - MG.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
