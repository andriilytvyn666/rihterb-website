import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {
  RiHome2Line,
  RiVideoLine,
  RiCalendarLine,
  RiMusic2Line,
  RiExternalLinkLine,
  RiStarLine,
} from 'react-icons/ri'

export default defineConfig({
  name: 'default',
  title: 'rihter-site',

  projectId: 'lh08fn64',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Менюшка')
          .items([
            S.listItem()
              .title('Домашня')
              .icon(RiHome2Line)
              .child(S.document().title('Домашня /').schemaType('homepage').documentId('homepage')),

            S.listItem()
              .title('Відео')
              .icon(RiVideoLine)
              .child(
                S.document().title('Відео /video').schemaType('videoPage').documentId('videoPage'),
              ),
            S.listItem()
              .title('Івент')
              .icon(RiCalendarLine)
              .child(
                S.document()
                  .title('Івент /event, /tour, /donate, /zbir, /banka')
                  .schemaType('eventPage')
                  .documentId('eventPage'),
              ),

            S.listItem()
              .title('Реліз')
              .icon(RiMusic2Line)
              .child(
                S.document()
                  .title('Реліз /release, /ep, /single, /album')
                  .schemaType('releasePage')
                  .documentId('releasePage'),
              ),
            S.listItem()
              .title('Гедер')
              .icon(RiExternalLinkLine)
              .child(S.document().title('Гедер').schemaType('header').documentId('header')),
            S.listItem()
              .title('Футер')
              .icon(RiExternalLinkLine)
              .child(S.document().title('Футер').schemaType('footer').documentId('footer')),
            ...S.documentTypeListItems().filter(
              (listItem) =>
                ![
                  'mainPage',
                  'supportPage',
                  'eventPage',
                  'footer',
                  'header',
                  'albumPage',
                  'magazinePage',
                  'navLink',
                  'videoPage',
                  'websiteBlocks',
                  'concertPage',
                  'homepage',
                  'releasePage',
                ].includes(`${listItem.getId()}`),
            ),
          ]),
    }),
    // vercelDeployTool(),
    // visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
