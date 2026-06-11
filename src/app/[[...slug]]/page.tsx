import { StoryblokStory } from "@storyblok/react/rsc";
import { getStoryblokApi } from "@/lib/storyblok";
import { notFound } from "next/navigation";
import Layout from "@/components/Layout";

const storyVersion = process.env.VERCEL_ENV === "production" ? "published" : "draft";

type PageProps = {
    params: Promise<{
        slug?: string[]
    }>
}

export default async function Page({ params }: PageProps) {

    const { slug } = await params;
    const fullSlug = slug ? slug.join("/") : "hem";

   

    try {

        const storyBlokApi = getStoryblokApi()
        const { data } = await storyBlokApi.get(
            `cdn/stories/${fullSlug}`,
            {
                version: storyVersion,
                resolve_relations: [
                    "danser_start.danser",
                    "danser_showcase.danser",
                    "nyheter_showcase.nyheter",
                ]
            }
        );

        if (!data?.story) {
            notFound();
        }

        if (fullSlug === "hem") {
            return (
                <StoryblokStory story={data.story} />
            )

        }

        return (
            <Layout>
                <StoryblokStory story={data.story} />
            </Layout>
        )

    } catch {
        notFound();
    }
}