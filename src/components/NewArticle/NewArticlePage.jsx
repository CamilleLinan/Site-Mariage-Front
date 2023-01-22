import { useState } from "react";
import { NavLink } from "react-router-dom"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const NewArticlePage = () => {
    const [description, setDescription] = useState('');

    return (
        <section className="new_article">
            <header className="new_article_header">
                <h2 className="new_article_header_title">Ajouter un nouvel article</h2>
            </header> 
            
            <form action="" id='' className="new_article_form"> 
                <div className="new_article_form_section">
                    <label htmlFor="title" className="new_article_form_label">Titre de l'article :</label>
                    <br/>
                    <input 
                        type='text'
                        name="title"
                        id="title"
                        className="new_article_form_input new_article_form_input_title"
                        required
                    /> 
                    <br />

                    <label htmlFor="description" className="new_article_form_label">Description :</label>
                    <br/>
                    <ReactQuill
                        theme="snow"
                        name='description' 
                        id="description"
                        value={description} 
                        onChange={setDescription} 
                        className="new_article_form_input new_article_form_input_description"
                        required 
                    />

                    <label htmlFor="file" className="new_article_form_label">Ajouter une image :</label>
                    <br/>
                    <input 
                        type="file" 
                        name="file" 
                        id="file"
                        className=""
                        accept=".jpg, .jpeg, .png, .gif"
                    />
                </div>
                
                <footer className="new_article_footer">
                    <NavLink className="new_article_footer_btn new_article_footer_btn_cancel" title="Annuler" end to='/blog'>Annuler</NavLink>
                    <NavLink className="new_article_footer_btn new_article_footer_btn_confirm">Confirmer</NavLink>
                </footer>
            </form>
        </section> 
    )
}

export default NewArticlePage