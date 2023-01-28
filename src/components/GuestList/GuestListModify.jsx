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
        setGuestPresent(e.target.value)

        await axios({
            method:'PUT',
            url: `http://localhost:5000/api/guests/${propGuestId}`,
            headers: {
                Authorization: `Bearer ${propAuth.token}`,
            },
            data: {
                willBePresent: e.target.value
            }
        })
            .then((res) => {
                console.log(res.data);
                console.log(e.target.value);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <select names='present' id="present" defaultValue={guestPresent} onChange={handleChange} className="guest_list_item_content guest_list_item_content_present">
            {options.map((option, i) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    )
}

export default GuestListModify