import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import DeleteModal from '../Layout/DeleteModal';

const trashIcon = <FontAwesomeIcon icon={faTrash} />

const GuestListDelete = ({ propAuth, propGuest }) => {
    const [ popUpConfirm, setPopUpConfirm ] = useState(false);
    const [ errorServer, setErrorServer ] = useState('');

    const confirmDelete = async (e) => {
        e.preventDefault();

        await axios({
            method:'DELETE',
            url: `http://localhost:5000/api/guests/${propGuest._id}`,
            headers: {
                Authorization: `Bearer ${propAuth.token}`,
            },
        })
            .then(() => {
                alert('Cet invité⸱e a bien été supprimé⸱e !');
                window.location.reload()
            })
            .catch(() => {
                setErrorServer({ ...errorServer, message: 'Une erreur interne est survenue. Merci de revenir plus tard.' }) 
            })
    };

    return(
        <>
            {popUpConfirm && <DeleteModal
                className='modal_container modal_container_guest_list' 
                title="Supprimer un⸱e invité⸱e"
                description={`Êtes-vous sûr⸱e de vouloir supprimer ${propGuest.lastname} ${propGuest.firstname} de votre liste d'invités ?`}
                errorServer={errorServer} 
                onCancel={() => {setPopUpConfirm(false)}}
                onConfirm={confirmDelete}
            /> }
            <i onClick={() => {setPopUpConfirm(true)}} title='Supprimer' className='guest_list_item_icon'>{trashIcon}</i>
        </>
    )
}

export default GuestListDelete