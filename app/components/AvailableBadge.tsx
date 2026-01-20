"use client";
import { motion } from "motion/react";

export function AvailableBadge() {
  return (
    <motion.div
      className="absolute -bottom-4 -right-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-xl shadow-lg"
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.8 }}
      animate={{
        y: [0, -10, 0],
      }}
    >
      <p className="text-sm font-semibold">Available for work</p>
    </motion.div>
  );
}

export default AvailableBadge;
