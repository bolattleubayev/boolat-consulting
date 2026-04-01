"use server";

import { Resend } from "resend";

const DEFAULT_TO = "tleubayevb@gmail.com";
const DEFAULT_FROM = "Boolat Consulting <onboarding@resend.dev>";

function requiredString(formData: FormData, key: string) {
  const value = formData.get(key);
  if (typeof value !== "string" || value.trim().length === 0) {
    throw new Error(`Missing ${key}`);
  }
  return value.trim();
}

function optionalString(formData: FormData, key: string) {
  const value = formData.get(key);
  if (typeof value !== "string") return "";
  return value.trim();
}

function localeFromForm(formData: FormData): "en" | "ru" | "kk" {
  const raw = formData.get("locale");
  if (raw === "ru" || raw === "kk" || raw === "en") return raw;
  return "en";
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function userMessages(locale: "en" | "ru" | "kk") {
  return {
    ok:
      locale === "ru"
        ? "Спасибо — мы скоро свяжемся."
        : locale === "kk"
          ? "Рахмет — біз жақын арада хабарласамыз."
          : "Thanks — we’ll reach out shortly.",
    err:
      locale === "ru"
        ? "Не удалось отправить. Попробуйте ещё раз или напишите нам на почту."
        : locale === "kk"
          ? "Жіберу сәтсіз аяқталды. Қайта көріңіз немесе пошта арқылы жазыңыз."
          : "Something went wrong. Please try again or email us directly.",
    configErr:
      locale === "ru"
        ? "Форма временно недоступна. Напишите нам на почту."
        : locale === "kk"
          ? "Форма уақытша қолжетімсіз. Бізге пошта арқылы жазыңыз."
          : "The form is temporarily unavailable. Please email us directly.",
  };
}

export async function submitContact(
  _prevState: { ok: boolean; message: string } | null,
  formData: FormData,
) {
  const locale = localeFromForm(formData);
  const msg = userMessages(locale);

  let payload: {
    name: string;
    email: string;
    company: string;
    projectDescription: string;
    createdAt: string;
  };

  try {
    payload = {
      name: requiredString(formData, "name"),
      email: requiredString(formData, "email"),
      company: optionalString(formData, "company"),
      projectDescription: requiredString(formData, "projectDescription"),
      createdAt: new Date().toISOString(),
    };
  } catch {
    return { ok: false, message: msg.err };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[boolat] RESEND_API_KEY is not set");
    return { ok: false, message: msg.configErr };
  }

  const to = (process.env.CONTACT_TO_EMAIL ?? DEFAULT_TO).trim();
  const from = (process.env.RESEND_FROM_EMAIL ?? DEFAULT_FROM).trim();

  const text = [
    `New contact form submission`,
    ``,
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Company: ${payload.company || "—"}`,
    ``,
    `Project description:`,
    payload.projectDescription,
    ``,
    `Submitted: ${payload.createdAt}`,
  ].join("\n");

  const html = `
    <h2 style="font-family:system-ui,sans-serif;font-size:16px;">Contact form</h2>
    <table style="font-family:system-ui,sans-serif;font-size:14px;line-height:1.5;color:#0f172a;">
      <tr><td style="padding:4px 12px 4px 0;vertical-align:top;"><strong>Name</strong></td><td>${escapeHtml(payload.name)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;vertical-align:top;"><strong>Email</strong></td><td><a href="mailto:${escapeHtml(payload.email)}">${escapeHtml(payload.email)}</a></td></tr>
      <tr><td style="padding:4px 12px 4px 0;vertical-align:top;"><strong>Company</strong></td><td>${escapeHtml(payload.company || "—")}</td></tr>
    </table>
    <p style="font-family:system-ui,sans-serif;font-size:14px;line-height:1.5;"><strong>Project description</strong></p>
    <pre style="font-family:system-ui,monospace;font-size:13px;white-space:pre-wrap;background:#f8fafc;padding:12px;border-radius:8px;border:1px solid #e2e8f0;">${escapeHtml(payload.projectDescription)}</pre>
    <p style="font-family:system-ui,sans-serif;font-size:12px;color:#64748b;">${escapeHtml(payload.createdAt)}</p>
  `;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: payload.email,
      subject: `[Boolat] Contact: ${payload.name}`,
      text,
      html,
    });

    if (error) {
      console.error("[boolat] Resend error", error);
      return { ok: false, message: msg.err };
    }
  } catch (e) {
    console.error("[boolat] Contact send failed", e);
    return { ok: false, message: msg.err };
  }

  return { ok: true, message: msg.ok };
}
