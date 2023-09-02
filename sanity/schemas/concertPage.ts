import {Rule} from 'sanity'

export default {
  name: 'concertPage',
  type: 'document',
  title: 'Movie Page',
  fields: [
    {
      name: 'title',
      type: 'localeString',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'poster',
      description: '700 x 700 webp',
      type: 'image',
      options: {accept: 'image/webp'},
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'ticketsText',
      type: 'localeString',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'ticketsLink',
      type: 'url',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'description',
      type: 'localePortableText',
      validation: (rule: Rule) => rule.required(),
    },
  ],
}
