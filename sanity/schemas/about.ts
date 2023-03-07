import {Rule} from 'sanity'
import {UserIcon} from '@sanity/icons'

export default {
  name: 'about',
  type: 'document',
  icon: UserIcon,
  title: 'About',
  fields: [
    {
      name: 'name',
      type: 'localeString',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'photo',
      description:
        'всі картинки заливати в webp, бо тоді менше розмір в +-2 рази і все грузиться швидше. і бажано у максимальному розмірі, який буде видно на сайті, можна глянути через Ctrl+I.',
      type: 'image',
      validation: (rule: Rule) => rule.required(),
      options: {accept: 'image/webp'},
    },
    {
      name: 'subtitle',
      type: 'localeString',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'description',
      type: 'localeString',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'links',
      description:
        'не міняти порядок, і не додавати нові, бо бібліотека встрата трохи і не можна нормально кольори іконок міняти динамічно, тому поки вони захардкоджені',
      type: 'array',
      of: [{type: 'listenLink'}],
      validation: (rule: Rule) => rule.required(),
    },
  ],
}
