import Link from "next/link";
import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube, FaTiktok } from "react-icons/fa";
import SectionTitle from "./section/SectionTitle";
import SectionSmallTitle from "./section/SectionSmallTitle";

export default function SocialMediaBanner() {
    return (
        <>
            <section className="py-24 bg-card border-t border-border">
                <div className="container mx-auto px-6 flex flex-col items-center">
                    <SectionSmallTitle>
                        sociala medier
                    </SectionSmallTitle>
                    <SectionTitle className="text-center">
                        Följ oss på våra sociala medier
                    </SectionTitle>
                    <h2 className="text-3xl md:text-4xl font-semibold mb-6"></h2>
                    <SocialMedias />
                </div>
            </section>
        </>
    )
}


function SocialMedias() {
    return (

        <div className="grid grid-cols-4 gap-4 ">
            <Link
                href={`https://instagram.com/boliviayawarmallku`}
                target="_blank"
                className="group flex h-10 w-10 items-center justify-center rounded-full hover:bg-primary hover:text-background transition-colors bg-primary/10 text-primary"
                aria-label="Yawar Mallku på instagram"
            >
                <FaInstagram className="w-8 h-8 shrink-0 " />

            </Link>
            <Link
                href={`https://www.facebook.com/p/Bolivia-Yawar-Mallku-100064728547532/`}
                target="_blank"
                className="group flex h-10 w-10 items-center justify-center rounded-full hover:bg-primary hover:text-background transition-colors bg-primary/10 text-primary"
                aria-label="Yawar Mallku på facebook"
            >
                <FaFacebook className="w-8 h-8 shrink-0" />
            </Link>
            {/* <Link
                    href={`https://instagram.com/boliviayawarmallku}`}
                    target="_blank"
                    className="group flex h-10 w-10 items-center justify-center rounded-full hover:bg-primary hover:text-background transition-colors bg-primary/10 text-primary"
                >
                    <FaLinkedin />
                </Link> */}
            <Link
                href={`https://youtube.com/@Yawar_Mallku?cbrd=1`}
                target="_blank"
                className="group flex h-10 w-10 items-center justify-center rounded-full hover:bg-primary hover:text-background transition-colors bg-primary/10 text-primary"
                aria-label="Yawar Mallku på youtube"
            >
                <FaYoutube className="w-8 h-8 shrink-0" />
            </Link>
            <Link
                href={`https://www.tiktok.com/@boliviayawarmallku`}
                target="_blank"
                className="group flex h-10 w-10 items-center justify-center rounded-full hover:bg-primary hover:text-background transition-colors bg-primary/10 text-primary"
                aria-label="Yawar Mallku på tiktok"
            >
                <FaTiktok className="w-8 h-8 shrink-0" />
            </Link>
        </div>
    )
}