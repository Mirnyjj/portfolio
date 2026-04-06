import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

export default function TypedWord() {
  const name = "<Максим Мирный />";
  const role = "Разработка web и мобильных приложений под ключ";
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
        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
          {typedRole}
        </span>
      </motion.p>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <motion.div
          animate={{ y: [10, 40, 10], opacity: [0, 1, 0] }}
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
      <motion.a
        href="#project"
        className="relative px-8 py-4 top-10 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold overflow-hidden group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Реализованные проекты
      </motion.a>
    </motion.div>
  );
}
