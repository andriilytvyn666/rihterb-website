import {Rule} from 'sanity'

export default {
  name: 'header',
  title: 'Header',
  type: 'document',
  fields: [
    {
      name: 'logo',
      description: '48 x 48 webp',
      type: 'image',
      validation: (rule: Rule) => rule.required(),
      options: {accept: 'image/webp'},
    },
    {
      name: 'navLinks',
      description: 'обмеження - 2 лінки',
      type: 'array',
      of: [{type: 'navLink'}],
      validation: (rule: Rule) => rule.required().max(2).min(2),
    },
    {
      name: 'listenLink',
      type: 'string',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'socialsLink',
      type: 'string',
      validation: (rule: Rule) => rule.required(),
    },
  ],
}
