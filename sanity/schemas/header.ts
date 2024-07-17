import {Rule} from 'sanity'

export default {
  name: 'header',
  title: 'Header',
  type: 'document',
  fields: [
    {
      name: 'logo',
      description: 'розмір 48 x 48 або більше',
      type: 'image',
      validation: (rule: Rule) => rule.required(),
      options: {accept: 'image/*'},
    },
    {
      name: 'navLinksLeft',
      description: 'обмеження - 2 лінки',
      type: 'array',
      of: [{type: 'navLink'}],
      validation: (rule: Rule) => rule.required().max(2).min(2),
    },
    {
      name: 'navLinksRight',
      description: 'обмеження - 2 лінки',
      type: 'array',
      of: [{type: 'navLink'}],
      validation: (rule: Rule) => rule.required().max(2).min(2),
    },
  ],
}
