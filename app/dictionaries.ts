import { getContent, hasLocale, locales, type Locale } from "@/content/site";

export { getContent, hasLocale, locales };
export type { Locale };

export async function getDictionary(locale: Locale) {
  return getContent(locale);
}
