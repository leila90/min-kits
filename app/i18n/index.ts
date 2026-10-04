import { getMessages } from "./messages";
import { getDirection, isLang, locales, type Lang } from "./config";

export { isLang, locales, getDirection, type Lang, getMessages };

export async function getDictionary(lang: Lang) {
  return getMessages(lang);
}
