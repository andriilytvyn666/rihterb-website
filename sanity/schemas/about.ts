import {Rule} from 'sanity'

export default {
  name: 'about',
  type: 'document',
  title: 'About',
  fields: [
    {
      name: 'name',
      type: 'localeString',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'photo',
      type: 'image',
      validation: (rule: Rule) => rule.required(),
      options: {accept: 'image/webp'},
    },
    {
      name: 'subtitle',
      type: 'localeString',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'description',
      type: 'localeString',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'links',
      type: 'array',
      of: [{type: 'listenLink'}],
      validation: (rule: Rule) => rule.required(),
    },
  ],
}
