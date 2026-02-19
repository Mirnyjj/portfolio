import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Navigation } from "./components/Navigation";
import { ProjectsWrapper } from "./components/ProjectsWrapper";
import { getGeo } from "@/lib/actionGeo";

export default async function App() {
  let geo = null;
  try {
    geo = await getGeo();
  } catch (error) {
    console.error("Geo error:", error);
    geo = null; // или дефолтные координаты
  }

  console.log("geo", geo);
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
