import {Rule} from 'sanity'

export default {
  name: 'footer',
  type: 'document',
  title: 'Футер',
  fields: [
    {
      name: 'links',
      type: 'array',
      title: 'Посилання в футері',
      description: 'Максимум 20 штук',
      of: [{type: 'footerLink'}],
      validation: (rule: Rule) => rule.min(1).max(20).required(),
    },
  ],
}
