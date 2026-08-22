// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 2. Define a `type` and `schema` for each collection
const progettiCollection = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/progetti" }),
    schema: z.object({
        name: z.string(),
        repoName: z.string(),
        description: z.string(),
        image: z.string(),
        logo: z.string(),
        status: z.enum(['Active', 'In Progress', 'Demo']),
        linkToProject: z.string(),
        hidden: z.boolean(),
        tier: z.enum(['featured', 'secondary', 'other']),
        tech_stack: z.array(z.string()),
        type: z.string(),
        date: z.string().transform((str) => new Date(str)),
        year_label: z.string(),
    }),
});

const professionalExperienceCollection = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/professionalExperience" }),
    schema: z.object({
        role: z.string(),
        company: z.string(),
        dates: z.string(),
        bulletPoints: z.array(z.string()),
        technologies: z.array(z.string()),
        date: z.string(),
    }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
    'progetti': progettiCollection,
    'professionalExperience': professionalExperienceCollection,
};