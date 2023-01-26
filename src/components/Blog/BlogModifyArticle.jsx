import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import DeleteArticleModal from "./Modal/DeleteArticleModal";
import { NavLink } from "react-router-dom";

const dotIcon = <FontAwesomeIcon icon={faEllipsis} />

const BlogModifyArticle = ({ propArticleId }) => {

    const [ isMenuExpanded, setIsMenuExpanded ] = useState(false)
    const [ popUpDelete, setPopUpDelete ] = useState(false);

    return(
        <>
        <div className="blog_article_modify">
            <i onClick={() => {setIsMenuExpanded(!isMenuExpanded)}} className='blog_article_modify_icon'>
                {dotIcon}
            </i>
            <div className={isMenuExpanded ? "blog_article_modify_menu blog_article_modify_menu_expanded" : "blog_article_modify_menu"}>
                <NavLink title='Modifier' end to={'/updateArticle/' + propArticleId} className="blog_article_modify_menu_content">Modifier</NavLink>
                <span className="blog_article_modify_menu_deco"></span>
                <p onClick={() => {setPopUpDelete(true)}} className="blog_article_modify_menu_content">Supprimer</p>
            </div>
        </div>
        {popUpDelete &&
            <DeleteArticleModal 
            onCancel={() => {setPopUpDelete(false)}}
            />
        }
        </>
    )
}

export default BlogModifyArticle