import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import AuthContext from "../../context/authContext";
import DeleteModal from "../Layout/DeleteModal";

const dotIcon = <FontAwesomeIcon icon={faEllipsis} />

const BlogModifyArticle = ({ propArticleId, propIsAdmin, onDelete }) => {
    const authCtx = useContext(AuthContext);

    const [ isMenuExpanded, setIsMenuExpanded ] = useState(false)
    const [ popUpDelete, setPopUpDelete ] = useState(false);

    const [ errorServer, setErrorServer ] = useState('');
    
    const confirmDelete = async (e) => {
        e.preventDefault();

        await axios({
            method:'DELETE',
            url: `http://localhost:5000/api/articles/${propArticleId}`,
            headers: {
                Authorization: `Bearer ${authCtx.token}`,
            },
            body: propIsAdmin
        })
            .then(() => {
                alert('L\'article a bien été supprimé !');
                onDelete();
            })
            .catch(() => {
                setErrorServer({ ...errorServer, message: 'Une erreur est survenue, merci de revenir plus tard.' })
            })
    };

    return(
        <>
        <div className="blog_article_modify">
            <i onClick={() => {setIsMenuExpanded(!isMenuExpanded)}} className='blog_article_modify_icon'>
                {dotIcon}
            </i>
            
            <div className={isMenuExpanded ? "blog_article_modify_menu blog_article_modify_menu_expanded" : "blog_article_modify_menu"}>
                <p className="blog_article_modify_menu_content">
                    <NavLink title='Modifier' end to={'/blog/updateArticle/' + propArticleId}>
                        Modifier
                    </NavLink>
                </p>
                <span className="blog_article_modify_menu_deco"></span>
                <p onClick={() => {setPopUpDelete(true)}} className="blog_article_modify_menu_content">
                    Supprimer
                </p>
            </div>
        </div>
        
        {popUpDelete && <DeleteModal
            className='modal_container' 
            title="Supprimer l'article"
            description="Êtes-vous sûr⸱e de vouloir supprimer cet article ?"
            errorServer={errorServer} 
            onCancel={() => {setPopUpDelete(false)}}
            onConfirm={confirmDelete}
        /> }
        </>
    )
}

export default BlogModifyArticle