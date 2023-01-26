import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import UpdateArticleModal from "./Modals/UpdateArticleModal";
import DeleteArticleModal from "./Modals/DeleteArticleModal";

const dotIcon = <FontAwesomeIcon icon={faEllipsis} />

const BlogModifyArticle = () => {

    const [ isMenuExpanded, setIsMenuExpanded ] = useState(false)
    const [ popUpUpdate, setPopUpUpdate ] = useState(false);
    const [ popUpDelete, setPopUpDelete ] = useState(false);

    return(
        <>
        <div className="blog_article_modify">
            <i onClick={() => {setIsMenuExpanded(!isMenuExpanded)}} className='blog_article_modify_icon'>
                {dotIcon}
            </i>
            <div className={isMenuExpanded ? "blog_article_modify_menu blog_article_modify_menu_expanded" : "blog_article_modify_menu"}>
                <p onClick={() => {setPopUpUpdate(true)}} className="blog_article_modify_menu_content">Modifier</p>
                <span className="blog_article_modify_menu_deco"></span>
                <p onClick={() => {setPopUpDelete(true)}} className="blog_article_modify_menu_content">Supprimer</p>
            </div>
        </div>
        {popUpUpdate &&
            <UpdateArticleModal 
                onCancel={() => {setPopUpUpdate(false)}}
            />
        }
        {popUpDelete &&
            <DeleteArticleModal 
            onCancel={() => {setPopUpDelete(false)}}
            />
        }
        </>
    )
}

export default BlogModifyArticle