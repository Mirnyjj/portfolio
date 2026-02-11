"use client";

import { motion } from "motion/react";
import { Star } from "lucide-react";
import { SanityProject } from "@/app/types";

interface ProjectHeroProps {
  project: SanityProject;
}

export function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-20"
    >
      <motion.h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent mb-6 text-white">
        {project.title}
      </motion.h1>

      {project.featured && (
        <motion.div
          className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400/95 to-orange-500/95 text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg shadow-yellow-500/40 backdrop-blur-sm border border-yellow-400/50 mx-auto"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
        >
          <Star size={16} fill="currentColor" />
          Featured Project
        </motion.div>
      )}
    </motion.div>
  );
}
