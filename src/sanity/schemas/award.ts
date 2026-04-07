import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'award',
  title: 'Awards & Achievements',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Award Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'issuer',
      title: 'Issuing Organization',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date Received',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'issuer',
    },
  },
})
