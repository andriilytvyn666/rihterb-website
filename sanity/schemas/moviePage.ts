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
      name: 'text',
      type: 'localePortableText',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'youtubeLink',
      type: 'url',
      validation: (rule: Rule) => rule.required(),
    },
  ],
}
