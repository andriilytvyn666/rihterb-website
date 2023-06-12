import {Rule} from 'sanity'

export default {
  name: 'minecraftPage',
  type: 'document',
  title: 'Minecraft Page',
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
      name: 'features',
      type: 'array',
      of: [{type: 'localeString'}],
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'ip',
      type: 'string',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'buttons',
      type: 'object',
      fields: [
        {
          name: 'patreon',
          type: 'localeString',
          validation: (rule: Rule) => rule.required(),
        },
        {
          name: 'monitoring',
          type: 'localeString',
          validation: (rule: Rule) => rule.required(),
        },
        {
          name: 'map',
          type: 'buttonLink',
          validation: (rule: Rule) => rule.required(),
        },
        {
          name: 'discord',
          type: 'buttonLink',
          validation: (rule: Rule) => rule.required(),
        },
      ],
    },
    {
      name: 'timer',
      type: 'object',
      fields: [
        {
          name: 'title',
          type: 'localeString',
          validation: (rule: Rule) => rule.required(),
        },
        {
          name: 'timerDeadline',
          type: 'datetime',
          validation: (rule: Rule) => rule.required().min(new Date().toISOString()),
        }
      ]
    },
    {
      name: 'image',
      type: 'image',
      description: '614-any x 1000 webp',
      validation: (rule: Rule) => rule.required(),
    },
  ],
}
