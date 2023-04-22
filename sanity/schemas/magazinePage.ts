import {Rule} from 'sanity'

export default {
  name: 'magazinePage',
  type: 'document',
  title: 'Magazine Page',
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
      name: 'pages',
      type: 'array',
      of: [{type: 'image'}],
      validation: (rule: Rule) => rule.required(),
    },
  ],
}
