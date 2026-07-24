"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Check, X, ArrowRight, Zap } from "lucide-react";
import PlanCard from "@/components/PlanCard";
import FaqItem from "@/components/FaqItem";
import {
  fadeInUp, staggerContainer, scaleIn,
  viewportOnce, slideInLeft, slideInRight,
} from "@/lib/motion";

// KAN-251: tipo e tabela de precos vem de lib/pricing.ts (fonte unica).
import { PLAN_PERIOD_PRICE, type Period } from "@/lib/pricing";

const PERIOD_OPTIONS: { key: Period; label: string; badge?: string }[] = [
  { key: "mensal", label: "Mensal" },
  { key: "trimestral", label: "Trimestral", badge: "-10%" },
  { key: "semestral", label: "Semestral", badge: "-20%" },
  { key: "anual", label: "Anual", badge: "-30%" },
];

// KAN-251: era uma copia local da tabela de precos. Agora aponta para a fonte
// unica — o toggle de periodicidade continua funcionando igual.
const PRICES: Record<string, Record<Period, number | null>> = PLAN_PERIOD_PRICE;

const PLAN_FEATURES = {
  Free: [
    "1 loja",
    "50 produtos",
    "5% de comissão",
    "PIX e cartão aceitos",
    "Suporte por e-mail",
    "Painel básico",
  ],
  Pro: [
    "3 lojas",
    "200 produtos",
    "2% de comissão",
    "PIX e cartão aceitos",
    "Analytics avançado",
    "Cupons de desconto",
    "Suporte prioritário",
  ],
  Premium: [
    "10 lojas",
    "Produtos ilimitados",
    "0% de comissão",
    "PIX e cartão aceitos",
    "Analytics completo",
    "Cupons de desconto",
    "Selo verificado incluso",
    "Suporte 24h prioritário",
  ],
  Enterprise: [
    "Lojas ilimitadas",
    "Produtos ilimitados",
    "Comissão negociável",
    "PIX e cartão aceitos",
    "Analytics personalizado",
    "Cupons de desconto",
    "Selo verificado incluso",
    "Gerente de conta dedicado",
    "Integrações via API",
    "SLA garantido",
  ],
};

type FeatureRow = {
  label: string;
  free: boolean | string;
  pro: boolean | string;
  premium: boolean | string;
  enterprise: boolean | string;
};

const COMPARISON_ROWS: FeatureRow[] = [
  { label: "Número de lojas",      free: "1",          pro: "3",            premium: "10",          enterprise: "Ilimitadas" },
  { label: "Número de produtos",   free: "50",         pro: "200",          premium: "Ilimitados",  enterprise: "Ilimitados" },
  { label: "Comissão por venda",   free: "5%",         pro: "2%",           premium: "0%",          enterprise: "Negociável" },
  { label: "PIX e cartão",         free: true,         pro: true,           premium: true,          enterprise: true },
  { label: "Analytics avançado",   free: false,        pro: true,           premium: true,          enterprise: true },
  { label: "Cupons de desconto",   free: false,        pro: true,           premium: true,          enterprise: true },
  { label: "Selo verificado",      free: false,        pro: false,          premium: true,          enterprise: true },
  { label: "Suporte prioritário",  free: false,        pro: true,           premium: true,          enterprise: true },
  { label: "Gerente dedicado",     free: false,        pro: false,          premium: false,         enterprise: true },
  { label: "API de integração",    free: false,        pro: false,          premium: false,         enterprise: true },
  { label: "SLA garantido",        free: false,        pro: false,          premium: false,         enterprise: true },
];

