"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(value / (duration / 16));
    const timer = setInterval(() => {
      start = Math.min(start + step, value);
      setCount(start);
      if (start >= value) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return <span ref={ref}>{count.toLocaleString("pt-BR")}{suffix}</span>;
}

interface StatsProps {
  items: StatItem[];
}

export default function Stats({ items }: StatsProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {items.map((item, i) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          className="text-center p-6 rounded-2xl bg-[#1f2937] border border-[#374151]"
        >
          <div className="text-3xl font-bold text-[#f97316] mb-1">
            <Counter value={item.value} suffix={item.suffix} />
          </div>
          <div className="text-sm text-[#9ca3af]">{item.label}</div>
        </motion.div>
      ))}
    </div>
  );
}
