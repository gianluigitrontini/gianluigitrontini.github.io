// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

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
        hasCoverImage: z.boolean(),
        hidden: z.boolean()
    }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
    'progetti': progettiCollection,
};