const FAQS = [
  {
    q: "Posso cancelar ou mudar de plano a qualquer momento?",
    a: "Sim, sem fidelidade e sem multa. Você pode fazer upgrade ou downgrade do seu plano quando quiser pelo próprio painel. As alterações entram em vigor no próximo ciclo de cobrança.",
  },
  {
    q: "O que acontece se eu atingir o limite de produtos do meu plano?",
    a: "Você receberá um aviso dentro do painel. Para adicionar mais produtos será necessário fazer upgrade para um plano superior ou remover produtos inativos.",
  },
  {
    q: "Os descontos de planos anuais e semestrais são calculados como?",
    a: "Os valores exibidos já refletem o preço mensal com o desconto aplicado. No plano trimestral, o valor é cobrado a cada 3 meses; no semestral, a cada 6 meses; no anual, uma única cobrança anual.",
  },
  {
    q: "Como funciona o plano Enterprise?",
    a: "O Enterprise é ideal para redes de lojas, franquias e grandes operações. O preço é sob consulta e inclui condições personalizadas, gerente de conta dedicado, SLA garantido e integração via API. Entre em contato pelo nosso formulário.",
  },
];

function CellValue({ value }: { value: boolean | string }) {
  if (typeof value === "string") {
    return <span className="text-sm text-[#f9fafb] font-medium">{value}</span>;
  }
  return value ? (
    <Check className="w-5 h-5 text-[#f97316] mx-auto" />
  ) : (
    <X className="w-4 h-4 text-[#4b5563] mx-auto" />
  );
}

