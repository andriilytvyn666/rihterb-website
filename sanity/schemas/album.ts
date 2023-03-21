import {Rule} from 'sanity'

export default {
  name: 'album',
  title: 'Album',
  type: 'document',
  fields: [
    {
      name: 'logo',
      type: 'image',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'title',
      type: 'localeString',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'description',
      type: 'localeString',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'albumImage',
      type: 'image',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'player',
      type: 'string',
      validation: (rule: Rule) => rule.required(),
      initialValue: 'bandcamp',
      options: {list: ['bandcamp', 'spotify']},
    },
    {
      name: 'link',
      description:
        'лінк на ЕМБЕД спотіфая, або бендкемпа (не кидати весь iframe, а тільки лінк з нього)',
      type: 'string',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'bandcampLink',
      description: 'лінк на бендкемп. не з iframe, а просто коли заходиш з браузера',
      type: 'url',
    },
  ],
}
