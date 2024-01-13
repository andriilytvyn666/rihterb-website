import {defaultLanguage, supportedLanguages} from '../fieldLocalization'

export default {
  title: 'Localized portable text',
  name: 'localePortableText',
  type: 'object',
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
      options: {collapsible: true},
    },
  ],
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
    fieldset: lang.id === defaultLanguage ? null : 'translations',
  })),
}
