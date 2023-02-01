import axios from "axios";
import { useState } from "react";

const MessageIsRead = ({ propAuth, propMsgId, propMsgIsRead }) => {
    const [ errorServer, setErrorServer ] = useState('')

    const putReadOn = async () => {
        await axios({
            method: 'PUT',
            url: `http://localhost:5000/api/messages/${propMsgId}`,
            headers: {
                Authorization: `Bearer ${propAuth}`,
            },
            data: {
                isRead: true
            }
        })
            .then(() => { 
                window.location.reload()
            })
            .catch(() => {
                setErrorServer({ ...errorServer, message: 'Une erreur interne est survenue. Merci de revenir plus tard.' });
            });

    };

    const putReadOff = async () => {
        await axios({
            method: 'PUT',
            url: `http://localhost:5000/api/messages/${propMsgId}`,
            headers: {
                Authorization: `Bearer ${propAuth}`,
            },
            data: {
                isRead: false
            }
        })
            .then(() => { 
                window.location.reload()
            })
            .catch(() => {
                setErrorServer({ ...errorServer, message: 'Une erreur interne est survenue. Merci de revenir plus tard.' });
            });

    };

    return(
        <> {!propMsgIsRead ?
                <button onClick={putReadOn}>Marquer comme lu</button>
            :
                <button onClick={putReadOff}>Marquer comme non lu</button>
        } </>
    )
}

export default MessageIsRead