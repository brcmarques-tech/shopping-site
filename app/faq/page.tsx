import type { Metadata } from "next";
import { getSiteContent } from "@/lib/site-content";
import FaqClient from "./FaqClient";

// KAN-219: Server Component so para exportar metadata unica; a UI interativa
// (framer-motion) fica no componente client.
export const metadata: Metadata = {
  title: "Perguntas frequentes",
  description:
    "Dúvidas sobre a bcmTech Shopping: como começar, pagamento, comissões, entrega e como vender produtos e serviços na plataforma.",
  alternates: { canonical: "/faq" },
};

// KAN-250: o FAQ tinha o telefone HARDCODED em tres lugares (dois no texto das
// respostas e um no link do wa.me), e ainda divergente do CMS — editar o numero
// no painel nao corrigia esta pagina. Agora o conteudo vem do servidor, igual
// a home e a pagina de contato.
export default async function FaqPage() {
  const content = await getSiteContent();
  return <FaqClient content={content} />;
}
