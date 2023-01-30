import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import MessageReply from "./MessagesReply";

const MessagesDisplay = ({ propAuth }) => {
    const [ allMessageData, setAllMessageData ] = useState([])
    const [ errorServer, setErrorServer ] = useState('')

    const getAllMessageData = useCallback(async () => {
        await axios({
            method: 'GET',
            url: `http://localhost:5000/api/messages`,
            headers: {
                Authorization: `Bearer ${propAuth}`,
            }
        })
            .then((res) => { 
                setAllMessageData(res.data);
            })
            .catch(() => {
                setErrorServer({ ...errorServer, message: 'Une erreur interne est survenue. Merci de revenir plus tard.' });
            });

    }, [propAuth, errorServer]);

    useEffect(() => {
        getAllMessageData();
    }, [getAllMessageData])

    return(
        <> {allMessageData.length > 0 ? 
            <article className="contact_message">
                <ul className="contact_message_list">
                    {allMessageData.map((message, i) => (
                        <li key={message._id} className="contact_message_list_item">
                            <div className="contact_message_list_item_container">
                                <h4 className="contact_message_list_item_subtitle">Nom :</h4>
                                <p className="contact_message_list_item_title">{message.lastname}</p>
                            </div>

                            <div className="contact_message_list_item_container">
                                <h4 className="contact_message_list_item_subtitle">Prénom :</h4>
                                <p className="contact_message_list_item_title">{message.firstname}</p>
                            </div>

                            <div className="contact_message_list_item_container">
                                <h4 className="contact_message_list_item_subtitle">Email :</h4>
                                <p className="contact_message_list_item_title">{message.email}</p>
                            </div>

                            <div className="contact_message_list_item_container">
                                <h4 className="contact_message_list_item_subtitle">Objet :</h4>
                                <p className="contact_message_list_item_title">{message.object}</p>
                            </div>
                            
                            <h4 className="contact_message_list_item_subtitle">Message :</h4>
                            <p className="contact_message_list_item_message">{message.message}</p>
                            
                            <MessageReply propAuth={propAuth} propMsgId={message._id} />
                            {/* <span className="contact_message_list_item_deco"></span>

                            <h4 className="contact_message_list_item_subtitle">Réponse :</h4>
                            {message.response ? 
                                <p className="contact_message_list_item_response">{message.response}</p>
                            : 
                                <p className="contact_message_list_item_response">Vous n'avez pas encore de réponse pour le moment.</p>
                            } */}
                        </li>
                    ))}
                </ul>
            </article>
        :
            <p>Il n'y a aucun message pour le moment.</p>
        } </>
    )
}

export default MessagesDisplay