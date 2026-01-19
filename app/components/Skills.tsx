"use client";
import { motion } from "motion/react";
import { Code2, Palette, Wrench, Zap, Smartphone, Server } from "lucide-react";
import React from "react";

interface Skill {
  name: string;
  level: number;
  description: string;
}

interface SkillCategory {
  icon: React.ReactNode;
  title: string;
  skills: Skill[];
}

export function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      icon: <Code2 size={24} />,
      title: "Фреймворки",
      skills: [
        {
          name: "React",
          level: 95,
          description:
            "SPA, hooks, memoization, Context API, RTK — 8+ проектов",
        },
        {
          name: "Next.js",
          level: 90,
          description:
            "SSR/SSG, App Router, API routes, SEO 97/100 - 4+ проектов",
        },
        {
          name: "React Native",
          level: 87,
          description:
            "Expo, react-native-skia, react-native-reanimated, victory-native - 3+ проектов",
        },
      ],
    },
    {
      icon: <Smartphone size={24} />,
      title: "Языки программирования",
      skills: [
        {
          name: "TypeScript",
          level: 88,
          description: "Strict typing, generics, type-safe компоненты",
        },
        {
          name: "JavaScript (ES6+)",
          level: 95,
          description: "Async/await, destructuring, modules",
        },
      ],
    },
    {
      icon: <Palette size={24} />,
      title: "Styling & UI",
      skills: [
        {
          name: "Tailwind CSS",
          level: 92,
          description: "Utility-first, responsive, custom themes",
        },
        {
          name: "CSS/SCSS",
          level: 90,
          description: "Animations, Flexbox/Grid, preprocessors",
        },
        {
          name: "Styled Components",
          level: 85,
          description: "CSS-in-JS, dynamic стили",
        },
        {
          name: "Motion/Framer",
          level: 80,
          description: "Плавные анимации: scale, rotate, transitions",
        },
      ],
    },
    {
      icon: <Wrench size={24} />,
      title: "Инструменты & Сборка",
      skills: [
        {
          name: "Git/GitHub",
          level: 90,
          description: "Ветвление, PR, CI/CD пайплайны",
        },
        {
          name: "Webpack/Vite",
          level: 85,
          description: "Сборка, HMR, tree-shaking",
        },
        {
          name: "npm/yarn/pnpm",
          level: 88,
          description: "Управление пакетами, монопо",
        },
        {
          name: "VS Code",
          level: 95,
          description: "Расширения, дебаг, сниппеты",
        },
        {
          name: "Cursor AI",
          level: 85,
          description:
            "AI-редактор кода, автодополнение, рефакторинг, чат-агент",
        },
      ],
    },

    {
      icon: <Zap size={24} />,
      title: "Производительность",
      skills: [
        {
          name: "Code Splitting",
          level: 85,
          description: "Динамические импорты, анализ бандлов",
        },
        {
          name: "Lazy Loading",
          level: 90,
          description: "Suspense, React.lazy",
        },
        {
          name: "SEO",
          level: 82,
          description: "Мета-теги, sitemap, структурированные данные",
        },
      ],
    },

    {
      icon: <Server size={24} />,
      title: "Интеграции & Real-time",
      skills: [
        {
          name: "WebSocket",
          level: 82,
          description: "Socket.io, real-time чаты, уведомления, live updates",
        },
        {
          name: "1C-Битрикс",
          level: 75,
          description: "Интеграция frontend с 1C, компоненты, API, D7",
        },

        {
          name: "Ollama API",
          level: 80,
          description: "OpenAI интеграция, чат-боты, настройка",
        },
      ],
    },
  ];

  const lighthouseScores = [
    { metric: "Производительность", score: 98 },
    { metric: "Доступность", score: 95 },
    { metric: "Лучшие практики", score: 100 },
    { metric: "SEO", score: 97 },
  ];

  return (
    <section
      id="skills"
      className="py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-900/50 to-slate-900/80 relative overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-cyan-500/5 via-transparent to-transparent"
        animate={{ opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 10, repeat: Infinity }}
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
            Навыки &{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Технологии
            </span>
          </motion.h2>

          {/* Grid теперь 2 колонки для 6 категорий */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20, rotateX: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.08 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 relative overflow-hidden group"
                whileHover={{
                  y: -12,
                  boxShadow: "0 25px 60px rgba(34, 211, 238, 0.15)",
                }}
              >
                <motion.div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <motion.div
                      className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl text-white shadow-lg"
                      whileHover={{
                        rotate: 360,
                        scale: 1.15,
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      {category.icon}
                    </motion.div>
                    <h3 className="text-2xl font-bold text-slate-100">
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          delay: categoryIndex * 0.08 + skillIndex * 0.05,
                        }}
                      >
                        <div className="flex justify-between items-start mb-3">
                          <div className="flex-1">
                            <span className="text-slate-200 font-semibold text-lg block">
                              {skill.name}
                            </span>
                            <p className="text-slate-400 text-sm mt-1">
                              {skill.description}
                            </p>
                          </div>
                          <motion.span
                            className="text-cyan-400 font-bold text-xl ml-4"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{
                              delay:
                                categoryIndex * 0.08 + skillIndex * 0.1 + 0.5,
                            }}
                          >
                            {skill.level}%
                          </motion.span>
                        </div>
                        <div className="h-3 bg-slate-700/50 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full relative shadow-md"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 1.5,
                              delay: categoryIndex * 0.08 + skillIndex * 0.1,
                              ease: "easeOut",
                            }}
                          >
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                              animate={{
                                x: ["-100%", "200%"],
                              }}
                              transition={{
                                duration: 2.5,
                                repeat: Infinity,
                                repeatDelay: 2,
                                ease: "easeInOut",
                              }}
                            />
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-md rounded-3xl p-10 border border-slate-700/50 relative overflow-hidden mb-12"
          >
            <motion.div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20px 20px, rgb(34 211 238) 2px, transparent 0)",
                backgroundSize: "50px 50px",
              }}
              animate={{
                backgroundPosition: ["0px 0px", "50px 50px"],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <motion.h3
              className="text-3xl font-bold mb-10 text-center text-slate-100 relative z-10"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Результаты Lighthouse
            </motion.h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {lighthouseScores.map((item, index) => (
                <motion.div
                  key={item.metric}
                  initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                  whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.15,
                    type: "spring",
                    stiffness: 200,
                  }}
                  className="text-center group"
                  whileHover={{
                    scale: 1.1,
                    y: -8,
                    rotateY: 5,
                  }}
                >
                  <div className="relative w-36 h-36 mx-auto mb-6">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle
                        cx="68"
                        cy="68"
                        r="60"
                        stroke="hsl(210 20% 30%)"
                        strokeWidth="10"
                        fill="none"
                        className="text-slate-700"
                      />
                      <motion.circle
                        cx="68"
                        cy="68"
                        r="60"
                        stroke="url(#perfGradient)"
                        strokeWidth="10"
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray="377"
                        initial={{ strokeDashoffset: 377 }}
                        whileInView={{
                          strokeDashoffset: 377 - (377 * item.score) / 100,
                        }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 2,
                          delay: index * 0.2,
                          ease: "easeOut",
                        }}
                      />
                      <defs>
                        <linearGradient
                          id="perfGradient"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop offset="0%" stopColor="#06b6d4" />
                          <stop offset="50%" stopColor="#3b82f6" />
                          <stop offset="100%" stopColor="#a855f7" />
                        </linearGradient>
                      </defs>
                    </svg>

                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.span
                        className="text-4xl font-black text-slate-100 drop-shadow-lg"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                      >
                        {item.score}
                      </motion.span>
                    </div>

                    <motion.div
                      className="absolute inset-0 rounded-full bg-cyan-500/20 blur-xl"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2,
                      }}
                    />
                  </div>
                  <motion.p
                    className="text-slate-300 font-medium"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.8 }}
                  >
                    {item.metric}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
