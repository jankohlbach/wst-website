import { defineCollection, z } from 'astro:content';

import { glob } from 'astro/loaders';

const pagesGeneric = defineCollection({
  loader: glob({base: './src/content/pagesGeneric', pattern: '**/*.md'}),
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    sections: z.array(
      z.object({
        modules: z.array(
          z.discriminatedUnion('type', [
            z.object({
              type: z.literal('moduleTitle'),
              title: z.string()
            }),
            z.object({
              type: z.literal('moduleRichText'),
              content: z.string()
            })
          ])
        )
      })
    )
  })
});

export const collections = { pagesGeneric };
