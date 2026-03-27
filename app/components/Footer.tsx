"use client";
import { motion } from "motion/react";
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="mt-20 py-8 border-t border-slate-800 text-center text-slate-500 max-w-7xl mx-auto px-4"
    >
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        © {year} Максим Мирный. Все права защищены.
      </motion.p>
      <motion.a
        href="/privacy"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        Политика конфиденциальности
      </motion.a>
    </motion.div>
  );
}
