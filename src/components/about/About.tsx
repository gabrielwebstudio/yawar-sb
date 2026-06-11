
import Image from "next/image"
import Link from "next/link"
import Section from "@/components/section/Section"
import { richTextResolver } from "@storyblok/richtext";

export default function About({ blok }: { blok: any }) {

    const { titel, text, antal_danser, years, bild } = blok;
    const { render } = richTextResolver();

    return (
        <Section>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <p className="text-primary text-sm font-medium uppercase tracking-widest mb-3">Om oss</p>
                    <h1 className="text-4xl md:text-5xl font-semibold mb-6">{titel}</h1>

                   
                    <div className="text-muted-foreground leading-relaxed mb-6 flex flex-col gap-2" dangerouslySetInnerHTML={{ __html: render(text)! }}>
                    </div>

                    <div className="grid grid-cols-3 gap-6 mt-10">
                        <div>
                            <p className="text-3xl font-semibold text-primary">{years}+</p>
                            <p className="text-sm text-muted-foreground">År i branschen</p>
                        </div>
                        <div>
                            <p className="text-3xl font-semibold text-primary">{antal_danser}+</p>
                            <p className="text-sm text-muted-foreground">Uppträdanden</p>
                        </div>

                    </div>
                </div>


                <Image
                    src={bild.filename}
                    alt="Vårt team"
                    className="w-full h-[500px] object-cover rounded-sm"
                    loading="eager"
                    width={1200}
                    height={600}
                />


            </div>
        </Section>
    )
}
