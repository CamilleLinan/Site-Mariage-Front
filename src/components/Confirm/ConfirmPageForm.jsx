
const ConfirmPageForm = ({ propUserData }) => {

    return(
        <form className="confirm_section_form">
            <div className="confirm_section_form_container">
                <label htmlFor="lastname" className="confirm_section_form_label"></label>
                <input 
                    type='text' 
                    name='lastname'
                    id="lastname"
                    placeholder="Votre nom"
                    className="confirm_section_form_input"
                    value={propUserData.lastname}
                />
                <label htmlFor="firstname" className="confirm_section_form_label"></label>
                <input 
                    type='text' 
                    name='firstname'
                    id="firstname"
                    placeholder="Votre prénom"
                    className="confirm_section_form_input"
                    value={propUserData.firstname}
                />
            </div>
            <button className="confirm_section_form_btn">Rechercher</button>
        </form>
    )
}

export default ConfirmPageForm