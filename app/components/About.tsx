"use client";
import { motion } from "motion/react";
import { ImageWithFallback } from "./ImageWithFallback";
import { Download } from "../../lib/icons";
import dynamic from "next/dynamic";

const specializations = [
  "React",
  "TypeScript",
  "Next.js",
  "React Native",
  "Expo",
] as const;

const SkillsSection = dynamic(() => import("./SkillsSection"), {
  ssr: false,
  loading: () => (
    <div className="mb-8">
      <h3 className="text-sm uppercase tracking-wider text-slate-500 mb-4">
        Ключевые навыки
      </h3>
      <div className="flex flex-wrap gap-3">
        {specializations.slice(0, 2).map((spec) => (
          <span
            key={spec}
            className="px-4 py-2 bg-slate-800/50 border border-cyan-500/20 rounded-full text-sm text-cyan-400"
          >
            {spec}
          </span>
        ))}
      </div>
    </div>
  ),
});

const HighlightsSection = dynamic(() => import("./HighlightsSection"), {
  ssr: false,
  loading: () => (
    <div className="flex flex-wrap gap-4 mb-8">
      <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/70 rounded-lg border border-cyan-500/20">
        <span className="text-cyan-400">⭐</span>
        <span className="text-slate-300 text-sm">3+ проектов</span>
      </div>
    </div>
  ),
});

const AvailableBadge = dynamic(() => import("./AvailableBadge"), {
  ssr: false,
  loading: () => (
    <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-xl shadow-lg">
      <p className="text-sm font-semibold">Available for work</p>
    </div>
  ),
});

export function About() {
  return (
    <section
      id="about"
      className="py-20 lg:py-32 bg-slate-900/50 relative overflow-hidden"
    >
      <motion.div
        className="absolute top-20 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Обо{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Мне
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="flex justify-center md:justify-end"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-2xl blur opacity-30"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <div className="relative">
                  <ImageWithFallback
                    src="/my-photo.jpg"
                    alt="Максим Мирный"
                    className="relative w-64 h-64 sm:w-80 sm:h-80 object-cover rounded-2xl"
                  />

                  <AvailableBadge />
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.p
                className="text-lg text-slate-300 mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Я увлечённый фронтенд-разработчик из России с большим опытом в
                создании современных, производительных веб-приложений.
                Специализируюсь на создании удобных пользовательских интерфейсов
                с использованием передовых технологий и лучших практик.
              </motion.p>

              <motion.p
                className="text-lg text-slate-300 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                С вниманием к деталям и стремлением к совершенству, я превращаю
                сложные требования в элегантные, масштабируемые решения, которые
                нравятся пользователям.
              </motion.p>

              <HighlightsSection />

              <SkillsSection />

              <motion.a
                href="/resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-100 rounded-lg transition-all duration-200 border border-slate-700 hover:border-cyan-500/30 group relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
                <Download
                  size={20}
                  className="relative z-10 group-hover:text-cyan-400 transition-colors"
                />
                <span className="relative z-10">Скачать резюме</span>
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
