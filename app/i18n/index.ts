import { getMessages } from "./messages";
import { isLang, locales, type Lang } from "./config";

export { isLang, locales, type Lang, getMessages };

export async function getDictionary(lang: Lang) {
  return getMessages(lang);
}
