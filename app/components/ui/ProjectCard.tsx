"use client";

import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import { Project } from "@/app/types";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
  className?: string;
  classNameExpanded?: string;
}

export function ProjectCard({
  project,
  className,
  classNameExpanded,
}: ProjectCardProps) {
  const [active, setActive] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
  }, [active]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(false);
    };

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setActive(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* BACKDROP */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 dark:bg-black/50 backdrop-blur-md z-40"
          />
        )}
      </AnimatePresence>

      {/* MODAL */}
      <AnimatePresence>
        {active && (
          <div className="fixed inset-0 z-50 overflow-y-auto flex justify-center pt-16 pb-10">
            <motion.div
              layoutId={`card-${project.title}-${id}`}
              ref={cardRef}
              className={cn(
                "w-full max-w-[850px] max-h-[calc(100vh-4rem)] flex flex-col overflow-y-auto rounded-3xl shadow-lg [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden",
                "bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#3B82F6] dark:from-[#1F2937] dark:via-[#111827] dark:to-[#1E40AF]",
                classNameExpanded,
              )}
            >
              {/* IMAGE */}
              <motion.div layoutId={`image-${project.title}-${id}`}>
                <div className="relative w-full aspect-[16/10] overflow-hidden rounded-t-xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 850px"
                    priority={active}
                  />
                  <motion.button
                    layoutId={`button-${project.title}-${id}`}
                    onClick={() => setActive(false)}
                    className="
                      absolute top-3 right-3
                      h-10 w-10 flex items-center justify-center
                      rounded-full
                      bg-white/80 dark:bg-black/60
                      backdrop-blur-md
                      border border-gray-500
                      text-black dark:text-white
                      hover:scale-105 hover:bg-white dark:hover:bg-black
                      transition
                    "
                  >
                    ✕
                  </motion.button>
                </div>
              </motion.div>

              {/* CONTENT */}
              <div className="relative">
                <div className="flex flex-col p-8 gap-6">
                  <motion.h3
                    layoutId={`title-${project.title}-${id}`}
                    className="text-4xl font-semibold text-white dark:text-white"
                  >
                    {project.title}
                  </motion.h3>

                  <motion.p
                    layoutId={`description-${project.description}-${id}`}
                    className="text-gray-300 dark:text-gray-400 text-lg text-justify indent-6"
                  >
                    {project.description}
                  </motion.p>

                  {/* STACK */}
                  <div className="flex flex-wrap gap-3">
                    {project.stack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-md text-sm font-medium bg-white/20 text-white dark:bg-white/10 dark:text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* BUTTON */}
                  <div>
                    <Link
                      href={project.link}
                      target="_blank"
                      className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow-md transition"
                    >
                      Посмотреть проект
                    </Link>
                  </div>
                </div>

                <div className="px-6 sm:px-8 pb-24"></div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* CARD */}
      <motion.div
        layoutId={`card-${project.title}-${id}`}
        onClick={() => setActive(true)}
        className={cn(
          "flex flex-col rounded-2xl cursor-pointer border border-gray-700 dark:border-gray-600 shadow-sm",
          "bg-gradient-to-r from-[#1E293B] to-[#3B82F6] dark:from-[#111827] dark:to-[#1E40AF]",
          className,
        )}
      >
        <motion.div layoutId={`image-${project.title}-${id}`}>
          <div className="relative w-full aspect-[16/10] overflow-hidden rounded-t-xl">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 850px"
              priority={active}
            />
          </div>
        </motion.div>

        <div className="flex flex-col items-center mt-2 gap-2 p-3">
          <motion.h3
            layoutId={`title-${project.title}-${id}`}
            className="font-semibold text-white dark:text-white text-center"
          >
            {project.title}
          </motion.h3>

          <div className="flex flex-wrap justify-center gap-2">
            {project.stack.map((tech, idx) => (
              <span
                key={idx}
                className="px-2 py-1 text-xs rounded-md bg-white/20 text-white dark:bg-white/10 dark:text-white"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
}
