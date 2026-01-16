import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Navigation } from "./components/Navigation";
import { getProjects } from "@/sanity/lib/sanity";

export default async function App() {
  const data = await getProjects();
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navigation />
      <Hero />
      <About />
      <Projects initialProjects={data} />
      <Skills />
      <Contact />
    </div>
  );
}
