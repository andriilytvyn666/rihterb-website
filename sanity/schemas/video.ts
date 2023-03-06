import {Rule} from 'sanity'

export default {
  name: 'videos',
  type: 'document',
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
