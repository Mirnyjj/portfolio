import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "cyrillic"],
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Максим",
  jobTitle: "Frontend разработчик",
  url: process.env.NEXT_PUBLIC_DOMAIN,
  image: `${process.env.NEXT_PUBLIC_DOMAIN}/136368953.jpg`,
  description:
    "Frontend разработчик в России. Создаю современные веб-приложения на React, Next.js с интеграцией 1С, ИИ-чатботами и анимацией Framer Motion.",
  sameAs: ["https://t.me/MaksimMirnyjj", "https://github.com/Mirnyjj"],
  knowsAbout: [
    "React",
    "Next.js",
    "1С Битрикс",
    "ИИ чатботы",
    "Tailwind CSS",
    "Framer Motion",
  ],
  areaServed: ["Россия", "Москва", "Самара", "СПб"],
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_DOMAIN || "http://localhost:3000",
  ),

  title: {
    default: "Frontend разработчик Россия — React, Next.js, 1С, ИИ",
    template: "%s | Frontend разработка Россия 2026",
  },

  description:
    "Frontend разработка в России: React, Next.js, интеграция 1С, ИИ чатботы, Tailwind CSS. Создам современный сайт под ключ для вашего бизнеса.",

  keywords: [
    "фронтенд разработчик",
    "React разработчик",
    "Next.js разработка",
    "создание сайта",
    "интеграция 1С",
    "ИИ чатботы",
    "веб разработка Москва",
    "веб разработка Самара",
    "сайт под ключ",
  ],

  authors: [{ name: "Максим" }],
  creator: "Максим",
  publisher: "Frontend Developer Russia",

  openGraph: {
    title: "Frontend разработчик Россия | React, Next.js, 1С, ИИ",
    description:
      "Создаю современные веб-приложения: React, Next.js, интеграция 1С-Битрикс, ИИ решения. Заказать разработку сайта в России.",
    url: process.env.NEXT_PUBLIC_DOMAIN,
    siteName: "Frontend Portfolio",
    images: [
      {
        url: "/136368953.jpg",
        width: 1200,
        height: 630,
        alt: "Frontend разработка веб-приложений React Next.js",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Frontend разработчик Россия | React, Next.js, 1С, ИИ",
    description:
      "React, Next.js, 1С интеграция, ИИ чатботы. Создам современный сайт под ключ.",
    images: ["/136368953.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    yandex: 106326570,
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
    (function(m,e,t,r,i,k,a){
        m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
    })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=106326570', 'ym');
    ym(106326570, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", accurateTrackBounce:true, trackLinks:true});
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/106326570"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>

        {children}
      </body>
    </html>
  );
}
