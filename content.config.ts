import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    en: defineCollection({
      type: 'page',
      source: 'en/*.md',
      schema: z.object({
        number: z.number(),
        title: z.string(),
        subtitle: z.string(),
        thumbnail: z.string(),
        images: z.array(z.string()),
        dates: z.object({
          start: z.string(),
          end: z.string(),
        }),
        tags: z.array(z.string()),
        technologies: z.array(
          z.object({
            name: z.string(),
            description: z.string(),
            icon: z.string(),
          })
        ),
        status: z.string(),
        team: z.array(
          z.object({
            name: z.string(),
            role: z.string(),
          })
        ),
        links: z.array(
          z.object({
            name: z.string(),
            url: z.string(),
            icon: z.string(),
          })
        ),
      })
    }),
    fr: defineCollection({
      type: 'page',
      source: 'fr/*.md',
      schema: z.object({
        number: z.number(),
        title: z.string(),
        subtitle: z.string(),
        thumbnail: z.string(),
        dates: z.object({
          start: z.string(),
          end: z.string(),
        }),
        tags: z.array(z.string()),
        technologies: z.array(
          z.object({
            name: z.string(),
            description: z.string(),
            icon: z.string(),
          })
        ),
        status: z.string(),
        team: z.array(
          z.object({
            name: z.string(),
            role: z.string(),
          })
        ),
        links: z.array(
          z.object({
            name: z.string(),
            url: z.string(),
            icon: z.string(),
          })
        ),
      })
    })
  }
})
