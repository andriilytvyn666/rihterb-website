import en from './locales/en-US.json'
import uk from './locales/uk-UA.json'
import ru from './locales/ru-RU.json'

// required for nuxtjs/i18n 8.0.0-beta. 11

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'uk',
  fallbackLocale: 'en',
  availableLocales: ['en', 'uk', 'ru'],
  messages: { en, uk, ru },
}))
