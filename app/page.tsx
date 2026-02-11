import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Navigation } from "./components/Navigation";
import { ProjectsWrapper } from "./components/ProjectsWrapper";

export default async function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navigation />

      <Hero />

      <About />

      <ProjectsWrapper />

      <Skills />
      <Contact />
    </div>
  );
}

export const revalidate = 30;
