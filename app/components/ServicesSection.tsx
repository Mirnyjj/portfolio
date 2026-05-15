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
    title: "Лендинг для запуска рекламы и сбора заявок",
    includes: [
      "Разработка на Next.js — быстрый сайт с хорошей SEO-индексацией",
      "Адаптация под мобильные устройства — большинство клиентов приходит со смартфонов",
      "Форма заявок и интеграция с Telegram или CRM",
      "Подключение аналитики и базовое SEO",
      "Анимации и современный UI без перегруза",
 
    ],
    duration: "7–14 дней",
    price: "от 50 000 ₽",
    popular: true,
  },

  {
    title: "Сайт под ключ для малого бизнеса",
    includes: [
      "Разработка на Next.js с упором на скорость и SEO",
      "До 5 основных страниц: услуги, о компании, контакты и др.",
      "Удобная админ-панель для самостоятельного редактирования контента",
      "Формы заявок, карта, мессенджеры и интеграции",
      "Оптимизация скорости загрузки и базовая техническая SEO-настройка",
    ],
    duration: "3–5 недель",
    price: "от 120 000 ₽",
    popular: true,
  },

  {
    title: "Редизайн сайта для роста конверсии",
    includes: [
      "Обновление интерфейса и UX без полной переделки проекта",
      "Ускорение загрузки и оптимизация Core Web Vitals",
      "Улучшение структуры страниц и пользовательских сценариев",
      "Адаптация под мобильные устройства",
      "SEO-рекомендации для сохранения и роста трафика",
    ],
    duration: "2–3 недели",
    price: "от 60 000 ₽",
    popular: true,
  },

  {
    title: "Интернет-магазин под ключ",
    includes: [
      "Next.js storefront с быстрой загрузкой страниц",
      "Каталог товаров, фильтры, поиск и карточки товаров",
      "Корзина, оформление заказа и онлайн-оплата",
      "Интеграция с CRM, Telegram, доставкой или складом",
      "Админка для управления товарами и заказами",
      "SEO-оптимизация для продвижения в поиске",
    ],
    duration: "1–2 месяца",
    price: "от 160 000 ₽",
    popular: true,
  },

  {
    title: "MVP мобильного приложения на React Native",
    includes: [
      "iOS и Android из одной кодовой базы",
      "До 5 экранов для проверки бизнес-гипотезы",
      "Интеграция с API и backend",
      "Push-уведомления и авторизация",
      "Публикация в App Store и Google Play",
    ],
    duration: "1–2 месяца",
    price: "от 150 000 ₽",
  },

  {
    title: "Поддержка и развитие проекта",
    includes: [
      "Исправление ошибок и техническая поддержка",
      "Обновления зависимостей и мониторинг стабильности",
      "Резервные копии и контроль доступности",
      "Доработки и развитие проекта по мере роста бизнеса",
    ],
    duration: "ежемесячно",
    price: "от 15 000 ₽ / месяц",
  },
];

export const ServicesSection = () => {
  return (
    <section
      id="services"
      className="
        mx-auto
        max-w-7xl
        px-4 sm:px-6 lg:px-8
        py-20
        scroll-mt-20
        text-white
      "
    >
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
    </section>
  );
};
