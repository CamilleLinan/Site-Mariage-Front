import { useContext } from "react";
import AuthContext from "../../context/authContext";
import MessagesDisplay from "./MessagesDisplay";

const MessagesPage = () => {
    const authCtx = useContext(AuthContext);

    return(
        <section className="message pages">
            <div className="pages_intro">
                <h2 className="pages_intro_title">Vos messages</h2>
            </div>
            <MessagesDisplay propAuth={authCtx.token} />
        </section>
    )
}

export default MessagesPage