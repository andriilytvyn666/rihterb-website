import {Rule} from 'sanity'
import {LinkIcon} from '@sanity/icons'

export default {
  name: 'nav',
  type: 'document',
  title: 'Nav Links',
  icon: LinkIcon,
  fields: [
    {
      name: 'title',
      type: 'localeString',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'linkType',
      type: 'string',
      validation: (rule: Rule) => rule.required(),
      options: {list: ['web', 'local']},
      initialValue: 'web',
    },
    {
      name: 'target',
      type: 'string',
      validation: (rule: Rule) => rule.required(),
      options: {list: ['New page', 'Same page']},
      initialValue: 'Same page',
    },
    {
      name: 'link',
      description:
        'якщо тип лінка web, то лінк на будь-який сайт, а якщо local, то відносно сайта (те що після слеша йде). приклад: rihterb.pp.ua/album - album',
      type: 'string',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'icon',
      description: 'емоджі для лінка',
      type: 'string',
      validation: (rule: Rule) => rule.required(),
      options: {list: ['fire', 'jeans']},
      initialValue: 'fire',
    },
  ],
}
