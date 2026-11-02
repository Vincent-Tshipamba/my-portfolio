import ContactForm from "@/components/ContactForm"
import './page.module.css'

export const metadata = {
    title: 'Contact Vincent | Portfolio',
    description: 'Découvrez mes projets de développement web : applications React, sites Next.js et plus encore.',
}
export default function Contact() {
    return (
        <ContactForm />
    )
}