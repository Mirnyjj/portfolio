"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MetrikaProvider } from "./MetrikaProvider";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [consent, setConsent] = useState<boolean>(false);

  useEffect(() => {
    const saved = localStorage.getItem("cookie-consent");

    if (saved === "true") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setConsent(true);
    } else {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "true");
    setConsent(true);
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "false");
    setConsent(false);
    setIsVisible(false);
  };

  return (
    <>
      <MetrikaProvider enabled={consent} />

      {isVisible && (
        <motion.div
          className="
            fixed bottom-2 left-0 right-0 z-[10]
            px-2 sm:px-4
            flex justify-center
          "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="relative w-full max-w-[400px]">
            <div className="absolute inset-0 -z-10 rounded-2xl bg-cyan-500/20 blur-xl backdrop-blur-2xl" />

            <div className="overflow-hidden rounded-2xl border border-white/20 bg-slate-900/90 backdrop-blur-xl shadow-2xl">
              <div className="flex flex-col gap-4 p-4 sm:p-5">
                <div className="text-center sm:text-left">
                  <span className="text-sm font-semibold text-white">
                    Мы используем cookies
                  </span>

                  <p className="mt-2 text-sm leading-relaxed text-white/80">
                    Это помогает улучшать сайт. Подробнее в{" "}
                    <Link
                      href="/privacy#cookies"
                      className="
              text-white
              underline
              underline-offset-4
              hover:text-cyan-300
              transition-colors
            "
                    >
                      политике обработки cookies
                    </Link>
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={declineCookies}
                    className="
            h-7 rounded-xl
            border border-white/20
            bg-white/10
            text-white
            font-medium
            backdrop-blur
            transition-all duration-300
            hover:bg-white/20
            hover:scale-[1.02]
          "
                  >
                    Отклонить
                  </button>

                  <button
                    onClick={acceptCookies}
                    className="
            h-7 rounded-xl
            text-white font-bold
            bg-gradient-to-r
            from-cyan-500/90
            via-blue-500/95
            to-purple-500/90
            transition-all duration-300
            hover:from-cyan-600/95
            hover:via-blue-600/95
            hover:to-purple-600/95
            hover:scale-[1.02]
            hover:shadow-[0_0_25px_rgba(34,211,238,0.5)]
            shadow-xl
          "
                  >
                    Принять
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}
