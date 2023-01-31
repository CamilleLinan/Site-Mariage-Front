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
            <ul className="message_list">
                {allMessageData.map((message, i) => (
                    <li key={message._id} className="message_list_item">
                        <div className="message_list_item_container">
                            <h4 className="message_list_item_title">Nom :</h4>
                            <p className="message_list_item_subtitle">{message.lastname}</p>

                            <h4 className="message_list_item_title">Prénom :</h4>
                            <p className="message_list_item_subtitle">{message.firstname}</p>

                            <h4 className="message_list_item_title">Email :</h4>
                            <p className="message_list_item_subtitle">{message.email}</p>
                        </div>

                        <div className="message_list_item_container">
                            <h4 className="message_list_item_title">Objet :</h4>
                            <p className="message_list_item_subtitle">{message.object}</p>
                        </div>
                        
                        <h4 className="message_list_item_title">Message :</h4>
                        <p className="message_list_item_subtitle">{message.message}</p>
                        
                        
                        <span className="message_list_item_deco message_list_item_deco_2"></span>

                        {message.response ?
                            <div className="message_list_item_reponse">
                                <h4 className="message_list_item_title">Réponse :</h4>
                                <p className="message_list_item_response_content">{message.response}</p>
                            </div>
                        : 
                            <MessageReply propAuth={propAuth} propMsgId={message._id} />
                        }
                    </li>
                ))}
            </ul>
        :
            <p>Il n'y a aucun message pour le moment.</p>
        } </>
    )
}

export default MessagesDisplay