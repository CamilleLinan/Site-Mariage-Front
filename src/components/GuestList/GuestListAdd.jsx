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
        <article className="blog_intro">
            <h2 className='blog_intro_title'>Liste des invités</h2>
            
            <button className="blog_intro_link" onClick={() => setPopUpOpen(true)}>
                <i className="blog_intro_link_icon">{plusIcon}</i> 
                <span className="blog_intro_link_txt">Ajouter un invité</span>
            </button>
            
            {popUpOpen && 
                <form action="" onSubmit={onSubmit} className="confirm_section_form">
                    <div className="confirm_section_form_container">
                        <label htmlFor="lastname" className="confirm_section_form_label"></label>
                            <input 
                                type='text' 
                                name='lastname'
                                id="lastname"
                                placeholder="Nom"
                                className="confirm_section_form_input"
                                value={lastname}
                                onChange={(e) => setLastname(e.target.value)}
                                required
                            />
                        <label htmlFor="firstname" className="confirm_section_form_label"></label>
                            <input 
                                type='text' 
                                name='firstname'
                                id="firstname"
                                placeholder="Prénom"
                                className="confirm_section_form_input"
                                value={firstname}
                                onChange={(e) => setFirstname(e.target.value)}
                                required
                            />
                    </div>

                    <button onClick={() => setPopUpOpen(false)} className="confirm_section_form_btn">Annuler</button>
                    <button type="submit" className="confirm_section_form_btn">Ajouter</button>
                </form>
            }
        </article>
    )
}

export default GuestListAdd