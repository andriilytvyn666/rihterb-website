import {Rule} from 'sanity'

export default {
  name: 'headerButton',
  type: 'object',
  preview: {
    select: {
      title: 'title.uk',
    },
  },
  fields: [
    {
      name: 'openInNewTab',
      title: 'Відкривати у новій вкладці',
      type: 'boolean',
      initialValue: true,
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'title',
      options: {
        collapsible: false,
        collapsed: false,
      },
      title: 'Текст кнопки',
      type: 'localeString',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'link',
      title: 'Поклик',
      type: 'string',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'icon',
      title: 'Піктограма кнопки',
      description: 'icones.js.org - сайт з піктограмами, сюди треба ID (simple-icons:spotify тощо)',
      type: 'string',
      validation: (rule: Rule) => rule.required(),
    },
  ],
}
