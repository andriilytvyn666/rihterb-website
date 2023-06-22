import en from './locales/en-US.json'
import uk from './locales/uk-UA.json'
import ru from './locales/ru-RU.json'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'uk',
  fallbackLocale: 'en',
  availableLocales: ['en', 'uk', 'ru'],
  messages: {
    en: {
      dev: 'Developer: Andrii Lytvyn',
      copyright: 'Copyright © 2023 Vasily Richter',
      albumPage: {
        home: 'home',
      },
      meta: {
        title: 'Richter',
        description:
          'I am a Ukrainian indie musician. I write psychedelic indie songs with a unique sound, combining different genres and exploring emotional spaces to create a unique atmosphere.',
        author: 'Vasily Richter',
      },
      monitoring: {
        map: 'map',
        players: 'players',
        no_players: "nobody's here :(",
        back: 'back',
        copyIp: 'copy ip',
      },
      magazine: {
        view: 'view',
        homepage: 'homepage',
        back: 'back',
      },
      header: {
        listen: 'listen',
        socials: 'socials',
      },
    },
    uk: uk,
    ru: ru,
  },
}))
