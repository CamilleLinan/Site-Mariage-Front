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
                Authorization: `Bearer ${propAuth.token}`,
            },
            data: {
                posterId: propAuth.userId,
                object: object,
                message: message
            }
        })
            .then(res => {
                alert('Message envoyé avec succès');
                window.location.reload()
            })
            .catch(err => {
                alert('Erreur lors de l\'envoi du message');
            });
    }

    return (
        <article>
            <form className="contact_form" onSubmit={handleSubmit}>
                <span className="blog_article_deco blog_article_deco_top"></span>
                <div className="contact_form_container">
                    <div className="contact_form_intro">
                        <h3 className="contact_form_intro_title">Vos informations :</h3>
                        <p className="contact_form_intro_content">{propUserData.lastname} {propUserData.firstname}</p>
                        <p className="contact_form_intro_content">{propUserData.email}</p>
                    </div>
                    <label htmlFor="object" className="contact_form_label"></label>
                        <input 
                            type='text' 
                            name='object'
                            id="object"
                            placeholder="Objet"
                            className="pages_input contact_form_input"
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
                            className="pages_input_textarea contact_form_input contact_form_input_message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        />
                    <button className="pages_button contact_form_btn">Envoyer</button>
                </div>
                <span className="blog_article_deco blog_article_deco_bottom"></span>
            </form>
        </article>
    )
}

export default ContactUsForm