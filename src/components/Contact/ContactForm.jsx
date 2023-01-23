import { useState } from "react";

const ContactUsForm = () => {
    const [lastname, setLastname] = useState('')
    const [firstname, setFirstname] = useState('');
    const [email, setEmail] = useState('');
    const [object, setObject] = useState('');
    const [message, setMessage] = useState('');

    return (
        <article>
            <form className="contact_form">
                <span className="blog_article_deco"></span>
                <div className="contact_form_container">
                    <label htmlFor="lastname" className="contact_form_label"></label>
                        <input 
                            type='text' 
                            name='lastname'
                            id="lastname"
                            placeholder="Votre nom"
                            className="contact_form_input"
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                            required
                        />
                    
                    <label htmlFor="firstname" className="contact_form_label"></label>
                        <input 
                            type='text' 
                            name='firstname'
                            id="firstname"
                            placeholder="Votre prénom"
                            className="contact_form_input"
                            value={firstname}
                            onChange={(e) => setFirstname(e.target.value)}
                            required
                        />
                    
                    <label htmlFor="email" className="contact_form_label"></label>
                        <input 
                            type='email' 
                            name='email'
                            id="email"
                            placeholder="Email"
                            className="contact_form_input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                    <label htmlFor="object" className="contact_form_label"></label>
                        <input 
                            type='text' 
                            name='object'
                            id="object"
                            placeholder="Objet"
                            className="contact_form_input"
                            value={object}
                            onChange={(e) => setObject(e.target.value)}
                            required
                        />
                    
                    <label htmlFor="message" className="contact_form_label"></label>
                        <textarea
                            name="message"
                            id="message"
                            rows='4' cols='100'
                            placeholder="Votre message..."
                            className="contact_form_input contact_form_input_message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        />
                    <button className="contact_form_btn">Envoyer</button>
                </div>
            </form>
        </article>
    )
}

export default ContactUsForm