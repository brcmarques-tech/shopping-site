import type { Metadata } from "next";
import PlanosClient from "./PlanosClient";

// KAN-219: Server Component so para exportar metadata unica; a UI interativa
// (toggle mensal/anual, framer-motion) fica no componente client.
export const metadata: Metadata = {
  title: "Planos e preços",
  description:
    "Do plano Free ao Premium: escolha o plano da bcmTech Shopping ideal para o seu negócio. Comece grátis, sem cartão, e cresça com comissões menores.",
  alternates: { canonical: "/planos" },
};

export default function PlanosPage() {
  return <PlanosClient />;
}
