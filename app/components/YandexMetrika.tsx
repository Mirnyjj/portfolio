"use client";
import { useEffect } from "react";

declare global {
  interface Window {
    ym?: YandexMetrikaFunction & {
      a?: unknown[];
      l?: number;
    };
  }
}

type YandexMetrikaFunction = (
  counterId: string,
  method: string,
  params?: Record<string, unknown>,
) => void;

interface YandexMetrikaProps {
  counterId?: string;
  options?: {
    clickmap?: boolean;
    trackLinks?: boolean;
    accurateTrackBounce?: boolean;
    webvisor?: boolean;
    ecommerce?: string;
  };
}

export function YandexMetrika({
  counterId = process.env.YANDEX_METRIKA_ID!,
  options = {
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: true,
  },
}: YandexMetrikaProps) {
  useEffect(() => {
    (function (m: Window, e: Document, t: string, r: string, i: keyof Window) {
      const ym = m[i] as Window["ym"];

      m.ym =
        ym ||
        function (...args: Parameters<YandexMetrikaFunction>) {
          const ymFunc = m.ym as typeof m.ym & { a?: unknown[] };
          ymFunc.a = ymFunc.a || [];
          ymFunc.a.push(args);
        };

      const ymWithProps = m.ym as typeof m.ym & { l?: number };
      ymWithProps.l = Date.now();

      const scripts = document.scripts;
      for (let j = 0; j < scripts.length; j++) {
        if (scripts[j].src === r) {
          return;
        }
      }

      const k = e.createElement(t) as HTMLScriptElement;
      const a = e.getElementsByTagName(t)[0] as HTMLScriptElement;
      k.async = true;
      k.src = r;
      a.parentNode?.insertBefore(k, a);
    })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

    if (window.ym) {
      window.ym(counterId, "init", options);
    }
  }, [counterId, options]);

  return (
    <noscript>
      <div>
        <img
          src={`https://mc.yandex.ru/watch/${counterId}`}
          style={{ position: "absolute", left: "-9999px" }}
          alt=""
        />
      </div>
    </noscript>
  );
}
