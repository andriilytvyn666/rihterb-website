import {Rule} from 'sanity'

export default {
  name: 'videoPage',
  type: 'document',
  title: 'Video',
  fields: [
    {
      name: 'youtubeLink',
      title: 'Поклик на відео в Youtube',
      type: 'url',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'title',
      title: 'Заголовок',
      description: 'Тільки мобільна версія',
      type: 'localeString',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'text',
      title: 'Текст',
      description: 'Тільки мобільна версія',
      type: 'localeText30',
      validation: (rule: Rule) => rule.required(),
    },
  ],
}
