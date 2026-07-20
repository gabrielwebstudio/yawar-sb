import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { getStoryblokApi } from "@/lib/storyblok";
import Layout from "@/components/Layout";
import Section from "@/components/section/Section";
import SectionHeader from "@/components/section/SectionHeader";
import SectionTitle from "@/components/section/SectionTitle";
import SectionSmallTitle from "@/components/section/SectionSmallTitle";
import SectionSubtitle from "@/components/section/SectionSubtitle"
import { notFound } from "next/navigation";
import CardMotion from "@/components/motions/CardMotion";


const storyVersion =
    process.env.VERCEL_ENV === "production" ? "published" : "draft";


export default async function page() {


    const storyblokApi = getStoryblokApi();

    const { data } = await storyblokApi.get("cdn/stories", {
        version: storyVersion,
        starts_with: "danser/",

    });

    const dances = [...(data?.stories ?? [])].sort((a: any, b: any) => (a?.name ?? "").localeCompare(b?.name ?? "", "sv"));


    return (
        <Layout>
            <Section>
                <SectionHeader variant="center">
                    <SectionSmallTitle>
                        våra danser
                    </SectionSmallTitle>
                    <SectionTitle variant="h1">
                        Danser
                    </SectionTitle>
                    <SectionSubtitle>
                        Vi erbjuder många danser som passar till olika tillställningar
                    </SectionSubtitle>
                </SectionHeader>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {dances.map((d: any, i: number) => (
                        d?.full_slug ? (
                            <CardMotion i={i} key={d?.uuid ?? i}>

                                <Link href={`/${d.full_slug}`} className="group block">
                                    <div className="overflow-hidden rounded-sm mb-4">
                                        {d?.content?.bild?.filename ? (
                                            <img src={d.content.bild.filename} alt={d.content.bild.alt || d?.content?.namn || "dans"} loading="lazy" width={800} height={600} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
                                        ) : null}
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{d?.content?.namn ?? ""}</h3>
                                    <span className="text-primary text-sm font-medium inline-flex items-center gap-1">
                                        Läs mer <ArrowRight className="w-3 h-3" />
                                    </span>
                                </Link>
                            </CardMotion>
                        ) : null
                    ))}
                </div>
            </Section>
        </Layout>
    );
}