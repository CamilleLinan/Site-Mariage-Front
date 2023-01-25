import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';

const commentIcon = <FontAwesomeIcon icon={faComment} />

const BlogArticle = (props) => {
    const { img, title, description } = props;
    
    return (
        <article className="blog_article">
            <span className="blog_article_deco"></span>
            <h3 className="blog_article_title">{title}<span className="blog_article_title_underline"></span></h3>
            {img && <img src={img} alt='blog-mariage-article-cover' className='blog_article_img' />}
            <p className="blog_article_content">{description}</p>
            <p className='blog_article_comment'>0 {commentIcon} - Laisser un commentaire</p>
        </article>
    )
}

export default BlogArticle