import Section from "@/components/section/Section"
import Text from "./Text"
import SectionLayout from "@/components/section/SectionLayout"
import SectionTitle from "@/components/section/SectionTitle"
import SectionSmallTitle from "@/components/section/SectionSmallTitle"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { notFound } from "next/navigation"


export default async function Dans({ blok }: {blok: any}) {
console.log("dansblok", blok);
const {bild, namn, egenskaper, beskrivning} = blok;

  return (

      <Section>
        <SectionLayout>
          <div>
            <SectionSmallTitle>
              dans
            </SectionSmallTitle>
            <SectionTitle>
              {namn}
            </SectionTitle>
            <Text>
             {beskrivning}
            </Text>
            <div className="flex flex-wrap gap-2 my-6">
              {egenskaper.map((p, i) => (
                <span
                  key={i}
                  className="inline-flex w-fit items-center justify-center whitespace-nowrap rounded-full border border-primary bg-card px-3 py-1 text-xs font-medium text-subheading"
                >
                  {p}
                </span>
              ))}
            </div>
            <Link
              href={"/kontakt"}
              className="rounded-full bg-linear-to-b from-primary/60 to-primary px-6 py-3 font-medium text-primary-foreground transition-opacity hover:opacity-90 inline-flex items-center gap-2 mt-4"
            >
              Bokningsförfrågan
              <ArrowRight className="w-4 h-4" />
            </Link>

          </div>
          <div>
            <Image
              src={bild.filename}
              alt={bild.alt}
              className="w-full h-125 object-cover rounded-sm"
              loading="lazy"
              width={800}
              height={600}
            />
          </div>
        </SectionLayout>
      </Section>
  )
}
