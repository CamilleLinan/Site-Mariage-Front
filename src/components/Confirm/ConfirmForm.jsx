import axios from "axios";
import { useState } from "react";
import ConfirmModify from "./ConfirmModify";

const ConfirmPageForm = ({ propUserData, propAuth }) => {
    const [ guestData, setGuestData ] = useState([])
    const [ noCorresp, setNoCorresp ] = useState(false)
    const [ errorServer, setErrorServer ] = useState('')

    const getGuestData = async (e) => {
        e.preventDefault()

        await axios({
            method: 'GET',
            url: `http://localhost:5000/api/guests/${propUserData.lastname}/${propUserData.firstname}`,
            headers: {
                Authorization: `Bearer ${propAuth.token}`,
            }
        })
            .then((res) => { 
                setGuestData(res.data);
                if (propUserData.lastname !== guestData.lastname) {
                    setNoCorresp('Une erreur est survenue, merci de bien vouloir nous contacter.')
                }
            })
            .catch(() => {
                setErrorServer({ ...errorServer, message: 'Une erreur interne est survenue. Merci de revenir plus tard.' });
            });
    };

    return(
        <>
            <form className="confirm_section_form" onSubmit={getGuestData}>
                <div className="confirm_section_form_container">
                    <label htmlFor="lastname" className="confirm_section_form_label"></label>
                    <input 
                        type='text' 
                        name='lastname'
                        id="lastname"
                        className="confirm_section_form_input"
                        value={propUserData.lastname}
                        required
                    />
                    <label htmlFor="firstname" className="confirm_section_form_label"></label>
                    <input 
                        type='text' 
                        name='firstname'
                        id="firstname"
                        className="confirm_section_form_input"
                        value={propUserData.firstname}
                        required
                    />
                </div>
                {errorServer && <p>{errorServer}</p>}
                <button className="confirm_section_form_btn">Rechercher</button>
            </form>
            {(propUserData.lastname === guestData.lastname && propUserData.firstname === guestData.firstname) ? 
                <>
                    <article className="confirm_section_corresp">
                        <p className="confirm_section_corresp_content confirm_section_corresp_content_bold">Vous êtes sur la liste !</p>
                        <p className="confirm_section_corresp_content">Vous pouvez à présent indiquer si vous serez présent ou non au mariage.</p>
                        <p className="confirm_section_corresp_content">Pour des raisons d'organisations, merci de nous prévenir avant le 20 avril 2023.</p>
                    </article>
                    
                    <div className="guest_list confirm_section_guest_list">
                        <header className="guest_list_header">
                            <p className="guest_list_header_content">Nom de l'invité :</p>
                            <p className="guest_list_header_content">Présence :</p>
                        </header>
                        
                        <span className="guest_list_deco"></span>
                        <div className="guest_list_item">
                            <p className="guest_list_item_content guest_list_item_content_name">{guestData.lastname} {guestData.firstname}</p>
                            <ConfirmModify propAuth={propAuth} propGuestData={guestData} />
                        </div>
                    </div>
                </>
                
            :
                <>{noCorresp && <p>{noCorresp}</p>}</>
            }
        </>
    )
}

export default ConfirmPageForm