import ContactCard from "./ContactCard"

export default function ContactCards({ blok }) {
  const { telefonnummer, mail, instagram } = blok;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
      <ContactCard contact={telefonnummer} />
      <ContactCard contact={mail} />
      <ContactCard contact={instagram} />
    </div>
  )
}
