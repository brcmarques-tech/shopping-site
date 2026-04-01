"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ShoppingBag, Truck, Star, Store, BarChart2, Shield, Zap,
  MapPin, Coffee, Scissors, Dumbbell, BookOpen, Heart, Wrench,
  Smartphone, Package, ChevronRight, Download, ArrowRight,
  Pizza, Shirt, Home, Pill, Flower, Car, Baby, Gift,
} from "lucide-react";
import Stats from "@/components/Stats";
import PlanCard from "@/components/PlanCard";
import FaqItem from "@/components/FaqItem";
import { fadeInUp, fadeIn, staggerContainer, scaleIn, slideInLeft, slideInRight, viewportOnce } from "@/lib/motion";

const STATS = [
  { value: 200, suffix: "+", label: "Lojas cadastradas" },
  { value: 5000, suffix: "+", label: "Produtos disponíveis" },
  { value: 10000, suffix: "+", label: "Clientes ativos" },
  { value: 98, suffix: "%", label: "Satisfação" },
];

const PRODUCT_CATEGORIES = [
  { icon: Pizza, label: "Alimentação" },
  { icon: Shirt, label: "Moda" },
  { icon: Home, label: "Casa & Decoração" },
  { icon: Pill, label: "Saúde & Beleza" },
  { icon: Flower, label: "Flores & Presentes" },
  { icon: Baby, label: "Bebê & Criança" },
  { icon: Gift, label: "Presentes" },
  { icon: Package, label: "Eletrônicos" },
];

const SERVICE_CATEGORIES = [
  { icon: Scissors, label: "Barbearia" },
  { icon: Dumbbell, label: "Personal Trainer" },
  { icon: Wrench, label: "Manutenção" },
  { icon: Coffee, label: "Estética" },
  { icon: Heart, label: "Saúde" },
  { icon: BookOpen, label: "Aulas" },
  { icon: Car, label: "Automotivo" },
  { icon: Smartphone, label: "Tecnologia" },
  { icon: Home, label: "Limpeza" },
  { icon: Star, label: "Fotografia" },
];

const VENDOR_FEATURES = [
  { icon: Store, title: "Múltiplas lojas", desc: "Gerencie todas as suas lojas em um único painel intuitivo." },
  { icon: BarChart2, title: "Analytics completo", desc: "Acompanhe vendas, faturamento e métricas em tempo real." },
  { icon: Shield, title: "Pagamento seguro", desc: "Receba via PIX ou cartão. Split automático na entrega." },
  { icon: Zap, title: "Setup em minutos", desc: "Crie sua loja e comece a vender em menos de 5 minutos." },
  { icon: MapPin, title: "Entrega local", desc: "Configure sua área de entrega e tempo estimado facilmente." },
  { icon: Star, title: "Selo verificado", desc: "Conquiste o selo de loja verificada e atraia mais clientes." },
];

const CLIENT_FEATURES = [
  { icon: Truck, title: "Entrega rápida", desc: "Rastreie seu pedido em tempo real até a sua porta." },
  { icon: Smartphone, title: "App intuitivo", desc: "Interface simples e moderna para comprar em segundos." },
  { icon: Shield, title: "Pagamento seguro", desc: "PIX, cartão de crédito e débito com proteção total." },
  { icon: MapPin, title: "Lojas locais", desc: "Apoie negócios da sua cidade e receba mais rápido." },
  { icon: Wrench, title: "Serviços também", desc: "Agende serviços profissionais direto pelo app." },
  { icon: Star, title: "Avaliações reais", desc: "Veja avaliações de compradores reais antes de comprar." },
];

