import axios from "axios"
import { useCallback, useContext, useEffect, useState } from "react"
import BannerBottomPages from "../components/Layout/BannerBottomPages"
import BannerTopPages from "../components/Layout/BannerTopPages"
import Footer from "../components/Layout/Footer"
import Header from "../components/Layout/Header"
import NewArticlePage from "../components/Article/NewArticle/NewArticlePage"
import AuthContext from "../context/authContext"

const NewArticle = () => {
    const [ userData, setUserData ] = useState('');
    const [ errorServer, setErrorServer ] = useState('');

    const authCtx = useContext(AuthContext);

    const getUserData = useCallback(async () => {
        await axios({
            method: 'GET',
            url: `http://localhost:5000/api/users/${authCtx.userId}`,
            headers: {
                Authorization: `Bearer ${authCtx.token}`,
            }
        })
            .then((res) => { setUserData(res.data) })
            .catch(() => {
                setErrorServer({ ...errorServer, message: 'Une erreur interne est survenue. Merci de revenir plus tard.' });
            });
    },[authCtx.token, authCtx.userId, errorServer]);

    useEffect(() => {
        getUserData();
    }, [getUserData])

    return (
        <>
            <Header />
            <BannerTopPages />
            <NewArticlePage propIsAdmin={userData.isAdmin} />
            <BannerBottomPages />
            <Footer />
        </>
    )
}

export default NewArticle