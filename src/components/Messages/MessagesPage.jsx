import { useContext } from "react";
import AuthContext from "../../context/authContext";
import MessagesDisplay from "./MessagesDisplay";

const MessagesPage = () => {
    const authCtx = useContext(AuthContext);

    return(
        <section className="message">
            <h2 className="message_intro_title">Vos messages</h2>
            <MessagesDisplay propAuth={authCtx.token} />
        </section>
    )
}

export default MessagesPage