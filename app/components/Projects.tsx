"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Code2, Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

type FilterType = "All" | "React" | "E-commerce" | "Web Apps";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: FilterType[];
  liveUrl: string;
  codeUrl: string;
  featured?: boolean;
}

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Упаковка123.рф",
      description:
        "Интернет-магазин упаковочных материалов с каталогом продукции, корзиной и системой оформления заказов. Современный дизайн и удобная навигация.",
      image:
        "https://images.unsplash.com/photo-1694599048261-a1de00f0117e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc2ODQ2MzcyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["React", "JavaScript", "CSS", "E-commerce"],
      category: ["React", "E-commerce", "Web Apps"],
      liveUrl: "https://упаковка123.рф",
      codeUrl: "https://github.com/Mirnyjj",
      featured: true,
    },
    {
      id: 2,
      title: "Task Management Dashboard",
      description:
        "Интерактивная панель управления задачами с возможностью создания, редактирования и отслеживания проектов.",
      image:
        "https://images.unsplash.com/photo-1641567535859-c58187ac4954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkYXNoYm9hcmQlMjB3ZWIlMjBhcHB8ZW58MXx8fHwxNzY4NDYzNzI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      category: ["React", "Web Apps"],
      liveUrl: "#",
      codeUrl: "https://github.com/Mirnyjj",
    },
    {
      id: 3,
      title: "Weather Application",
      description:
        "Приложение для просмотра погоды с использованием API OpenWeatherMap. Показывает текущую погоду и прогноз на несколько дней.",
      image:
        "https://images.unsplash.com/photo-1759488820765-5cf0755965ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWF0aGVyJTIwYXBwbGljYXRpb24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY4NDYzNzI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["React", "API Integration", "CSS"],
      category: ["React", "Web Apps"],
      liveUrl: "#",
      codeUrl: "https://github.com/Mirnyjj",
    },
    {
      id: 4,
      title: "Portfolio Projects",
      description:
        "Различные веб-приложения и компоненты, демонстрирующие навыки работы с современными фронтенд технологиями.",
      image:
        "https://images.unsplash.com/photo-1651129522359-ce483a8263a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXNrJTIwbWFuYWdlbWVudCUyMGFwcHxlbnwxfHx8fDE3Njg0NTEwMDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["React", "JavaScript", "HTML/CSS"],
      category: ["React", "Web Apps"],
      liveUrl: "#",
      codeUrl: "https://github.com/Mirnyjj",
    },
  ];

  const filters: FilterType[] = ["All", "React", "E-commerce", "Web Apps"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category.includes(activeFilter));

  return (
    <section
      id="projects"
      className="py-20 lg:py-32 bg-slate-950 relative overflow-hidden"
    >
      <motion.div
        className="absolute top-40 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 100, 0],
        }}
        transition={{
          duration: 20,
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
            Избранные{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Проекты
            </span>
          </motion.h2>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter, index) => (
              <motion.button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-lg font-medium transition-all duration-300 relative overflow-hidden ${
                  activeFilter === filter
                    ? "text-white"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {activeFilter === filter && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500"
                    layoutId="activeFilter"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{filter}</span>
              </motion.button>
            ))}
          </div>

          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotateY: 15 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    layout: { duration: 0.3 },
                  }}
                  className="group relative bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-cyan-500/50 transition-all duration-300"
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                  whileHover={{ y: -12, scale: 1.02 }}
                  style={{
                    transformStyle: "preserve-3d",
                    perspective: "1000px",
                  }}
                >
                  {project.featured && (
                    <motion.div
                      className="absolute top-4 right-4 z-20 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <Star size={12} fill="currentColor" />
                      Featured
                    </motion.div>
                  )}

                  <div className="relative h-48 overflow-hidden">
                    <motion.div
                      animate={{
                        scale: hoveredProject === project.id ? 1.15 : 1,
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover"
                      />
                    </motion.div>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"
                      animate={{
                        opacity: hoveredProject === project.id ? 0.8 : 0.6,
                      }}
                    />

                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                      initial={{ x: "-100%" }}
                      animate={{
                        x: hoveredProject === project.id ? "100%" : "-100%",
                      }}
                      transition={{ duration: 0.6 }}
                    />
                  </div>

                  <div className="p-6">
                    <motion.h3
                      className="text-xl font-semibold mb-3 text-slate-100"
                      animate={{
                        color:
                          hoveredProject === project.id ? "#22d3ee" : "#f1f5f9",
                      }}
                    >
                      {project.title}
                    </motion.h3>
                    <p className="text-slate-400 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          className="px-3 py-1 bg-slate-800 text-cyan-400 text-xs rounded-full border border-cyan-500/20"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                          whileHover={{
                            scale: 1.1,
                            backgroundColor: "rgb(8 51 68)",
                          }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <motion.a
                        href={project.liveUrl}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg relative overflow-hidden group/btn"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <motion.span
                          className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: 0 }}
                          transition={{ duration: 0.3 }}
                        />
                        <ExternalLink size={16} className="relative z-10" />
                        <span className="relative z-10">Live Demo</span>
                      </motion.a>
                      <motion.a
                        href={project.codeUrl}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-slate-800 text-slate-300 rounded-lg hover:bg-slate-700 hover:text-cyan-400 transition-all duration-200"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Code2 size={16} />
                        Code
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
