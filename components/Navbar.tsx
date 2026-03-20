 "use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { ButtonLink } from "@/components/Button";
import { useLang } from "@/components/LanguageContext";

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

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-full bg-white text-slate-950 ring-1 ring-slate-900/10 shadow-sm shadow-slate-900/5 transition-colors hover:bg-slate-50 md:hidden"
            aria-label="Open menu"
            aria-expanded={open}
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

          <ButtonLink href="/contact" variant="primary">
            {lang === "ru"
              ? "Связаться"
              : lang === "kk"
                ? "Байланысу"
                : "Get in touch"}
          </ButtonLink>

          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-full bg-white text-slate-950 ring-1 ring-slate-900/10 shadow-sm shadow-slate-900/5 transition-colors hover:bg-slate-50 md:hidden"
            aria-label="Switch language"
            onClick={() => {
              if (lang === "en") return setLang("ru");
              if (lang === "ru") return setLang("kk");
              return setLang("en");
            }}
          >
            <span className="text-xs font-semibold">
              {lang === "ru" ? "RU" : lang === "kk" ? "KK" : "EN"}
            </span>
          </button>
        </div>
      </Container>

      {open ? (
        <div className="absolute left-0 top-full w-full border-b border-slate-900/10 bg-white/95 backdrop-blur">
          <Container className="py-4">
            <nav className="flex flex-col gap-3">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-2 text-sm font-medium text-slate-800 ring-1 ring-slate-900/10 transition-colors hover:bg-slate-50"
                >
                  {lang === "ru" ? l.ru : lang === "kk" ? l.kk : l.en}
                </Link>
              ))}
            </nav>
          </Container>
        </div>
      ) : null}
    </header>
  );
}

