import {Rule} from 'sanity'

export default {
  name: 'footerLinks',
  type: 'document',
  title: 'Footer Links',
  fields: [
    {
      name: 'spotify',
      type: 'url',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'youtubemusic',
      type: 'url',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'applemusic',
      type: 'url',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'instagram',
      type: 'url',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'telegram',
      type: 'url',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'youtube',
      type: 'url',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'patreon',
      type: 'url',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'bandcamp',
      type: 'url',
      validation: (rule: Rule) => rule.required(),
    },
  ],
}
