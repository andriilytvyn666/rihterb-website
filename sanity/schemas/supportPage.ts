import {Rule} from 'sanity'

export default {
  name: 'supportPage',
  type: 'document',
  title: 'Support Page',
  fields: [
    {
      name: 'title',
      type: 'localeString',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'text',
      type: 'localeString',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'patreon',
      type: 'object',
      fields: [
        {name: 'name', type: 'localeString'},
        {name: 'link', type: 'url'},
      ],
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'bandcamp',
      type: 'object',
      fields: [
        {name: 'name', type: 'localeString'},
        {name: 'link', type: 'url'},
      ],
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'paypal',
      type: 'object',
      fields: [
        {name: 'name', type: 'localeString'},
        {name: 'link', type: 'url'},
      ],
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'diaka',
      type: 'object',
      fields: [
        {name: 'name', type: 'localeString'},
        {name: 'link', type: 'url'},
      ],
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'mono',
      type: 'object',
      fields: [
        {name: 'name', type: 'localeString'},
        {name: 'link', type: 'url'},
      ],
      validation: (rule: Rule) => rule.required(),
    },
  ],
}
