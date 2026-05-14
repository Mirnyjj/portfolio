"use client";

import { YMInitializer } from "react-yandex-metrika";

const METRIKA_ID = Number(process.env.NEXT_PUBLIC_YANDEX_METRIKA_KEY);

export function MetrikaProvider({ enabled }: { enabled: boolean }) {
  if (!enabled) return null;

  return (
    <YMInitializer
      accounts={[METRIKA_ID]}
      options={{
        webvisor: true,
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        ecommerce: "dataLayer",
      }}
    />
  );
}
