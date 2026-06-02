import { cache } from "react";
import { getStoryblokApi } from "@/lib/storyblok";

const version = process.env.VERCEL_ENV === "production" ? "published" : "draft";

export const getCatalogData = cache(async () => {
    try {
        const storyblokApi = getStoryblokApi();

        const { data } = await storyblokApi.get("cdn/stories/danser", {
            version,
            resolve_relations: ["danser_showcase.danser"],
        });

        const dances = data.story?.content?.body?.[0]?.danser || [];
        const sortedDances = [...dances].sort((a, b) => a.name.localeCompare(b.name, "sv"));

        const dancesLinks = sortedDances.map((m) => ({
            label: m.name,
            href: `/danser/${m.slug}`,
        }));

        return {
            dances: sortedDances,
            dancesLinks,
        };
    } catch {
        return {
            dances: [],
            dancesLinks: [],
        };
    }
});