import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const infoIcon = <FontAwesomeIcon icon={faInfoCircle} />

const DeleteArticleModal = (props) => {
    const { className, title, description, errorServer, onCancel, onConfirm } = props;

    return(
        <div className={className}>
            <header className="modal_container_header">
                <i className="modal_container_header_icon">{infoIcon}</i>
                <h3 className="modal_container_header_title bold">{title}</h3>
            </header>
            
            <div className="modal_container_section">
                <p className="modal_container_section_message">{description}</p>

                {errorServer && <p className="error bold modal_container_section_message">{errorServer}</p>}
                
                <footer className="modal_container_footer">
                    <button onClick={onCancel} className="modal_container_footer_btn modal_container_footer_btn_cancel">Annuler</button>
                    <button onClick={onConfirm} className="modal_container_footer_btn modal_container_footer_btn_confirm">Supprimer</button>
                </footer>
            </div>
        </div>
    )
}

export default DeleteArticleModal