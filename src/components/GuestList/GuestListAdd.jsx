import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useContext, useState } from 'react';
import axios from 'axios';
import AuthContext from '../../context/authContext';

const plusIcon = <FontAwesomeIcon icon={faPlus} />

const GuestListAdd = () => {
    const authCtx = useContext(AuthContext);
    const [ popUpOpen, setPopUpOpen ] = useState(false);

    const [ lastname, setLastname ] = useState('');
    const [ firstname, setFirstname ] = useState('');
    const [ errorServer, setErrorServer ] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();

        await axios({
            method: 'POST',
            url: `http://localhost:5000/api/guests`,
            headers: {
                Authorization: `Bearer ${authCtx.token}`,
            },
            data: {
                lastname: lastname,
                firstname: firstname
            }
        })
            .then(() => {
                alert('Cet⸱te invité⸱e a bien été ajouté⸱e !');
                window.location.reload()
            })
            .catch((error) => {
                setErrorServer({ ...errorServer, message: 'Une erreur interne est survenue. Merci de revenir plus tard.' });
                console.log(error.response.data.error.errors)
            });
    };

    return(
        <article className="pages_intro">
            <h2 className='pages_intro_title'>Liste des invités</h2>
            
            <button className="pages_intro_btn guest_list_btn" onClick={() => setPopUpOpen(true)}>
                <i className="pages_intro_btn_icon">{plusIcon}</i> 
                <span className="pages_intro_btn_txt guest_list_btn_txt">Ajouter un invité</span>
            </button>
            
            {popUpOpen && 
                <form action="" onSubmit={onSubmit} id='guest-list-form' className="confirm_form guest_list_form">
                    <div className="confirm_form_container">
                        <label htmlFor="lastname" className="confirm_form_label"></label>
                            <input 
                                type='text' 
                                name='lastname'
                                id="lastname"
                                placeholder="Nom"
                                className="pages_input guest_list_form_input"
                                value={lastname}
                                onChange={(e) => setLastname(e.target.value)}
                                required
                            />
                        <label htmlFor="firstname" className="confirm_form_label"></label>
                            <input 
                                type='text' 
                                name='firstname'
                                id="firstname"
                                placeholder="Prénom"
                                className="pages_input guest_list_form_input"
                                value={firstname}
                                onChange={(e) => setFirstname(e.target.value)}
                                required
                            />
                    </div>
                    
                    <div className='guest_list_form_btns'>
                        <button onClick={() => setPopUpOpen(false)} className="pages_button guest_list_form_btns_btn guest_list_form_btns_btn_cancel">Annuler</button>
                        <button type="submit" className="pages_button guest_list_form_btns_btn guest_list_form_btns_btn_valid">Ajouter</button>
                    </div>
                </form>
            }
        </article>
    )
}

export default GuestListAdd