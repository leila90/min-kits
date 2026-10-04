export const locales = ["en", "fa"] as const;
export type Lang = (typeof locales)[number];
export const defaultLocale: Lang = "en";

export function isLang(value: string): value is Lang {
  return locales.includes(value as Lang);
}

export type Direction = "ltr" | "rtl";

export function getDirection(lang: Lang): Direction {
  return lang === "fa" ? "rtl" : "ltr";
}
