import axios from "axios";
import { useState } from "react";

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
                <button onClick={putReadOn}>Marquer comme lu</button>
            :
                <button onClick={putReadOff}>Marquer comme non lu</button>
        } </>
    )
}

export default MessageIsRead