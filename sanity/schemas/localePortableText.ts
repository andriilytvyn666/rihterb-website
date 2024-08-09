import {defaultLanguage, supportedLanguages} from '../fieldLocalization'

export default {
  title: 'Localized portable text',
  name: 'localePortableText',
  type: 'object',
  fields: supportedLanguages.map((lang) => ({
    title: lang.title,
    name: lang.id,
    type: 'array',
    of: [
      {
        type: 'block',
        styles: [],
        lists: [],
        marks: {
          decorators: [],
        },
      },
    ],
  })),
}
