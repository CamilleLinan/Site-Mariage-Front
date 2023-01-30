import { useState } from "react"

const MessageReply = () => {
    const [ openInput, setOpenInput ] = useState(false);
    const [ response, setResponse ] = useState('');

    return(
        <div>
            <button onClick={() => setOpenInput(true)}>Répondre</button>
            {openInput && <>
                <label htmlFor="message" className="contact_form_label"></label>
                    <textarea
                        name="message"
                        id="message"
                        rows='4' cols='100'
                        placeholder="Votre message..."
                        className="contact_form_input contact_form_input_message"
                        value={response}
                        onChange={(e) => setResponse(e.target.value)}
                        required
                    />
                <button className="contact_form_btn">Envoyer</button>
            </> }
        </div>
    )
}

export default MessageReply