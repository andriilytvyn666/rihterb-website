import {defaultLanguage, supportedLanguages} from '../fieldLocalization'

export default {
  title: 'Localized string',
  name: 'localeString',
  type: 'object',
  fields: supportedLanguages.map((lang) => ({
    title: lang.title,
    name: lang.id,
    type: 'string',
  })),
}
