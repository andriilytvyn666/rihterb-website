import {Rule} from 'sanity'
import {DocumentVideoIcon} from '@sanity/icons'

export default {
  name: 'videos',
  type: 'document',
  icon: DocumentVideoIcon,
  title: 'Videos',
  fields: [
    {
      name: 'youtubeId',
      description: 'https://www.youtube.com/watch?v=JtQiHyjAfcE ця частина JtQiHyjAfcE',
      type: 'string',
      validation: (rule: Rule) => rule.required(),
    },
  ],
}
