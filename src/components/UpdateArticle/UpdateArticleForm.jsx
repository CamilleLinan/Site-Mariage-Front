import axios from "axios";
import { useRef, useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const UpdateArticleForm = ({ propData, propAuth, propIsAdmin }) => {
    const [ dataUpdate, setDataUpdate ] = useState(propData);
    const [ dataPicture, setDataPicture ] = useState(propData.picture);
    const [ newDataPicture, setNewDataPicture ] = useState('');
    const [ errorServer, setErrorServer ] = useState('');    

    const titleInputRef = useRef();
    const descriptionInputRef = useRef();

    useEffect(() => {
        setDataUpdate(propData);
        setDataPicture(propData.picture)
    }, [propData, propData.picture])

    const changeHandler = () => {
        const enteredTitle = titleInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        setDataUpdate({
            ...propData,
            'title': enteredTitle,
            'description': enteredDescription
        })
    }

    const changeHandlerPicture = (e) => {
        let newPicture;

        if (e.target.files) {
            newPicture = URL.createObjectURL(e.target.files[0])
            setNewDataPicture(e.target.files[0])
        }
        setDataPicture(newPicture);
    }

    const navigate = useNavigate();
    const url = `http://localhost:5000/api/articles/${propData._id}`

    const confirmUpdate = async (e) => {
        e.preventDefault();
        
        let formData = new FormData();
        formData.append('isAdmin', propIsAdmin);
        formData.append('title', dataUpdate.title);
        formData.append('description', dataUpdate.description);
        formData.append('image', newDataPicture);
 
        await axios.put(url, formData, {
            headers: {
                Authorization: `Bearer ${propAuth.token}`,
            },
        })
            .then(() => {
                alert('Modification(s) enregistrée(s) !');
                navigate('/blog');
            })
            .catch(() => {
                setErrorServer({ ...errorServer, message: 'Une erreur interne est survenue. Merci de revenir plus tard.' })      
            });
    };
    
    return(
        <form action="" onSubmit={confirmUpdate} id='update-article-form' className="article_form"> 
            <div className="article_form_section">
                <label htmlFor="title" className="article_form_label">Titre :</label>
                    <input 
                        type='text'
                        name="title"
                        id="title"
                        className="pages_input article_form_input"
                        defaultValue={dataUpdate.title}
                        onChange={changeHandler}
                        ref={titleInputRef}
                        required
                    /> 

                <label htmlFor="description" className="article_form_label">Description :</label>
                    <textarea
                        name='description' 
                        id="description"
                        className="pages_input_textarea article_form_input article_form_input_description"
                        defaultValue={dataUpdate.description} 
                        onChange={changeHandler}
                        ref={descriptionInputRef}
                        required 
                    />

                <label htmlFor="file" className="article_form_label">Modifier l'image :</label>
                    <div className="article_form_container">
                        <img src={dataPicture} alt='' className="article_form_img" />
                        <input 
                            type="file" 
                            name="file" 
                            id="file"
                            className="article_form_input_file"
                            accept=".jpg, .jpeg, .png, .gif"
                            onChange={changeHandlerPicture}
                        />
                    </div>
            </div>
            
            {errorServer && <p className="error bold modal_container_section_message">{errorServer}</p>}
            
            <footer className="article_form_footer">
                <button className="pages_button pages_button_cancel article_form_footer_btn">
                    <NavLink title="Annuler" end to='/blog' className='article_form_footer_btn_navlink'>
                            Annuler
                    </NavLink>
                </button>
                <button type="submit" className="pages_button article_form_footer_btn">
                    Confirmer
                </button>
            </footer>
        </form>
    )
}

export default UpdateArticleForm