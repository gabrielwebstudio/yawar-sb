import Section from "@/components/section/Section";
import SectionHeader from "@/components/section/SectionHeader";
import SectionTitle from "@/components/section/SectionTitle";
import SectionSmallTitle from "@/components/section/SectionSmallTitle";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { getStoryblokApi } from "@/lib/storyblok";
import Text from "@/components/Text";
import { getPublicationDate } from "@/lib/utils";

type NewsStory = {
    full_slug?: string;
    uuid?: string;
    content?: {
        rubrik?: string;
        text?: string;
        bild?: {
            filename?: string;
            alt?: string;
        };
    };
    published_at?: string | Date | null;
    created_at?: string | Date | null;
    first_published_at?: string | Date | null;
    date?: string | Date | null;
    [key: string]: unknown;
};

const storyVersion = process.env.VERCEL_ENV === "production" ? "published" : "draft";

export default async function NyhetStart() {
    const storyblokApi = getStoryblokApi();

    const { data } = await storyblokApi.get("cdn/stories", {
        version: storyVersion,
        starts_with: "nyheter/",
        sort_by: "published_at:desc",
        per_page: 3,
    });

    const news = data?.stories ?? []


    return (
        <Section className={"bg-card border-t"}>
            <SectionHeader variant="left">
                <SectionSmallTitle>
                    Nyheter
                </SectionSmallTitle>
                <SectionTitle>
                    Senaste nyheterna
                </SectionTitle>
            </SectionHeader>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {news.map((n: NewsStory) => (
                    n?.full_slug ? (
                        <Link
                            key={n?.uuid ?? n?.full_slug}
                            href={`/${n.full_slug}`}
                            className="group block"
                        >
                            <div className="overflow-hidden rounded-sm mb-4">
                                {n?.content?.bild?.filename ? (
                                    <Image
                                        src={n.content.bild.filename}
                                        alt={n.content.bild.alt || n?.content?.rubrik || "nyhet"}
                                        width={800}
                                        height={600}
                                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                ) : null}
                            </div>

                            <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                                {n?.content?.rubrik ?? ""}
                            </h2>

                            {(() => {
                                const publicationDate = getPublicationDate(n);

                                return publicationDate ? (
                                    <p className="mb-3 text-sm text-muted-foreground">
                                        {publicationDate}
                                    </p>
                                ) : null;
                            })()}

                          
                            <span className="text-primary text-sm font-medium inline-flex items-center gap-1">
                                Läs mer <ArrowRight className="w-3 h-3" />
                            </span>
                        </Link>
                    ) : null
                ))}
            </div>


            <div className="mt-8 text-center">
                <Link href="/nyheter" className="text-primary text-sm font-medium hover:underline inline-flex items-center gap-1">
                    Se alla nyheter <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </Section>
    )
}
