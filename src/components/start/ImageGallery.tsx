"use client";
import Section from "@/components/section/Section";
import SectionHeader from "@/components/section/SectionHeader";
import SectionTitle from "@/components/section/SectionTitle";
import SectionSmallTitle from "@/components/section/SectionSmallTitle";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ImageGallery({blok} : any) {

    return (
        <Section className={"border-t"}>
            <SectionHeader variant="center">
                <SectionSmallTitle>
                    galleri
                </SectionSmallTitle>
                <SectionTitle>
                    Bilder från tillställningar
                </SectionTitle>
               
            </SectionHeader>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 max-w-6xl mx-auto">
                {blok.bilder.map((p : any, i : number) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08 }}
                        className={`group relative overflow-hidden rounded-sm ${p.span}`}
                    >
                        <Image 
                            src={p.filename} 
                            alt={p.alt} 
                            loading="lazy" 
                            width={300}
                            height={300}
                            className="w-full h-full min-h-50 object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer" />
                        <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                            <span className="text-sm font-medium text-foreground">{p.name}</span>
                        </div>
                    </motion.div>
                ))}
            </div>

        </Section>
    )
}

