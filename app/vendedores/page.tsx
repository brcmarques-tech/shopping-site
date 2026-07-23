import type { Metadata } from "next";
import VendedoresClient from "./VendedoresClient";

// KAN-219: Server Component so para exportar metadata unica; a UI interativa
// (framer-motion) fica no componente client.
export const metadata: Metadata = {
  title: "Para vendedores",
  description:
    "Crie sua loja em minutos e venda produtos e serviços com o painel mais simples do mercado. Pagamento seguro, split automático e analytics em tempo real.",
  alternates: { canonical: "/vendedores" },
};

export default function VendedoresPage() {
  return <VendedoresClient />;
}
