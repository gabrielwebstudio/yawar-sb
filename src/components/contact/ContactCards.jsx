import Card from "../card/Card";
import { Phone, Mail, Camera } from "lucide-react"

export default function ContactCards({ blok }) {
  const { telefonnummer, mail, instagram } = blok;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
      <ContactCard value={mail} title="email" />
      <ContactCard value={telefonnummer} title="telefon" />
      <ContactCard value={instagram} title="instagram" />
    </div>
  )
}

export function ContactCard({ title, value }) {

  const iconMap = {
    telefon: Phone,
    email: Mail,
    instagram: Camera,
  }

  const hrefMap = {
    email: `mailto:${value}`,
    telefon: `tel:${value}`,
    instagram: `https://instagram.com/${value}`,
  }

  const href = hrefMap[title]

  const Icon = iconMap[title];

  return (
    <a
      href={href}
      target={title === "instagram" ? "_blank" : undefined}
      rel={title === "instagram" ? "noopener noreferrer" : undefined}
    >
      <Card variant={"default"} className={"p-6"}>
        <Icon className="w-6 h-6 text-primary mb-4" />
        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{title}</p>
        <p className="text-sm font-medium group-hover:text-primary transition-colors">{value}</p>
      </Card>
    </a>
  )
}
