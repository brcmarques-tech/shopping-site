import type { Metadata } from "next";
import { getSiteContent } from "@/lib/site-content";
import ContatoClient from "./ContatoClient";

// KAN-219: Server Component — busca os dados de contato do CMS no servidor e
// define metadata unica desta rota.
export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com a bcmTech Shopping por WhatsApp ou email. Suporte, parcerias e dúvidas de quem quer vender na plataforma.",
  alternates: { canonical: "/contato" },
};

export default async function ContatoPage() {
  const content = await getSiteContent();
  return <ContatoClient content={content} />;
}
