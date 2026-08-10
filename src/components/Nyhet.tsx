import Section from "./section/Section"
import SectionLayout from "./section/SectionLayout"
import SectionTitle from "./section/SectionTitle"
import SectionSmallTitle from "./section/SectionSmallTitle"
import Text from "./Text"
import Image from "next/image"
import { getPublicationDate } from "@/lib/utils";

type NyhetBlock = {
    rubrik?: string;
    bild?: {
        filename?: string;
        alt?: string;
    };
    text?: string;
    published_at?: string | Date | null;
    [key: string]: unknown;
};

export default function Nyhet({ blok }: { blok?: NyhetBlock }) {

    const { rubrik = "", bild, text = "" } = blok ?? {};
    const publicationDate = getPublicationDate(blok);

    return (
        <Section>
            <article className="">
                <SectionLayout>
                    <div>
                        {publicationDate ? (
                            <SectionSmallTitle>
                                {publicationDate}
                            </SectionSmallTitle>
                        ) : null }
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
