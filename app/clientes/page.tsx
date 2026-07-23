import type { Metadata } from "next";
import ClientesClient from "./ClientesClient";

// KAN-219: Server Component so para exportar metadata unica; a UI interativa
// (framer-motion) fica no componente client.
export const metadata: Metadata = {
  title: "Para clientes",
  description:
    "Compre em lojas e serviços locais com entrega rápida e acompanhamento em tempo real. Baixe o app bcmTech Shopping — grátis, para Android.",
  alternates: { canonical: "/clientes" },
};

export default function ClientesPage() {
  return <ClientesClient />;
}
