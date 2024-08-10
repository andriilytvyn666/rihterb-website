import {defaultLanguage, supportedLanguages} from '../fieldLocalization'

export default {
  title: 'Localized text',
  name: 'localeText',
  type: 'object',
  fields: supportedLanguages.map((lang) => ({
    title: lang.title,
    name: lang.id,
    rows: 2,
    type: 'text',
  })),
}
