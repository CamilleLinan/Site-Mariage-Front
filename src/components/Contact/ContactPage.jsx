import ContactForm from "./ContactForm"
import ContactIntro from "./ContactIntro"

const ContactPage = () => {
    return (
        <div className="container_contact">
            <section className="contact">
                <ContactIntro />
                <ContactForm />
            </section>
        </div>
    )
}

export default ContactPage