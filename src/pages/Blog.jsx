import { useCallback, useContext, useEffect, useState } from "react"
import AuthContext from "../context/authContext"
import Header from "../components/Layout/Header"
import BannerTopPages from "../components/Layout/BannerTopPages"
import BlogPage from "../components/Blog/BlogPage"
import BannerBottomPages from "../components/Layout/BannerBottomPages"
import Footer from "../components/Layout/Footer"
import axios from "axios"

const Blog = () => {
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
            <BlogPage propIsAdmin={userData.isAdmin} />
            <BannerBottomPages />
            <Footer />
        </>
    )
}

export default Blog