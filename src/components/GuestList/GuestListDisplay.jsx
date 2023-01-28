import axios from "axios";
import { useCallback, useContext, useEffect, useState } from "react";
import AuthContext from "../../context/authContext";
import GuestListModify from "./GuestListModify";

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
                <ul className="guest_list">
                    {guestsData.map((guest, i) => (
                        <li key={guest._id}>
                            <div className="guest_list_item">
                                <p className="guest_list_content guest_list_content_name">{guest.lastname} {guest.firstname}</p>
                                <GuestListModify propAuth={authCtx} propGuestId={guest._id} propGuestPresent={guest.willBePresent} />
                            </div>
                            <span className="guest_list_deco"></span>
                        </li>
                    ))}
                </ul>
                :
                <p>Il n'y a aucun invité pour le moment</p>
            }
        </>
    )
}

export default GuestListDisplay