import {Rule} from 'sanity'

export default {
  name: 'homepage',
  type: 'document',
  fields: [
    {
      name: 'blocks',
      type: 'array',
      of: [{type: 'homeCard'}],
      //   validation: (rule: Rule) => rule.required(),
    },
  ],
}
