import {Rule} from 'sanity'
import {UserIcon} from '@sanity/icons'

export default {
  name: 'about',
  type: 'document',
  icon: UserIcon,
  title: 'About',
  fields: [
    {
      name: 'photo',
      description: '334x334 webp',
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
}
