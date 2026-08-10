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

function injectPublicationDates(story: Record<string, unknown> | null | undefined) {
    const publicationDate = story?.published_at
        ?? story?.first_published_at
        ?? story?.created_at
        ?? null;

    if (!publicationDate || !story?.content) {
        return story;
    }

    const visit = (node: unknown): unknown => {
        if (!node || typeof node !== "object") {
            return node;
        }

        const nextNode = { ...(node as Record<string, unknown>) };

        if (!("published_at" in nextNode)) {
            nextNode.published_at = publicationDate;
        }

        const body = nextNode.body;
        if (Array.isArray(body)) {
            nextNode.body = body.map((child: unknown) => visit(child));
        }

        const content = nextNode.content;
        if (content && typeof content === "object") {
            nextNode.content = visit(content);
        }

        return nextNode;
    };

    return visit(story);
}

export default async function Page({ params }: PageProps) {

    const { slug } = await params;
    const fullSlug = slug ? slug.join("/") : "hem";



    let storyWithPublicationDates: Record<string, unknown> | null = null;

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

        storyWithPublicationDates = injectPublicationDates(data.story) as Record<string, unknown> | null;

    } catch {
        notFound();
    }

    if (!storyWithPublicationDates) {
        notFound();
    }

    if (fullSlug === "hem") {
        return (
            <StoryblokStory story={storyWithPublicationDates} />
        )

    }

    return (
        <Layout>
            <StoryblokStory story={storyWithPublicationDates} />
        </Layout>
    )
}