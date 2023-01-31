import axios from "axios";
import { useState } from "react";

const ContactUsForm = ({ propUserData, propAuth }) => {
    const [object, setObject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        await axios({
            method: 'POST',
            url: `http://localhost:5000/api/messages`,
            headers: {
                Authorization: `Bearer ${propAuth}`,
            },
            data: {
                lastname: propUserData.lastname,
                firstname: propUserData.firstname,
                email: propUserData.email,
                object: object,
                message: message
            }
        })
            .then(res => {
                console.log(res);
                alert('Message envoyé avec succès');
            })
            .catch(err => {
                console.log(err);
                alert('Erreur lors de l\'envoi du message');
            });
    }

    return (
        <article>
            <form className="contact_form" onSubmit={handleSubmit}>
                <span className="blog_article_deco blog_article_deco_top"></span>
                <div className="contact_form_container">
                    <label htmlFor="lastname" className="contact_form_label"></label>
                        <input 
                            type='text' 
                            name='lastname'
                            id="lastname"
                            className="contact_form_input"
                            defaultValue={propUserData.lastname}
                            required
                        />
                    
                    <label htmlFor="firstname" className="contact_form_label"></label>
                        <input 
                            type='text' 
                            name='firstname'
                            id="firstname"
                            className="contact_form_input"
                            defaultValue={propUserData.firstname}
                            required
                        />
                    
                    <label htmlFor="email" className="contact_form_label"></label>
                        <input 
                            type='email' 
                            name='email'
                            id="email"
                            className="contact_form_input"
                            defaultValue={propUserData.email}
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
                <span className="blog_article_deco blog_article_deco_bottom"></span>
            </form>
        </article>
    )
}

export default ContactUsForm