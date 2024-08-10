import {Rule} from 'sanity'

export default {
  name: 'header',
  title: 'Header',
  type: 'document',
  fields: [
    {
      name: 'logo',
      title: 'Логотип',
      description: 'Будь-який формат; співвідношення сторін 1:1; розмір 20x20px або більше',
      type: 'image',
      validation: (rule: Rule) => rule.required(),
      options: {accept: 'image/*'},
    },
    {
      name: 'buttons',
      title: 'Кнопки (десктопна версія)',
      description: 'Максимум 10 кнопок',
      type: 'array',
      of: [{type: 'headerButton'}],
      validation: (rule: Rule) => rule.required().max(10),
    },
    {
      name: 'buttonMobile',
      title: 'Кнопка (мобільна версія)',
      type: 'headerButton',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],
}
