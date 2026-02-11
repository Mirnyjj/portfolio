"use client"; // ← ДОБАВИТЬ В САМОМ ВЕРХУ!

import { ImageWithFallback } from "./ImageWithFallback";
import { urlFor } from "@/sanity/lib/image";
import { motion } from "motion/react";
import { SanityProject } from "../types";

type Props = {
  project: SanityProject;
  hoveredProject: string | null;
};

export const ProjectImage = ({ project, hoveredProject }: Props) => {
  return (
    <div className="relative h-48 overflow-hidden rounded-t-xl flex-shrink-0">
      <motion.div
        animate={{
          scale: hoveredProject === project._id ? 1.15 : 1,
        }}
        transition={{ duration: 0.4 }}
        className="w-full h-full"
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
            width={420}
            height={250}
            className="w-full h-48 object-cover"
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
  );
};
