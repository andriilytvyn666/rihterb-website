import {Rule} from 'sanity'

export default {
  name: 'album',
  title: 'Album',
  type: 'document',
  fields: [
    {
      name: 'logo',
      type: 'image',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'title',
      type: 'localeString',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'description',
      type: 'localeString',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'albumImage',
      type: 'image',
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
        '0qiorHnzWjHAdWMqbSKe0s для такого спотіфай спотіфай https://open.spotify.com/album/0qiorHnzWjHAdWMqbSKe0s; для бендкемпу наприклад такий 148721193, можна знайти у iframe ембедед плеера бендкемпа https://bandcamp.com/EmbeddedPlayer/album=148721193/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
      type: 'string',
      validation: (rule: Rule) => rule.required(),
    },
  ],
}
