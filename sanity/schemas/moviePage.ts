import {Rule} from 'sanity'

export default {
  name: 'moviePage',
  type: 'document',
  title: 'Movie Page',
  fields: [
    {
      name: 'title',
      type: 'localeString',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'youtubeLink',
      type: 'url',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'listenText',
      type: 'localeString',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'magazineText',
      type: 'localeString',
      validation: (rule: Rule) => rule.required(),
    },
  ],
}
