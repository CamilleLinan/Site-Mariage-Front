import axios from "axios";
import { useCallback, useContext, useEffect, useState } from "react";
import AuthContext from "../../context/authContext";
import ContactForm from "./ContactForm"
import ContactIntro from "./ContactIntro"
import ContactMessage from "./ContactMessage";

const ContactPage = () => {
    const authCtx = useContext(AuthContext);

    const [ userData, setUserData ] = useState([])
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
    return (
        <div className="container_contact">
            <section className="contact">
                <ContactIntro />
                <ContactForm propUserData={userData} propAuth={authCtx.token} />
                <ContactMessage propUserData={userData} propAuth={authCtx.token} />
            </section>
        </div>
    )
}

export default ContactPage