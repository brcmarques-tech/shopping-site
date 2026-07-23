"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Store, BarChart2, Shield, Star, MapPin, Tag,
  UserCheck, ArrowRight, CheckCircle2, ChevronRight,
} from "lucide-react";
import PlanCard from "@/components/PlanCard";
import FaqItem from "@/components/FaqItem";
import {
  fadeInUp, staggerContainer, scaleIn,
  viewportOnce, slideInLeft, slideInRight,
} from "@/lib/motion";

const FEATURES = [
  {
    icon: Store,
    title: "Múltiplas lojas",
    desc: "Gerencie todas as suas lojas em um único painel. Estoque, pedidos e configurações centralizados, sem complicação.",
  },
  {
    icon: BarChart2,
    title: "Analytics completo",
    desc: "Acompanhe vendas, faturamento, ticket médio e métricas de crescimento em tempo real com gráficos detalhados.",
  },
  {
    icon: Shield,
    title: "Pagamento seguro",
    desc: "Receba via PIX ou cartão de crédito. O repasse acontece automaticamente após a confirmação da entrega.",
  },
  {
    icon: Star,
    title: "Selo verificado",
    desc: "Conquiste o selo de loja verificada com base no desempenho e ganhe destaque na busca dos clientes.",
  },
  {
    icon: MapPin,
    title: "Entrega local",
    desc: "Configure sua área de cobertura, defina taxas e tempo estimado de entrega para cada região atendida.",
  },
  {
    icon: Tag,
    title: "Promoções personalizadas",
    desc: "Crie cupons de desconto, campanhas por tempo limitado e fidelize seus clientes com ofertas exclusivas.",
  },
];

const STEPS = [
  {
    number: "01",
    icon: UserCheck,
    title: "Crie sua conta",
    desc: "Acesse o painel do vendedor em shopping.bcmtech.com.br e cadastre-se gratuitamente em menos de 2 minutos.",
  },
  {
    number: "02",
    icon: Store,
    title: "Configure sua loja",
    desc: "Adicione logo, banner, descrição, horários de funcionamento, área de entrega e seus produtos ou serviços.",
  },
  {
    number: "03",
    icon: BarChart2,
    title: "Comece a vender",
    desc: "Sua loja já fica visível para clientes na região. Receba pedidos, gerencie entregas e acompanhe o crescimento.",
  },
];

const PLANS = [
  {
    name: "Free",
    price: 0,
    period: "mês",
    description: "Para começar sem investimento",
    features: [
      "1 loja",
      "50 produtos",
      "5% de comissão por venda",
      "Suporte por e-mail",
      "Painel básico",
    ],
    cta: "Começar grátis",
    ctaHref: "https://shopping.bcmtech.com.br/register",
  },
  {
    name: "Pro",
    price: 49.90,
    period: "mês",
    description: "Para quem quer crescer rápido",
    features: [
      "3 lojas",
      "200 produtos",
      "2% de comissão por venda",
      "Analytics avançado",
      "Cupons de desconto",
      "Suporte prioritário",
    ],
    cta: "Assinar Pro",
    ctaHref: "https://shopping.bcmtech.com.br/register",
    popular: true,
  },
  {
    name: "Premium",
    price: 99.90,
    period: "mês",
    description: "Para negócios em expansão",
    features: [
      "10 lojas",
      "Produtos ilimitados",
      "0% de comissão",
      "Analytics completo",
      "Selo verificado incluso",
      "Suporte 24h prioritário",
    ],
    cta: "Assinar Premium",
    ctaHref: "https://shopping.bcmtech.com.br/register",
  },
];

const FAQS = [
  {
    q: "O bcmTech Shopping cobra comissão por venda?",
    a: "Sim, no plano Free a comissão é de 5% por venda realizada. No plano Pro cai para 2% e no Premium é zero. Quanto maior o plano, mais você retém do faturamento.",
  },
  {
    q: "Como e quando recebo o pagamento das vendas?",
    a: "O repasse é feito automaticamente após a confirmação da entrega pelo entregador. Os valores são transferidos para a conta vinculada ao seu cadastro via PIX ou TED.",
  },
  {
    q: "Posso mudar de plano a qualquer momento?",
    a: "Sim! Você pode fazer upgrade ou downgrade do seu plano quando quiser, sem multas ou fidelidade. As mudanças entram em vigor a partir do próximo ciclo de cobrança.",
  },
  {
    q: "É possível ter mais de uma loja cadastrada?",
    a: "Depende do plano. O Free permite 1 loja, o Pro permite até 3 e o Premium até 10. Para volumes maiores ou redes com múltiplos CNPJ, entre em contato para o plano Enterprise.",
  },
];

