import { useState } from "react"

const AttendConfirmPage = () => {
    const [lastname, setLastname] = useState('')
    const [firstname, setFirstname] = useState('');

    return (
        <section className="confirm_section">
            <h2 className="confirm_section_title">Confirmer sa présence</h2>
            <p className="confirm_section_content">Pour confirmer votre présence à notre mariage, vous 
            pouvez écrire votre nom et cliquer sur Rechercher.</p>
            <p className="confirm_section_content">Vous verrez alors apparaître votre nom et pourrez confirmer ou 
            non votre venue.</p>
            
            <form className="confirm_section_form">
                <div className="confirm_section_form_container">
                    <label htmlFor="lastname" className="confirm_section_form_label"></label>
                    <input 
                        type='text' 
                        name='lastname'
                        id="lastname"
                        placeholder="Votre nom"
                        className="confirm_section_form_input"
                        value={lastname}
                        onChange={setLastname}
                    />
                    <label htmlFor="firstname" className="confirm_section_form_label"></label>
                    <input 
                        type='text' 
                        name='firstname'
                        id="firstname"
                        placeholder="Votre prénom"
                        className="confirm_section_form_input"
                        value={firstname}
                        onChange={setFirstname}
                    />
                </div>
                <button className="confirm_section_form_btn">Rechercher</button>
            </form>
        </section>
    )
}

export default AttendConfirmPage