import axios from "axios";
import { useCallback, useContext, useEffect, useState } from "react";
import AuthContext from "../../context/authContext";
import ContactForm from "./ContactForm"
import ContactIntro from "./ContactIntro"
import ContactMessage from "./ContactMessage";

const ContactPage = () => {
    const authCtx = useContext(AuthContext);

    const [ userData, setUserData ] = useState([])
    const [ ownMessageData, setOwnMessageData ] = useState([])
    const [ errorServer, setErrorServer ] = useState('')

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


    const getOwnMessageData = useCallback(async() => {
        await axios({
            method: 'GET',
            url: `http://localhost:5000/api/messages/${authCtx.userId}`,
            headers: {
                Authorization: `Bearer ${authCtx.token}`,
            }
        })
            .then((res) => { 
                setOwnMessageData(res.data.messages);
            })
            .catch(() => {
                setErrorServer({ ...errorServer, message: 'Une erreur interne est survenue. Merci de revenir plus tard.' });
            });

    }, [authCtx.userId, authCtx.token, errorServer]);

    useEffect(() => {
        getOwnMessageData();
    }, [getOwnMessageData])

    return (
        <section className="pages contact">
            <ContactIntro />
            <ContactForm propAuth={authCtx} propUserData={userData} />
            <ContactMessage propAuth={authCtx} propMsgData={ownMessageData} />
        </section>
    )
}

export default ContactPage