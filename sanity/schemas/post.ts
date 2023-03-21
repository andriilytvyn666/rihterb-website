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
      name: 'albumId',
      description:
        'не треба кидати повний лінк на споті чи бендкемп сюди, треба тільки id альбома. виявилося, що можна кидати лінк на окремий трек на бендкемпі.',
      type: 'string',
      validation: (rule: Rule) => rule.required(),
    },
  ],
}
