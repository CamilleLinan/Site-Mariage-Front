import { useContext } from "react";
import AuthContext from "../../context/authContext";
import MessagesDisplay from "./MessagesDisplay";

const MessagesPage = () => {
    const authCtx = useContext(AuthContext);

    return(
        <div className="container_contact">
            <section className="contact">
                <h2 className="contact_intro_title">Vos messages</h2>
                <MessagesDisplay propAuth={authCtx.token} />
            </section>
        </div>
    )
}

export default MessagesPage