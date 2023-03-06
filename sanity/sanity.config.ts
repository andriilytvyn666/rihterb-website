import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'rihter-site',

  projectId: 'lh08fn64',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('Base')
          .items([
            S.listItem().title('About').child(S.document().schemaType('about').documentId('about')),
            ...S.documentTypeListItems().filter(
              (listItem) => !['about'].includes(`${listItem.getId()}`)
            ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
