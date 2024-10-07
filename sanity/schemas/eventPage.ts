import {Rule} from 'sanity'

export default {
  name: 'eventPage',
  type: 'document',
  title: 'Event Page',
  fields: [
    {
      name: 'images',
      title: 'Фото',
      description: 'Будь-який формат; співвідношення сторін 1:1; розмір 800x800px або більше',
      type: 'array',
      of: [{type: 'image'}],
      validation: (rule: Rule) => rule.min(1).max(2).required(),
    },
    {
      name: 'title',
      title: 'Заголовок',
      type: 'localeString',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'buttons',
      title: 'Кнопки',
      description: 'Максимум 2 кнопки',
      type: 'array',
      of: [{type: 'buttonLink'}],
      validation: (rule: Rule) => rule.min(1).max(2).required(),
    },
    {
      options: {
        collapsible: true,
        collapsed: false,
      },
      name: 'text',
      title: 'Текст',
      type: 'localeText30',
      validation: (rule: Rule) => rule.required(),
    },
  ],
}
