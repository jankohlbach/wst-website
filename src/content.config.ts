// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { defineCollection, z } from 'astro:content';

import { glob } from 'astro/loaders';

const pagesGeneric = defineCollection({
  loader: glob({base: './src/content/pagesGeneric', pattern: '**/*.md'}),
});

export const collections = { pagesGeneric };
