import {Rule} from 'sanity'
import {LinkIcon} from '@sanity/icons'

export default {
  name: 'nav',
  type: 'document',
  title: 'Nav Links',
  icon: LinkIcon,
  fields: [
    {
      name: 'title',
      type: 'localeString',
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
