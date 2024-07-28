import {Rule} from 'sanity'

export default {
  name: 'concertPage',
  type: 'document',
  title: 'Concert Page',
  fields: [
    {
      name: 'poster',
      description: 'розмір 700 x 700 або більше',
      type: 'image',
      options: {accept: 'image/*'},
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'description',
      type: 'localePortableText',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'tickets',
      type: 'object',
      options: {collapsible: true, collapsed: true},

      fields: [
        {
          name: 'enabled',
          type: 'boolean',
          initialValue: true,
        },
        {
          name: 'look',
          type: 'string',
          initialValue: 'default',
          options: {
            list: ['default', 'important'],
          },
          validation: (rule: Rule) => rule.required(),
        },
        {
          name: 'text',
          type: 'localeString',
          validation: (rule: Rule) => rule.required(),
        },
        {
          name: 'link',
          type: 'url',
          validation: (rule: Rule) => rule.required(),
        },
      ],
    },
    {
      name: 'instagram',
      type: 'object',
      options: {collapsible: true, collapsed: true},

      fields: [
        {
          name: 'enabled',
          type: 'boolean',
          initialValue: true,
        },
        {
          name: 'look',
          type: 'string',
          initialValue: 'default',
          options: {
            list: ['default', 'important'],
          },
          validation: (rule: Rule) => rule.required(),
        },
        {
          name: 'text',
          type: 'localeString',
          validation: (rule: Rule) => rule.required(),
        },
        {
          name: 'link',
          type: 'url',
          validation: (rule: Rule) => rule.required(),
        },
      ],
    },
  ],
}
