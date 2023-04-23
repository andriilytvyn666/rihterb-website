import {Rule} from 'sanity'
import {LinkIcon} from '@sanity/icons'

export default {
  name: 'navLink',
  type: 'document',
  icon: LinkIcon,
  title: 'Nav Link',
  fields: [
    {
      name: 'name',
      type: 'localeString',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'link',
      description: 'або просто лінк, або відносно сайту (/album тощо)',
      type: 'string',
      validation: (rule: Rule) => rule.required(),
    },
  ],
}
