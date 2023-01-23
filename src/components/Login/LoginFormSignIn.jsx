import { useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const LoginFormSignIn = () => {
    const [ passwordIsVisible, setPasswordIsVisible ] = useState(false);

    const formSchema = Yup.object().shape({
        email: Yup.string()
            .required('Veuillez renseigner votre adresse mail'),
        password: Yup.string()
            .required('Veuillez renseigner votre mot de passe'),
    });

    const formOptions = { resolver: yupResolver(formSchema) }
    const { register, formState: { errors }, handleSubmit } = useForm(formOptions, {
        email: '',
        password: '',
    });

    return (
        <form onSubmit={handleSubmit} id="sign-up-form" className='login_form'>
            <label htmlFor="email" className="login_form_label">Email</label>
                <input 
                    type="email" 
                    name="email" 
                    id="email"
                    className={!errors.email ? "login_form_input" : "login_form_input login_form_input_error"} 
                    {...register('email')}
                />
            {errors.email && <p className="login_form_error">{errors.email.message}</p>}

            <label htmlFor="password" className="login_form_label">Mot de passe</label>
                <div className="container_password_input">
                    <input 
                        type={!passwordIsVisible ? "password" : "text"} 
                        name="password" 
                        id="password"
                        className={!errors.password ? "login_form_input login_form_input_password" : "login_form_input login_form_input_password login_form_input_error"}
                        {...register('password')}
                    />
                    <div id="icon-password-signup" className="icon_password" onClick={() => setPasswordIsVisible(!passwordIsVisible)}>
                        <span>Voir</span>
                    </div>
                </div>
                {errors.password && <p className="login_form_error">{errors.password.message}</p>}

            <button type="submit" className="login_form_btn">Se connecter</button>
        </form>
    )
}

export default LoginFormSignIn