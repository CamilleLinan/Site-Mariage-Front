import { useState }  from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import axios from 'axios';

const LoginFormSignUP = () => {
    const [ formSubmit, setFormSubmit ] = useState();
    const [ passwordIsVisible, setPasswordIsVisible ] = useState(false);

    const [ errorEmail, setErrorEmail ] = useState('');
    const [ errorServer, setErrorServer ] = useState('');

    // YupResolver
    const formSchema = Yup.object().shape({
        firstname: Yup.string().trim()
            .required('Veuillez renseigner votre prénom')
            .min(2, 'Doit contenir minimum 2 caractères')
            .max(30, 'Doit contenir maximum 30 caractères')
            .matches(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/i, 
            'Ne doit contenir ni chiffre ni caractère spécial'),
        lastname: Yup.string().trim()
            .required('Veuillez renseigner votre nom')
            .min(2, 'Doit contenir minimum 2 caractères')
            .max(30, 'Doit contenir maximum 30 caractères')
            .matches(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/i, 
            'Ne doit contenir ni chiffre ni caractère spécial'),
        email: Yup.string().trim()
            .required('Veuillez renseigner votre adresse mail')
            .matches(/^[A-Z0-9._-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 
            'Veuillez renseigner une adresse mail valide'),
        password: Yup.string().trim()
            .required('Veuillez renseigner un mot de passe')
            .min(4, 'Doit contenir minimum 4 caractères')
            .max(30, 'Doit contenir maximum 30 caractères')
            .matches(/(?=.*\d){1}/i, 'Doit contenir au moins un chiffre')
            .matches(/(?=.*[A-Z]){1,}.*/, 'Doit contenir au moins une majuscule')
            .matches(/(?=.*[a-z]){1,}.*/, 'Doit contenir au moins une minuscule'),
        confirmPassword: Yup.string()
            .required('Veuillez confirmer le mot de passe')
            .oneOf([Yup.ref('password')], 'Les mots de passe ne sont pas identiques'),
    });

    // useForm
    const formOptions = { resolver: yupResolver(formSchema) }
    const { register, formState: { errors }, handleSubmit } = useForm(formOptions, {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
    });

    // Soumission du formulaire
    const onSubmit = async (data) => {
        await axios({
            method: "post",
            url: `http://localhost:5000/api/users/signup`,
            data
        })
            .then(() => {
                setFormSubmit(true);
            })
            .catch((error) => {
                if (error.response.data.errors.email) {
                    setErrorEmail(error.response.data.errors.email);
                } else {
                    setErrorServer({ ...errorServer, message: 'Une erreur interne est survenue. Merci de revenir plus tard.' })
                }
            });
    };

    return (
        <>
        {formSubmit ? (
            <div className="login_form_container">
                <h4 className="login_form_container_title">Inscription réussie ! Veuillez vous connecter.</h4>
            </div>
        ) : (
            <form action="" onSubmit={handleSubmit(onSubmit)} id="sign-up-form" className="login_form">      
                <label htmlFor="firstname" className="login_form_label">Prénom</label>
                    <input 
                        type="text"
                        name="firstname"
                        id="firstname"
                        className={!errors.firstname ? "pages_input" : "pages_input login_form_input_error"}
                        {...register('firstname')}
                    />
                    {errors.firstname && <p className="login_form_error">{errors.firstname.message}</p>}

                <label htmlFor="lastname" className="login_form_label">Nom</label>
                    <input 
                        type="text"
                        name="lastname"
                        id="lastname"
                        className={!errors.lastname ? "pages_input" : "pages_input login_form_input_error"}
                        {...register('lastname')}
                    />
                    {errors.lastname && <p className="login_form_error">{errors.lastname.message}</p>}

                <label htmlFor="email" className="login_form_label">Email</label>
                    <input 
                        type="email"
                        name="email"
                        id="email"
                        className={!errors.email ? "pages_input" : "pages_input login_form_input_error"}
                        {...register('email')}
                    />
                    {errors.email && <p className="login_form_error">{errors.email.message}</p>}
                    {errorEmail && <p className="error bold">{errorEmail}</p>}

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

                <label htmlFor="confirmPassword" className="login_form_label">Confirmer le mot de passe</label>
                    <input 
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        className={!errors.confirmPassword ? "pages_input" : "pages_input login_form_input_error"}
                        {...register('confirmPassword')}
                    />
                    {errors.confirmPassword && <p className="login_form_error">{errors.confirmPassword.message}</p>}

                {errorServer && <p className="login_form_error login_form_error_server">{errorServer.message}</p>}

                <button type="submit" className="pages_button login_form_btn">Créer un compte</button>
            </form>
        )}
    </>
    )
}

export default LoginFormSignUP