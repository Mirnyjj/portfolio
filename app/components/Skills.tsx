"use client";
import { motion } from "motion/react";
import { Code2, Palette, Wrench, Zap } from "lucide-react";
import React from "react";

interface Skill {
  name: string;
  level: number;
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
      title: "Frontend Frameworks",
      skills: [
        { name: "React", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "TypeScript", level: 88 },
        { name: "Vue.js", level: 75 },
      ],
    },
    {
      icon: <Palette size={24} />,
      title: "Styling",
      skills: [
        { name: "Tailwind CSS", level: 92 },
        { name: "CSS/SCSS", level: 90 },
        { name: "Styled Components", level: 85 },
        { name: "Motion/Framer", level: 80 },
      ],
    },
    {
      icon: <Wrench size={24} />,
      title: "Tools & Version Control",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "Webpack/Vite", level: 85 },
        { name: "npm/yarn", level: 88 },
        { name: "VS Code", level: 95 },
      ],
    },
    {
      icon: <Zap size={24} />,
      title: "Performance & Optimization",
      skills: [
        { name: "Web Vitals", level: 88 },
        { name: "Code Splitting", level: 85 },
        { name: "Lazy Loading", level: 90 },
        { name: "SEO", level: 82 },
      ],
    },
  ];

  const lighthouseScores = [
    { metric: "Performance", score: 98 },
    { metric: "Accessibility", score: 95 },
    { metric: "Best Practices", score: 100 },
    { metric: "SEO", score: 97 },
  ];

  return (
    <section
      id="skills"
      className="py-20 lg:py-32 bg-slate-900/50 relative overflow-hidden"
    >
      {/* Background decoration */}
      <motion.div
        className="absolute bottom-20 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
        }}
        transition={{
          duration: 18,
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
            Навыки &{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Технологии
            </span>
          </motion.h2>

          {/* Skill Categories Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20, rotateX: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300 relative overflow-hidden group"
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 50px rgba(34, 211, 238, 0.1)",
                }}
              >
                <motion.div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <motion.div
                      className="p-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white"
                      whileHover={{
                        rotate: 360,
                        scale: 1.1,
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      {category.icon}
                    </motion.div>
                    <h3 className="text-xl font-semibold text-slate-100">
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.4,
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                        }}
                      >
                        <div className="flex justify-between mb-2">
                          <span className="text-slate-300">{skill.name}</span>
                          <motion.span
                            className="text-cyan-400 font-semibold"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{
                              delay:
                                categoryIndex * 0.1 + skillIndex * 0.1 + 0.5,
                            }}
                          >
                            {skill.level}%
                          </motion.span>
                        </div>
                        <div className="h-2 bg-slate-700 rounded-full overflow-hidden relative">
                          <motion.div
                            className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full relative"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 1.2,
                              delay: categoryIndex * 0.1 + skillIndex * 0.1,
                              ease: "easeOut",
                            }}
                          >
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                              animate={{
                                x: ["-100%", "200%"],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatDelay: 3,
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
            className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-xl p-8 border border-slate-700/50 relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 2px 2px, rgb(34 211 238) 1px, transparent 0)",
                backgroundSize: "40px 40px",
              }}
              animate={{
                backgroundPosition: ["0px 0px", "40px 40px"],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <motion.h3
              className="text-2xl font-semibold mb-6 text-center text-slate-100 relative z-10"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Lighthouse Performance Scores
            </motion.h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
              {lighthouseScores.map((item, index) => (
                <motion.div
                  key={item.metric}
                  initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
                  whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.15,
                    type: "spring",
                    stiffness: 200,
                  }}
                  className="text-center"
                  whileHover={{
                    scale: 1.1,
                    y: -10,
                  }}
                >
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="none"
                        className="text-slate-700"
                      />

                      <motion.circle
                        cx="64"
                        cy="64"
                        r="56"
                        stroke="url(#gradient)"
                        strokeWidth="8"
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray="351.68"
                        initial={{ strokeDashoffset: 351.68 }}
                        whileInView={{
                          strokeDashoffset:
                            351.68 - (351.68 * item.score) / 100,
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
                          id="gradient"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop offset="0%" stopColor="#06b6d4" />
                          <stop offset="100%" stopColor="#3b82f6" />
                        </linearGradient>
                      </defs>
                    </svg>

                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.span
                        className="text-3xl font-bold text-slate-100"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
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
