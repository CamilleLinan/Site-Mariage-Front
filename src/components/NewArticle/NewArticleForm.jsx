import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"
import AuthContext from "../../context/authContext";
import axios from "axios";

const NewArticleForm = ({ propIsAdmin }) => {
    const authCtx = useContext(AuthContext);

    const [ articleTitle, setArticleTitle ] = useState('')
    const [ articleDescription, setArticleDescription ] = useState('');
    const [ articlePicture, setArticlePicture ] = useState('');
    const [ previewPicture, setPreviewPicture ] = useState('');

    const [ errorServer, setErrorServer ] = useState('');

    const changeHandlerPicture = (e) => {
        let newPicture;

        if (e.target.files) {
            newPicture = URL.createObjectURL(e.target.files[0])
            setPreviewPicture(newPicture)
        }
        setArticlePicture(e.target.files[0]) 
    }

    const url = `http://localhost:5000/api/articles`
    const navigate = useNavigate()
    
    const onSubmit = async (e) => {
        e.preventDefault();

        let formData = new FormData();
        formData.append('isAdmin', propIsAdmin);
        formData.append('title', articleTitle);
        formData.append('description', articleDescription);
        formData.append('image', articlePicture);

        await axios.post(url, formData, {
            headers: {
                Authorization: `Bearer ${authCtx.token}`,
                'Content-Type': `multipart/form-data`,
            },
        })
            .then(() => {
                alert('Votre article va être publié !');
                navigate('/blog');
            })
            .catch(() => {
                setErrorServer({ ...errorServer, message: 'Une erreur interne est survenue. Merci de revenir plus tard.' })      
            });
    };

    return(
        <form action="" onSubmit={onSubmit} id='new-article-form' className="article_form"> 
            <div className="article_form_section">
                <label htmlFor="title" className="article_form_label">Titre de l'article :</label>
                    <input 
                        type='text'
                        name="title"
                        id="title"
                        className="pages_input article_form_input"
                        value={articleTitle}
                        onChange={(e) => setArticleTitle(e.target.value)}
                        required
                    />

                <label htmlFor="description" className="article_form_label">Description :</label>
                    <textarea
                        name='description' 
                        id="description"
                        className="pages_input_textarea article_form_input article_form_input_description"
                        value={articleDescription} 
                        onChange={(e) => setArticleDescription(e.target.value)}
                        required 
                    />

                <label htmlFor="file" className="article_form_label">Ajouter une image :</label>
                    <div className="article_form_container">
                        {previewPicture && <img src={previewPicture} alt='article-mariage-cover' className="article_form_img" />}
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

export default NewArticleForm