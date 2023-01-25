import { useContext, useState } from "react";
import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import AuthContext from "../../context/authContext";

const menuIcon = <FontAwesomeIcon icon={faBars} />

const Header = () => {
    const authCtx = useContext(AuthContext);
    const isLoggedIn = authCtx.isLoggedIn;
    const [isNavExpanded, setIsNavExpanded] = useState(false)

    return (
        <header className="header">
            <h1 className="header_title">M & P</h1>
            
            <button 
                className="header_btn" 
                onClick={() => {setIsNavExpanded(!isNavExpanded)}}
            >
                    {menuIcon}
            </button>
            <div className={isNavExpanded ? "header_nav expanded" : "header_nav"}>
                <ul>
                    <li><NavLink 
                        title='Accueil' 
                        className='header_nav_link' 
                        end to='/'
                    >
                        ACCUEIL
                    </NavLink></li>
                    
                    <li><NavLink 
                        title='Blog du mariage' 
                        className='header_nav_link' 
                        end to='/blog'
                    >
                        BLOG DU MARIAGE
                    </NavLink></li>
                    
                    <li><NavLink 
                        title='Confirmer sa présence' 
                        className='header_nav_link' 
                        end to='/confirm'
                    >
                        CONFIRMER SA PRÉSENCE
                    </NavLink></li>
                    
                    <li><NavLink 
                        title='Nous contacter' 
                        className='header_nav_link' 
                        end to='/contact'
                    >
                        NOUS CONTACTER
                    </NavLink></li>

                    {isLoggedIn ? 
                        <li><NavLink 
                            title='Se déconnecter'
                            className={({ isActive }) => (isActive ? "header_nav_link header_nav_link_2 header_nav_link_active" : "header_nav_link header_nav_link_2 header_nav_link_inactive")}
                            onClick={authCtx.logout}
                            end to='/'
                        >
                            DÉCONNEXION
                        </NavLink></li> 
                    :
                        <li><NavLink 
                        className={({ isActive }) => (isActive ? "header_nav_link header_nav_link_2 header_nav_link_active" : "header_nav_link header_nav_link_2 header_nav_link_inactive")}
                        title='Se connecter'
                        end to='/login'
                        >
                            CONNEXION
                        </NavLink></li> 
                    }
                </ul>
            </div>
        </header>
    )
}

export default Header