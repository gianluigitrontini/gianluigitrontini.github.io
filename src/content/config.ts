// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Define a `type` and `schema` for each collection
const progettiCollection = defineCollection({
    type: 'content', // v2.5.0 and later
    schema: z.object({
        name: z.string(),
        repoName: z.string(),
        description: z.string(),
        image: z.string(),
        logo: z.string(),
        status: z.enum(['Active', 'In Progress', 'Demo']),
        linkToProject: z.string(),
        hidden: z.boolean(),
        tech_stack: z.array(z.string()),
        type: z.string(),
        date: z.string().transform((str) => new Date(str)),
        year_label: z.string(),
    }),
});

const professionalExperienceCollection = defineCollection({
    type: 'content', // v2.5.0 and later
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