export default function VendedoresPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(249,115,22,0.18)_0%,transparent_65%)]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djJoLTJ2LTJoMnptMC00aDJ2MmgtMnYtMnptLTQgNHYyaC0ydi0yaDJ6bTAgNGgydjJoLTJ2LTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.div variants={fadeInUp}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#f97316]/30 bg-[#f97316]/10 text-[#f97316] text-sm font-medium">
                <Store className="w-3.5 h-3.5" /> Para vendedores
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
            >
              Transforme seu negócio em um{" "}
              <span className="gradient-text">delivery digital</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="max-w-2xl mx-auto text-lg text-[#9ca3af] leading-relaxed"
            >
              Cadastre sua loja, configure em minutos e comece a vender para clientes da sua
              região. Painel completo, pagamento seguro e suporte dedicado.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="https://shopping.bcmtech.com.br/register"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#f97316] text-white font-semibold hover:bg-[#ea6c0a] transition-all hover:scale-105 shadow-[0_0_30px_rgba(249,115,22,0.4)]"
              >
                Cadastre-se grátis <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/planos"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-[#374151] bg-[#1f2937] text-[#f9fafb] font-semibold hover:border-[#f97316]/50 transition-all hover:scale-105"
              >
                Ver planos
              </Link>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center justify-center gap-6 pt-4 text-sm text-[#9ca3af]"
            >
              {["Plano gratuito disponível", "Sem fidelidade", "Setup em minutos"].map((item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#f97316]" />
                  {item}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronRight className="w-5 h-5 text-[#9ca3af] rotate-90" />
        </motion.div>
      </section>

      {/* Features */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1a2332]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="text-center mb-16"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-[#f97316]/15 text-[#f97316] text-xs font-semibold uppercase tracking-wider mb-3">
              Funcionalidades
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Tudo que você precisa para{" "}
              <span className="gradient-text">vender mais</span>
            </h2>
            <p className="text-[#9ca3af] max-w-xl mx-auto">
              Ferramentas profissionais pensadas para negócios locais de qualquer tamanho.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((feat, i) => (
              <motion.div
                key={feat.title}
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                transition={{ delay: i * 0.1 }}
                className="group p-6 rounded-2xl bg-[#111827] border border-[#374151] hover:border-[#f97316]/40 hover:bg-[#f97316]/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#f97316]/15 flex items-center justify-center mb-4 group-hover:bg-[#f97316]/25 transition-colors">
                  <feat.icon className="w-6 h-6 text-[#f97316]" />
                </div>
                <h3 className="font-bold text-[#f9fafb] mb-2">{feat.title}</h3>
                <p className="text-sm text-[#9ca3af] leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to start */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-[#f97316]/15 text-[#f97316] text-xs font-semibold uppercase tracking-wider mb-3">
            Como começar
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Três passos para{" "}
            <span className="gradient-text">sua primeira venda</span>
          </h2>
          <p className="text-[#9ca3af] max-w-xl mx-auto">
            Simples, rápido e sem burocracia. Você já pode estar vendendo hoje.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              variants={i % 2 === 0 ? slideInLeft : slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              transition={{ delay: i * 0.15 }}
              className="relative text-center p-8 rounded-2xl bg-[#1f2937] border border-[#374151] hover:border-[#f97316]/30 transition-colors"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#f97316] flex items-center justify-center text-white text-sm font-bold shadow-[0_0_20px_rgba(249,115,22,0.5)]">
                {step.number}
              </div>
              <div className="w-16 h-16 rounded-2xl bg-[#f97316]/10 flex items-center justify-center mx-auto mb-4 mt-4">
                <step.icon className="w-8 h-8 text-[#f97316]" />
              </div>
              <h3 className="font-bold text-[#f9fafb] mb-3 text-lg">{step.title}</h3>
              <p className="text-sm text-[#9ca3af] leading-relaxed">{step.desc}</p>
              {i < STEPS.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 -translate-y-1/2 z-10">
                  <ArrowRight className="w-5 h-5 text-[#f97316]/40" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mt-12"
        >
          <Link
            href="https://shopping.bcmtech.com.br/register"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#f97316] text-white font-semibold hover:bg-[#ea6c0a] transition-all hover:scale-105 shadow-[0_0_30px_rgba(249,115,22,0.3)]"
          >
            Criar minha loja agora <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </section>

      {/* Plans */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1a2332]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="text-center mb-16"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-[#f97316]/15 text-[#f97316] text-xs font-semibold uppercase tracking-wider mb-3">
              Planos
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Comece grátis, cresça{" "}
              <span className="gradient-text">sem limites</span>
            </h2>
            <p className="text-[#9ca3af] max-w-xl mx-auto">
              Escolha o plano ideal para o seu momento. Sem fidelidade, sem surpresas.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {PLANS.map((plan) => (
              <PlanCard key={plan.name} {...plan} />
            ))}
          </div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="text-center"
          >
            <Link
              href="/planos"
              className="inline-flex items-center gap-2 text-[#f97316] hover:underline font-medium"
            >
              Ver comparação completa de planos <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Dúvidas sobre{" "}
            <span className="gradient-text">vender aqui</span>
          </h2>
          <p className="text-[#9ca3af]">Respondemos as principais perguntas dos vendedores.</p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="space-y-3 mb-10"
        >
          {FAQS.map((faq) => (
            <FaqItem key={faq.q} question={faq.q} answer={faq.a} />
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center"
        >
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 text-[#f97316] hover:underline font-medium"
          >
            Ver todas as perguntas frequentes <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 pb-28">
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-br from-[#f97316] to-[#ef4444] p-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.15)_0%,transparent_60%)]" />
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Pronto para vender mais?
            </h2>
            <p className="text-white/80 mb-8 max-w-lg mx-auto text-lg">
              Cadastre sua loja e comece a vender para clientes da sua região. Grátis, sem cartão de crédito.
            </p>
            <Link
              href="https://shopping.bcmtech.com.br/register"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-xl bg-white text-[#f97316] font-bold hover:bg-white/90 transition-all hover:scale-105 text-lg"
            >
              Cadastre-se grátis <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}
