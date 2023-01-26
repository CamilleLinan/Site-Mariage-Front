import axios from "axios";
import { useCallback, useContext, useEffect, useState } from "react";
import AuthContext from "../../context/authContext";
import BlogArticle from "./BlogArticle";
import BlogModifyArticle from "./BlogModifyArticle";

const BlogDisplayArticles = ({ propIsAdmin }) => {
    const authCtx = useContext(AuthContext);

    const [ articlesData, setArticlesData ] = useState([])
    const [ errorServer, setErrorServer ] = useState('');

    const getSaucesData = useCallback(async () => {
        await axios({
            method: 'GET',
            url: 'http://localhost:5000/api/articles',
            headers: {
                Authorization: `Bearer ${authCtx.token}`,
            }
        })
            .then((res) => { setArticlesData(res.data) })
            .catch(() => {
                setErrorServer({ ...errorServer, message: 'Une erreur interne est survenue. Merci de revenir plus tard.' })      
            });
    
    }, [authCtx.token, errorServer]);

    useEffect(() => {
        getSaucesData();
    }, [getSaucesData]);

    return(
        <>
            {articlesData.length > 0 ?
                <ul className="blog_article">
                    {articlesData.map((article, i) => (
                        <li key={i}>
                            {propIsAdmin === true &&
                                <BlogModifyArticle /> 
                            }
                            <BlogArticle
                                img={article.articlePicture}
                                title={article.title}
                                description={article.description}    
                            />
                        </li>
                    ))}
                </ul>
            : 
                <div className="blog_article">
                    <span className="blog_article_deco"></span>
                    <p className="blog_article_content">Il n'y a aucun article pour le moment !</p>
                </div>
            }
        </>
    )
}

export default BlogDisplayArticles