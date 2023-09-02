import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {
  PlayIcon,
  LinkIcon,
  BlockContentIcon,
  HeartFilledIcon,
  ImageIcon,
  InfoOutlineIcon,
  HomeIcon,
  SchemaIcon,
  BlockElementIcon,
} from '@sanity/icons'
import {vercelDeployTool} from 'sanity-plugin-vercel-deploy'

export default defineConfig({
  name: 'default',
  title: 'rihter-site',

  projectId: 'lh08fn64',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('Main')
          .items([
            S.listItem()
              .title('Website Blocks')
              .icon(BlockElementIcon)
              .child(S.document().schemaType('websiteBlocks').documentId('websiteBlocks')),
            S.listItem()
              .title('Main Page')
              .icon(HomeIcon)
              .child(S.document().schemaType('mainPage').documentId('mainPage')),
            S.listItem()
              .title('Concert Page')
              .icon(PlayIcon)
              .child(S.document().schemaType('concertPage').documentId('concertPage')),
            S.listItem()
              .title('Support Page')
              .icon(HeartFilledIcon)
              .child(S.document().schemaType('supportPage').documentId('supportPage')),
            S.listItem()
              .title('Album Page')
              .icon(BlockContentIcon)
              .child(S.document().schemaType('albumPage').documentId('albumPage')),
            S.listItem()
              .title('Magazine Page')
              .icon(ImageIcon)
              .child(S.document().schemaType('magazinePage').documentId('magazinePage')),
            S.listItem()
              .title('Movie Page')
              .icon(ImageIcon)
              .child(S.document().schemaType('moviePage').documentId('moviePage')),
            S.listItem()
              .title('Shared - Header')
              .icon(InfoOutlineIcon)
              .child(S.document().schemaType('header').documentId('header')),
            S.listItem()
              .title('Shared - Footer')
              .icon(LinkIcon)
              .child(S.document().schemaType('footer').documentId('footer')),
            ...S.documentTypeListItems().filter(
              (listItem) =>
                ![
                  'mainPage',
                  'supportPage',
                  'footer',
                  'header',
                  'albumPage',
                  'magazinePage',
                  'navLink',
                  'moviePage',
                  'websiteBlocks',
                  'concertPage',
                ].includes(`${listItem.getId()}`)
            ),
          ]),
    }),
    vercelDeployTool(),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
