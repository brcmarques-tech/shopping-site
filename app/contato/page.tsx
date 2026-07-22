"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  MessageCircle, Mail, Clock, MapPin, Send,
  Share2, ChevronRight,
} from "lucide-react";
import { fadeInUp, fadeIn, staggerContainer, scaleIn, slideInLeft, slideInRight, viewportOnce } from "@/lib/motion";
import type { SiteContent } from "@/lib/site-content";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const DEFAULTS: SiteContent = {
  hero_title: "Compre local. Venda mais. Tudo num app.",
  hero_subtitle: "Conectamos clientes a lojas e serviços locais com entrega rápida.",
  platform_description: "",
  contact_whatsapp: "+55 53 8442-4244",
  contact_email: "contato@bcmtech.com.br",
  app_download_url: "",
  app_download_text: "Em breve nas lojas",
  show_stats: false,
  show_testimonials: false,
};

function toWaUrl(phone: string) {
  return "https://wa.me/" + phone.replace(/\D/g, "");
}

const SUBJECTS = [
  { value: "", label: "Selecione o assunto..." },
  { value: "suporte", label: "Suporte técnico" },
  { value: "vendedores", label: "Quero vender na plataforma" },
  { value: "parceria", label: "Parceria comercial" },
  { value: "outro", label: "Outro" },
];

