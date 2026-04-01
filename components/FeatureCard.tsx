"use client";
import { motion } from "framer-motion";
import { scaleIn, viewportOnce } from "@/lib/motion";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  highlight?: boolean;
}

export default function FeatureCard({ icon: Icon, title, description, highlight }: FeatureCardProps) {
  return (
    <motion.div
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={`p-6 rounded-2xl border transition-all duration-300 hover:scale-105 ${
        highlight
          ? "border-[#f97316]/50 bg-[#f97316]/10"
          : "border-[#374151] bg-[#1f2937] hover:border-[#f97316]/30"
      }`}
    >
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
        highlight ? "bg-[#f97316]" : "bg-[#f97316]/20"
      }`}>
        <Icon className={`w-6 h-6 ${highlight ? "text-white" : "text-[#f97316]"}`} />
      </div>
      <h3 className="font-semibold text-[#f9fafb] mb-2">{title}</h3>
      <p className="text-sm text-[#9ca3af] leading-relaxed">{description}</p>
    </motion.div>
  );
}
