"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="
        mt-20 border-t border-slate-800
        py-10
        text-center
        max-w-7xl mx-auto px-4
      "
    >
      <div className="flex flex-col items-center gap-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-sm leading-relaxed text-slate-400 max-w-4xl"
        >
          Вся представленная на сайте информация носит информационный характер и
          ни при каких условиях материалы и цены, размещенные на сайте, не
          являются публичной офертой, определяемой положениями ст. 437 (2) ГК
          РФ. Опубликованная на
          данном сайте информация может быть изменена в любое время без
          предварительного уведомления.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.55 }}
          className="flex flex-col sm:flex-row items-center gap-3 text-sm"
        >
          <p className="text-slate-500">
            © {year} Максим Мирный. Все права защищены.
          </p>

          <span className="hidden sm:block text-slate-700">•</span>

          <Link
            href="/privacy"
            className="text-slate-400 hover:text-white transition-colors"
          >
            Политика конфиденциальности
          </Link>
        </motion.div>
      </div>
    </motion.footer>
  );
}
