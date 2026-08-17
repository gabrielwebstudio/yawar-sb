import { getStoryblokApi } from '@/lib/storyblok'

export default async function sitemap() {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
    const storyblokApi = getStoryblokApi()

    const { data } = await storyblokApi.get('cdn/stories', {
        version: process.env.VERCEL_ENV === 'production' ? 'published' : 'draft',
        per_page: 100,
    })

    console.log("stories", data.stories);

    const stories = (data.stories || []).filter((story) => {
        return story.content?.component === 'page' || story.content?.component === 'dans'
    }).filter((story) => story.name !== 'footer');

    return stories.map((story) => ({
        url: story.full_slug === 'hem'
            ? baseUrl
            : `${baseUrl}/${story.full_slug}`,
        lastModified: story.published_at || story.updated_at,
    }))
}