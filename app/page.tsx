import type { Metadata } from "next";
import { getSiteContent } from "@/lib/site-content";
import HomeClient from "./HomeClient";

// KAN-219: Server Component. Busca o conteudo do CMS no servidor (SSR/crawler
// veem o hero real, nao os defaults) e define metadata unica desta rota.
export const metadata: Metadata = {
  title: "bcmTech Shopping — O marketplace da sua cidade",
  description:
    "Compre produtos e contrate serviços locais com entrega rápida. Para vendedores, o painel mais simples e poderoso para gerenciar seu negócio digital.",
  alternates: { canonical: "/" },
};

export default async function HomePage() {
  const content = await getSiteContent();
  return <HomeClient content={content} />;
}