export default function ContatoPage() {
  const [form, setForm] = useState<FormData>({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState<SiteContent>(DEFAULTS);

  useEffect(() => {
    fetch("/api/site-content")
      .then((r) => r.json())
      .then((data) => setContent(data))
      .catch(() => {});
  }, []);

  const CONTACT_CARDS = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: content.contact_whatsapp,
      sub: "Resposta em minutos",
      href: toWaUrl(content.contact_whatsapp),
      color: "#25d366",
    },
    {
      icon: Mail,
      label: "Email",
      value: content.contact_email,
      sub: "Resposta em até 24h",
      href: `mailto:${content.contact_email}`,
      color: "#f97316",
    },
    {
      icon: Clock,
      label: "Horário de atendimento",
      value: "Seg–Sex, 8h às 18h",
      sub: "Horário de Brasília",
      href: null,
      color: "#3b82f6",
    },
  ];

  const SOCIALS = [
    {
      icon: Share2,
      label: "Instagram",
      href: "https://instagram.com/bcmtech",
      handle: "@bcmtech",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      href: toWaUrl(content.contact_whatsapp),
      handle: content.contact_whatsapp,
    },
  ];

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // Simula envio (sem backend)
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(249,115,22,0.12)_0%,transparent_60%)]" />
        <div className="relative max-w-3xl mx-auto text-center">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-4">
            <motion.div variants={fadeInUp}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#f97316]/30 bg-[#f97316]/10 text-[#f97316] text-sm font-medium">
                <Mail className="w-3.5 h-3.5" /> Contato
              </span>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold">
              Fale <span className="gradient-text">conosco</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-[#9ca3af] text-lg leading-relaxed max-w-xl mx-auto">
              Tem alguma dúvida, sugestão ou quer saber mais sobre a plataforma? Nossa equipe está pronta para ajudar.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {CONTACT_CARDS.map((card, i) => {
              const inner = (
                <motion.div
                  key={card.label}
                  variants={scaleIn}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-2xl bg-[#1f2937] border border-[#374151] hover:border-[#f97316]/30 transition-all group text-center"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 transition-colors"
                    style={{ backgroundColor: `${card.color}20` }}
                  >
                    <card.icon className="w-6 h-6 transition-colors" style={{ color: card.color }} />
                  </div>
                  <p className="text-xs text-[#9ca3af] uppercase tracking-wider font-semibold mb-1">{card.label}</p>
                  <p className="text-[#f9fafb] font-semibold mb-1">{card.value}</p>
                  <p className="text-xs text-[#6b7280]">{card.sub}</p>
                </motion.div>
              );

              return card.href ? (
                <a key={card.label} href={card.href} target="_blank" rel="noopener noreferrer">
                  {inner}
                </a>
              ) : (
                <div key={card.label}>{inner}</div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form + Location */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Form */}
          <motion.div variants={slideInLeft} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <div className="bg-[#1f2937] rounded-2xl border border-[#374151] p-8">
              <h2 className="text-xl font-bold text-[#f9fafb] mb-1">Enviar mensagem</h2>
              <p className="text-sm text-[#9ca3af] mb-6">Preencha o formulário e entraremos em contato em breve.</p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <div className="w-16 h-16 rounded-2xl bg-[#f97316]/15 flex items-center justify-center mx-auto mb-4">
                    <Send className="w-7 h-7 text-[#f97316]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#f9fafb] mb-2">Mensagem enviada!</h3>
                  <p className="text-sm text-[#9ca3af]">
                    Obrigado por entrar em contato. Responderemos em até 24h úteis.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                    className="mt-6 text-sm text-[#f97316] hover:underline"
                  >
                    Enviar outra mensagem
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#9ca3af] uppercase tracking-wider mb-1.5">
                      Nome completo <span className="text-[#f97316]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Seu nome"
                      className="w-full px-4 py-3 rounded-xl bg-[#111827] border border-[#374151] text-[#f9fafb] placeholder-[#4b5563] text-sm focus:outline-none focus:border-[#f97316]/60 focus:ring-1 focus:ring-[#f97316]/30 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#9ca3af] uppercase tracking-wider mb-1.5">
                      Email <span className="text-[#f97316]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#111827] border border-[#374151] text-[#f9fafb] placeholder-[#4b5563] text-sm focus:outline-none focus:border-[#f97316]/60 focus:ring-1 focus:ring-[#f97316]/30 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#9ca3af] uppercase tracking-wider mb-1.5">
                      Assunto <span className="text-[#f97316]">*</span>
                    </label>
                    <select
                      name="subject"
                      required
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#111827] border border-[#374151] text-[#f9fafb] text-sm focus:outline-none focus:border-[#f97316]/60 focus:ring-1 focus:ring-[#f97316]/30 transition-colors appearance-none"
                    >
                      {SUBJECTS.map((s) => (
                        <option key={s.value} value={s.value} disabled={s.value === ""} className="bg-[#111827]">
                          {s.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#9ca3af] uppercase tracking-wider mb-1.5">
                      Mensagem <span className="text-[#f97316]">*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Descreva sua dúvida ou mensagem..."
                      className="w-full px-4 py-3 rounded-xl bg-[#111827] border border-[#374151] text-[#f9fafb] placeholder-[#4b5563] text-sm focus:outline-none focus:border-[#f97316]/60 focus:ring-1 focus:ring-[#f97316]/30 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#f97316] text-white font-semibold hover:bg-[#ea6c0a] transition-all hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {loading ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                          className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                        />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" /> Enviar mensagem
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Location Card + Info */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="space-y-6"
          >
            {/* Location Card */}
            <div className="bg-[#1f2937] rounded-2xl border border-[#374151] overflow-hidden">
              {/* Map placeholder */}
              <div className="h-48 bg-gradient-to-br from-[#111827] to-[#1a2332] relative flex items-center justify-center">
                <div className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: "repeating-linear-gradient(0deg,#374151 0px,#374151 1px,transparent 1px,transparent 40px),repeating-linear-gradient(90deg,#374151 0px,#374151 1px,transparent 1px,transparent 40px)",
                  }}
                />
                <div className="relative text-center">
                  <div className="w-12 h-12 rounded-full bg-[#f97316] flex items-center justify-center mx-auto mb-2 shadow-[0_0_20px_rgba(249,115,22,0.5)]">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-[#9ca3af] text-sm font-medium">Sul do Brasil</p>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-[#f97316]/15 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-[#f97316]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#f9fafb] text-sm">Área de atuação</p>
                    <p className="text-[#9ca3af] text-sm">Sul do Brasil — em expansão para todo o país</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#f97316]/15 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4 text-[#f97316]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#f9fafb] text-sm">Horário de suporte</p>
                    <p className="text-[#9ca3af] text-sm">Segunda a sexta, das 8h às 18h (Horário de Brasília)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick links */}
            <div className="bg-[#1f2937] rounded-2xl border border-[#374151] p-6">
              <h3 className="text-sm font-bold text-[#f9fafb] uppercase tracking-wider mb-4">Links rápidos</h3>
              <div className="space-y-2">
                {[
                  { label: "Central de ajuda (FAQ)", href: "/faq" },
                  { label: "Criar conta de vendedor", href: "https://shopping.bcmtech.com.br/register" },
                  { label: "Planos e preços", href: "/planos" },
                  { label: "Baixar o app", href: "/clientes#download" },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-[#111827] border border-[#374151] hover:border-[#f97316]/40 hover:bg-[#f97316]/5 text-sm text-[#d1d5db] hover:text-[#f97316] transition-all group"
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-[#6b7280] group-hover:text-[#f97316] transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1a2332]">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-2xl mx-auto text-center"
        >
          <h3 className="text-lg font-bold text-[#f9fafb] mb-2">Siga nas redes sociais</h3>
          <p className="text-sm text-[#9ca3af] mb-8">
            Acompanhe novidades, promoções e atualizações do bcmTech Shopping.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            {SOCIALS.map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-[#111827] border border-[#374151] hover:border-[#f97316]/50 hover:bg-[#f97316]/5 text-[#9ca3af] hover:text-[#f97316] transition-all group"
              >
                <social.icon className="w-4 h-4" />
                <span className="text-sm font-medium">{social.handle}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
}
