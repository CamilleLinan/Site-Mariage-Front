import axios from "axios";
import { useState } from "react"

const MessageReply = ({ propAuth, propMsgId, propPoster }) => {
    const [ openInput, setOpenInput ] = useState(false);
    const [ response, setResponse ] = useState('');
    const [ errorServer, setErrorServer ] = useState('');

    const onSubmit = async () => {
        await axios({
            method:'PATCH',
            url: `http://localhost:5000/api/messages/${propMsgId}`,
            headers: {
                Authorization: `Bearer ${propAuth}`,
            },
            data: {
                response: {
                    text: response,
                    isRead: false
                }
            }
        })
            .then(() => {
                alert('Réponse envoyée !')
                window.location.reload()
            })
            .catch(() => {
                setErrorServer({ ...errorServer, message: 'Erreur interne.' }) 
            });
    };

    return(
        <>
            {!openInput && <>
                {propPoster.map((poster, i) => ( 
                <div key={poster._id} className="message_list_item_reply_box">
                    <button onClick={() => setOpenInput(true)} className="pages_button message_list_item_reply_box_btn">Répondre à {poster.firstname}</button>
                </div> 
                ))} </>
            }

            {openInput && <>
                <form action="" onSubmit={onSubmit}>
                    <label htmlFor="response" className="message_list_item_titles">Votre réponse :</label>
                        <textarea
                            name="response"
                            id="response"
                            rows='5'
                            className="contact_form_input contact_form_input_response message_list_item_reply_textarea"
                            onChange={(e) => setResponse(e.target.value)}
                            required
                        />
                    <div className="message_list_item_reply_btns">
                        <button onClick={() => setOpenInput(false)} className="pages_button message_list_item_reply_btns_btn message_list_item_reply_btns_btn_cancel">Annuler</button>
                        <button type='submit' className="pages_button message_list_item_reply_btns_btn message_list_item_reply_btns_btn_confirm">Envoyer</button>
                    </div>
                </form>
            </> }
        </>
    )
}

export default MessageReply