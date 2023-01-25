import { NavLink } from "react-router-dom"

const ErrorAuthPage = () => {
    return(
        <div className="container_error_auth">
            <section className='error_auth'>
                <h2 className='error_auth_title'>Vous devez être connecté pour accéder à cette page !</h2>
                <NavLink end to='/login' title='login' className='error_auth_navlink'>
                    <button className='error_auth_btn login_form_btn'>S'inscrire / Se connecter</button>
                </NavLink>
            </section>
        </div>
    )
}

export default ErrorAuthPage