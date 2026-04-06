"use client";

import SceneChaos from "./SceneChaos";
import { memo } from "react";
import TypedWord from "./TypedWord";

const Typed = memo(() => <TypedWord />);

export function Hero() {
  // Типографический эффект

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Фон */}
      <div className="absolute inset-0 overflow-hidden z-10">
        <SceneChaos />
      </div>

      {/* Контент */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Typed />
      </div>
    </section>
  );
}
