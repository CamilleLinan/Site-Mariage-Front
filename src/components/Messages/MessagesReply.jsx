import axios from "axios";
import { useState } from "react"

const MessageReply = ({ propAuth, propMsgId }) => {
    const [ openInput, setOpenInput ] = useState(false);
    const [ response, setResponse ] = useState('');
    const [ errorServer, setErrorServer ] = useState('');

    const onSubmit = async () => {
        await axios({
            method:'PUT',
            url: `http://localhost:5000/api/messages/${propMsgId}`,
            headers: {
                Authorization: `Bearer ${propAuth}`,
            },
            data: {
                response: response
            }
        })
            .then(() => {
                alert('Réponse envoyée !')
            })
            .catch(() => {
                setErrorServer({ ...errorServer, message: 'Erreur interne.' }) 
            });
    };

    return(
        <div>
            {!openInput && 
                <button onClick={() => setOpenInput(true)}>Répondre</button>
            }

            {openInput && <>
                <form action="" onSubmit={onSubmit}>
                    <label htmlFor="response" className="contact_form_label">Votre réponse :</label>
                        <textarea
                            name="response"
                            id="response"
                            rows='4' cols='60'
                            className="contact_form_input contact_form_input_response"
                            onChange={(e) => setResponse(e.target.value)}
                            required
                        />
                    <div>
                        <button onClick={() => setOpenInput(false)} className="contact_form_btn">Annuler</button>
                        <button type='submit' className="contact_form_btn">Envoyer</button>
                    </div>
                </form>
            </> }
        </div>
    )
}

export default MessageReply