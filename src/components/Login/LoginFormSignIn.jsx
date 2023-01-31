import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import AuthContext from '../../context/authContext';
import axios from 'axios';

const LoginFormSignIn = () => {
    const [ passwordIsVisible, setPasswordIsVisible ] = useState(false);
    const [ errorSignIn, setErrorSignIn ] = useState('');
    const [ errorServer, setErrorServer ] = useState('');

    // useContext
    const authCtx = useContext(AuthContext);

    // useNavigate
    const navigate = useNavigate();

    // YupResolver
    const formSchema = Yup.object().shape({
        email: Yup.string()
            .required('Veuillez renseigner votre adresse mail'),
        password: Yup.string()
            .required('Veuillez renseigner votre mot de passe'),
    });

    // useForm
    const formOptions = { resolver: yupResolver(formSchema) }
    const { register, formState: { errors }, handleSubmit } = useForm(formOptions, {
        email: '',
        password: '',
    });

    // Soumission du formulaire
    const onSubmit = async (data) => {
        await axios({
            method: "POST",
            url: `http://localhost:5000/api/users/signin`,
            data
        })

        .then((res) => {
            authCtx.signin(res.data.token, res.data.userId, res.data.isAdmin);
            navigate('/');

        })
        .catch((error) => {
            if (error.response.status === 401) {
                setErrorSignIn({ ...errorSignIn, message: 'La paire identifiant/mot de passe est incorrecte.' })
            } else {
                setErrorServer({ ...errorServer, message: 'Une erreur interne est survenue. Merci de revenir plus tard.' })
            }
        });
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} id="sign-up-form" className='login_form'>
            <label htmlFor="email" className="login_form_label">Email</label>
                <input 
                    type="email" 
                    name="email" 
                    id="email"
                    className={!errors.email ? "pages_input" : " pages_input login_form_input_error"} 
                    {...register('email')}
                />
                {errors.email && <p className="login_form_error">{errors.email.message}</p>}

            <label htmlFor="password" className="login_form_label">Mot de passe</label>
                <div className="container_password_input">
                    <input 
                        type={!passwordIsVisible ? "password" : "text"} 
                        name="password" 
                        id="password"
                        className={!errors.password ? "pages_input login_form_input_password" : "pages_input login_form_input_password login_form_input_error"}
                        {...register('password')}
                    />
                    <div id="icon-password-signup" className="icon_password" onClick={() => setPasswordIsVisible(!passwordIsVisible)}>
                        <span>Voir</span>
                    </div>
                </div>
                {errors.password && <p className="login_form_error">{errors.password.message}</p>}

                {errorSignIn && <p className="login_form_error login_form_error_server">{errorSignIn.message}</p>}
                {errorServer && <p className="login_form_error login_form_error_server">{errorServer.message}</p>}

            <button type="submit" className="pages_button login_form_btn">Se connecter</button>
        </form>
    )
}

export default LoginFormSignIn