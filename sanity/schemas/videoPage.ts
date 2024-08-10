import {Rule} from 'sanity'

export default {
  name: 'videoPage',
  type: 'document',
  title: 'Video',
  fields: [
    {
      name: 'youtubeLink',
      title: 'Поклик на відео в Youtube',
      type: 'url',
      validation: (rule: Rule) => rule.required(),
    },
  ],
}
