"use client";
import { Hero } from "./components/Hero";
import { Contact } from "./components/Contact";
import ServicesSection from "./components/ServicesSection";
import { motion } from "motion/react";

export default function App() {
  return (
    <div className="relative min-h-screen text-slate-100 mt-16 md:mt-20 overflow-hidden ">
      <motion.div
        className="absolute inset-0 z-[-10] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-30 backdrop-blur-sm"
        animate={{ opacity: [0.15, 0.35, 0.15] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <Hero />
      <ServicesSection />
      {/* <About />

      <ProjectsWrapper />

      <Skills /> */}
      <Contact />
    </div>
  );
}
