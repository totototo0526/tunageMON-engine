import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const themesCollection = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/themes" }),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    subtitle: z.string(),
    description: z.string(),
    problems: z.array(z.string()).optional(),
    dateAdded: z.string().optional(),
    image: z.string().optional(),
    button: z.object({
      type: z.string(),
      url: z.string(),
      text: z.string(),
      icon: z.string(),
    }).optional()
  }),
});

export const collections = {
  'themes': themesCollection,
};
