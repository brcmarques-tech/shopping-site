"use client";
import { motion } from "framer-motion";
import { HelpCircle, Store, ShoppingBag, CreditCard, Truck } from "lucide-react";
import FaqItem from "@/components/FaqItem";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";

const FAQ_SECTIONS = [
  {
    id: "geral",
    icon: HelpCircle,
    label: "Geral",
    color: "#f97316",
    items: [
      {
        q: "O que é o bcmTech Shopping?",
        a: "O bcmTech Shopping é um marketplace local que conecta clientes a lojas e prestadores de serviços da sua cidade. Pelo app, você pode comprar produtos, agendar serviços profissionais e acompanhar entregas em tempo real. Para vendedores, oferecemos um painel completo para gerenciar estoque, pedidos e pagamentos.",
      },
      {
        q: "O uso da plataforma é gratuito?",
        a: "Para clientes, o app é 100% gratuito. Para vendedores, existe o plano Free sem mensalidade — você paga apenas uma comissão de 5% por venda. Também oferecemos os planos Pro (R$ 49,90/mês, 2% de comissão) e Premium (R$ 99,90/mês, 0% de comissão) com recursos avançados.",
      },
      {
        q: "Em quais cidades o bcmTech Shopping está disponível?",
        a: "A plataforma está em expansão e já está disponível em diversas cidades do sul do Brasil. Novos municípios são adicionados regularmente. Se sua cidade ainda não está coberta, entre em contato — podemos priorizar a expansão para a sua região.",
      },
      {
        q: "Como entro em contato com o suporte?",
        a: "Você pode falar conosco pelo WhatsApp (55) 53 8442-4244 em horário comercial (seg-sex, 8h às 18h), ou pelo email contato@bcmtech.com.br. Para vendedores com plano Pro ou Premium, oferecemos suporte prioritário com tempo de resposta reduzido.",
      },
    ],
  },
  {
    id: "vendedores",
    icon: Store,
    label: "Para Vendedores",
    color: "#3b82f6",
    items: [
      {
        q: "Como cadastro minha loja na plataforma?",
        a: "É simples: acesse shopping.bcmtech.com.br/register, crie sua conta como vendedor, preencha os dados da sua loja (nome, categoria, endereço e horário) e cadastre seus primeiros produtos ou serviços. Em menos de 5 minutos sua loja já aparece para os clientes da região.",
      },
      {
        q: "Qual é a comissão cobrada por venda?",
        a: "A comissão varia conforme o plano: 5% no plano Free, 2% no plano Pro e 0% no plano Premium. A comissão é descontada automaticamente do valor da venda no momento do split — você já recebe o valor líquido em sua conta.",
      },
      {
        q: "Posso vender serviços além de produtos?",
        a: "Sim! O bcmTech Shopping suporta tanto produtos físicos quanto serviços agendáveis. Você pode cadastrar barbearia, personal trainer, manutenção, estética, aulas e muito mais. Clientes visualizam seu calendário e fazem o agendamento diretamente pelo app.",
      },
      {
        q: "Como e quando recebo o pagamento das vendas?",
        a: "O pagamento é processado com segurança via Pagar.me (certificado PCI DSS). O split automático é realizado após a confirmação da entrega pelo cliente: o valor líquido (descontada a comissão) é transferido para a sua conta cadastrada. O prazo de liquidação segue o padrão da operadora de pagamento.",
      },
    ],
  },
  {
    id: "clientes",
    icon: ShoppingBag,
    label: "Para Clientes",
    color: "#10b981",
    items: [
      {
        q: "Como baixo o aplicativo bcmTech Shopping?",
        a: "O app está disponível para Android. Faça o download do APK diretamente pelo link na seção de download do nosso site. Certifique-se de permitir a instalação de fontes desconhecidas nas configurações do seu Android. A versão iOS está em desenvolvimento.",
      },
      {
        q: "Quais formas de pagamento são aceitas?",
        a: "Aceitamos PIX (instantâneo, sem acréscimo) e cartão de crédito (parcelamento disponível conforme a loja). Todos os pagamentos são processados com criptografia e certificação PCI DSS pela Pagar.me, garantindo total segurança para seus dados.",
      },
      {
        q: "Posso cancelar um pedido depois de confirmar?",
        a: "Sim, é possível cancelar um pedido enquanto ele ainda estiver com status 'Aguardando confirmação' ou 'Confirmado pelo vendedor'. Após o início da preparação do pedido, o cancelamento depende da política da loja. Para cancelamentos tardios, entre em contato com nosso suporte.",
      },
      {
        q: "Como funciona o rastreamento do pedido?",
        a: "Assim que o entregador aceita a corrida, você recebe uma notificação push com o link de rastreamento. No app, você acompanha a localização do entregador em tempo real no mapa até a chegada no seu endereço. Você também é notificado em cada etapa: confirmação, preparo, saída para entrega e entrega concluída.",
      },
    ],
  },
  {
    id: "pagamentos",
    icon: CreditCard,
    label: "Pagamentos",
    color: "#8b5cf6",
    items: [
      {
        q: "Os pagamentos são seguros?",
        a: "Sim, totalmente. Os pagamentos são processados pela Pagar.me, empresa certificada PCI DSS nível 1 — o mais alto padrão de segurança do setor financeiro. Seus dados de cartão nunca são armazenados em nossos servidores. Utilizamos tokenização e criptografia de ponta a ponta.",
      },
      {
        q: "O bcmTech Shopping aceita PIX?",
        a: "Sim! O PIX é uma das formas de pagamento disponíveis e não tem acréscimo. Ao escolher PIX no checkout, você recebe o código ou QR Code instantaneamente. Após a confirmação do pagamento pelo Banco Central, seu pedido é processado em segundos.",
      },
      {
        q: "Qual o prazo para estorno em caso de cancelamento?",
        a: "Para pagamentos via PIX, o estorno é processado em até 2 dias úteis. Para cartão de crédito, o prazo é de até 5 dias úteis para o crédito aparecer na fatura (pode variar conforme a operadora do cartão). Você receberá uma notificação por email quando o estorno for processado.",
      },
    ],
  },
  {
    id: "entrega",
    icon: Truck,
    label: "Entrega",
    color: "#f59e0b",
    items: [
      {
        q: "Qual é o prazo de entrega dos pedidos?",
        a: "O prazo de entrega varia conforme a loja e a distância. Cada estabelecimento define seu tempo estimado, que fica visível na página do produto antes de você finalizar o pedido. Lojas locais geralmente entregam entre 30 e 90 minutos. O rastreamento em tempo real mantém você informado durante todo o processo.",
      },
      {
        q: "É possível agendar uma entrega para um horário específico?",
        a: "Sim, alguns vendedores oferecem a opção de agendamento de entrega, permitindo que você escolha uma janela de horário conveniente. Essa opção aparece durante o checkout, caso a loja ofereça o serviço. Para serviços profissionais (barbearia, personal, etc.), o agendamento é sempre por horário específico.",
      },
      {
        q: "O que faço se meu pedido não chegar ou chegar com problema?",
        a: "Entre em contato imediatamente com nosso suporte pelo WhatsApp (55) 53 8442-4244 ou pelo app, na seção 'Meus Pedidos' → 'Reportar problema'. Nossa equipe analisa cada caso e, se confirmado o problema, providencia reenvio ou estorno. Não aprove a entrega no app se o pedido apresentar divergências.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(249,115,22,0.12)_0%,transparent_60%)]" />
        <div className="relative max-w-3xl mx-auto text-center">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-4">
            <motion.div variants={fadeInUp}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#f97316]/30 bg-[#f97316]/10 text-[#f97316] text-sm font-medium">
                <HelpCircle className="w-3.5 h-3.5" /> Central de Ajuda
              </span>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold">
              Perguntas <span className="gradient-text">frequentes</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-[#9ca3af] text-lg leading-relaxed">
              Encontre respostas rápidas sobre o bcmTech Shopping. Não achou o que precisa?{" "}
              <a href="/contato" className="text-[#f97316] hover:underline">
                Fale com a gente.
              </a>
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Category Nav */}
      <section className="px-4 sm:px-6 lg:px-8 pb-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto flex flex-wrap gap-2 justify-center"
        >
          {FAQ_SECTIONS.map((section) => (
            <motion.a
              key={section.id}
              href={`#${section.id}`}
              variants={fadeInUp}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#374151] bg-[#1f2937] text-[#9ca3af] text-sm font-medium hover:border-[#f97316]/50 hover:text-[#f97316] transition-all"
            >
              <section.icon className="w-3.5 h-3.5" />
              {section.label}
            </motion.a>
          ))}
        </motion.div>
      </section>

      {/* FAQ Sections */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-16">
          {FAQ_SECTIONS.map((section, si) => (
            <motion.div
              key={section.id}
              id={section.id}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              transition={{ delay: si * 0.05 }}
            >
              {/* Section Header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${section.color}20` }}
                >
                  <section.icon className="w-5 h-5" style={{ color: section.color }} />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-[#f9fafb]">{section.label}</h2>
                  <p className="text-xs text-[#9ca3af]">{section.items.length} perguntas</p>
                </div>
              </div>

              {/* Items */}
              <div className="space-y-3">
                {section.items.map((item) => (
                  <FaqItem key={item.q} question={item.q} answer={item.a} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1a2332]">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="w-14 h-14 rounded-2xl bg-[#f97316]/15 flex items-center justify-center mx-auto mb-5">
            <HelpCircle className="w-7 h-7 text-[#f97316]" />
          </div>
          <h3 className="text-2xl font-bold text-[#f9fafb] mb-2">Ainda tem dúvidas?</h3>
          <p className="text-[#9ca3af] mb-6">
            Nossa equipe está pronta para ajudar. Fale com a gente pelo WhatsApp ou email.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/5553844242244"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#f97316] text-white font-semibold hover:bg-[#ea6c0a] transition-all hover:scale-105"
            >
              Falar no WhatsApp
            </a>
            <a
              href="/contato"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-[#374151] bg-[#111827] text-[#f9fafb] font-semibold hover:border-[#f97316]/50 transition-all"
            >
              Ir para contato
            </a>
          </div>
        </motion.div>
      </section>
    </>
  );
}
