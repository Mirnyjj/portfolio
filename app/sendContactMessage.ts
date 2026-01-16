const baseUrl = `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TELEGRAM_BOT_ID!}/`;

export const sendContactMessage = async (contactData: {
  name: string;
  email?: string;
  message?: string;
  projectType?: string;
  source?: string;
}): Promise<void> => {
  const { name, email, message, projectType, source = "Сайт" } = contactData;

  if (
    !process.env.NEXT_PUBLIC_TELEGRAM_BOT_ID ||
    !process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID
  ) {
    throw new Error("Telegram настройки не установлены");
  }

  const messageText = `
👤 *Новая заявка с портфолио*

*Имя:* ${name}
*Email:* ${email || "Не указан"}
*Проект:* ${projectType || "Не указан"}
*Сообщение:*
${message || "Без сообщения"}

📍 *Источник:* ${source}
⏰ *Время:* ${new Date().toLocaleString("ru-RU")}
  `.trim();

  const encodedMessage = encodeURIComponent(messageText);
  const url = `${baseUrl}sendMessage?chat_id=${process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID}&text=${encodedMessage}&parse_mode=Markdown`;

  const response = await fetch(url);
  const result = await response.json();

  if (!result.ok) {
    throw new Error(`Telegram API: ${result.description}`);
  }
};
