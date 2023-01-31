import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import SimpleDateTime from 'react-simple-timestamp-to-date';
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
                            <div className="message_list_item_container_titles">
                                <h4 className="message_list_item_titles">De :</h4>
                                <p className="message_list_item_subtitles">{message.lastname} {message.firstname}</p>
                            </div>

                            <div className="message_list_item_container_titles">
                                <h4 className="message_list_item_titles">Email :</h4>
                                <p className="message_list_item_subtitles">{message.email}</p>
                            </div>

                            <div className="message_list_item_container_titles">
                                <h4 className="message_list_item_titles">Objet :</h4>
                                <p className="message_list_item_subtitles">{message.object}</p>
                            </div>
                        
                            <h4 className="message_list_item_titles">Message :</h4>
                            <span className='message_list_item_sendAt'>Envoyé le <SimpleDateTime dateFormat="DMY" dateSeparator="/"  showTime="0">{message.createdAt}</SimpleDateTime></span>
                            <p className="message_list_item_subtitles message_list_item_subtitles_message">{message.message}</p>
                        </div>
                        
                        <span className="message_list_item_deco"></span>

                        {message.response ?
                            <div className="message_list_item_response">
                                <h4 className="message_list_item_titles">Votre réponse :</h4>
                                <span className='message_list_item_sendAt'>Envoyé le <SimpleDateTime dateFormat="DMY" dateSeparator="/"  showTime="0">{message.updatedAt}</SimpleDateTime></span>
                                <p className="message_list_item_subtitles message_list_item_subtitles_message">{message.response}</p>
                            </div>
                        : 
                            <div className="message_list_item_reply">
                                <MessageReply propAuth={propAuth} propMsgId={message._id} propFirstname={message.firstname} />
                            </div>
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