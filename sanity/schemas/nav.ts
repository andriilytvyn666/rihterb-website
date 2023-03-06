import {Rule} from 'sanity'

export default {
  name: 'nav',
  type: 'document',
  title: 'Nav Links',
  fields: [
    {
      name: 'title',
      type: 'string',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'link',
      type: 'url',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'icon',
      description: 'емоджі для лінка',
      type: 'string',
      validation: (rule: Rule) => rule.required(),
      options: {list: ['fire', 'jeans']},
      initialValue: 'fire',
    },
  ],
}
