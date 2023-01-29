import axios from "axios";
import { useCallback, useContext, useEffect, useState } from "react";
import AuthContext from "../../context/authContext";

const ContactUsForm = () => {
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const authCtx = useContext(AuthContext);

    const [ userData, setUserData ] = useState([])
    const [ errorServer, setErrorServer ] = useState('')

    const getUserData = useCallback(async () => {
        await axios({
            method: 'GET',
            url: `http://localhost:5000/api/users/${authCtx.userId}`,
            headers: {
                Authorization: `Bearer ${authCtx.token}`,
            }
        })
            .then((res) => { setUserData(res.data) })
            .catch(() => {
                setErrorServer({ ...errorServer, message: 'Une erreur interne est survenue. Merci de revenir plus tard.' });
            });
    },[authCtx.token, authCtx.userId, errorServer]);

    useEffect(() => {
        getUserData();
    }, [getUserData])

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        await axios({
            method: 'POST',
            url: `http://localhost:5000/api/users/sendMail`,
            headers: {
                Authorization: `Bearer ${authCtx.token}`,
            },
            data: {
                email: email,
                subject: subject,
                message: message
            }
        })
            .then(res => {
                console.log(res);
                alert('Email envoyé avec succès');
            })
            .catch(err => {
                console.log(err);
                alert('Erreur lors de l\'envoi de l\'email');
            });
    }

    return (
        <article>
            <form className="contact_form" onSubmit={handleSubmit}>
                <span className="blog_article_deco"></span>
                <div className="contact_form_container">
                    <label htmlFor="email" className="contact_form_label"></label>
                        <input 
                            type='email' 
                            name='email'
                            id="email"
                            placeholder="Email"
                            className="contact_form_input"
                            value={userData.email}
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
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
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