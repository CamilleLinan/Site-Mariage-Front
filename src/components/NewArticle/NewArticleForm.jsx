import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"
import AuthContext from "../../context/authContext";
import axios from "axios";

const NewArticleForm = () => {
    const authCtx = useContext(AuthContext);

    const [ articleTitle, setArticleTitle ] = useState('')
    const [ articleDescription, setArticleDescription ] = useState('');
    const [ previewPicture, setPreviewPicture ] = useState('');
    const [ articlePicture, setArticlePicture ] = useState('');

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
        formData.append('userId', authCtx.userId);
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
        <form action="" onSubmit={onSubmit} id='new-article-form' className="new_article_form"> 
            <div className="new_article_form_section">
                <label htmlFor="title" className="new_article_form_label">Titre de l'article :</label>
                    <input 
                        type='text'
                        name="title"
                        id="title"
                        className="new_article_form_input new_article_form_input_title"
                        value={articleTitle}
                        onChange={(e) => setArticleTitle(e.target.value)}
                        required
                    /> 
                    <br />

                <label htmlFor="description" className="new_article_form_label">Description :</label>
                    <textarea
                        name='description' 
                        id="description"
                        className="new_article_form_input new_article_form_input_description"
                        value={articleDescription} 
                        onChange={(e) => setArticleDescription(e.target.value)}
                        required 
                    />

                <label htmlFor="file" className="new_article_form_label">Ajouter une image :</label>
                    <div className="new_article_form_container">
                        {previewPicture && <img src={previewPicture} alt='article-mariage-cover' className="new_article_form_img" />}
                        <input 
                            type="file" 
                            name="file" 
                            id="file"
                            className=""
                            accept=".jpg, .jpeg, .png, .gif"
                            onChange={changeHandlerPicture}
                        />
                    </div>
            </div>
            
            <footer className="new_article_footer">
                <NavLink className="new_article_footer_btn new_article_footer_btn_cancel" title="Annuler" end to='/blog'>
                    Annuler
                </NavLink>
                <button type="submit" className="new_article_footer_btn new_article_footer_btn_confirm">
                    Confirmer
                </button>
            </footer>
        </form>
    )
}

export default NewArticleForm