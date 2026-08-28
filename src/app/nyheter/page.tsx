import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { getStoryblokApi } from "@/lib/storyblok";
import Layout from "@/components/Layout";
import Section from "@/components/section/Section";
import SectionHeader from "@/components/section/SectionHeader";
import SectionTitle from "@/components/section/SectionTitle";
import SectionSmallTitle from "@/components/section/SectionSmallTitle";
import { notFound } from "next/navigation";
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

const storyVersion =
    process.env.VERCEL_ENV === "production" ? "published" : "draft";



const PER_PAGE = 9;

type Props = {
    searchParams: Promise<{
        page?: string;
    }>;
};

export async function generateMetadata({ params }: any) {

    let title = "Nyheter | Bolivia Yawar Mallku";
    let description = "Våra nyheter";
    let image = "https://a.storyblok.com/f/292901700022302/4564x4466/c6a37c283f/logo_svart.svg";
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";


    return {
        title,
        description,
        alternates: {
            canonical: `${baseUrl}/nyheter`,
        },
        openGraph: {
            title,
            description,
            images: image ? [image] : [],
        },
    };

}

export default async function NyheterPage({ searchParams }: Props) {
    const { page } = await searchParams;

    const currentPage = Math.max(1, Number(page) || 1);


    const storyblokApi = getStoryblokApi();

    const { data, headers } = await storyblokApi.get("cdn/stories", {
        version: storyVersion,
        starts_with: "nyheter/",
        sort_by: "published_at:desc",
        page: currentPage,
        per_page: PER_PAGE,
    });

    const news = data?.stories ?? [];

    const totalStories = Number((headers as { total?: number | string } | undefined)?.total ?? news.length);
    const totalPages = Math.ceil(totalStories / PER_PAGE);

    if (news.length > 0 && currentPage > totalPages) return notFound();

    return (
        <Layout>
            <Section>
                <SectionHeader variant="center">
                    <SectionSmallTitle>
                        Nyheter
                    </SectionSmallTitle>

                    <SectionTitle variant="h1">
                        Våra nyheter
                    </SectionTitle>
                </SectionHeader>
                {news.length === 0 ? (
                    <p className="text-center text-muted-foreground">
                        Inga nyheter är publicerade än.
                    </p>
                ) : (
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
                )}

                {news.length > 0 &&

                    <nav
                        aria-label="Paginering för nyheter"
                        className="mt-14 flex items-center justify-center"
                    >
                        <div className="flex w-full max-w-md items-center justify-between rounded-full border border-border bg-card px-4 py-3 ">
                            {currentPage > 1 ? (
                                <Link
                                    href={`/nyheter?page=${currentPage - 1}`}
                                    aria-label="Föregående sida"
                                    className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-heading transition hover:border-primary hover:text-primary"
                                >
                                    <ArrowLeft className="h-4 w-4" />

                                </Link>
                            ) : (
                                <span
                                    aria-disabled="true"
                                    className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-muted-foreground opacity-50"
                                >
                                    <ArrowLeft className="h-4 w-4" />

                                </span>
                            )}

                            <span className="rounded-full px-4 py-2 text-sm font-semibold text-heading">
                                Sida {currentPage} av {totalPages}
                            </span>

                            {currentPage < totalPages ? (
                                <Link
                                    href={`/nyheter?page=${currentPage + 1}`}
                                    aria-label="Nästa sida"
                                    className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-heading transition hover:border-primary hover:text-primary"
                                >

                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                            ) : (
                                <span
                                    aria-disabled="true"
                                    className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-muted-foreground opacity-50"
                                >

                                    <ArrowRight className="h-4 w-4" />
                                </span>
                            )}
                        </div>
                    </nav>
                }
            </Section>
        </Layout>
    );
}