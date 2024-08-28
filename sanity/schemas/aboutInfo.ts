import {Rule} from 'sanity'

export default {
  name: 'aboutInfo',
  type: 'object',
  options: {
    collapsed: true,
    collapsible: true,
  },
  fields: [
    {
      name: 'image',
      title: 'Фото',
      description: 'Будь-який формат; співвідношення сторін 1:1; розмір 800x800px або більше',
      type: 'image',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'name',
      title: "Ім'я",
      type: 'localeString',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'subtitle',
      title: 'Підзаголовок',
      type: 'localeString',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'buttons',
      title: 'Кнопки',
      type: 'array',
      of: [{type: 'buttonLink'}],
      validation: (rule: Rule) => rule.min(1).max(3).required(),
      preview: {},
    },
  ],
}
