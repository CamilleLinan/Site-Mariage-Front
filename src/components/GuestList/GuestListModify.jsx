import { useState } from "react"
import axios from "axios"

const GuestListModify = ({ propAuth, propGuestId, propGuestPresent }) => {
    const [ guestPresent, setGuestPresent ] = useState(propGuestPresent)
    const [ errorServer, setErrorServer ] = useState('')

    const options = [
        { value: 'Confirmée', label: 'Confirmée' },
        { value: 'En attente', label: 'En attente' },
        { value: 'Annulée', label: 'Annulée' }
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
            .then(() => {
                alert('Statut modifié !')
            })
            .catch(() => {
                setErrorServer({ ...errorServer, message: 'Erreur interne.' }) 
            });
    };

    return (
        <>
            <select names='present' id="present" defaultValue={guestPresent} onChange={handleChange} className="guest_list_item_content guest_list_item_content_present">
                {options.map((option, i) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            {errorServer && <p>{errorServer}</p>}
        </>
    )
}

export default GuestListModify