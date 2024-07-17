import {Rule} from 'sanity'

export default {
  name: 'moviePage',
  type: 'document',
  title: 'Movie Page',
  fields: [
    {
      name: 'youtubeLink',
      type: 'url',
      validation: (rule: Rule) => rule.required(),
    },
  ],
}
