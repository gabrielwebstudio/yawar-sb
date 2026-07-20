import { cache } from "react";
import { getStoryblokApi } from "@/lib/storyblok";

const version = process.env.VERCEL_ENV === "production" ? "published" : "draft";

export const getCatalogData = cache(async () => {
    try {
        const storyblokApi = getStoryblokApi();

        const { data } = await storyblokApi.get("cdn/stories", {
            version,
            starts_with: "danser/",
        });

        const dances = data.stories
            .filter((story: any) => story.slug !== "danser")
            .sort((a: any, b: any) => a.name.localeCompare(b.name, "sv"));


        const dancesLinks = dances.map((dance: any) => ({
            label: dance.name,
            href: `/danser/${dance.slug}`,
        }));

        return {
            dances,
            dancesLinks,
        };
    } catch {
        return {
            dances: [],
            dancesLinks: [],
        };
    }
});

export const getFooter = cache(async () => {
    try {
        const storyblokApi = getStoryblokApi();

        const { data } = await storyblokApi.get("cdn/stories/footer", {
            version,
        });

        const footer = data.story?.content?.body?.[0] || null;

        return footer;
    } catch {
        return null;
    }
})