import Section from "@/components/section/Section";
import SectionHeader from "@/components/section/SectionHeader";
import SectionTitle from "@/components/section/SectionTitle";
import SectionSmallTitle from "@/components/section/SectionSmallTitle";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import CardMotion from "@/components/motions/CardMotion";

export default function DanserStart({ blok }: { blok: any }) {
    const { titel, liten_titel, danser } = blok;

    return (
        <Section className={"bg-card border-t"}>
            <SectionHeader variant="left">
                <SectionSmallTitle>
                    {liten_titel}
                </SectionSmallTitle>
                <SectionTitle>
                    {titel}
                </SectionTitle>
            </SectionHeader>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {danser.slice(0, 3).map((d: any, i: number) => (

                    <CardMotion i={i} key={d.uuid}>
                        <Link href={d.full_slug} className="group block">
                            <div className="overflow-hidden rounded-sm mb-4">
                                <Image src={d.content.bild.filename} alt={d.content.bild.alt} loading="lazy" width={800} height={600} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors ">{d.content.namn}</h3>
                            <p className="text-sm text-muted-foreground line-clamp-1">{d.content.beskrivning}</p>
                        </Link>
                    </CardMotion>
                )
                )}
            </div>
            <div className="text-center mt-12">
                <Link href="/danser" className="text-primary text-sm font-medium hover:underline inline-flex items-center gap-1">
                    Se alla danser <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </Section>
    )
}
