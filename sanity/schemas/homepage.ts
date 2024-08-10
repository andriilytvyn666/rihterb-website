import {Rule} from 'sanity'

export default {
  name: 'homepage',
  type: 'document',
  fields: [
    {
      name: 'about',
      title: 'Про себе',
      type: 'aboutInfo',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'blocks',
      title: 'Список блоків',
      description: 'Максимум 7 штук',
      type: 'array',
      of: [{type: 'homeCard'}],
      validation: (rule: Rule) => rule.max(7).required(),
    },
  ],
}
