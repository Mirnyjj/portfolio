"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Услуги", href: "/#services" },
    { name: "Примеры проектов", href: "/#projects" },
    { name: "Контакты", href: "/#contact" },
    { name: "Цены и пакеты", href: "/#pricing" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <motion.nav
        className="bg-gray-900 transition-all duration-300"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
        aria-label="Главная навигация"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Логотип */}
            <motion.button
              onClick={() => scrollToSection("#hero")}
              className="relative text-xl font-semibold"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.a
                className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                href="/"
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: "200% 200%" }}
              >
                {`<MirniyDev />`}
              </motion.a>
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            {/* Десктопное меню */}
            <ul className="hidden md:flex items-center gap-6" role="menubar">
              {navLinks.map((link, index) => (
                <motion.li key={link.name} role="none">
                  <motion.a
                    href={link.href}
                    role="menuitem"
                    className="relative text-gray-100 hover:text-cyan-400 transition-colors duration-200 group focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 rounded"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    tabIndex={0}
                  >
                    {link.name}
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                </motion.li>
              ))}
            </ul>

            {/* Кнопка мобильного меню */}
            <motion.button
              className="md:hidden text-gray-100 hover:text-cyan-400 relative z-50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 rounded"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? "Закрыть меню" : "Открыть меню"}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Мобильное меню */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.ul
                id="mobile-menu"
                className="md:hidden border-t border-gray-700 flex flex-col bg-gray-900/95"
                role="menu"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
              >
                {navLinks.map((link) => (
                  <li key={link.name} role="none">
                    <Link
                      href={link.href}
                      role="menuitem"
                      className="block w-full px-4 py-3 text-gray-100 hover:text-cyan-400 hover:bg-gray-800/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 rounded"
                      onClick={() => scrollToSection(link.href)}
                      tabIndex={0}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </header>
  );
}
