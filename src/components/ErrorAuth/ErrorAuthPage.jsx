import { NavLink } from "react-router-dom"

const ErrorAuthPage = () => {
    return(
        <section className='error_auth'>
            <h2 className='error_auth_title'>Vous devez être connecté pour accéder à cette page !</h2>
            <NavLink end to='/login' title='login' className='error_auth_navlink'>
                <button className='pages_button error_auth_btn'>S'inscrire / Se connecter</button>
            </NavLink>
        </section>
    )
}

export default ErrorAuthPage