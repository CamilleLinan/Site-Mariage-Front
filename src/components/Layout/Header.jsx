import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <header className="header">
            <h1 className="header_title">M & P</h1>
            <nav className="header_nav">
                <NavLink 
                    title='Accueil' 
                    className='header_nav_link' 
                    end to='/'
                >
                    ACCUEIL
                </NavLink>
                <NavLink 
                    title='Blog du mariage' 
                    className='header_nav_link' 
                    end to='/'
                >
                    BLOG DU MARIAGE
                </NavLink>
                <NavLink 
                    title='Confirmer sa présence' 
                    className='header_nav_link' 
                    end to='/'
                >
                    CONFIRMER SA PRÉSENCE
                </NavLink>
                <NavLink 
                    title="Livre d'or" 
                    className='header_nav_link' 
                    end to='/'
                >
                    LIVRE D'OR
                </NavLink>
                <NavLink 
                    title='Nous contacter' 
                    className='header_nav_link' 
                    end to='/'
                >
                    NOUS CONTACTER
                </NavLink>
            </nav>
        </header>
    )
}

export default Header