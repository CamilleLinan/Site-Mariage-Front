import axios from "axios"
import { useState } from "react"

const GuestListModify = ({ propAuth, propGuestId, propGuestPresent }) => {
    const [ guestPresent, setGuestPresent ] = useState(propGuestPresent)

    const handleChange = async (e) => {
        setGuestPresent(e.target.value)

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
        <select defaultValue={guestPresent} onChange={handleChange} className="guest_list_content guest_list_content_present">
            <option value='Oui'>Oui</option>
            <option value='Ne sait pas encore'>Ne sait pas encore</option>
            <option value='Non'>Non</option>
        </select>
        
        </>
    )
}

export default GuestListModify