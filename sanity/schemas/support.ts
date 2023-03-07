import {Rule} from 'sanity'

export default {
  name: 'support',
  type: 'document',
  title: 'Support',
  fields: [
    {
      name: 'title',
      type: 'localeString',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'text',
      type: 'localeString',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'patreonLink',
      type: 'url',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'bandcampLink',
      type: 'url',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'diakaLink',
      type: 'url',
      validation: (rule: Rule) => rule.required(),
    },
  ],
}
