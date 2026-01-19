import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Navigation } from "./components/Navigation";
import { getProjects } from "@/sanity/lib/sanity";
import { Suspense } from "react";
import { ProjectsLoader } from "./components/ProjectsLoader";

export default async function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navigation />

      <Hero />

      <About />

      <Suspense fallback={<ProjectsLoader />}>
        <ProjectsWrapper />
      </Suspense>

      <Skills />
      <Contact />
    </div>
  );
}

async function ProjectsWrapper() {
  const data = await getProjects();
  return <Projects initialProjects={data} />;
}
