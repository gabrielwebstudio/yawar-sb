import Card from "../card/Card"
import CardIcon from "../card/CardIcon"
import CardTitle from "../card/CardTitle"
import CardText from "../card/CardText"
import Link from "next/link"

import { Phone, Mail, Camera } from "lucide-react"


export default function ContactCard({ contact }) {

    if (!contact) {
        return null;
    }

    const iconMap = {
        telefonnummer: Phone,
        mail: Mail,
        instagram: Camera,
    }

    const Icon = iconMap[contact] || Phone;
    return (
        <Link href={contact.href ?? "#"}>
            <Card variant={"default"} className={"p-6"}>
                <Icon className="w-6 h-6 text-primary mb-4" />
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{contact.title}</p>
                <p className="text-sm font-medium group-hover:text-primary transition-colors">{contact.value}</p>
            </Card>
        </Link>
    )
}
