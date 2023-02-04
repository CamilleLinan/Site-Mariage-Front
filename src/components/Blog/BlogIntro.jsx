import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const plusIcon = <FontAwesomeIcon icon={faPlus} />

const BlogIntro = ({ propIsAdmin }) => {
    return (
        <article className="blog_intro">
            <h2 className="blog_intro_title">Blog du mariage</h2>
            <div className='blog_intro_content'>
                <p>Bienvenue sur notre blog de mariage !</p> 
                <p>Nous sommes tellement heureux de partager notre histoire d'amour 
                avec vous tous et de vous accompagner dans les préparatifs de notre 
                grand jour.</p>
                <p>Depuis notre rencontre il y a quelques années, nous avons rêvé de 
                ce moment où nous célébrerions notre amour devant nos proches et nos 
                amis. Et maintenant, le moment est enfin arrivé !</p>
                <p>Nous espérons que notre blog vous inspirera et vous aidera dans la 
                planification de votre propre mariage.</p>
            </div>

            {propIsAdmin === true &&
                <NavLink className="pages_intro_btn blog_intro_btn" title='Nouvel article' end to='/blog/newArticle'>
                    <i className="pages_intro_btn_icon">{plusIcon}</i> 
                    <span className="pages_intro_btn_txt">Nouvel article</span>
                </NavLink>
            }
        </article>
    )
}

export default BlogIntro