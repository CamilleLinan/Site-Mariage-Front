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
            <article className="message">
                <h3 className="message_title">Vos questions :</h3>
                    <ul className="message_list">
                        {ownMessageData.map((message, i) => (
                            <li key={message._id} className="message_list_item">
                                <div className="message_list_item_container">
                                    <div className="message_list_item_container_titles">
                                        <h4 className="message_list_item_titles">Objet :</h4>
                                        <p className="message_list_item_subtitles">{message.object}</p>
                                    </div>

                                    <h4 className="message_list_item_titles message_list_item_titles_contact">Message :</h4>
                                    <p className="message_list_item_subtitles message_list_item_subtitles_contact">{message.message}</p>
                                </div>

                                <span className="message_list_item_deco"></span>
                                
                                <div className="message_list_item_response">
                                    <h4 className="message_list_item_titles message_list_item_titles_contact">Réponse :</h4>
                                    {message.response ? 
                                        <p className="message_list_item_subtitles message_list_item_subtitles_message message_list_item_subtitles_message_contact">{message.response}</p>
                                    : 
                                        <p className="message_list_item_subtitles message_list_item_subtitles_message message_list_item_subtitles_message_contact">Vous n'avez pas encore de réponse pour le moment.</p>
                                    }
                                </div>
                            </li>
                        ))}
                    </ul>
            </article>
        } </>
    )
}

export default ContactMessage