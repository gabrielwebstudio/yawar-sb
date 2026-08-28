import Card from "../card/Card";
import { Phone, Mail } from "lucide-react"
import { FaInstagram } from "react-icons/fa";

export default function ContactCards({ blok }) {
  const { telefonnummer, mail, instagram } = blok || {};

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-20">
      {mail ? <ContactCard value={mail} title="email" /> : null}
      {/* {telefonnummer ? <ContactCard value={telefonnummer} title="telefon" /> : null} */}
      {instagram ? <ContactCard value={instagram} title="instagram" /> : null}
    </div>
  )
}

export function ContactCard({ title, value }) {

  const iconMap = {
    telefon: Phone,
    email: Mail,
    instagram: FaInstagram,
  }

  const hrefMap = {
    email: `mailto:${value}`,
    telefon: `tel:${value}`,
    instagram: `https://instagram.com/${value}`,
  }

  const href = hrefMap[title]

  const Icon = iconMap[title];

  if (!value || !Icon || !href) {
    return null;
  }

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
