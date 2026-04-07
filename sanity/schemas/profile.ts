import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'profile',
  title: 'Profile',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Professional Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'taglines',
      title: 'Taglines (for animated hero)',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Multiple taglines that will rotate in the hero section',
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.email(),
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'resumeUrl',
      title: 'Resume URL',
      type: 'url',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'object',
      fields: [
        { name: 'github', type: 'url', title: 'GitHub' },
        { name: 'linkedin', type: 'url', title: 'LinkedIn' },
        { name: 'twitter', type: 'url', title: 'Twitter' },
        { name: 'instagram', type: 'url', title: 'Instagram' },
        { name: 'youtube', type: 'url', title: 'YouTube' },
        { name: 'website', type: 'url', title: 'Website' },
      ],
    }),
    defineField({
      name: 'aiTwinPersonality',
      title: 'AI Twin Personality Mode',
      type: 'string',
      options: {
        list: [
          { title: 'Crisp (Professional)', value: 'crisp' },
          { title: 'Clear (Balanced)', value: 'clear' },
          { title: 'Chatty (Friendly)', value: 'chatty' },
        ],
      },
      initialValue: 'clear',
    }),
    defineField({
      name: 'aiTwinGreeting',
      title: 'AI Twin Greeting Message',
      type: 'text',
      description: 'How your AI Twin introduces itself to visitors',
    }),
    defineField({
      name: 'suggestedPrompts',
      title: 'Suggested Prompts for AI Twin',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Conversation starters for visitors',
    }),
  ],
})
