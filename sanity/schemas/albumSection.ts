import {Rule} from 'sanity'
import {FolderIcon} from '@sanity/icons'

export default {
  name: 'albumSection',
  type: 'document',
  icon: FolderIcon,
  title: 'Album Section',
  fields: [
    {
      name: 'imageLarge',
      description: '334x334 webp',
      type: 'image',
      validation: (rule: Rule) => rule.required(),
      options: {accept: 'image/webp'},
    },
    {
      name: 'imageSmall',
      description: '80x80 webp',
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
}
