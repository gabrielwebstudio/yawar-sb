import { Dispatch, SetStateAction } from "react";
import { cn } from "@/lib/utils";
type LightboxProps = {
    lightboxOpen: boolean,
    setLightboxOpen: Dispatch<SetStateAction<boolean>>,
}

export default function Lightbox({ lightboxOpen, setLightboxOpen }: LightboxProps) {
    return (
        <div className="relative">
            <div
                className={cn(
                    "fixed inset-0 z-50 bg-background/80",
                    lightboxOpen
                        ? "pointer-events-auto opacity-100"
                        : "pointer-events-none opacity-0"
                )}
                onClick={() => setLightboxOpen(false)}
            />
        </div>
    )
}