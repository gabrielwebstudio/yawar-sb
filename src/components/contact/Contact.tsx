import ContactCards from "@/components/contact/ContactCards"
import ContactForm from "@/components/contact/ContactForm"
import Section from "@/components/section/Section"
import SectionHeader from "@/components/section/SectionHeader"
import SectionSmallTitle from "@/components/section/SectionSmallTitle"
import SectionTitle from "@/components/section/SectionTitle"
export default function Contact({blok}: {blok: any}) {
    return (
            <Section>
                <SectionHeader variant="center">
                    <SectionSmallTitle>
                        Kontakt
                    </SectionSmallTitle>
                    <SectionTitle variant="h1">
                        Hör av dig
                    </SectionTitle>
                </SectionHeader>
                <ContactCards blok={blok}/>
                <ContactForm />

            </Section>

    )
}
