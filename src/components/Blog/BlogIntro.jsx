import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const plusIcon = <FontAwesomeIcon icon={faPlus} />

const BlogIntro = () => {
    return (
        <article className="blog_intro">
            <h2 className="blog_intro_title">Blog du mariage</h2>
            
            <p>Bienvenue sur notre blog de mariage !</p> 
            <p>Nous sommes tellement heureux de partager notre histoire d'amour 
            avec vous tous et de vous accompagner dans les préparatifs de notre 
            grand jour.</p>
            <p>Depuis notre rencontre il y a quelques années, nous avons rêvé de 
            ce moment où nous célébrerions notre amour devant nos proches et nos 
            amis. Et maintenant, le moment est enfin arrivé !</p>
            <p>Nous espérons que notre blog vous inspirera et vous aidera dans la 
            planification de votre propre mariage.</p>

            <NavLink className="blog_intro_link" title='Nouvel article' end to='/newArticle'>
                <i className="blog_intro_link_icon">{plusIcon}</i> 
                <span className="blog_intro_link_txt">Nouvel article</span>
            </NavLink>
            
        </article>
    )
}

export default BlogIntro