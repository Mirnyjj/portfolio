"use client";
import { motion } from "motion/react";
import { Award, Zap, Target } from "lucide-react";

const highlights = [
  { icon: <Award size={20} />, text: "3+ проектов" },
  { icon: <Zap size={20} />, text: "Быстрая разработка" },
  { icon: <Target size={20} />, text: "Pixel Perfect" },
] as const;

export default function HighlightsSection() {
  return (
    <div className="flex flex-wrap gap-4 mb-8">
      {highlights.map((item, index) => (
        <motion.div
          key={index}
          className="flex items-center gap-2 px-4 py-2 bg-slate-800/70 rounded-lg border border-cyan-500/20"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
          whileHover={{
            scale: 1.05,
            borderColor: "rgb(34 211 238 / 0.4)",
          }}
        >
          <span className="text-cyan-400">{item.icon}</span>
          <span className="text-slate-300 text-sm">{item.text}</span>
        </motion.div>
      ))}
    </div>
  );
}
