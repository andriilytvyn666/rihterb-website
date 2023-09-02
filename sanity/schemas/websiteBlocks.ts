export default {
  name: 'websiteBlocks',
  title: 'Website Blocks',
  type: 'document',
  fields: [
    {
      name: 'order',
      type: 'array',
      of: [{type: 'pageBlock'}],
    },
  ],
}
