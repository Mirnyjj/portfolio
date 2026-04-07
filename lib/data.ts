export const PROJECTS = [
  {
    title: "Личный сайт врача - невролога",
    description:
      "Веб-приложение врача-невролога, разработанное на Next.js с использованием App Router. Проект представляет собой современный сайт для приёма пациентов и ведения медицинского блога. Реализованы формы онлайн-записи, а также автоматическая отправка уведомлений через email (SMTP). Frontend построен на React 19 и TailwindCSS, что обеспечивает быструю и адаптивную интерфейсную часть. Для работы с данными и контентом используется Supabase. Серверная логика реализована через Server Actions Next.js. Проект поддерживает динамические страницы блога, SEO-метаданные (Open Graph, Twitter Cards), что улучшает видимость в поисковых системах. Архитектура разделена на компоненты, утилиты и серверные функции, что упрощает поддержку и масштабирование.",
    stack: [
      "Next.js",
      "Tailwind",
      "React-icons",
      "Framer-motion",
      "Supabase",
      "Nodemailer",
    ],
    image: "/images/doctor.png",
    link: "https://dr-aponyatova.vercel.app",
  },
  {
    title: "Упакуй меня - интернет-магазин",
    description:
      "Интернет-магазин упаковочных материалов с каталогом продукции из 1С, корзиной и системой оформления заказов. Современный дизайн и удобная навигация.",
    stack: [
      "Next.js",
      "Tailwind",
      "React-icons",
      "Prisma ORM",
      "PostgreSQL",
      "1C",
      "Gmail API",
    ],
    image: "/images/upakuy.png",
    link: "https://упаковка123.рф",
  },
  {
    title: "Страница менеджера заявок",
    description: "Реализация страницы менеджера заявок для сети аптек.",
    stack: ["TypeScript", "Chakra UI", "React"],
    image: "/images/zayavka.png",
    link: "https://mirnyjj.github.io/request_tasks",
  },
  {
    title: "Лендинг ногтевой студии",
    description:
      "AVDEEVA — премиум портфолио nail-мастера c админ-панелью на Next.js + Tailwind с динамическим фоном, интерактивной галереей и Supabase backend.",
    stack: ["Next.js", "Tailwind", "Supabase"],
    image: "/images/nails.png",
    link: "https://nails-avdeeva.vercel.app",
  },
  {
    title: "AI ассистент Сеня",
    description:
      "Чат-приложение с AI-ассистентом на Next.js и Ollama. Поддержка markdown, темной темы и потокового вывода ответов.",
    stack: ["Next.js", "Tailwind", "Ollama API"],
    image: "/images/senya.png",
    link: "https://ai-assistant-senya.vercel.app",
  },
];
