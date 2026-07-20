import Section from "./section/Section"
import SectionLayout from "./section/SectionLayout"
import SectionSmallTitle from "./section/SectionSmallTitle"
import SectionTitle from "./section/SectionTitle"
import Text from "./Text"
import Image from "next/image"
import { renderRichText } from "@storyblok/react";


export default function Nyhet({ blok }: { blok: any }) {
    console.log("nyhetblok:", blok);

    const { rubrik = "", bild, text = "" } = blok ?? {};

    return (
        <Section>
            <article className="">
                <SectionLayout>
                    <div>
                        <SectionSmallTitle>
                            test
                        </SectionSmallTitle>
                        <SectionTitle>
                            {rubrik}
                        </SectionTitle>
                        <Text>
                            {text ?? ""}
                        </Text>
                    </div>
                    <div>
                        {bild?.filename && (
                            <Image
                                src={bild.filename}
                                alt={bild.alt || rubrik || "image"}
                                className="w-full h-125 object-cover rounded-sm"
                                loading="lazy"
                                width={800}
                                height={600}
                            />
                        )}
                    </div>
                </SectionLayout>
            </article>
        </Section>
    )
}
