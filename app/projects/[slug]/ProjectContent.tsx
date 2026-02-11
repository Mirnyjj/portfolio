"use client";

import { motion } from "motion/react";
import { ExternalLink, Code2 } from "lucide-react";
import { urlFor } from "@/sanity/lib/image";
import { SanityProject } from "@/app/types";
import { ImageWithFallback } from "@/app/components/ImageWithFallback";

interface ProjectContentProps {
  project: SanityProject;
}

export function ProjectContent({ project }: ProjectContentProps) {
  return (
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
      {/* Изображение */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative"
      >
        <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden group">
          {project.image ? (
            <ImageWithFallback
              src={urlFor(project.image)
                .width(1200)
                .height(750)
                .fit("crop")
                .quality(90)
                .url()}
              alt={project.title}
              width={1200} // ← Только это
              height={750} // ← И это
              // fill={false} НЕ НУЖНО
              className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-slate-800/80 to-slate-900/80 flex items-center justify-center rounded-2xl border-2 border-dashed border-slate-700/50">
              <div className="text-slate-500 text-lg px-6 py-4 bg-slate-700/60 rounded-xl backdrop-blur-sm font-medium text-center">
                Preview не доступен
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent" />
        </div>
      </motion.div>

      {/* Описание */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="space-y-8 lg:pt-10"
      >
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">Описание</h3>
          <p className="text-slate-300 leading-relaxed text-lg">
            {project.description}
          </p>
        </div>

        {project.category && (
          <div>
            <h4 className="text-xl font-bold text-slate-200 mb-3 flex items-center gap-2">
              Категория
            </h4>
            <span className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 text-sm font-medium rounded-full border border-cyan-500/30">
              {project.category}
            </span>
          </div>
        )}

        {project.technologies && project.technologies.length > 0 && (
          <div>
            <h4 className="text-xl font-bold text-slate-200 mb-4">
              Технологии
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-4 py-2 bg-slate-800/70 backdrop-blur-sm text-cyan-400 text-sm font-medium rounded-full border border-cyan-500/40 hover:border-cyan-400/70 hover:bg-cyan-500/10 transition-all duration-300 shadow-sm hover:shadow-cyan-500/20"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.08, y: -2 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        )}

        {/* Кнопки */}
        <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-slate-800/50">
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-cyan-500/90 to-blue-500/90 hover:from-cyan-400 hover:to-blue-400 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/50 backdrop-blur-sm border border-cyan-500/30 transition-all duration-300 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <ExternalLink
                size={20}
                className="flex-shrink-0 group-hover:translate-x-1 transition-transform"
              />
              <span>Live Demo</span>
            </motion.a>
          )}

          {project.codeUrl && (
            <motion.a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-3 px-6 py-4 bg-slate-800/70 hover:bg-slate-700/90 text-slate-300 hover:text-slate-100 font-semibold rounded-xl backdrop-blur-sm border border-slate-700/50 hover:border-slate-500/70 hover:shadow-xl hover:shadow-slate-500/30 transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Code2 size={20} className="flex-shrink-0" />
              <span>View Code</span>
            </motion.a>
          )}
        </div>
      </motion.div>
    </div>
  );
}
