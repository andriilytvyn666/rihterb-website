import {Rule} from 'sanity'
import {BlockElementIcon} from '@sanity/icons'

export default {
  name: 'pageBlock',
  title: 'Page Block',
  icon: BlockElementIcon,
  type: 'object',
  fields: [
    {
      name: 'name',
      type: 'string',
      initialValue: 'About',
      options: {
        list: ['About', 'Movie', 'Album', 'Magazine', 'Support'],
      },
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'visible',
      type: 'boolean',
      initialValue: true,
    },
  ],
}
