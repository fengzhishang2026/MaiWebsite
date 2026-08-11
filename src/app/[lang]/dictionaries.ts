import { lang } from "next/root-params";
import { notFound } from "next/navigation";

const dictionaries = {
  en: () => import("@/dictionaries/en.json").then((m) => m.default),
  zh: () => import("@/dictionaries/zh.json").then((m) => m.default),
};

export type Locale = keyof typeof dictionaries;

export const hasLocale = (locale: string): locale is Locale =>
  locale in dictionaries;

export const getDictionary = async () => {
  const locale = await lang();
  if (!hasLocale(locale)) notFound();
  return dictionaries[locale]();
};

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;
