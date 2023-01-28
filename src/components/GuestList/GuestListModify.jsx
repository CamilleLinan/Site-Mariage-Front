import axios from "axios"
import { useState } from "react"

const GuestListModify = ({ propAuth, propGuestId, propGuestPresent }) => {
    const [ guestPresent, setGuestPresent ] = useState(propGuestPresent)

    const handleChange = async (e) => {

        await axios({
            method:'PUT',
            url: `http://localhost:5000/api/guests/${propGuestId}`,
            headers: {
                Authorization: `Bearer ${propAuth.token}`,
            },
            data: {
                willBePresent: guestPresent
            }
        })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <>
        <label htmlFor='present'>Sera présent :</label>
        <select names='present' id="present" defaultValue={guestPresent} onChange={(e) => setGuestPresent(e.target.value)} className="guest_list_content guest_list_content_present">
            <option value='Oui'>Oui</option>
            <option value='Ne sait pas encore'>Ne sait pas encore</option>
            <option value='Non'>Non</option>
        </select>
        <button onClick={handleChange}>confirm</button>
        </>
    )
}

export default GuestListModify