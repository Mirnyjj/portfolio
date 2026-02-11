"use client";

import dynamic from "next/dynamic";
import { ProjectsLoader } from "./ProjectsLoader";

const Projects = dynamic(
  () => import("./Projects").then((project) => project.Projects),
  {
    ssr: false,
    loading: () => <ProjectsLoader />,
  },
);

export function ProjectsWrapper() {
  return <Projects />;
}
