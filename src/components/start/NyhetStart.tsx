import Section from "@/components/section/Section";
import SectionHeader from "@/components/section/SectionHeader";
import SectionTitle from "@/components/section/SectionTitle";
import SectionSmallTitle from "@/components/section/SectionSmallTitle";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import CardMotion from "@/components/motions/CardMotion";

export default function NyhetStart({ blok }: { blok: any }) {

    return (
        <Section className={"bg-card border-t"}>
            <SectionHeader variant="left">
                <SectionSmallTitle>
                    Nyheter
                </SectionSmallTitle>
                <SectionTitle>
                    Senaste nyheten
                </SectionTitle>
            </SectionHeader>

            <div className="text-center mt-12">
                <Link href="/nyheter" className="text-primary text-sm font-medium hover:underline inline-flex items-center gap-1">
                    Se alla nyheter <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </Section>
    )
}
