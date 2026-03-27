import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CookieConsent } from "./components/CookieConsent";
import { siteMetadata } from "@/lib/metadata";
import Footer from "./components/Footer";
import { Header } from "./components/Header";

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
  name: "Максим",
  worksFor: {
    "@type": "Organization",
    name: "Frontend Studio Russia",
  },
  jobTitle: "Frontend / Fullstack приложений на React, Next.js",
  url: process.env.NEXT_PUBLIC_DOMAIN,
  image: `${process.env.NEXT_PUBLIC_DOMAIN}/136368953.jpg`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Самара",
    addressCountry: "RU",
  },
  description:
    "Frontend разработчик в России. Создаю современные веб-приложения на React, Next.js с интеграцией 1С, ИИ-чатботами и анимацией Framer Motion.",
  sameAs: ["https://t.me/MaksimMirnyjj", "https://github.com/Mirnyjj"],
  knowsAbout: [
    "Next.js",
    "React",
    "TypeScript",
    "WebSockets",
    "REST API",
    "1С",
    "ИИ чатботы",
    "Framer Motion",
  ],
  serviceArea: ["Россия", "Москва", "Санкт‑Петербург", "Казань", "Самара"],
  addressCountry: "RU",
  addressRegion: "Самара",
  areaServed: ["Россия", "Самара", "Москва", "СПб", "Казань"],
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_DOMAIN || "http://localhost:3000",
  ),
  icons: {
    icon: "/favicon.ico",
    shortcut: "favicon-32x32.png",
    apple: "/android-chrome-192x192.png",
  },
  title: siteMetadata.title,

  description: siteMetadata.description,

  keywords: siteMetadata.keywords,

  authors: [{ name: "Максим" }],
  creator: "Максим",
  publisher: "Frontend Developer Russia",

  openGraph: {
    title: siteMetadata.title,

    description: siteMetadata.description,
    url: process.env.NEXT_PUBLIC_DOMAIN,
    siteName: "Frontend Portfolio",
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Frontend разработка веб-приложений React Next.js",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,

    description: siteMetadata.description,
    images: ["/android-chrome-512x512.png"],
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#10b981" />
        <meta name="mobile-web-app-capable" content="yes" />
        <link
          rel="icon"
          href="https://mirniydev.ru/favicon.ico "
          type="image/x-icon"
        />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="preload"
          href="..."
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

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
      
      window.__METRIKA_CONSENT = localStorage.getItem('cookie-consent') === 'true';
      if (!window.__METRIKA_CONSENT) {
        window.ym = function(){};
      } else {
        ym(106326570, 'init', {
          ssr:true, webvisor:true, clickmap:true, 
          ecommerce:"dataLayer", accurateTrackBounce:true, trackLinks:true
        });
      }
    `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-slate-950 text-slate-100`}
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
        <Header />
        {children}
        <Footer />
        <CookieConsent />
        {/* {typeof window !== "undefined" ? <CookieConsent /> : null} */}
      </body>
    </html>
  );
}
