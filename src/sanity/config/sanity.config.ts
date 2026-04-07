import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { presentationTool } from '@sanity/presentation'
import { schemaTypes } from './sanity/schemas'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!

export default defineConfig({
  name: 'default',
  title: 'AI Portfolio Twin',
  projectId,
  dataset,
  basePath: '/studio',
  plugins: [
    structureTool(),
    visionTool(),
    presentationTool({
      previewUrl: {
        origin: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
        previewMode: {
          enable: '/api/draft',
        },
      },
    }),
  ],
  schema: {
    types: schemaTypes,
  },
})
