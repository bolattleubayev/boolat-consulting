"use client";

import type { ReactNode } from "react";
import { useLang } from "@/components/LanguageContext";

export function Trans({
  en,
  ru,
  kk,
}: {
  en: ReactNode;
  ru: ReactNode;
  kk?: ReactNode;
}) {
  const { lang } = useLang();
  if (lang === "ru") return <>{ru}</>;
  if (lang === "kk") return <>{kk ?? ru}</>;
  return <>{en}</>;
}

