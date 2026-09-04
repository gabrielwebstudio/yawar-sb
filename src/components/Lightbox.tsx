"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

type LightboxProps = {
    images: any[];
    currentIndex: number;
    lightboxOpen: boolean;
    setLightboxOpen: Dispatch<SetStateAction<boolean>>;
    setCurrentIndex: Dispatch<SetStateAction<number>>;
};

export default function Lightbox({
    images,
    currentIndex,
    lightboxOpen,
    setLightboxOpen,
    setCurrentIndex,
}: LightboxProps) {

    const [direction, setDirection] = useState(1);

    const currentImage = images[currentIndex];

    const previousImage = () => {
        setDirection(-1);

        setCurrentIndex((currentIndex) =>
            currentIndex === 0
                ? images.length - 1
                : currentIndex - 1
        );
    };

    const nextImage = () => {
        setDirection(1);

        setCurrentIndex((currentIndex) =>
            currentIndex === images.length - 1
                ? 0
                : currentIndex + 1
        );
    };

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0,
        }),

        center: {
            x: 0,
            opacity: 1,
        },

        exit: (direction: number) => ({
            x: direction > 0 ? -300 : 300,
            opacity: 0,
        }),
    };

    return (
        <div
            className={cn(
                "fixed inset-0 z-50 flex items-center justify-center bg-black/90 transition-opacity duration-300",
                lightboxOpen
                    ? "pointer-events-auto opacity-100"
                    : "pointer-events-none opacity-0"
            )}
        >

            {/* Close */}
            <button
                type="button"
                onClick={() => setLightboxOpen(false)}
                className="absolute right-6 top-6 z-50 text-white cursor-pointer"
            >
                <X size={40} />
            </button>


            {/* Previous */}
            <button
                type="button"
                onClick={previousImage}
                className="absolute left-6 top-1/2 z-50 -translate-y-1/2 text-white cursor-pointer bg-black/60 rounded-full"
            >
                <ChevronLeft size={50} />
            </button>


            {/* Image */}
            <div
                className="relative h-[80vh] w-[80vw] overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                <AnimatePresence
                    initial={false}
                    custom={direction}
                    mode="wait"
                >
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            duration: 0.3,
                            ease: "easeInOut",
                        }}
                        className="absolute inset-0"
                    >
                        <Image
                            src={currentImage.filename}
                            alt={currentImage.alt}
                            fill
                            className="object-contain"
                        />
                    </motion.div>
                </AnimatePresence>
            </div>


            {/* Next */}
            <button
                type="button"
                onClick={nextImage}
                className="absolute right-6 top-1/2 z-50 -translate-y-1/2 text-white cursor-pointer bg-black/60 rounded-full"
            >
                <ChevronRight size={50} />
            </button>

        </div>
    );
}