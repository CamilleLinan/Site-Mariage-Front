import { NavLink } from "react-router-dom"

const NewArticlePage = () => {
    return (
        //backdrop dans section
        <section className="new_article"> 
            <div className="new_article_container">
                <h2 className="new_article_container_title">Ajouter un nouvel article</h2>
                <form action="" id='' className="new_article_container_form"> 
                    <div className="new_article_container_form_section">
                        <label htmlFor="title" className="new_article_container_form_section">Titre de l'article :</label>
                        <br/>
                        <input 
                            type='text'
                            name="title"
                            id="title"
                            className="new_article_container_form_input"
                            required
                        /> 
                        <br />

                        <label htmlFor="description" className="new_article_container_form_section">Description :</label>
                        <br/>
                        <textarea
                            type='text'
                            name="description"
                            id="description"
                            className="form_input update_infos_input"
                            required
                        /> 
                        <br />

                        <label htmlFor="file" className="new_article_container_form_section">Ajouter une image :</label>
                        <br/>
                        <input 
                            type="file" 
                            name="file" 
                            id="file"
                            className="form_input update_infos_input"
                            accept=".jpg, .jpeg, .png, .gif"
                        />
                    </div>
                    
                    <footer className="new_article_footer">
                        <NavLink className="new_article_footer_btn btn_cancel" title="Annuler" end to='/blog'>Annuler</NavLink>
                        <NavLink className="new_article_footer_btn btn_confirm">Confirmer</NavLink>
                    </footer>
                </form>
            </div>
        </section> 
    )
}

export default NewArticlePage