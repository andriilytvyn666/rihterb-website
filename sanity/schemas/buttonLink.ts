import {Rule} from 'sanity'

export default {
  title: 'Button Link',
  name: 'buttonLink',
  type: 'object',
  fields: [
    {
      name: 'name',
      type: 'localeString',
    },
    {
      name: 'link',
      type: 'url',
      validation: (rule: Rule) => rule.required(),
    },
  ],
}
