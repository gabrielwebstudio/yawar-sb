"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import {cn} from "@/lib/utils";
import Logo from "./Logo";

type NavbarProps = {
    dances: { label: string; href: string }[]
}

const Navbar = ({ dances = [] } : NavbarProps) => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    const toggleDropdown = (name: string) => {
        setOpenDropdown(openDropdown === name ? null : name);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
            <div className="container mx-auto px-6 flex items-center justify-between h-20 md:h-30">

                <Logo />


                {/* Desktop nav */}
                <div className="hidden lg:flex items-center gap-8">
                    <Link href="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Hem</Link>

                    {/* Dances dropdown */}
                    <div className="relative group">
                        <Link
                            href="/danser"
                            className="text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1"
                        >
                            Våra Danser <ChevronDown className="w-3 h-3" />
                        </Link>
                        <div
                            className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                        >
                            <div className="bg-card border border-border rounded-md py-2 min-w-[200px] shadow-xl">
                                {dances.map((d) => (
                                    <Link key={d.href} href={d.href} className="block px-4 py-2 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors">
                                        {d.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    <Link href="/nyheter" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Nyheter</Link>

                    <Link href="/om" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Om oss</Link>
                    <Link href="/kontakt" className="text-sm font-medium bg-primary text-primary-foreground px-5 py-2 rounded-sm hover:opacity-90 transition-opacity">Kontakt</Link>
                </div>

                {/* Mobile toggle */}
                <button className="lg:hidden text-foreground cursor-pointer" onClick={() => setMobileOpen(true)}>
                    <Menu className="w-6 h-6" />
                </button>
            </div>

            {/* Mobile menu - Sheet sliding from right */}
            <div
                className={cn(mobileOpen ? "absolute h-screen inset-0 bg-background/80" : "")}
                onClick={() => setMobileOpen(false)}
            />
            <div className={cn("absolute right-0 top-0 w-[300px] z-9 h-screen bg-background transition-transform duration-300 border-l border-border p-0 ", mobileOpen ? "translate-x-0" : "translate-x-full")}>
                <button className="absolute top-4 right-4 text-foreground cursor-pointer" onClick={() => setMobileOpen(false)}>
                    <X className="w-4 h-4" />
                </button>
                <h3 className="sr-only">Meny</h3>
                <div className="px-6 py-6 space-y-1">
                    <div className="flex items-center justify-between mb-6">
                        <span className="font-display text-lg font-medium text-primary">Meny</span>
                    </div>

                    <Link href="/" onClick={() => setMobileOpen(false)} className="block py-3 text-foreground font-medium border-b border-border/50">
                        Start
                    </Link>

                    <div className="border-b border-border/50">
                        <button onClick={() => toggleDropdown("d-dances")} className="w-full flex items-center justify-between py-3 text-foreground font-medium">
                            Danser <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openDropdown === "d-dances" ? "rotate-180" : ""}`} />
                        </button>
                        {openDropdown === "d-dances" && (
                            <div className="pb-2 space-y-1">
                                <Link href="/danser" onClick={() => setMobileOpen(false)} className="block py-2 pl-4 text-sm text-primary font-medium">
                                    Alla danser
                                </Link>
                                {dances.map((d) => (
                                    <Link key={d.href} href={d.href} onClick={() => setMobileOpen(false)} className="block py-2 pl-4 text-sm text-muted-foreground hover:text-primary transition-colors">
                                        {d.label}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    <Link href="/om" onClick={() => setMobileOpen(false)} className="block py-3 text-foreground font-medium border-b border-border/50">
                        Nyheter
                    </Link>

                    <Link href="/om" onClick={() => setMobileOpen(false)} className="block py-3 text-foreground font-medium border-b border-border/50">
                        Om oss
                    </Link>

                    <div className="pt-4">
                        <Link href="/kontakt" onClick={() => setMobileOpen(false)} className="block text-center bg-primary text-primary-foreground px-5 py-3 rounded-sm font-medium hover:opacity-90 transition-opacity">
                            Kontakt
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
