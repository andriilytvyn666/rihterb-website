import {Rule, defineField} from 'sanity'

export default {
  name: 'homeCard',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Картинка',
      description: 'Будь-який формат; співвідношення сторін 1:1; розмір 800x800px або більше',
      type: 'image',
      accept: [{type: 'image/*'}],
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'button',
      options: {
        collapsible: true,
        collapsed: true,
      },
      title: 'Нашаштування кнопки',
      type: 'buttonLink',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'textOnTop',
      title: 'Текст над картинкою',
      type: 'boolean',
      initialValue: false,
      validation: (rule: Rule) => rule.required(),
    },

    {
      name: 'title',
      title: 'Заголовок',
      type: 'localeString',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'description',
      title: 'Опис',
      description: 'Максимум 2 рядки, решта буде обрізана',
      type: 'localeText2',
      validation: (rule: Rule) => rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title.uk',
      media: 'image',
      mediatype: 'image._type',
    },
  },
}
