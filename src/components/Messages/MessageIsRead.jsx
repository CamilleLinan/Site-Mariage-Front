import { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';

const EnvOpenIcon = <FontAwesomeIcon icon={faEnvelopeOpen} />
const EnvIcon = <FontAwesomeIcon icon={faEnvelope} />

const MessageIsRead = ({ propAuth, propMsgId, propMsgIsRead, onReadUpdate }) => {
    const [ isRead, setIsRead ] = useState(propMsgIsRead)
    const [ errorServer, setErrorServer ] = useState('')

    const putReadOn = async (e) => {
        e.preventDefault()
        await axios({
            method: 'PATCH',
            url: `http://localhost:5000/api/messages/${propMsgId}/msgIsRead`,
            headers: {
                Authorization: `Bearer ${propAuth}`,
            },
            data: {
                isRead: true
            }
        })
            .then((res) => { 
                setIsRead(true)
                onReadUpdate(propMsgId, res.data.isRead)
            })
            .catch(() => {
                setErrorServer({ ...errorServer, message: 'Une erreur interne est survenue. Merci de revenir plus tard.' });
            });

    };

    const putReadOff = async (e) => {
        e.preventDefault()
        await axios({
            method: 'PATCH',
            url: `http://localhost:5000/api/messages/${propMsgId}/msgIsRead`,
            headers: {
                Authorization: `Bearer ${propAuth}`,
            },
            data: {
                isRead: false
            }
        })
            .then((res) => { 
                setIsRead(false)
                onReadUpdate(propMsgId, res.data.isRead)
            })
            .catch(() => {
                setErrorServer({ ...errorServer, message: 'Une erreur interne est survenue. Merci de revenir plus tard.' });
            });

    };

    return(
        <> {!isRead ?
                <button onClick={putReadOn} title='Marquer comme lu' className='message_list_item_btn'>{EnvIcon}</button>
            :
                <button onClick={putReadOff} title='Marquer comme non lu' className='message_list_item_btn'>{EnvOpenIcon}</button>
        } </>
    )
}

export default MessageIsRead