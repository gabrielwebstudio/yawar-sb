"use client";
import Section from "@/components/section/Section";
import SectionHeader from "@/components/section/SectionHeader";
import SectionTitle from "@/components/section/SectionTitle";
import SectionSmallTitle from "@/components/section/SectionSmallTitle";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import Lightbox from "../Lightbox";

export default function ImageGallery({ blok }: any) {

    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);


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
                {blok.bilder.map((p: any, i: number) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08 }}
                        className={`group cursor-pointer relative overflow-hidden rounded-sm ${p.span}`}
                        onClick={() => {
                            setCurrentIndex(i);
                            setLightboxOpen(true);
                        }}
                    >
                        <Image
                            src={p.filename}
                            alt={p.alt}
                            loading="lazy"
                            width={300}
                            height={300}
                            className="w-full h-full min-h-50 object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                            
                        />
                       
                    </motion.div>
                ))}
            </div>

            <Lightbox 
                lightboxOpen={lightboxOpen} 
                setLightboxOpen={setLightboxOpen}
                images={blok.bilder}
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
            />
        </Section>
    )
}

