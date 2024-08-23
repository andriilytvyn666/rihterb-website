import {Rule} from 'sanity'

export default {
  name: 'releasePage',
  type: 'document',
  title: 'Release',
  fields: [
    {
      name: 'cover',
      title: 'Обкладинка',
      description: 'Будь-який формат; співвідношення сторін 1:1; розмір 800x800px або більше',
      type: 'image',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'title',
      title: 'Назва',
      type: 'localeString',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'description',
      title: 'Опис',
      type: 'localeText30',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'spotifyLink',
      title: 'Поклик на Spotify',
      type: 'url',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'buttons',
      title: 'Кнопки',
      description: 'Максимум 3 кнопки',
      type: 'array',
      of: [{type: 'buttonLink'}],
      validation: (rule: Rule) => rule.min(1).max(3).required(),
    },
  ],
}
