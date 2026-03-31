"use client";

import { useMemo, useState, useEffect } from "react";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

type Particle = {
  id: number;
  x: number;
  y: number;
  delay: number;
  duration: number;
};

export function Hero() {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const particles: Particle[] = useMemo(() => {
    const result: Particle[] = [];
    let s = 123456;

    for (let i = 0; i < 20; i++) {
      s = (s * 1664525 + 1013904223) >>> 0;
      const r1 = s / 4294967296;

      s = (s * 1664525 + 1013904223) >>> 0;
      const r2 = s / 4294967296;

      s = (s * 1664525 + 1013904223) >>> 0;
      const r3 = s / 4294967296;

      s = (s * 1664525 + 1013904223) >>> 0;
      const r4 = s / 4294967296;

      result.push({
        id: i,
        x: r1 * 100,
        y: r2 * 100,
        delay: r3 * 2,
        duration: 3 + r4 * 4,
      });
    }

    return result;
  }, []);

  // Типографический эффект
  const name = "<Максим Мирный />";
  const role = "Frontend Developer";
  const [typedName, setTypedName] = useState("");
  const [typedRole, setTypedRole] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedName(name.slice(0, i + 1));
      i++;
      if (i === name.length) clearInterval(interval);
    }, 100); // скорость печати
  }, []);

  useEffect(() => {
    let i = 0;
    const startDelay = name.length * 100 + 500; // начинаем после имени
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setTypedRole(role.slice(0, i + 1));
        i++;
        if (i === role.length) clearInterval(interval);
      }, 100);
    }, startDelay);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Фон */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
            style={{ left: `${p.x}%`, top: `${p.y}%` }}
            animate={{ y: [0, -50, 0], opacity: [0, 1, 0] }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Контент */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              {typedName}
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block"
              >
                |
              </motion.span>
            </span>
          </motion.h1>

          <motion.p className="text-xl sm:text-2xl lg:text-3xl text-gray-400 mb-4">
            {typedRole}
          </motion.p>

          <motion.button
            onClick={scrollToProjects}
            className="relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              View My Work
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
          </motion.button>
        </motion.div>

        {/* Scroll Animation */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <motion.div
            className="w-0.5 h-16 bg-cyan-500 rounded-full mb-2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            animate={{ y: [0, 10, 0], opacity: [0, 1, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.3,
            }}
          >
            <ChevronDown className="text-cyan-400" size={32} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
