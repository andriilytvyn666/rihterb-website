import en from './locales/en-US.json'
import uk from './locales/uk-UA.json'
import ru from './locales/ru-RU.json'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'uk',
  fallbackLocale: 'en',
  availableLocales: ['en', 'uk', 'ru'],
  messages: {
    en: en,
    uk: uk,
    ru: ru,
  },
}))
