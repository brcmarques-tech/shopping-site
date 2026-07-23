"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Smartphone, MapPin, Star, Bell, Truck, CreditCard,
  Wrench, Download, ChevronRight, Scissors, Dumbbell,
  Coffee, Heart, BookOpen, Car, Package,
  Pizza, Shirt, Home, Pill, Flower, Baby, Gift,
} from "lucide-react";
import { fadeInUp, fadeIn, staggerContainer, scaleIn, viewportOnce } from "@/lib/motion";

const FEATURES = [
  { icon: Truck, title: "Rastreamento em tempo real", desc: "Acompanhe seu pedido do momento da confirmação até a entrega na sua porta." },
  { icon: CreditCard, title: "PIX e cartão", desc: "Pague com PIX instantâneo ou cartão de crédito. Seguro e rápido." },
  { icon: Wrench, title: "Serviços profissionais", desc: "Agende barbearia, personal trainer, manutenção e muito mais direto pelo app." },
  { icon: MapPin, title: "Lojas locais", desc: "Apoie o comércio da sua cidade e receba mais rápido com entrega local." },
  { icon: Star, title: "Avaliações reais", desc: "Veja opiniões de compradores verificados antes de tomar sua decisão." },
  { icon: Bell, title: "Notificações push", desc: "Fique por dentro do status do pedido com notificações em tempo real." },
];

const STEPS = [
  {
    step: "01",
    icon: Download,
    title: "Baixe o app",
    desc: "Faça o download do APK para Android. Instalação rápida, sem complicação.",
  },
  {
    step: "02",
    icon: Smartphone,
    title: "Crie sua conta",
    desc: "Cadastre-se com email ou Google. Leva menos de um minuto para começar.",
  },
  {
    step: "03",
    icon: Package,
    title: "Comece a comprar",
    desc: "Explore lojas e serviços locais, adicione ao carrinho e finalize com PIX ou cartão.",
  },
];

const PRODUCT_CATEGORIES = [
  { icon: Pizza, label: "Alimentação" },
  { icon: Shirt, label: "Moda" },
  { icon: Home, label: "Casa & Deco" },
  { icon: Pill, label: "Saúde & Beleza" },
  { icon: Flower, label: "Flores" },
  { icon: Baby, label: "Bebê" },
  { icon: Gift, label: "Presentes" },
  { icon: Package, label: "Eletrônicos" },
];

const SERVICE_CATEGORIES = [
  { icon: Scissors, label: "Barbearia" },
  { icon: Dumbbell, label: "Personal" },
  { icon: Wrench, label: "Manutenção" },
  { icon: Coffee, label: "Estética" },
  { icon: Heart, label: "Saúde" },
  { icon: BookOpen, label: "Aulas" },
  { icon: Car, label: "Automotivo" },
  { icon: Smartphone, label: "Tecnologia" },
  { icon: Home, label: "Limpeza" },
  { icon: Star, label: "Fotografia" },
];

export default function ClientesPage() {
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
                <Smartphone className="w-3.5 h-3.5" /> Para Clientes
              </span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Tudo que você precisa,{" "}
              <br />
              <span className="gradient-text">na palma da mão</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="max-w-2xl mx-auto text-lg text-[#9ca3af] leading-relaxed">
              Compre produtos, agende serviços e receba tudo com entrega rápida na sua cidade.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <span className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/30 text-white/60 font-bold cursor-not-allowed"><Download className="w-5 h-5" /> Em breve nas lojas</span>
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

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1a2332]">
        <div className="max-w-7xl mx-auto">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportOnce} className="text-center mb-14">
            <span className="inline-block px-3 py-1 rounded-full bg-[#f97316]/15 text-[#f97316] text-xs font-semibold uppercase tracking-wider mb-3">
              Funcionalidades
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Por que escolher o <span className="gradient-text">bcmTech Shopping</span>
            </h2>
            <p className="text-[#9ca3af] max-w-xl mx-auto">
              Desenvolvido para tornar sua experiência de compra mais simples, segura e rápida.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map((feat, i) => (
              <motion.div
                key={feat.title}
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-[#111827] border border-[#374151] hover:border-[#f97316]/30 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#f97316]/15 flex items-center justify-center mb-4 group-hover:bg-[#f97316]/25 transition-colors">
                  <feat.icon className="w-6 h-6 text-[#f97316]" />
                </div>
                <h3 className="font-semibold text-[#f9fafb] mb-2">{feat.title}</h3>
                <p className="text-sm text-[#9ca3af] leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportOnce} className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Como <span className="gradient-text">funciona</span>
          </h2>
          <p className="text-[#9ca3af] max-w-xl mx-auto">
            Três passos simples para começar a aproveitar o bcmTech Shopping.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STEPS.map((item, i) => (
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1a2332]">
        <div className="max-w-7xl mx-auto">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportOnce} className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Produtos e <span className="gradient-text">serviços</span>
            </h2>
            <p className="text-[#9ca3af] max-w-xl mx-auto">
              Encontre tudo que precisa em um só lugar, do mercadinho à academia.
            </p>
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
                    className="flex flex-col items-center gap-2 p-3 rounded-xl bg-[#111827] border border-[#374151] hover:border-[#f97316]/40 hover:bg-[#f97316]/5 transition-all cursor-default"
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
                    className="flex flex-col items-center gap-2 p-3 rounded-xl bg-[#111827] border border-[#374151] hover:border-[#f97316]/40 hover:bg-[#f97316]/5 transition-all cursor-default"
                  >
                    <cat.icon className="w-5 h-5 text-[#f97316]" />
                    <span className="text-xs text-[#9ca3af] text-center leading-tight">{cat.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
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
            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-6">
              <Smartphone className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Baixe agora, é gratuito!
            </h2>
            <p className="text-white/80 mb-8 max-w-lg mx-auto">
              Disponível para Android. Instale o APK e comece a comprar em lojas e serviços da sua cidade.
            </p>
            <span className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/30 text-white/60 font-bold cursor-not-allowed"><Download className="w-5 h-5" /> Em breve nas lojas</span>
            <p className="text-white/60 text-xs mt-4">APK para Android · Gratuito · Sem anúncios</p>
          </div>
        </motion.div>
      </section>

    </>
  );
}
