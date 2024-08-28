import {defaultLanguage, supportedLanguages} from '../fieldLocalization'

export default {
  title: 'Localized text',
  name: 'localeText30',
  type: 'object',
  fields: supportedLanguages.map((lang) => ({
    title: lang.title,
    name: lang.id,
    rows: 30,
    type: 'text',
  })),
}
