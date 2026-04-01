"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { ButtonLink } from "@/components/Button";
import { useLang } from "@/components/LanguageContext";
import { Trans } from "@/components/Trans";

const links = [
  { href: "/services", en: "Services", ru: "Услуги", kk: "Қызметтер" },
  {
    href: "/case-studies",
    en: "Case Studies",
    ru: "Кейсы",
    kk: "Жобалар",
  },
  {
    href: "/dashboards",
    en: "Dashboards",
    ru: "Дашборды",
    kk: "Дашбордтар",
  },
  { href: "/about", en: "About", ru: "О нас", kk: "Біз туралы" },
  { href: "/contact", en: "Contact", ru: "Контакты", kk: "Байланыс" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { lang, setLang } = useLang();

  useEffect(() => {
    if (!open) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const prev = document.body.style.overflow;
    if (open) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-900/8 bg-white/80 backdrop-blur relative">
      <Container className="flex h-[4.5rem] items-center justify-between">
        <Link href="/" className="rounded-md focus-visible:outline-none">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="group text-sm font-medium text-slate-700 transition-colors hover:text-slate-950"
            >
              <span className="relative">
                {lang === "ru" ? l.ru : lang === "kk" ? l.kk : l.en}
                <span className="absolute -bottom-2 left-0 h-px w-0 bg-navy/80 transition-all duration-200 group-hover:w-full" />
              </span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4 md:gap-6">
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full bg-white text-slate-950 ring-1 ring-slate-900/10 shadow-sm shadow-slate-900/5 transition-colors hover:bg-slate-50 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M4 7h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M4 12h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
          <Link
            href="/services"
            className="hidden text-sm font-medium text-slate-700 transition-colors hover:text-slate-950 md:inline-flex"
          >
            {lang === "ru"
              ? "Смотреть работы"
              : lang === "kk"
                ? "Жұмыстарды көру"
                : "View work"}
          </Link>

          <div className="hidden items-center gap-1 rounded-full border border-slate-900/10 bg-white px-1 py-1 md:flex">
            <button
              type="button"
              className={`rounded-full px-3 py-1 text-sm font-medium transition-colors ${
                lang === "en"
                  ? "bg-navy text-white"
                  : "text-slate-700 hover:text-slate-950"
              }`}
              aria-pressed={lang === "en"}
              onClick={() => setLang("en")}
            >
              EN
            </button>
            <button
              type="button"
              className={`rounded-full px-3 py-1 text-sm font-medium transition-colors ${
                lang === "ru"
                  ? "bg-navy text-white"
                  : "text-slate-700 hover:text-slate-950"
              }`}
              aria-pressed={lang === "ru"}
              onClick={() => setLang("ru")}
            >
              RU
            </button>
            <button
              type="button"
              className={`rounded-full px-3 py-1 text-sm font-medium transition-colors ${
                lang === "kk"
                  ? "bg-navy text-white"
                  : "text-slate-700 hover:text-slate-950"
              }`}
              aria-pressed={lang === "kk"}
              onClick={() => setLang("kk")}
            >
              KK
            </button>
          </div>

          <ButtonLink href="/contact" variant="primary" className="hidden md:inline-flex">
            {lang === "ru"
              ? "Связаться"
              : lang === "kk"
                ? "Байланысу"
                : "Get in touch"}
          </ButtonLink>
        </div>
      </Container>

      {open ? (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label={
            lang === "ru"
              ? "Меню"
              : lang === "kk"
                ? "Мәзір"
                : "Site menu"
          }
          className="absolute left-0 top-full max-h-[min(85vh,calc(100dvh-4.5rem))] w-full overflow-y-auto border-b border-slate-900/10 bg-white/95 shadow-lg shadow-slate-900/10 backdrop-blur md:hidden"
        >
          <Container className="py-6">
            <nav className="flex flex-col gap-1" aria-label="Primary">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-base font-medium text-slate-800 transition-colors hover:bg-slate-50"
                >
                  {lang === "ru" ? l.ru : lang === "kk" ? l.kk : l.en}
                </Link>
              ))}
            </nav>

            <div className="mt-8 border-t border-slate-900/10 pt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                <Trans en="Language" ru="Язык" kk="Тіл" />
              </p>
              <div
                className="mt-3 inline-flex w-full max-w-sm items-center gap-1 rounded-full border border-slate-900/10 bg-white p-1"
                role="group"
                aria-label={
                  lang === "ru"
                    ? "Выбор языка"
                    : lang === "kk"
                      ? "Тілді таңдау"
                      : "Choose language"
                }
              >
                <button
                  type="button"
                  className={`min-h-11 flex-1 rounded-full px-2 text-xs font-medium transition-colors sm:px-3 sm:text-sm ${
                    lang === "en"
                      ? "bg-navy text-white"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                  aria-pressed={lang === "en"}
                  onClick={() => setLang("en")}
                >
                  English
                </button>
                <button
                  type="button"
                  className={`min-h-11 flex-1 rounded-full px-2 text-xs font-medium transition-colors sm:px-3 sm:text-sm ${
                    lang === "ru"
                      ? "bg-navy text-white"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                  aria-pressed={lang === "ru"}
                  onClick={() => setLang("ru")}
                >
                  Русский
                </button>
                <button
                  type="button"
                  className={`min-h-11 flex-1 rounded-full px-2 text-xs font-medium transition-colors sm:px-3 sm:text-sm ${
                    lang === "kk"
                      ? "bg-navy text-white"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                  aria-pressed={lang === "kk"}
                  onClick={() => setLang("kk")}
                >
                  Қазақша
                </button>
              </div>
            </div>

            <div className="mt-8">
              <ButtonLink
                href="/contact"
                variant="primary"
                className="w-full justify-center py-3.5 text-base"
                onClick={() => setOpen(false)}
              >
                {lang === "ru"
                  ? "Связаться"
                  : lang === "kk"
                    ? "Байланысу"
                    : "Get in touch"}
              </ButtonLink>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}

