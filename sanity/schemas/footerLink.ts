import {Rule} from 'sanity'
import {LinkIcon} from '@sanity/icons'

export default {
  name: 'footerLink',
  type: 'object',
  icon: LinkIcon,
  title: 'Піктограма-посилання',
  fields: [
    {
      name: 'link',
      type: 'string',
      title: 'Посилання',
      description: 'Звичайне або внутрішнє /album тощо',
      validation: (rule: Rule) => rule.min(1).required(),
    },
    {
      name: 'icon',
      title: 'Піктограма кнопки',
      description: 'icones.js.org - сайт з піктограмами, сюди треба ID (simple-icons:spotify тощо)',
      type: 'string',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'openInNewTab',
      title: 'Відкривати у новій вкладці',
      type: 'boolean',
      initialValue: true,
      validation: (rule: Rule) => rule.required(),
    },
  ],
}
