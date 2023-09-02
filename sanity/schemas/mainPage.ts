import {Rule} from 'sanity'
import {UserIcon} from '@sanity/icons'

export default {
  name: 'mainPage',
  type: 'document',
  icon: UserIcon,
  title: 'Main Page',
  fields: [
    {
      name: 'about',
      type: 'object',
      options: {collapsible: true, collapsed: true},

      fields: [
        {
          name: 'photo',
          description: '334 x 334 webp',
          type: 'image',
          validation: (rule: Rule) => rule.required(),
          options: {accept: 'image/webp'},
        },
        {
          name: 'name',
          type: 'localeString',
          validation: (rule: Rule) => rule.required(),
        },

        {
          name: 'subtitle',
          type: 'localeString',
          validation: (rule: Rule) => rule.required(),
        },
        {
          name: 'description',
          description: 'обмеження 4 рядки',
          type: 'localeString',
          validation: (rule: Rule) => rule.required(),
        },
        {
          name: 'listenName',
          type: 'localeString',
          validation: (rule: Rule) => rule.required(),
        },
        {
          name: 'listenLink',
          type: 'url',
          validation: (rule: Rule) => rule.required(),
        },
        {
          name: 'socialName',
          type: 'localeString',
          validation: (rule: Rule) => rule.required(),
        },
        {
          name: 'socialLink',
          type: 'url',
          validation: (rule: Rule) => rule.required(),
        },
      ],
    },
    {
      name: 'concert',
      type: 'object',
      options: {collapsible: true, collapsed: true},

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
          name: 'buttonName',
          type: 'localeString',
          validation: (rule: Rule) => rule.required(),
        },
      ],
    },
    {
      name: 'album',
      type: 'object',
      options: {collapsible: true, collapsed: true},

      fields: [
        {
          name: 'image',
          description: '500 x 500 webp',
          type: 'image',
          validation: (rule: Rule) => rule.required(),
          options: {accept: 'image/webp'},
        },
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
          name: 'buttonName',
          type: 'localeString',
          validation: (rule: Rule) => rule.required(),
        },
      ],
    },
    {
      name: 'magazine',
      type: 'object',
      options: {collapsible: true, collapsed: true},

      fields: [
        {
          name: 'images',
          description: 'any x 725 webp',
          type: 'array',
          validation: (rule: Rule) => rule.required().min(2).max(10),
          of: [
            {
              type: 'image',
              options: {accept: 'image/webp'},
              validation: (rule: Rule) => rule.required(),
            },
          ],
        },
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
          name: 'buttonName',
          type: 'localeString',
          validation: (rule: Rule) => rule.required(),
        },
      ],
    },
    {
      name: 'movie',
      type: 'object',
      options: {collapsible: true, collapsed: true},

      fields: [
        {
          name: 'images',
          description: 'any x 400 webp',
          type: 'array',
          validation: (rule: Rule) => rule.required().min(2).max(10),
          of: [
            {
              type: 'image',
              options: {accept: 'image/webp'},
              validation: (rule: Rule) => rule.required(),
            },
          ],
        },
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
          name: 'buttonName',
          type: 'localeString',
          validation: (rule: Rule) => rule.required(),
        },
      ],
    },
    {
      name: 'minecraft',
      type: 'object',
      options: {collapsible: true, collapsed: true},

      fields: [
        {
          name: 'images',
          description: 'any x 400 webp',
          type: 'array',
          validation: (rule: Rule) => rule.required().min(2).max(10),
          of: [
            {
              type: 'image',
              options: {accept: 'image/webp'},
              validation: (rule: Rule) => rule.required(),
            },
          ],
        },
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
          name: 'buttonName',
          type: 'localeString',
          validation: (rule: Rule) => rule.required(),
        },
      ],
    },
    {
      name: 'support',
      type: 'object',
      options: {collapsible: true, collapsed: true},

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
          name: 'buttonName',
          type: 'localeString',
          validation: (rule: Rule) => rule.required(),
        },
      ],
    },
  ],
}
