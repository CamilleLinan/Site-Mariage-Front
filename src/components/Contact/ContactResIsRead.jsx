import { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';

const EnvOpenIcon = <FontAwesomeIcon icon={faEnvelopeOpen} />
const EnvIcon = <FontAwesomeIcon icon={faEnvelope} />

const ContactResIsRead = ({ propAuth, propMsgId, propResIsRead, onReadUpdate }) => {
    const [ isRead, setIsRead ] = useState(propResIsRead)
    const [ errorServer, setErrorServer ] = useState('')

    const putReadOn = async () => {
        await axios({
            method: 'PATCH',
            url: `http://localhost:5000/api/messages/${propMsgId}/resIsRead`,
            headers: {
                Authorization: `Bearer ${propAuth.token}`,
            },
            data: {
                response: {
                    isRead: true
                }
            }
        })
            .then((res) => { 
                setIsRead(true)
                onReadUpdate(propMsgId, res.data.response.isRead)
                console.log(res.data)
            })
            .catch(() => {
                setErrorServer({ ...errorServer, message: 'Une erreur interne est survenue. Merci de revenir plus tard.' });
            });

    };

    const putReadOff = async () => {
        await axios({
            method: 'PATCH',
            url: `http://localhost:5000/api/messages/${propMsgId}/resIsRead`,
            headers: {
                Authorization: `Bearer ${propAuth.token}`,
            },
            data: {
                response: {
                    isRead: false
                }
            }
        })
            .then((res) => { 
                setIsRead(false)
                onReadUpdate(propMsgId, res.data.response.isRead)
                console.log(res.data)
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

export default ContactResIsRead