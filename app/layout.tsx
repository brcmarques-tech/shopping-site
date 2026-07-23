import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  // KAN-219: sem metadataBase o Next resolve URLs relativas de OG/canonical
  // errado (avisa em build e a OG image nao carrega no compartilhamento).
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://shop.bcmtech.com.br"),
  title: { default: "bcmTech Shopping", template: "%s | bcmTech Shopping" },
  description: "O marketplace da sua cidade. Compre produtos e contrate serviços locais com entrega rápida.",
  keywords: ["marketplace", "delivery", "compras online", "serviços locais"],
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://shop.bcmtech.com.br",
    siteName: "bcmTech Shopping",
    title: "bcmTech Shopping — O marketplace da sua cidade",
    description: "Compre produtos e contrate serviços locais com entrega rápida.",
    images: [{ url: '/icon.png', width: 1024, height: 1024 }],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={geist.variable}>
      <body className="min-h-full flex flex-col bg-[#111827] text-[#f9fafb] antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
