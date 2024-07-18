import 'server-only'
import type { Locale } from '../../i18n.config'

const dictionaries = {
  en: () => import('@/dictionaries/en.json').then(module => module.default),
  ru: () => import('@/dictionaries/ru.json').then(module => module.default)
}

export const getDictionary = async (locale: Locale) => {
  return locale == 'ru' ? dictionaries.ru() : dictionaries.en();
};