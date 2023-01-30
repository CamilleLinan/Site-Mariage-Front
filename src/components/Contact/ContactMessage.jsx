import { useCallback, useEffect, useState } from "react";
import axios from "axios";

const ContactMessage = ({ propUserData, propAuth }) => {
    const [ ownMessageData, setOwnMessageData ] = useState([])
    const [ errorServer, setErrorServer ] = useState('')

    const getOwnMessageData = useCallback(async () => {
        await axios({
            method: 'GET',
            url: `http://localhost:5000/api/messages/${propUserData.lastname}/${propUserData.firstname}`,
            headers: {
                Authorization: `Bearer ${propAuth}`,
            }
        })
            .then((res) => { 
                setOwnMessageData(res.data);
            })
            .catch(() => {
                setErrorServer({ ...errorServer, message: 'Une erreur interne est survenue. Merci de revenir plus tard.' });
            });

    }, [propUserData.lastname, propUserData.firstname, propAuth, errorServer]);

    useEffect(() => {
        getOwnMessageData();
    }, [getOwnMessageData])

    return (
        <> {ownMessageData.length > 0 &&
            <article className="contact_message">
                <h3 className="contact_message_title">Vos questions :</h3>
                    <ul className="contact_message_list">
                        {ownMessageData.map((message, i) => (
                            <li key={message._id} className="contact_message_list_item">
                                <div className="contact_message_list_item_container">
                                    <h4 className="contact_message_list_item_subtitle">Objet :</h4>
                                    <p className="contact_message_list_item_title">{message.object}</p>
                                </div>
                                
                                <h4 className="contact_message_list_item_subtitle">Message :</h4>
                                <p className="contact_message_list_item_message">{message.message}</p>
                                
                                <h4 className="contact_message_list_item_subtitle">Réponse :</h4>
                                {message.response ? 
                                    <p className="contact_message_list_item_response">{message.response}</p>
                                : 
                                    <p className="contact_message_list_item_response">Vous n'avez pas encore de réponse pour le moment</p>
                                }
                            </li>
                        ))}
                    </ul>
            </article>
        } </>
    )
}

export default ContactMessage