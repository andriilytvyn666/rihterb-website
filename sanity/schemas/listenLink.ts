import {Rule} from 'sanity'

export default {
  name: 'listenLink',
  type: 'object',
  title: 'Listen link',
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
      name: 'logo',
      type: 'string',
      initialValue: 'spotify',
      options: {
        list: ['spotify', 'youtubemusic', 'applemusic', 'bandcamp'],
      },
      validation: (rule: Rule) => rule.required(),
    },
  ],
}
