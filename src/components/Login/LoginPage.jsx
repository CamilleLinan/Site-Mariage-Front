import { useState } from "react";
import LoginFormSignIn from "./LoginFormSignIn";
import LoginFormSignUp from "./LoginFormSignUp";

const LoginPage = () => {
    const [signUpModal, setSignUpModal] = useState(true);
    const [signInModal, setSignInModal] = useState('');

    const handleModals = (e) => {
        setSignUpModal(e.target.id === 'signup');
        setSignInModal(e.target.id === 'signin');
    }

    return (
        <div className="container">
            <section className="login">
                <header className="login_header">
                    <button onClick={handleModals} id="signup" className={signUpModal ? "login_header_btn login_header_btn_1 login_header_btn_active" : "login_header_btn login_header_btn_1 login_header_btn_inactive"}>S'inscrire</button>
                    <button onClick={handleModals} id="signin" className={signInModal ? "login_header_btn login_header_btn_2 login_header_btn_active" : "login_header_btn login_header_btn_2 login_header_btn_inactive"}>Se connecter</button>
                </header>
                <article className="login_container">
                    {signUpModal && <LoginFormSignUp />}
                    {signInModal && <LoginFormSignIn />}
                </article>
            </section>
        </div>
    )
}

export default LoginPage