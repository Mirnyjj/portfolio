"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Code2, Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { getProjects } from "@/sanity/lib/sanity";
import { SanityProject } from "../types";
import { urlFor } from "@/sanity/lib/image";

type FilterType =
  | "All"
  | "lending"
  | "e-commerce"
  | "web-app"
  | "redesign"
  | "other";

export function Projects({
  initialProjects,
}: {
  initialProjects?: SanityProject[];
}) {
  const [projects, setProjects] = useState<SanityProject[]>(
    initialProjects || []
  );
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [loading, setLoading] = useState(!initialProjects);

  useEffect(() => {
    if (initialProjects) return;

    async function fetchProjects() {
      try {
        const data = await getProjects();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  const filters: FilterType[] = [
    "All",
    "lending",
    "e-commerce",
    "web-app",
    "redesign",
    "other",
  ];
  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => {
          const sanityCategory = project.category;
          return sanityCategory === activeFilter;
        });

  if (loading && projects.length === 0) {
    return (
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500 mx-auto mb-4"></div>
            <p className="text-slate-400">Загружаем проекты...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
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
                      ? "text-white shadow-lg shadow-cyan-500/25"
                      : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:shadow-lg hover:shadow-slate-500/25"
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
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
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
                    key={project._id}
                    layout
                    initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    exit={{ opacity: 0, scale: 0.8, rotateY: 15 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                      layout: { duration: 0.3 },
                    }}
                    className="group relative bg-gradient-to-br from-slate-900/80 to-slate-950/80 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-800/50 hover:border-cyan-500/60 hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-500 cursor-pointer"
                    onHoverStart={() => setHoveredProject(project._id)}
                    onHoverEnd={() => setHoveredProject(null)}
                    whileHover={{ y: -8, scale: 1.02 }}
                    style={{
                      transformStyle: "preserve-3d",
                      perspective: "1000px",
                    }}
                  >
                    {project.featured && (
                      <motion.div
                        className="absolute top-4 right-4 z-20 bg-gradient-to-r from-yellow-400/95 to-orange-500/95 text-black px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg shadow-yellow-500/40 backdrop-blur-sm border border-yellow-400/50"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        <Star size={12} fill="currentColor" />
                        Featured
                      </motion.div>
                    )}

                    <div className="relative h-48 overflow-hidden rounded-t-xl">
                      <motion.div
                        animate={{
                          scale: hoveredProject === project._id ? 1.15 : 1,
                        }}
                        transition={{ duration: 0.4 }}
                      >
                        {project.image ? (
                          <ImageWithFallback
                            src={urlFor(project.image)
                              .width(420)
                              .height(250)
                              .fit("crop")
                              .quality(85)
                              .url()}
                            alt={project.title}
                            className="w-full h-48 object-cover transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-48 bg-gradient-to-br from-slate-800/80 to-slate-900/80 flex items-center justify-center rounded-t-xl border-b border-slate-700/50">
                            <div className="text-slate-500 text-sm px-4 py-2 bg-slate-700/60 rounded-lg backdrop-blur-sm font-medium">
                              Preview not available
                            </div>
                          </div>
                        )}
                      </motion.div>

                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/60 to-transparent backdrop-blur-md"
                        animate={{
                          opacity: hoveredProject === project._id ? 1 : 0.85,
                        }}
                      />

                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
                        initial={{ x: "-100%" }}
                        animate={{
                          x: hoveredProject === project._id ? "100%" : "-100%",
                        }}
                        transition={{ duration: 0.6 }}
                      />
                    </div>

                    <div className="p-6">
                      <motion.h3
                        className="text-xl font-bold mb-3 text-white leading-tight line-clamp-2"
                        animate={{
                          color:
                            hoveredProject === project._id
                              ? "#22d3ee"
                              : "#f8fafc",
                        }}
                      >
                        {project.title}
                      </motion.h3>

                      <p className="text-slate-400 mb-6 leading-relaxed line-clamp-3">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies
                          ?.slice(0, 5)
                          .map((tech, techIndex) => (
                            <motion.span
                              key={`${project._id}-${tech}`}
                              className="px-3 py-1.5 bg-slate-800/70 backdrop-blur-sm text-cyan-400 text-xs font-medium rounded-full border border-cyan-500/40 hover:border-cyan-400/70 hover:bg-cyan-500/10 transition-all duration-200 shadow-sm"
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{
                                delay: index * 0.08 + techIndex * 0.02,
                              }}
                              whileHover={{
                                scale: 1.08,
                                boxShadow: "0 4px 12px rgba(34, 211, 238, 0.3)",
                                y: -1,
                              }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                      </div>

                      <div className="flex gap-3 pt-4 border-t border-slate-800/50">
                        {project.liveUrl && (
                          <motion.a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-cyan-500/90 to-blue-500/90 hover:from-cyan-400 hover:to-blue-400 text-white font-semibold rounded-lg relative overflow-hidden shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/50 backdrop-blur-sm border border-cyan-500/30 transition-all duration-300 group"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                          >
                            <motion.span
                              className="absolute inset-0 bg-gradient-to-r from-blue-500/90 to-purple-500/90 backdrop-blur-sm"
                              initial={{ scaleX: 0, scaleY: 0.8 }}
                              whileHover={{ scaleX: 1, scaleY: 1 }}
                              transition={{ duration: 0.3, ease: "easeOut" }}
                            />
                            <ExternalLink
                              size={16}
                              className="relative z-10 flex-shrink-0"
                            />
                            <span className="relative z-10">Live Demo</span>
                          </motion.a>
                        )}

                        {project.codeUrl && (
                          <motion.a
                            href={project.codeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-slate-800/70 hover:bg-slate-700/90 text-slate-300 hover:text-slate-100 font-semibold rounded-lg backdrop-blur-sm border border-slate-700/50 hover:border-slate-500/70 hover:shadow-xl hover:shadow-slate-500/30 transition-all duration-300 shadow-lg"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                          >
                            <Code2 size={16} className="flex-shrink-0" />
                            <span>View Code</span>
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
