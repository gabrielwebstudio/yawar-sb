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
import { renderRichText } from "@storyblok/react";
import Text from "@/components/Text";

const storyVersion =
    process.env.VERCEL_ENV === "production" ? "published" : "draft";

const PER_PAGE = 9;

type Props = {
    searchParams: Promise<{
        page?: string;
    }>;
};

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

    const totalStories = Number((headers as any)?.total ?? news.length);
    const totalPages = Math.ceil(totalStories / PER_PAGE);

    if (currentPage > totalPages || currentPage == 0) return notFound();

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

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {news.map((n: any) => (
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

                                <Text>
                                    {n?.content?.text ?? ""}
                                </Text>

                                <span className="text-primary text-sm font-medium inline-flex items-center gap-1">
                                    Läs mer <ArrowRight className="w-3 h-3" />
                                </span>
                            </Link>
                        ) : null
                    ))}
                </div>

                <div className="flex justify-center gap-2 mt-12">
                    {currentPage !== 1 &&
                        <Link href={`/nyheter?page=${currentPage - 1}`}>
                            <ArrowLeft />
                        </Link>
                    }
                    <span>
                        {currentPage}
                    </span>
                    {currentPage !== totalPages &&
                        <Link href={`/nyheter?page=${currentPage + 1}`}>
                            <ArrowRight />
                        </Link>
                    }
                </div>
            </Section>
        </Layout>
    );
}