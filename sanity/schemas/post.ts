import {Rule} from 'sanity'

export default {
  name: 'post',
  type: 'document',
  title: 'Post',
  fields: [
    {
      name: 'title',
      type: 'localeString',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'subtitle',
      type: 'localeString',
      validation: (rule: Rule) => rule.required(),
    },

    {
      name: 'text',
      type: 'localePortableText',
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
