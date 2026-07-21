import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const themesCollection = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/themes" }),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    subtitle: z.string(),
    description: z.string(),
    problems: z.array(z.union([
      z.string(),
      z.object({
        title: z.string(),
        description: z.string(),
        image: z.string().optional()
      })
    ])).optional(),
    dateAdded: z.string().optional(),
    image: z.string().optional(),
    layout: z.string().optional(),
    hero_services: z.array(z.string()).optional(),
    pricing: z.object({
      free_trial: z.string().optional(),
      initial: z.string().optional(),
      monthly: z.string().optional(),
    }).optional(),
    solution: z.object({
      catchphrase: z.string().optional(),
      points: z.array(z.object({
        badge: z.string().optional(),
        title: z.string(),
        subtitle: z.string().optional(),
        desc: z.string()
      }))
    }).optional(),
    scenarios: z.array(z.object({
      industry: z.string(),
      before: z.string(),
      after: z.string(),
      desc: z.string(),
      image: z.string()
    })).optional(),
    faq: z.array(z.object({
      q: z.string(),
      a: z.string()
    })).optional(),
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
