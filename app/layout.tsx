import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteMetadata } from "@/lib/metadata";
import Footer from "./components/Footer";
import { Header } from "./components/Header";
import { CookieConsent } from "./components/CookieConsent";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#10b981",
};

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
  worksFor: {
    "@type": "Organization",
    name: "Frontend Studio Russia",
  },
  jobTitle: "Frontend / Fullstack приложений на React, Next.js",
  url: process.env.NEXT_PUBLIC_DOMAIN,
  image: `${process.env.NEXT_PUBLIC_DOMAIN}/136368953.jpg`,
  description:
    "WEB разработчик. Создаю современные веб-приложения на React, Next.js с интеграцией 1С, ИИ-чатботами и анимацией Framer Motion.",
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
        alt: "Разработка веб-приложений React Next.js",
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
        <link
          rel="icon"
          href="https://mirniydev.ru/favicon.ico"
          type="image/x-icon"
        />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-slate-950 text-slate-100`}
      >
        <Header />
        {children}
        <Footer />
        <CookieConsent />
        {/* {typeof window !== "undefined" ? <CookieConsent /> : null} */}
      </body>
    </html>
  );
}
