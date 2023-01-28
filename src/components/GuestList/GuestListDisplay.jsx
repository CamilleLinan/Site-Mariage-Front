import axios from "axios";
import { useCallback, useContext, useEffect, useState } from "react";
import AuthContext from "../../context/authContext";

const GuestListDisplay = () => {
    const [ guestsData, setGuestsData ] = useState([]);
    const [ errorServer, setErrorServer ] = useState('');

    const authCtx = useContext(AuthContext);

    const getGuestsData = useCallback(async () => {
        await axios({
            method: 'GET',
            url: `http://localhost:5000/api/guests/`,
            headers: {
                Authorization: `Bearer ${authCtx.token}`,
            }
        })
            .then((res) => { setGuestsData(res.data) })
            .catch(() => {
                setErrorServer({ ...errorServer, message: 'Une erreur interne est survenue. Merci de revenir plus tard.' });
            });
    },[authCtx.token, errorServer]);

    useEffect(() => {
        getGuestsData();
    }, [getGuestsData])

    return(
        <>
            {guestsData.length > 0 ?
                <ul>
                    {guestsData.map((guest, i) => (
                        <li key={guest._id}>
                            <p>{guest.lastname} {guest.firstname}</p>
                        </li>
                    ))}
                </ul>
                :
                <p>Il n'y a aucun invités pour le moment</p>
            }
        </>
    )
}

export default GuestListDisplay