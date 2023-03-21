import {Rule} from 'sanity'

export default {
  name: 'header',
  title: 'Header',
  type: 'document',
  fields: [
    {
      name: 'logo',
      description:
        'лого. розмір 187x110 підходить ідеально. webp формат, щоб все грузилось моментально',
      type: 'image',
      validation: (rule: Rule) => rule.required(),
      options: {accept: 'image/webp'},
    },
    {
      name: 'linkTelegram',
      type: 'url',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'linkInstagram',
      type: 'url',
      validation: (rule: Rule) => rule.required(),
    },
  ],
}
