import "server-only";

const dictionaries = {
    en: () => import("./dictionaries/en.json").then((module) => module.default),
    fa: () => import("./dictionaries/fa.json").then((module) => module.default),
};

export type Lang = keyof typeof dictionaries;
/** @deprecated use `Lang` */
export type lang = Lang;

export const locales = Object.keys(dictionaries) as Lang[];
export const defaultLocale: Lang = "en";

export const hasLocale = (lang: string): lang is Lang => lang in dictionaries;

export const getDictionary = async (lang: Lang) => dictionaries[lang]();
