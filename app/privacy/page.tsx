"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
  return (
    <section className="relative min-h-screen px-4 sm:px-6 lg:px-8 overflow-hidden backdrop-blur-sm">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900/40 to-slate-950 z-0" />

      <div className="relative z-10 max-w-4xl mx-auto ">
        <Link
          href="/"
          className="my-10 flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-all duration-300 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform text-cyan-400" />
          На главную
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-20"
        >
          <h1 className="text-3xl md:text-7xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Политика конфиденциальности
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Мирный Максим Игорьевич, Frontend-разработчик
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-slate-800/60 backdrop-blur-xl rounded-3xl border border-slate-700/50 p-8 md:p-12 space-y-8"
        >
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
                1. Общие положения
              </h2>
              <p className="text-slate-300 leading-relaxed">
                1.1. Настоящая Политика конфиденциальности персональных данных
                (далее — Политика) действует в отношении всей информации,
                которую сайт <strong>https://mirniydev.ru</strong> (далее —
                Сайт) может получить о Пользователе во время использования
                сайта.
              </p>
              <p className="text-slate-300 leading-relaxed">
                1.2. Использование сайта означает безоговорочное согласие
                Пользователя с настоящей Политикой и указанными в ней условиями
                обработки его персональных данных.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
                2. Какие данные собираются
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-cyan-400">
                    Персональные данные:
                  </h3>
                  <ul className="text-slate-300 space-y-2 list-disc list-inside">
                    <li>Имя</li>
                    <li>Email адрес</li>
                    <li>Выбранная услуга</li>
                    <li>Дополнительный комментарий (по желанию)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-cyan-400">
                    Технические данные:
                  </h3>
                  <ul className="text-slate-300 space-y-2 list-disc list-inside">
                    <li>Cookies Яндекс.Метрика</li>
                    <li>IP-адрес</li>
                    <li>Данные браузера</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
                3. Цели сбора данных
              </h2>

              <p className="text-slate-300 leading-relaxed mb-4">
                3.1. Персональные данные используются исключительно для:
              </p>

              <ul className="grid md:grid-cols-1 gap-6">
                <li className="flex items-start gap-4 p-5 bg-slate-700/30 rounded-xl border border-slate-600/40 text-slate-300">
                  <span className="w-3 h-3 bg-cyan-400 rounded-full mt-1 flex-shrink-0 self-start"></span>
                  <span className="leading-relaxed">
                    Обработки заявок на оказание услуг по разработке ПО
                  </span>
                </li>

                <li className="flex items-start gap-4 p-5 bg-slate-700/30 rounded-xl border border-slate-600/40 text-slate-300">
                  <span className="w-3 h-3 bg-cyan-400 rounded-full mt-1 flex-shrink-0 self-start"></span>
                  <span className="leading-relaxed">
                    Подтверждения предложения на оказание услуг по разработке ПО
                    по электронной почте
                  </span>
                </li>

                <li className="flex items-start gap-4 p-5 bg-slate-700/30 rounded-xl border border-slate-600/40 text-slate-300">
                  <span className="w-3 h-3 bg-cyan-400 rounded-full mt-1 flex-shrink-0 self-start"></span>
                  <span className="leading-relaxed">
                    Аналитики посещаемости (Яндекс.Метрика)
                  </span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
                4. Передача данных третьим лицам
              </h2>
              <p className="text-slate-300 leading-relaxed">
                4.1. Персональные данные{" "}
                <strong className="text-cyan-400">
                  НЕ передаются третьим лицам
                </strong>
                .
              </p>
              <p className="text-slate-300 leading-relaxed">
                4.2. Заявки из форм отправляются напрямую в Telegram-бот Мирному
                Максиму Игоревичу для оперативной обработки.
              </p>
              <p className="text-slate-300 leading-relaxed">
                4.3. Cookies Яндекс.Метрика обрабатываются в соответствии с{" "}
                <a
                  href="https://yandex.ru/support/metrica/ru/general/confidential-data"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 underline font-medium"
                >
                  политикой Яндекса
                </a>
                .
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
                5. Хранение и защита данных
              </h2>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full flex-shrink-0"></span>
                  Данные из форм хранятся только в Telegram‑чатах Мирного М.И.
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full flex-shrink-0"></span>
                  Cookies Яндекс.Метрика — согласно политике Яндекса
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full flex-shrink-0"></span>
                  На сайте данные не сохраняются в базах данных
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full flex-shrink-0"></span>
                  Данные удаляются после выполнения записи или по запросу
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
                6. Права Пользователя
              </h2>
              <p className="text-slate-300 leading-relaxed">
                Вы имеете право в любой момент запросить удаление своих данных,
                написав в Telegram:{" "}
                <strong className="text-cyan-400">@MaksimMirnyjj</strong> или по
                телефону <strong className="text-cyan-400">+79278222295</strong>
                .
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
                7. Управление cookies
              </h2>
              <p className="text-slate-300 leading-relaxed">
                Вы можете отключить cookies Яндекс.Метрика в настройках
                браузера. Это не повлияет на работу форм записи.
              </p>
            </div>

            <div className="space-y-4 pt-8 border-t border-slate-700/30">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
                8. Контакты и реквизиты
              </h2>
              <div className="grid md:grid-cols-2 gap-8 text-slate-300">
                <div>
                  <p>
                    <strong className="text-cyan-400">
                      Самозанятый Мирный Максим Игорьевич
                    </strong>
                  </p>
                  {/* <p>ИНН: 631405677493</p>
      <p>Статус: Плательщик НПД (налог на профессиональный доход)</p> */}
                  <p>Регистрация: ФНС России</p>
                  <p>Адрес деятельности: г. Самара, Самарская область</p>
                </div>
                <div className="space-y-2">
                  <p>
                    <strong className="text-cyan-400">
                      Контакты для запросов:
                    </strong>
                  </p>
                  <p className="flex items-center gap-2">
                    <span>Telegram:</span>
                    <a
                      href="https://t.me/MaksimMirnyjj"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 underline"
                    >
                      @MaksimMirnyjj
                    </a>
                  </p>
                  <p className="flex items-center gap-2">
                    <span>Телефон:</span>
                    <a
                      href="tel:+79278222295"
                      className="text-cyan-400 hover:text-cyan-300 underline"
                    >
                      +79278222295
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
