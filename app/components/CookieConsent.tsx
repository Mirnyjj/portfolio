"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [consentGiven, setConsentGiven] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("cookie-consent");
    if (saved === "true") {
      setConsentGiven(true);
    } else {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "true");

    if (window.__METRIKA_CONSENT === false) {
      delete window.__METRIKA_CONSENT;
      if (window.ym)
        window.ym(106326570, "init", {
          ssr: true,
          webvisor: true,
          clickmap: true,
          ecommerce: "dataLayer",
          accurateTrackBounce: true,
          trackLinks: true,
        });
    }

    setConsentGiven(true);
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "false");
    setConsentGiven(false);
    setIsVisible(false);
  };

  if (!isVisible || consentGiven) return null;

  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 p-4 sm:p-6 mx-auto"
      style={{
        zIndex: 2147483647,
        isolation: "isolate",
      }}
      data-animate="slide-up"
    >
      <div className="relative ">
        <div
          className="absolute inset-0 bg-cyan-500/20 backdrop-blur-2xl rounded-2xl -z-10 blur-xl"
          style={{
            maxWidth: 350,
            margin: "auto",
          }}
        ></div>

        <div
          className="bg-slate-900/90 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl p-3 flex flex-col md:flex-row gap-4 md:gap-6 items-center relative z-10 "
          style={{
            maxWidth: 350,
            margin: "auto",
          }}
        >
          <div className="flex flex-col text-white text-sm sm:text-base leading-relaxed justify-items-center text-center">
            <p className="text-white mb-1">
              Мы используем сервис{" "}
              <strong className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent font-bold text-lg">
                Яндекс.Метрика
              </strong>{" "}
              для улучшения работы сайта. Подробнее в{" "}
              <a
                href="/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/95 hover:text-white underline font-medium transition-all duration-200 bg-white/10 hover:bg-white/20 px-2 py-1 rounded-lg"
              >
                Политике конфиденциальности{" "}
              </a>
            </p>
          </div>

          <div className="flex flex-wrap gap-3 justify-items-center">
            <button
              onClick={declineCookies}
              className=" px-4 py-1 bg-blue-500 bg-gradient-to-r from-cyan-500/90 via-blue-500/95 to-purple-500/90 hover:from-cyan-600/95 hover:via-blue-600/95 hover:to-purple-600/95 hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] text-white font-bold text-sm rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-xl hover:shadow-2xl"
            >
              Отклонить
            </button>

            <button
              onClick={acceptCookies}
              className=" px-4 py-1 bg-blue-500 bg-gradient-to-r from-cyan-500/90 via-blue-500/95 to-purple-500/90 hover:from-cyan-600/95 hover:via-blue-600/95 hover:to-purple-600/95 hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] text-white font-bold text-sm rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-xl hover:shadow-2xl"
            >
              Принять cookies
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