const PLANS = [
  {
    name: "Free",
    price: 0,
    period: "mês",
    description: "Para começar sem investimento",
    features: ["1 loja", "50 produtos", "5% de comissão", "Suporte básico"],
    cta: "Começar grátis",
    ctaHref: "https://shopping.bcmtech.com.br/register",
  },
  {
    name: "Pro",
    price: 49.90,
    period: "mês",
    description: "Para quem quer crescer",
    features: ["3 lojas", "200 produtos", "2% de comissão", "Analytics avançado", "Cupons de desconto", "Suporte prioritário"],
    cta: "Assinar Pro",
    ctaHref: "https://shopping.bcmtech.com.br/register",
    popular: true,
  },
  {
    name: "Premium",
    price: 99.90,
    period: "mês",
    description: "Para negócios em expansão",
    features: ["10 lojas", "Produtos ilimitados", "0% de comissão", "Analytics completo", "Selo verificado", "Suporte prioritário 24h"],
    cta: "Assinar Premium",
    ctaHref: "https://shopping.bcmtech.com.br/register",
  },
];

const FAQS = [
  {
    q: "É gratuito para começar?",
    a: "Sim! O plano Free é 100% gratuito. Você cria sua loja e começa a vender sem pagar nada. Apenas uma comissão de 5% por venda realizada.",
  },
  {
    q: "Como funciona o pagamento?",
    a: "Aceitamos PIX e cartão de crédito. O valor cai direto na sua conta após a confirmação da entrega, com split automático.",
  },
  {
    q: "Posso vender serviços também?",
    a: "Sim! Além de produtos, você pode cadastrar serviços como barbearia, personal trainer, manutenção e muito mais.",
  },
  {
    q: "Como baixo o app?",
    a: "O app bcmTech Shopping está disponível para Android. Baixe o APK diretamente pelo link na página de download.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(249,115,22,0.15)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djJoLTJ2LTJoMnptMC00aDJ2MmgtMnYtMnptLTQgNHYyaC0ydi0yaDJ6bTAgNGgydjJoLTJ2LTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-6">
            <motion.div variants={fadeIn}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#f97316]/30 bg-[#f97316]/10 text-[#f97316] text-sm font-medium">
                <Zap className="w-3.5 h-3.5" /> O marketplace da sua cidade
              </span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Compre local.{" "}
              <span className="gradient-text">Venda mais.</span>
              <br />
              Tudo num app.
            </motion.h1>

            <motion.p variants={fadeInUp} className="max-w-2xl mx-auto text-lg text-[#9ca3af] leading-relaxed">
              Conectamos clientes a lojas e serviços locais com entrega rápida. Para vendedores, o painel mais simples e poderoso para gerenciar seu negócio digital.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#download"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#f97316] text-white font-semibold hover:bg-[#ea6c0a] transition-all hover:scale-105 shadow-[0_0_30px_rgba(249,115,22,0.4)]"
              >
                <Download className="w-5 h-5" /> Baixe o app
              </Link>
              <Link
                href="https://shopping.bcmtech.com.br/register"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-[#374151] bg-[#1f2937] text-[#f9fafb] font-semibold hover:border-[#f97316]/50 transition-all hover:scale-105"
              >
                <Store className="w-5 h-5 text-[#f97316]" /> Venda no Shopping
              </Link>
            </motion.div>

            <motion.div variants={fadeIn} className="flex items-center justify-center gap-2 text-sm text-[#9ca3af]">
              <Star className="w-4 h-4 text-[#f97316] fill-[#f97316]" />
              <Star className="w-4 h-4 text-[#f97316] fill-[#f97316]" />
              <Star className="w-4 h-4 text-[#f97316] fill-[#f97316]" />
              <Star className="w-4 h-4 text-[#f97316] fill-[#f97316]" />
              <Star className="w-4 h-4 text-[#f97316] fill-[#f97316]" />
              <span className="ml-1">+10.000 clientes satisfeitos</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronRight className="w-5 h-5 text-[#9ca3af] rotate-90" />
        </motion.div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Stats items={STATS} />
      </section>

      {/* How it works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportOnce} className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Como <span className="gradient-text">funciona</span>
          </h2>
          <p className="text-[#9ca3af] max-w-xl mx-auto">Simples, rápido e seguro. Do pedido à entrega em poucos passos.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { step: "01", icon: Smartphone, title: "Baixe o app", desc: "Instale o bcmTech Shopping no seu Android e crie sua conta em minutos." },
            { step: "02", icon: ShoppingBag, title: "Escolha e peça", desc: "Navegue por lojas e serviços locais, adicione ao carrinho e finalize o pedido." },
            { step: "03", icon: Truck, title: "Receba em casa", desc: "Acompanhe a entrega em tempo real. Pague com PIX ou cartão." },
          ].map((item, i) => (
            <motion.div
              key={item.step}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              transition={{ delay: i * 0.15 }}
              className="relative text-center p-8 rounded-2xl bg-[#1f2937] border border-[#374151] hover:border-[#f97316]/30 transition-colors"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#f97316] flex items-center justify-center text-white text-xs font-bold">
                {item.step}
              </div>
              <div className="w-16 h-16 rounded-2xl bg-[#f97316]/10 flex items-center justify-center mx-auto mb-4 mt-2">
                <item.icon className="w-8 h-8 text-[#f97316]" />
              </div>
              <h3 className="font-bold text-[#f9fafb] mb-2">{item.title}</h3>
              <p className="text-sm text-[#9ca3af] leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportOnce} className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Produtos e <span className="gradient-text">serviços</span>
          </h2>
          <p className="text-[#9ca3af] max-w-xl mx-auto">Encontre tudo que precisa em um só lugar.</p>
        </motion.div>

        <div className="space-y-8">
          <div>
            <h3 className="text-sm font-semibold text-[#9ca3af] uppercase tracking-wider mb-4">Produtos</h3>
            <div className="grid grid-cols-4 sm:grid-cols-8 gap-3">
              {PRODUCT_CATEGORIES.map((cat, i) => (
                <motion.div
                  key={cat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex flex-col items-center gap-2 p-3 rounded-xl bg-[#1f2937] border border-[#374151] hover:border-[#f97316]/40 hover:bg-[#f97316]/5 transition-all cursor-default"
                >
                  <cat.icon className="w-6 h-6 text-[#f97316]" />
                  <span className="text-xs text-[#9ca3af] text-center leading-tight">{cat.label}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#9ca3af] uppercase tracking-wider mb-4">Serviços</h3>
            <div className="grid grid-cols-5 sm:grid-cols-10 gap-3">
              {SERVICE_CATEGORIES.map((cat, i) => (
                <motion.div
                  key={cat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex flex-col items-center gap-2 p-3 rounded-xl bg-[#1f2937] border border-[#374151] hover:border-[#f97316]/40 hover:bg-[#f97316]/5 transition-all cursor-default"
                >
                  <cat.icon className="w-5 h-5 text-[#f97316]" />
                  <span className="text-xs text-[#9ca3af] text-center leading-tight">{cat.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* For Vendors */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1a2332]">
        <div className="max-w-7xl mx-auto">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportOnce} className="text-center mb-14">
            <span className="inline-block px-3 py-1 rounded-full bg-[#f97316]/15 text-[#f97316] text-xs font-semibold uppercase tracking-wider mb-3">Para Vendedores</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Venda mais com o painel <span className="gradient-text">mais simples</span>
            </h2>
            <p className="text-[#9ca3af] max-w-xl mx-auto">Tudo que você precisa para gerenciar e crescer seu negócio digital.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {VENDOR_FEATURES.map((feat, i) => (
              <motion.div
                key={feat.title}
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                transition={{ delay: i * 0.1 }}
                className="p-5 rounded-2xl bg-[#111827] border border-[#374151] hover:border-[#f97316]/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-[#f97316]/15 flex items-center justify-center mb-3">
                  <feat.icon className="w-5 h-5 text-[#f97316]" />
                </div>
                <h3 className="font-semibold text-[#f9fafb] mb-1">{feat.title}</h3>
                <p className="text-sm text-[#9ca3af]">{feat.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={viewportOnce} className="text-center">
            <Link href="/vendedores" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#f97316] text-white font-semibold hover:bg-[#ea6c0a] transition-all hover:scale-105">
              Saiba mais sobre vendedores <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* For Clients */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportOnce} className="text-center mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-[#f97316]/15 text-[#f97316] text-xs font-semibold uppercase tracking-wider mb-3">Para Clientes</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Tudo que você precisa, <span className="gradient-text">na palma da mão</span>
          </h2>
          <p className="text-[#9ca3af] max-w-xl mx-auto">Compre produtos e agende serviços locais com facilidade.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {CLIENT_FEATURES.map((feat, i) => (
            <motion.div
              key={feat.title}
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              transition={{ delay: i * 0.1 }}
              className="p-5 rounded-2xl bg-[#1f2937] border border-[#374151] hover:border-[#f97316]/30 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-[#f97316]/15 flex items-center justify-center mb-3">
                <feat.icon className="w-5 h-5 text-[#f97316]" />
              </div>
              <h3 className="font-semibold text-[#f9fafb] mb-1">{feat.title}</h3>
              <p className="text-sm text-[#9ca3af]">{feat.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={viewportOnce} className="text-center">
          <Link href="/clientes" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-[#374151] bg-[#1f2937] text-[#f9fafb] font-semibold hover:border-[#f97316]/50 transition-all hover:scale-105">
            Saiba mais para clientes <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>

      {/* Plans preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1a2332]">
        <div className="max-w-7xl mx-auto">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportOnce} className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Planos para todos os <span className="gradient-text">tamanhos</span>
            </h2>
            <p className="text-[#9ca3af] max-w-xl mx-auto">Do freelancer ao grande negócio. Comece grátis, cresça quando quiser.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {PLANS.map((plan) => (
              <PlanCard key={plan.name} {...plan} />
            ))}
          </div>

          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={viewportOnce} className="text-center">
            <Link href="/planos" className="inline-flex items-center gap-2 text-[#f97316] hover:underline font-medium">
              Ver todos os planos com comparação completa <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportOnce} className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            O que dizem nossos <span className="gradient-text">usuários</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "Maria Silva", role: "Proprietária, Padaria Doce Sabor", text: "Aumentei minhas vendas em 3x depois que entrei no bcmTech Shopping. O painel é incrível!", rating: 5 },
            { name: "João Ferreira", role: "Personal Trainer", text: "Agendo clientes pelo app sem precisar de WhatsApp. Profissional demais! Recomendo muito.", rating: 5 },
            { name: "Ana Costa", role: "Cliente", text: "Recebo minhas compras rapidinho e o rastreamento em tempo real é sensacional. App top!", rating: 5 },
          ].map((t, i) => (
            <motion.div
              key={t.name}
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              transition={{ delay: i * 0.15 }}
              className="p-6 rounded-2xl bg-[#1f2937] border border-[#374151]"
            >
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-[#f97316] fill-[#f97316]" />
                ))}
              </div>
              <p className="text-sm text-[#d1d5db] leading-relaxed mb-4">"{t.text}"</p>
              <div>
                <div className="font-semibold text-sm text-[#f9fafb]">{t.name}</div>
                <div className="text-xs text-[#9ca3af]">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Download CTA */}
      <section id="download" className="py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-br from-[#f97316] to-[#ef4444] p-10 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.15)_0%,transparent_60%)]" />
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Pronto para começar?</h2>
            <p className="text-white/80 mb-8 max-w-lg mx-auto">Baixe o app grátis ou cadastre sua loja agora mesmo.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-white text-[#f97316] font-bold hover:bg-white/90 transition-all"
              >
                <Download className="w-5 h-5" /> Baixar app Android
              </a>
              <Link
                href="https://shopping.bcmtech.com.br/register"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border-2 border-white text-white font-bold hover:bg-white/10 transition-all"
              >
                <Store className="w-5 h-5" /> Criar loja grátis
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* FAQ preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportOnce} className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Perguntas <span className="gradient-text">frequentes</span>
          </h2>
        </motion.div>

        <div className="space-y-3 mb-8">
          {FAQS.map((faq) => (
            <FaqItem key={faq.q} question={faq.q} answer={faq.a} />
          ))}
        </div>

        <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={viewportOnce} className="text-center">
          <Link href="/faq" className="inline-flex items-center gap-2 text-[#f97316] hover:underline font-medium">
            Ver todas as perguntas <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>
    </>
  );
}
