"use client";

import { motion } from "motion/react";

interface Service {
  title: string;
  includes: string[];
  duration: string;
  price: string;
  popular?: boolean;
}

const services: Service[] = [
  {
    title: "Сайт под ключ для малого бизнеса (до 5 страниц)",
    includes: [
      "Современная верстка и адаптивность — сайт одинаково удобен на всех устройствах",
      "Базовое SEO — для привлечения первых клиентов",
      "Админка — управлять контентом легко и быстро",
      "Форма обратной связи — мгновенный контакт с клиентами",
    ],
    duration: "Готово за 2-4 недели",
    price: "от 50 000 ₽ — быстрый старт онлайн-продаж",
    popular: true,
  },
  {
    title: "Лендинг для быстрого запуска продукта",
    includes: [
      "Яркие анимации — удерживают внимание посетителей",
      "Форма заявки — быстро собираем контакты клиентов",
      "Базовое SEO — для привлечения первых клиентов",
    ],
    duration: "Готово за 1-2 недели",
    price: "от 15 000 ₽ — моментальный старт",
  },
  {
    title: "Редизайн сайта для роста конверсии",
    includes: [
      "UX/UI улучшения — повышаем удобство и доверие",
      "Оптимизация скорости — снижает отказы посетителей",
      "SEO рекомендации — удерживаем и привлекаем трафик",
    ],
    duration: "Готово за 2-3 недели",
    price: "от 40 000 ₽ — инвестиция в рост продаж",
    popular: true,
  },
  {
    title: "Интернет-магазин под ключ (до 20 страниц)",
    includes: [
      "Полная верстка и адаптивность",
      "SEO базовое — привлечение клиентов",
      "Корзина и личный кабинет",
      "Интеграция платежных систем",
      "Админка и форма обратной связи — полный контроль",
    ],
    duration: "Готово за 1-2 месяца",
    price: "от 160 000 ₽ — полноценный онлайн-бизнес",
    popular: true,
  },
  {
    title: "Мобильное приложение iOS/Android (до 5 экранов)",
    includes: [
      "Современная верстка и адаптивность",
      "Запуск в App Store и Google Play",
      "Push-уведомления для удержания клиентов",
      "BLE интеграция и работа с API",
    ],
    duration: "Готово за 1-2 месяца",
    price: "от 80 000 ₽ — расширение вашего бизнеса на мобильные платформы",
  },
  {
    title: "Поддержка и сопровождение сайтов и приложений",
    includes: [
      "Регулярные обновления",
      "Бэкапы — безопасность данных",
      "Техническая поддержка — быстрое решение проблем",
    ],
    duration: "Месяц",
    price: "от 5 000 ₽ — спокойствие и стабильность",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative py-24 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h2 className="text-gray-200 text-4xl sm:text-5xl font-extrabold mb-4">
          Мои услуги
        </h2>
        <p className="text-gray-400 text-lg sm:text-xl">
          Комплексные решения для вашего бизнеса: сайты, мобильные приложения и
          сопровождение.
        </p>
      </div>

      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4 sm:px-6 lg:px-8"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        {services.map((service, i) => (
          <motion.article
            key={i}
            className="relative rounded-3xl p-8 flex flex-col justify-between 
             bg-gradient-to-t from-cyan-500 via-blue-500 to-indigo-600
             border border-white/20
             shadow-xl
             hover:shadow-2xl
             transition-shadow duration-300"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            {service.popular && (
              <span className="absolute -top-3 -right-3 bg-yellow-400 text-gray-900 text-sm font-bold px-3 py-1 rounded-full shadow-md">
                Популярное
              </span>
            )}

            <h3 className="text-2xl font-bold mb-6">{service.title}</h3>

            <ul className="flex-1 text-gray-100 mb-6 space-y-3">
              {service.includes.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-white rounded-full mr-3 mt-1 flex-shrink-0"></span>
                  <span className="text-sm sm:text-base">{item}</span>
                </li>
              ))}
            </ul>

            <div className="border-t border-white/20 pt-4 flex flex-col items-center text-white font-semibold">
              <span className="text-sm sm:text-base">{service.duration}</span>
              <span className="text-lg text-center">{service.price}</span>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
