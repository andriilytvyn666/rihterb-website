import {Rule} from 'sanity'
import {LinkIcon} from '@sanity/icons'

export default {
  name: 'footer',
  type: 'document',
  icon: LinkIcon,
  title: 'Footer',
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
