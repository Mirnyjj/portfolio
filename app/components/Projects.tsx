"use client";

import { Project } from "../types";
import { ProjectCard } from "./ui/ProjectCard";

export function Projects({ initialProjects }: { initialProjects: Project[] }) {
  return (
    <section
      id="projects"
      className="container place-content-center my-20 px-6 text-white xl:px-12 scroll-mt-20"
    >
      <h2 className="mb-6 mt-4 text-4xl font-bold tracking-tight ">
        Реализованные проекты
      </h2>
      <div className="grid md:grid-cols-4 gap-8 xl:gap-12 my-20">
        {initialProjects.map((item, ind) => (
          <ProjectCard
            key={ind}
            project={item}
            classNameExpanded="[&_h4]:text-black dark:[&_h4]:text-white [&_h4]:font-medium"
          />
        ))}
      </div>
    </section>
  );
}
