import 'server-only'

const dictionaries = {
    en: () => import('./dictionaries/en.json').then((module) => module.default),
    fa: () => import('./dictionaries/fa.json').then((module) => module.default),
}

export type lang = keyof typeof dictionaries

export const hasLocale = (lang: string): lang is lang =>
    lang in dictionaries

export const getDictionary = async (lang: lang) => dictionaries[lang]()