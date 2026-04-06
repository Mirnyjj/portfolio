"use client";

import { Heart } from "lucide-react";
import { CardSticky, ContainerScroll } from "./ui/ServiceCard";

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

export const ServicesSection = () => {
  return (
    <div className="container min-h-svh place-content-center  px-6 text-white xl:px-12">
      <div className="grid md:grid-cols-2 md:gap-8 xl:gap-12 my-20">
        <div className="md:sticky top-20 self-start">
          <h2 className="mb-6 mt-4 text-4xl font-bold tracking-tight">
            Ознакомьтесь с услугами
          </h2>
          <p className="max-w-full text-lg text-gray-200 mb-4 indent-8 text-justify">
            Я предлагаю{" "}
            <strong>
              полный спектр услуг по созданию сайтов, мобильных приложений и
              поддержке проектов
            </strong>
            , чтобы ваш бизнес не просто существовал, а активно развивался и
            привлекал клиентов.
          </p>
          <ul className="max-w-prose text-justify text-lg text-gray-200 list-disc list-inside space-y-2">
            <li>
              <strong>Анализ и планирование:</strong> изучаем цели проекта и
              аудиторию, чтобы определить оптимальную стратегию.
            </li>
            <li>
              <strong>Проектирование и дизайн:</strong> создаю прототипы и
              визуальный стиль, который будет удобен пользователям и отражать
              ваш бренд.
            </li>
            <li>
              <strong>Разработка:</strong> пишу функциональный и безопасный код
              для веба и мобильных платформ, интегрирую необходимые сервисы.
            </li>
            <li>
              <strong>Тестирование и отладка:</strong> проверяю проект на всех
              устройствах и устраняю ошибки.
            </li>
            <li>
              <strong>Запуск и сопровождение:</strong> публикую проект,
              настраиваю аналитику и предоставлю поддержку.
            </li>
          </ul>
        </div>

        <ContainerScroll className="relative flex flex-col gap-8 my-20">
          {services.map((service, index) => (
            <CardSticky
              key={service.title}
              index={index + 2}
              className="rounded-2xl border p-8 shadow-md backdrop-blur-md "
            >
              <div className="flex items-center justify-between gap-4">
                <h2 className="my-6 text-xl font-bold tracking-tighter text-gray-200">
                  {service.title}
                </h2>
                <h3 className="text-2xl font-bold text-indigo-500">
                  {service.popular && (
                    <Heart color="purple" className="animate-pulse" size={30} />
                  )}
                </h3>
              </div>

              {/* Услуги */}
              <ul className="mb-4 list-disc list-inside space-y-1 text-gray-300">
                {service.includes.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              {/* Длительность и цена */}
              <div className="flex flex-wrap gap-4 text-white">
                <span className="font-medium">{service.duration}</span>
                <span className="font-semibold text-indigo-500">
                  {service.price}
                </span>
              </div>
            </CardSticky>
          ))}
        </ContainerScroll>
      </div>
    </div>
  );
};
