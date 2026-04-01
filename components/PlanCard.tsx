"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Check, Star } from "lucide-react";
import { scaleIn, viewportOnce } from "@/lib/motion";

interface PlanCardProps {
  name: string;
  price: number | null;
  period: string;
  description: string;
  features: string[];
  cta: string;
  ctaHref: string;
  popular?: boolean;
  enterprise?: boolean;
}

export default function PlanCard({
  name, price, period, description, features, cta, ctaHref, popular, enterprise,
}: PlanCardProps) {
  return (
    <motion.div
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={`relative flex flex-col rounded-2xl border p-6 transition-all duration-300 ${
        popular
          ? "border-[#f97316] bg-[#f97316]/10 shadow-[0_0_40px_rgba(249,115,22,0.2)]"
          : "border-[#374151] bg-[#1f2937]"
      }`}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-[#f97316] text-white text-xs font-bold px-3 py-1 rounded-full">
          <Star className="w-3 h-3 fill-white" /> MAIS POPULAR
        </div>
      )}

      <div className="mb-5">
        <h3 className="font-bold text-lg text-[#f9fafb] mb-1">{name}</h3>
        <p className="text-sm text-[#9ca3af]">{description}</p>
      </div>

      <div className="mb-6">
        {price === null ? (
          <div className="text-3xl font-bold text-[#f9fafb]">Sob consulta</div>
        ) : price === 0 ? (
          <div className="text-3xl font-bold text-[#f9fafb]">Grátis</div>
        ) : (
          <div className="flex items-end gap-1">
            <span className="text-sm text-[#9ca3af] mb-1">R$</span>
            <span className="text-3xl font-bold text-[#f9fafb]">
              {price.toFixed(2).replace(".", ",")}
            </span>
            <span className="text-sm text-[#9ca3af] mb-1">/{period}</span>
          </div>
        )}
      </div>

      <ul className="space-y-2.5 mb-6 flex-1">
        {features.map((feat) => (
          <li key={feat} className="flex items-start gap-2 text-sm text-[#d1d5db]">
            <Check className="w-4 h-4 text-[#f97316] shrink-0 mt-0.5" />
            {feat}
          </li>
        ))}
      </ul>

      <Link
        href={ctaHref}
        className={`block text-center py-3 rounded-xl font-semibold text-sm transition-all ${
          popular
            ? "bg-[#f97316] text-white hover:bg-[#ea6c0a]"
            : enterprise
            ? "border border-[#f97316] text-[#f97316] hover:bg-[#f97316]/10"
            : "bg-[#374151] text-[#f9fafb] hover:bg-[#4b5563]"
        }`}
      >
        {cta}
      </Link>
    </motion.div>
  );
}
