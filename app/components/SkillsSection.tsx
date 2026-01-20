"use client";
import { motion } from "motion/react";

const specializations = [
  "React",
  "TypeScript",
  "Next.js",
  "React Native",
  "Expo",
] as const;

export default function SkillsSection() {
  return (
    <div className="mb-8">
      <h3 className="text-sm uppercase tracking-wider text-slate-500 mb-4">
        Ключевые навыки
      </h3>
      <div className="flex flex-wrap gap-3">
        {specializations.map((spec, index) => (
          <motion.span
            key={spec}
            className="px-4 py-2 bg-slate-800/50 border border-cyan-500/20 rounded-full text-sm text-cyan-400 hover:bg-slate-800 hover:border-cyan-500/40 transition-all duration-200 cursor-pointer"
            initial={{ opacity: 0, scale: 0.8, rotateX: -90 }}
            whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
            whileHover={{
              scale: 1.1,
              y: -5,
              boxShadow: "0 10px 30px rgba(34, 211, 238, 0.3)",
            }}
          >
            {spec}
          </motion.span>
        ))}
      </div>
    </div>
  );
}
