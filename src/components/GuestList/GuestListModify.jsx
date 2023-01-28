import axios from "axios"
import { useState } from "react"

const GuestListModify = ({ propAuth, propGuestId, propGuestPresent }) => {
    const [ guestPresent, setGuestPresent ] = useState(propGuestPresent)

    const options = [
        {
            value:'Oui',
            label:'Oui'
        },
        {
            value:'Ne sait pas encore',
            label:'Ne sait pas encore'
        },
        {
            value:'Non',
            label:'Non'
        }
    ]

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
            .then((res) => {
                console.log(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <>
        <label htmlFor='present'>Sera présent :</label>
        <select names='present' id="present" defaultValue={guestPresent} onChange={(e) => setGuestPresent(e.target.value)} className="guest_list_content guest_list_content_present">
            {options.map((option, i) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
        <button onClick={handleChange}>confirm</button>
        </>
    )
}

export default GuestListModify