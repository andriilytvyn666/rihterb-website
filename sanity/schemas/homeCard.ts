import {Rule, defineField} from 'sanity'

export default {
  name: 'homeCard',
  type: 'object',
  fields: [
    {
      name: 'image',
      type: 'image',
      accept: [{type: 'image/*'}],
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'textOnTop',
      type: 'boolean',
      initialValue: false,
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'openInNewTab',
      type: 'boolean',
      initialValue: true,
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'title',
      type: 'localeString',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'description',
      description: 'обмеження 2 рядки',
      type: 'localePortableText',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'link',
      type: 'string',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'linkText',
      type: 'localeString',
      validation: (rule: Rule) => rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title.uk',
      media: 'image',
      mediatype: 'image._type',
    },
  },
}
