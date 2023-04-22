import {Rule} from 'sanity'

export default {
  name: 'albumPage',
  title: 'Album Page',
  type: 'document',
  fields: [
    {
      name: 'image',
      description: '376 x 376 webp',
      type: 'image',
      options: {accept: 'image/webp'},
      validation: (rule: Rule) => rule.required(),
    },
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
      name: 'buttons',
      type: 'object',
      fields: [
        {
          name: 'magazine',
          type: 'object',
          fields: [
            {
              name: 'name',
              type: 'localeString',
            },
          ],
        },
        {name: 'listen', type: 'buttonLink'},
      ],
    },
    {
      name: 'spotifyLink',
      type: 'url',
      validation: (rule: Rule) => rule.required(),
    },
  ],
}
