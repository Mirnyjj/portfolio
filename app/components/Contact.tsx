"use client";
import { motion } from "motion/react";
import { Mail, Github, Send, MapPin } from "lucide-react";
import Script from "next/script";

export function Contact() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github size={24} />,
      url: "https://github.com/Mirnyjj",
      color: "hover:text-purple-400",
      bgColor: "group-hover:from-purple-500/20 group-hover:to-purple-600/20",
    },
    {
      name: "Telegram",
      icon: <Send size={24} />,
      url: "https://t.me/MaksimMirnyjj",
      color: "hover:text-cyan-400",
      bgColor: "group-hover:from-cyan-500/20 group-hover:to-cyan-600/20",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 lg:py-32 relative overflow-hidden scroll-mt-20"
    >
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -50, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Свяжитесь{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              со мной
            </span>
          </motion.h2>
          <motion.p
            className="text-slate-400 text-center mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Есть идея проекта или хотите сотрудничать? Напишите мне!
          </motion.p>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              
            >
              <Script
                src="https://forms.yandex.ru/_static/embed.js"
                strategy="afterInteractive"
              />

              <iframe
                src="https://forms.yandex.ru/u/6a05ca3d50569004a10ebb2b?iframe=1"
                name="ya-form-6a05ca3d50569004a10ebb2b"
                frameBorder="0"
                className="w-full h-[650px] md:h-[700px] rounded-xl border-0"
              />
              
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col justify-center"
            >
              <motion.div
                className="bg-slate-900/50 rounded-xl p-8 border border-slate-800 backdrop-blur-sm relative overflow-hidden"
                whileHover={{
                  borderColor: "rgb(34 211 238 / 0.3)",
                  boxShadow: "0 20px 50px rgba(34, 211, 238, 0.1)",
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />

                <div className="relative z-10">
                  <motion.h3
                    className="text-2xl font-semibold mb-6 text-slate-100"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    Контактная информация
                  </motion.h3>

                  <div className="space-y-6 mb-8">
                    <motion.div
                      className="flex items-center gap-4 group"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                      whileHover={{ x: 10 }}
                    >
                      <motion.div
                        className="p-3 bg-slate-800 rounded-lg group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-blue-500 transition-all duration-300"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Mail
                          className="text-cyan-400 group-hover:text-white"
                          size={24}
                        />
                      </motion.div>
                      <div>
                        <p className="text-sm text-slate-500">Email</p>
                        <a
                          href="mailto:mirnyjj94@mail.ru"
                          className="text-slate-200 hover:text-cyan-400 transition-colors duration-200"
                        >
                          mirnyjj94@mail.ru
                        </a>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-center gap-4 group"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 }}
                      whileHover={{ x: 10 }}
                    >
                      <motion.div
                        className="p-3 bg-slate-800 rounded-lg group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-blue-500 transition-all duration-300"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <MapPin
                          className="text-cyan-400 group-hover:text-white"
                          size={24}
                        />
                      </motion.div>
                      <div>
                        <p className="text-sm text-slate-500">Локация</p>
                        <p className="text-slate-200">Россия</p>
                      </div>
                    </motion.div>
                  </div>

                  <div className="border-t border-slate-800 pt-6">
                    <motion.h4
                      className="text-lg font-semibold mb-4 text-slate-100"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 }}
                    >
                      Свяжитесь со мной
                    </motion.h4>
                    <div className="flex gap-4">
                      {socialLinks.map((social, index) => (
                        <motion.a
                          key={social.name}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`p-3 bg-slate-800 rounded-lg text-slate-400 ${social.color} transition-all duration-200 group relative overflow-hidden`}
                          initial={{ opacity: 0, scale: 0, rotate: -180 }}
                          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.5,
                            delay: 0.8 + index * 0.1,
                            type: "spring",
                            stiffness: 200,
                          }}
                          whileHover={{ scale: 1.1, y: -5 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <motion.div
                            className={`absolute inset-0 bg-gradient-to-r ${social.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                          />
                          <span className="relative z-10">{social.icon}</span>
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
