import { useState } from "react";
import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const menuIcon = <FontAwesomeIcon icon={faBars} />

const Header = () => {
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

                    <li><NavLink 
                        title='Nous contacter' 
                        className='header_nav_link' 
                        end to='/login'
                    >
                        SE CONNECTER
                    </NavLink></li>
                </ul>
            </div>
        </header>
    )
}

export default Header