export default function PlanosPage() {
  const [period, setPeriod] = useState<Period>("mensal");

  const makePlans = (p: Period) => [
    {
      name: "Free",
      price: 0,
      period: "mês",
      description: "Para começar sem investimento",
      features: PLAN_FEATURES.Free,
      cta: "Começar grátis",
      ctaHref: "https://shopping.bcmtech.com.br/register",
    },
    {
      name: "Pro",
      price: PRICES.Pro[p] as number,
      period: "mês",
      description: "Para quem quer crescer rápido",
      features: PLAN_FEATURES.Pro,
      cta: "Assinar Pro",
      ctaHref: "https://shopping.bcmtech.com.br/register",
      popular: true,
    },
    {
      name: "Premium",
      price: PRICES.Premium[p] as number,
      period: "mês",
      description: "Para negócios em expansão",
      features: PLAN_FEATURES.Premium,
      cta: "Assinar Premium",
      ctaHref: "https://shopping.bcmtech.com.br/register",
    },
    {
      name: "Enterprise",
      price: null,
      period: "mês",
      description: "Para redes e grandes operações",
      features: PLAN_FEATURES.Enterprise,
      cta: "Falar com vendas",
      ctaHref: "/contato",
      enterprise: true,
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(249,115,22,0.15)_0%,transparent_60%)]" />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-5"
          >
            <motion.div variants={fadeInUp}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#f97316]/30 bg-[#f97316]/10 text-[#f97316] text-sm font-medium">
                <Zap className="w-3.5 h-3.5" /> Planos e preços
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
            >
              Planos para cada{" "}
              <span className="gradient-text">fase do seu negócio</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-[#9ca3af] max-w-2xl mx-auto leading-relaxed"
            >
              Do freelancer ao grande varejista. Comece de graça e faça upgrade quando precisar.
              Sem fidelidade, sem surpresas na fatura.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Billing toggle */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="flex justify-center"
        >
          <div className="inline-flex items-center gap-1 p-1 rounded-xl bg-[#1f2937] border border-[#374151]">
            {PERIOD_OPTIONS.map((opt) => (
              <button
                key={opt.key}
                onClick={() => setPeriod(opt.key)}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  period === opt.key
                    ? "bg-[#f97316] text-white shadow-[0_0_15px_rgba(249,115,22,0.4)]"
                    : "text-[#9ca3af] hover:text-[#f9fafb]"
                }`}
              >
                {opt.label}
                {opt.badge && period !== opt.key && (
                  <span className="ml-1.5 text-xs font-bold text-[#f97316]">{opt.badge}</span>
                )}
              </button>
            ))}
          </div>
        </motion.div>

        {period !== "mensal" && (
          <motion.p
            key={period}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-sm text-[#9ca3af] mt-3"
          >
            {period === "trimestral" && "Cobrado a cada 3 meses — economia de 10% por mês"}
            {period === "semestral" && "Cobrado a cada 6 meses — economia de 20% por mês"}
            {period === "anual" && "Cobrado uma vez por ano — economia de 30% por mês"}
          </motion.p>
        )}
      </section>

      {/* Plans grid */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-24">
        <motion.div
          key={period}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {makePlans(period).map((plan) => (
            <PlanCard key={plan.name} {...plan} />
          ))}
        </motion.div>
      </section>

      {/* Comparison table */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1a2332]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Comparação{" "}
              <span className="gradient-text">completa</span>
            </h2>
            <p className="text-[#9ca3af] max-w-xl mx-auto">
              Veja exatamente o que cada plano oferece antes de decidir.
            </p>
          </motion.div>

          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="overflow-x-auto rounded-2xl border border-[#374151]"
          >
            <table className="w-full min-w-[640px]">
              <thead>
                <tr className="border-b border-[#374151]">
                  <th className="text-left px-6 py-4 text-sm font-semibold text-[#9ca3af] w-48">
                    Recurso
                  </th>
                  {["Free", "Pro", "Premium", "Enterprise"].map((name) => (
                    <th
                      key={name}
                      className={`px-6 py-4 text-sm font-bold text-center ${
                        name === "Pro" ? "text-[#f97316]" : "text-[#f9fafb]"
                      }`}
                    >
                      {name}
                      {name === "Pro" && (
                        <span className="ml-1.5 text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-[#f97316]/20 text-[#f97316] align-middle">
                          POPULAR
                        </span>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row, i) => (
                  <tr
                    key={row.label}
                    className={`border-b border-[#374151]/60 ${
                      i % 2 === 0 ? "bg-[#111827]" : "bg-[#1f2937]"
                    }`}
                  >
                    <td className="px-6 py-3.5 text-sm text-[#d1d5db]">{row.label}</td>
                    <td className="px-6 py-3.5 text-center">
                      <CellValue value={row.free} />
                    </td>
                    <td className="px-6 py-3.5 text-center bg-[#f97316]/5">
                      <CellValue value={row.pro} />
                    </td>
                    <td className="px-6 py-3.5 text-center">
                      <CellValue value={row.premium} />
                    </td>
                    <td className="px-6 py-3.5 text-center">
                      <CellValue value={row.enterprise} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
            Dúvidas sobre os{" "}
            <span className="gradient-text">planos</span>
          </h2>
          <p className="text-[#9ca3af]">
            Tire suas dúvidas antes de assinar.
          </p>
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
          className="max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="rounded-2xl bg-gradient-to-br from-[#f97316] to-[#ef4444] p-8 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.15)_0%,transparent_60%)]" />
              <div className="relative">
                <h3 className="text-2xl font-bold text-white mb-2">Comece agora grátis</h3>
                <p className="text-white/80 mb-6 text-sm leading-relaxed">
                  Crie sua conta, configure sua loja e comece a vender sem gastar nada.
                </p>
                <Link
                  href="https://shopping.bcmtech.com.br/register"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-[#f97316] font-bold hover:bg-white/90 transition-all"
                >
                  Cadastre-se grátis <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="rounded-2xl bg-[#1f2937] border border-[#374151] p-8"
            >
              <h3 className="text-2xl font-bold text-[#f9fafb] mb-2">Precisa de Enterprise?</h3>
              <p className="text-[#9ca3af] mb-6 text-sm leading-relaxed">
                Para grandes operações, redes de lojas e franquias. Fale com nosso time e
                receba uma proposta personalizada.
              </p>
              <Link
                href="/contato"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[#f97316] text-[#f97316] font-bold hover:bg-[#f97316]/10 transition-all"
              >
                Falar com vendas <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
