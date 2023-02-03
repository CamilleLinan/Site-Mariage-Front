import { useState } from "react";
import axios from "axios";

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
                onReadUpdate(propMsgId, res.data.isRead)
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
                onReadUpdate(propMsgId, res.data.isRead)
            })
            .catch(() => {
                setErrorServer({ ...errorServer, message: 'Une erreur interne est survenue. Merci de revenir plus tard.' });
            });

    };

    return(
        <> {!isRead ?
                <button onClick={putReadOn}>Marquer comme Lu</button>
            :
                <button onClick={putReadOff}>Marquer comme non lu</button>
        } </>
    )
}

export default ContactResIsRead