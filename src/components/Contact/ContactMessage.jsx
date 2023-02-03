import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import SimpleDateTime from 'react-simple-timestamp-to-date';
import ContactResIsRead from './ContactResIsRead';

const ContactMessage = ({ propAuth, propMsgData }) => {
    const [msgData, setMsgData] = useState(propMsgData);
    const [ errorServer, setErrorServer ] = useState('')

    const getOwnMessageData = useCallback(async() => {
        await axios({
            method: 'GET',
            url: `http://localhost:5000/api/messages/${propAuth.userId}`,
            headers: {
                Authorization: `Bearer ${propAuth.token}`,
            }
        })
            .then((res) => { 
                setMsgData(res.data.messages);
            })
            .catch(() => {
                setErrorServer({ ...errorServer, message: 'Une erreur interne est survenue. Merci de revenir plus tard.' });
            });

    }, [propAuth.userId, propAuth.token, errorServer]);

    useEffect(() => {
        getOwnMessageData();
    }, [getOwnMessageData])

    const handleReadUpdate = (id, isRead) => {
        setMsgData(prev => prev.map(message => {
            if (message._id === id) {
                message.response.isRead = isRead;
            }
            return message;
        }));
    };

    return (
        <> {(msgData && msgData.length > 0) &&
            <article className="message">
                <h3 className="message_title">Vos questions :</h3>
                    <ul className="message_list">
                        {msgData.map((message, i) => (
                            <li key={message._id} className="message_list_item">
                                <div className="message_list_item_container">
                                    <div className="message_list_item_container_titles message_list_item_container_titles_1">
                                        <div className="message_list_item_titles_container">
                                            <h4 className="message_list_item_titles">Objet :</h4>
                                            <p className="message_list_item_subtitles">{message.object}</p>
                                        </div>
                                        <span className='message_list_item_sendAt'>Envoyé le <SimpleDateTime dateFormat="DMY" dateSeparator="/"  showTime="0">{message.createdAt}</SimpleDateTime></span>
                                    </div>

                                    <h4 className="message_list_item_titles message_list_item_titles_contact">Message :</h4>
                                    <p className="message_list_item_subtitles message_list_item_subtitles_contact">{message.message}</p>
                                </div>

                                <span className="message_list_item_deco"></span>
                                
                                <div className={message.response.isRead === true ? "message_list_item_response" : "message_list_item_response message_list_item_isNotRead"}>
                                    <div className="message_list_item_container_titles message_list_item_container_titles_1">
                                        <h4 className="message_list_item_titles message_list_item_titles_contact">Réponse :</h4>
                                        <ContactResIsRead propAuth={propAuth} propMsgId={message._id} propResIsRead={message.response.isRead} onReadUpdate={handleReadUpdate} />
                                        {message.response.text && 
                                            <div>
                                                <span className='message_list_item_sendAt'>Reçue le <SimpleDateTime dateFormat="DMY" dateSeparator="/"  showTime="0">{message.updatedAt}</SimpleDateTime></span>
                                                
                                            </div> 
                                        }
                                    </div>
                                    {message.response.text ? 
                                        <p className="message_list_item_subtitles message_list_item_subtitles_message message_list_item_subtitles_message_contact">
                                            {message.response.text}
                                        </p>
                                    : 
                                        <p className="message_list_item_subtitles message_list_item_subtitles_message message_list_item_subtitles_message_contact message_list_item_subtitles_message_contact_italic">
                                            Vous n'avez pas encore de réponse pour le moment.
                                        </p>
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