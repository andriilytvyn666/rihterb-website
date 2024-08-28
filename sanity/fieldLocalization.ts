import {Language} from '@sanity/language-filter'

const supportedLanguages: Language[] = [
  {id: 'uk', title: 'Українська'},
  {id: 'en', title: 'English'},
]

const defaultLanguage: string = 'uk'

export {supportedLanguages, defaultLanguage}
