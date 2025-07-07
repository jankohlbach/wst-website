import { defineCollection, z } from 'astro:content';

import { glob } from 'astro/loaders';

const pagesGeneric = defineCollection({
  loader: glob({base: './src/content/pagesGeneric', pattern: '**/*.md'}),
  schema: z.object({
    title: z.string(),
    content: z.string(),
  }),
});

export const collections = { pagesGeneric };
