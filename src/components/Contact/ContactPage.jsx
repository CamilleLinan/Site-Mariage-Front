import ContactForm from "./ContactForm"
import ContactIntro from "./ContactIntro"

const ContactPage = () => {
    return (
        <section className="contact">
            <ContactIntro />
            <ContactForm />
        </section>
    )
}

export default ContactPage