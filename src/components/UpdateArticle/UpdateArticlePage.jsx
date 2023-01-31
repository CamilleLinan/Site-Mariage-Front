import axios from "axios";
import { useEffect, useState } from "react";
import { useCallback, useContext } from "react";
import { useParams } from "react-router-dom";
import AuthContext from "../../context/authContext";
import UpdateArticleForm from "./UpdateArticleForm"

const UpdateArticlePage = ({ propIsAdmin }) => {
    const { id } = useParams();
    const authCtx = useContext(AuthContext);

    const [ articleData, setArticleData ] = useState();
    const [ errorServer, setErrorServer ] = useState('');

    const getArticleData = useCallback(async () => {
        await axios({
            method: 'GET',
            url: `http://localhost:5000/api/articles/${id}`,
            headers: {
                Authorization: `Bearer ${authCtx.token}`,
            }
        })
            .then((res) => { setArticleData(res.data) })
            .catch(() => {
                setErrorServer({ ...errorServer, message: 'Une erreur interne est survenue. Merci de revenir plus tard.' })      
            });
    
    }, [id, authCtx.token, errorServer]);

    useEffect(() => {
        getArticleData();
    }, [getArticleData]);

    return(
        <section className="new_article">
            <header className="new_article_header">
                <h2 className="new_article_header_title">Modifier un article</h2>
            </header> 
            {propIsAdmin === true ?
                <UpdateArticleForm propData={articleData} propAuth={authCtx} propIsAdmin={propIsAdmin} />
            :
                <p>Seul l'administrateur de ce site peut éditer un article.</p>
            }
        </section>
    )
}

export default UpdateArticlePage