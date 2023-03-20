import {Rule} from 'sanity'
import {DocumentVideoIcon} from '@sanity/icons'

export default {
  name: 'videos',
  type: 'document',
  icon: DocumentVideoIcon,
  title: 'Videos',
  fields: [
    {
      name: 'orderId',
      description: 'це поки єдиний спосіб вибрати порядок відео, трохи пізніше зроблю нормально',
      type: 'number',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'youtubeLink',
      type: 'string',
      validation: (rule: Rule) => rule.required(),
    },
  ],
  orderings: [
    {
      title: 'Order',
      name: 'order',
      by: [{field: 'orderId', direction: 'asc'}],
    },
  ],
  preview: {
    select: {
      title: 'orderId',
      subtitle: 'youtubeLink',
    },
  },
}
