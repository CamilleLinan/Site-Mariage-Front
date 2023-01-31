import { useState, useCallback, useContext, useEffect } from "react";
import AuthContext from "../../context/authContext";
import ConfirmIntro from "./ConfirmIntro";
import ConfirmForm from "./ConfirmForm";
import axios from "axios";

const AttendConfirmPage = () => {
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
        <section className="confirm_section pages">
            <ConfirmIntro />
            <ConfirmForm propUserData={userData} propAuth={authCtx} />
        </section>
    )
}

export default AttendConfirmPage