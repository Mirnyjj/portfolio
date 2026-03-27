"use server";

const nodemailer = require("nodemailer");

export const sendContactMessage = async (
  prevState: any,
  formData: FormData,
) => {
  const name = (formData.get("name") as string) || "";
  const email = (formData.get("email") as string) || "";
  const message = (formData.get("message") as string) || "";
  const projectType = (formData.get("projectType") as string) || "";

  try {
    if (!name || !email || !message || !projectType) {
      return { error: "Name, email, message and projectType are required" };
    }

    if (
      !process.env.SMTP_HOST ||
      !process.env.SMTP_USER ||
      !process.env.SMTP_PASS
    ) {
      return { error: "SMTP settings are not configured" };
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const to = process.env.CONTACT_EMAIL_TO || process.env.SMTP_USER;
    const from = process.env.SMTP_FROM || process.env.SMTP_USER;

    const dateFormatted = new Date().toLocaleDateString("ru-RU");

    const subject = `Новая заявка: ${name} — ${email}`;

    const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style>
    @media screen and (max-width: 600px) {
      .container {
        width: 100% !important;
      }
      .padding {
        padding: 20px !important;
      }
      .text-right {
        text-align: left !important;
      }
      .stack {
        display: block !important;
        width: 100% !important;
      }
    }
  </style>
</head>

<body style="margin:0;padding:0;background:#f6f6f6;font-family:Arial, sans-serif;">
  
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f6f6f6;padding:20px 0;">
    <tr>
      <td align="center">
        
        <table class="container" width="600" cellpadding="0" cellspacing="0" 
          style="background:#ffffff;border-radius:8px;overflow:hidden;width:600px;max-width:100%;">
          
          <!-- Header -->
          <tr>
            <td style="background:#111;color:#fff;padding:20px 30px;font-size:18px;font-weight:bold;">
              Новая заявка с сайта
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td class="padding" style="padding:30px;">
              
              <table width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;color:#333;">
                
                <tr>
                  <td class="stack" style="padding:8px 0;color:#888;width:50%;">Имя</td>
                  <td class="stack text-right" style="padding:8px 0;font-weight:bold;text-align:right;">
                    ${name}
                  </td>
                </tr>

                <tr>
                  <td class="stack" style="padding:8px 0;color:#888;">Email / Телефон</td>
                  <td class="stack text-right" style="padding:8px 0;font-weight:bold;text-align:right;">
                    ${email}
                  </td>
                </tr>

                <tr>
                  <td class="stack" style="padding:8px 0;color:#888;">Услуга</td>
                  <td class="stack text-right" style="padding:8px 0;font-weight:bold;text-align:right;">
                    ${projectType}
                  </td>
                </tr>

                <tr>
                  <td class="stack" style="padding:8px 0;color:#888;">Дата</td>
                  <td class="stack text-right" style="padding:8px 0;font-weight:bold;text-align:right;">
                    ${dateFormatted}
                  </td>
                </tr>

              </table>

              <hr style="border:none;border-top:1px solid #eee;margin:20px 0;" />

              <div style="font-size:14px;color:#333;line-height:1.6;">
                <strong style="display:block;margin-bottom:10px;">Комментарий:</strong>
                <div style="background:#f9f9f9;padding:15px;border-radius:6px;">
                  ${message ? message.replace(/\n/g, "<br />") : "Без комментария"}
                </div>
              </div>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:20px 30px;background:#fafafa;font-size:12px;color:#999;">
              Источник: Форма записи на сайте
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>
`;

    await transporter.sendMail({
      from,
      to,
      subject,
      text: `${subject}\n\n\n\n${message || ""}`,
      html,
    });

    return { success: true };
  } catch (err) {
    console.error("Email send error:", err);
    return { error: "Failed to send email" };
  }
};
