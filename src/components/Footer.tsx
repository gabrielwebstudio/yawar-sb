import Link from "next/link";
import { Mail, Phone, Camera } from "lucide-react";

const links = [
    {
        label: "Hem",
        href: "/",
    },
    {
        label: "Våra danser",
        href: "/danser",
    },
    {
        label: "Nyheter",
        href: "/nyheter",
    },
    {
        label: "Om oss",
        href: "/om-oss",
    },
    {
        label: "Kontakt",
        href: "/kontakt",
    },
]


export default function Footer({ blok }: { blok: any }) {
    const footer = blok ?? {};



    return (

        <footer className="border-t border-border bg-card">
            <div className="container mx-auto px-4 py-16">
                <div className="grid gap-12 text-sm md:grid-cols-2 lg:grid-cols-4">
                    <div className="lg:col-span-2">
                        <p className="font-bold">Bolivia Yawar Mallku</p>
                        <p className="mt-4 max-w-md text-body leading-relaxed">
                            {footer?.beskrivning ?? ""}
                        </p>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold uppercase text-heading">Navigation</h3>
                        <ul className="mt-4 space-y-3">
                            {links.map(l => (
                                <li key={l.href}>
                                    <Link
                                        href={l.href}
                                        className="text-sm text-body transition-colors hover:text-primary"
                                    >
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold uppercase text-heading">Kontakt</h3>
                        <ul className="mt-4 flex gap-4">
                            {footer?.mail && (
                                <li>
                                    <Link
                                        href={`mailto:${footer.mail}`}
                                        target="_blank"
                                        className="group flex h-10 w-10 items-center justify-center rounded-full hover:bg-primary hover:text-background transition-colors bg-primary/10 text-primary"
                                    >
                                        <Mail className="h-5 w-5 shrink-0" />
                                    </Link>
                                </li>
                            )}
                            {footer?.telefon && (
                                <li>
                                    <Link
                                        href={`tel:${footer.telefon}`}
                                        target="_blank"
                                        className="group flex h-10 w-10 items-center justify-center rounded-full hover:bg-primary hover:text-background transition-colors bg-primary/10 text-primary"
                                    >
                                        <Phone className="h-5 w-5 shrink-0" />
                                    </Link>
                                </li>
                            )}
                            {footer?.instagram && (
                                <li>
                                    <Link
                                        href={`https://instagram.com/${footer.instagram}`}
                                        target="_blank"
                                        className="group flex h-10 w-10 items-center justify-center rounded-full hover:bg-primary hover:text-background transition-colors bg-primary/10 text-primary"
                                    >
                                        <Camera className="h-5 w-5 shrink-0" />
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>

                <div className="mt-12 border-t border-border pt-6">
                    <p className="text-xs text-subheading">
                        © {new Date().getFullYear()} Bolivia Yawar Mallku. Alla rättigheter förbehållna.
                    </p>
                </div>
            </div>
        </footer>
    )
}