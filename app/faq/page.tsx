import type { Metadata } from "next";
import FaqClient from "./FaqClient";

// KAN-219: Server Component so para exportar metadata unica; a UI interativa
// (framer-motion) fica no componente client.
export const metadata: Metadata = {
  title: "Perguntas frequentes",
  description:
    "Dúvidas sobre a bcmTech Shopping: como começar, pagamento, comissões, entrega e como vender produtos e serviços na plataforma.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return <FaqClient />;
}
